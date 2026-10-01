import React, { useEffect, useState } from 'react';
import { X, Type, Eye, ZapOff, RotateCcw, Check } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose
}) => {
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Text scale
    document.body.classList.remove('font-large');
    if (textSize === 'large' || textSize === 'xlarge') {
      document.body.classList.add('font-large');
    }

    // High contrast
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [textSize, highContrast]);

  const handleReset = () => {
    setTextSize('normal');
    setHighContrast(false);
    setReducedMotion(false);
    document.body.classList.remove('font-large');
    document.body.classList.remove('high-contrast');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="acc-title"
    >
      <div
        className="bg-[#FAF8F5] border border-[#1E2229]/20 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#475569] hover:text-[#0F1B29] rounded-lg transition-colors cursor-pointer"
          aria-label="Fechar painel de acessibilidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#0D9488] mb-1">
          <Eye className="w-4 h-4" />
          <span>Preferências Sensoriais</span>
        </div>

        <h3 id="acc-title" className="text-xl sm:text-2xl font-bold font-display text-[#0F1B29] mb-3">
          Acessibilidade & Legibilidade
        </h3>

        <p className="text-xs text-[#475569] leading-relaxed mb-6">
          Ajuste as preferências de visualização para uma leitura mais confortável e adequada às suas necessidades.
        </p>

        <div className="space-y-6">
          {/* Text Size Scale */}
          <div>
            <label className="text-xs font-semibold text-[#1E2229] flex items-center gap-2 mb-2">
              <Type className="w-4 h-4 text-[#0D9488]" />
              <span>Tamanho do Texto</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTextSize('normal')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  textSize === 'normal'
                    ? 'bg-[#0F1B29] text-white border-[#0F1B29]'
                    : 'bg-white text-[#1E2229] border-[#1E2229]/12 hover:bg-[#F5F3EF]'
                }`}
              >
                Padrão (100%)
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  textSize === 'large'
                    ? 'bg-[#0F1B29] text-white border-[#0F1B29]'
                    : 'bg-white text-[#1E2229] border-[#1E2229]/12 hover:bg-[#F5F3EF]'
                }`}
              >
                Grande (+12%)
              </button>
              <button
                onClick={() => setTextSize('xlarge')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  textSize === 'xlarge'
                    ? 'bg-[#0F1B29] text-white border-[#0F1B29]'
                    : 'bg-white text-[#1E2229] border-[#1E2229]/12 hover:bg-[#F5F3EF]'
                }`}
              >
                Maior (+25%)
              </button>
            </div>
          </div>

          {/* High Contrast Mode */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#1E2229]/8">
            <div>
              <div className="text-xs font-semibold text-[#0F1B29]">Alto Contraste</div>
              <div className="text-[11px] text-[#64748B]">Realce de bordas e tipografia</div>
            </div>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer relative p-0.5 ${
                highContrast ? 'bg-[#0D9488]' : 'bg-[#CBD5E1]'
              }`}
              role="switch"
              aria-checked={highContrast}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  highContrast ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion Mode */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#1E2229]/8">
            <div>
              <div className="text-xs font-semibold text-[#0F1B29]">Reduzir Animações</div>
              <div className="text-[11px] text-[#64748B]">Transições instantâneas e estáveis</div>
            </div>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer relative p-0.5 ${
                reducedMotion ? 'bg-[#0D9488]' : 'bg-[#CBD5E1]'
              }`}
              role="switch"
              aria-checked={reducedMotion}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  reducedMotion ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 mt-6 border-t border-[#1E2229]/8 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#0F1B29] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] transition-colors cursor-pointer"
          >
            Salvar e Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
