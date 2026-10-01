import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info' | 'warning';
  category?: string;
  title: string;
  description: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type = 'success', category = 'VITRAE MEDICAL', title, description, duration = 5000 }: Omit<ToastMessage, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const newToast: ToastMessage = { id, type, category, title, description, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      
      {/* Toast Viewport Container */}
      <div 
        aria-live="polite" 
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm sm:max-w-md w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto bg-[#0F1B29] text-white border border-[#5EEAD4]/30 rounded-2xl shadow-2xl p-4 sm:p-5 relative overflow-hidden transition-all duration-300 transform translate-y-0 opacity-100 animate-in slide-in-from-bottom-5 fade-in"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D9488]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3.5 relative z-10">
              {/* Type Icon */}
              <div className="w-8 h-8 rounded-full bg-[#0D9488]/20 text-[#5EEAD4] flex items-center justify-center shrink-0 mt-0.5 border border-[#0D9488]/40">
                {toast.type === 'success' && <CheckCircle2 className="w-4 h-4" />}
                {toast.type === 'info' && <Info className="w-4 h-4" />}
                {toast.type === 'warning' && <AlertTriangle className="w-4 h-4" />}
              </div>

              {/* Text content */}
              <div className="flex-1 pr-4">
                <div className="text-[10px] font-mono tracking-widest text-[#5EEAD4] uppercase mb-0.5">
                  {toast.category}
                </div>
                <h4 className="text-sm font-bold font-display text-white leading-snug">
                  {toast.title}
                </h4>
                <p className="text-xs text-white/75 mt-1 leading-relaxed">
                  {toast.description}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/40 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                aria-label="Fechar notificação"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Auto-dismiss progress bar animation */}
            {toast.duration && toast.duration > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#0D9488] to-[#5EEAD4]"
                  style={{
                    animation: `shrinkWidth ${toast.duration}ms linear forwards`
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast deve ser utilizado dentro de um ToastProvider');
  }
  return context;
};
