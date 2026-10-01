import React, { useState } from 'react';
import { SPECIALTIES, PHYSICIANS } from '../data/clinicData';
import { useToast } from '../context/ToastContext';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Download,
  AlertCircle
} from 'lucide-react';

interface AgendamentoProps {
  preselectedSpecialty?: string;
  preselectedDoctor?: string;
}

export const Agendamento: React.FC<AgendamentoProps> = ({
  preselectedSpecialty,
  preselectedDoctor
}) => {
  const { showToast } = useToast();
  // Booking State
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    preselectedSpecialty || SPECIALTIES[0].name
  );
  
  const [selectedDoctor, setSelectedDoctor] = useState<string>(
    preselectedDoctor || PHYSICIANS[0].name
  );

  // Available sample dates (next 7 business days)
  const availableDates = [
    { day: 'Seg', date: '05 Out', full: '05 de Outubro de 2026' },
    { day: 'Ter', date: '06 Out', full: '06 de Outubro de 2026' },
    { day: 'Qua', date: '07 Out', full: '07 de Outubro de 2026' },
    { day: 'Qui', date: '08 Out', full: '08 de Outubro de 2026' },
    { day: 'Sex', date: '09 Out', full: '09 de Outubro de 2026' },
    { day: 'Seg', date: '12 Out', full: '12 de Outubro de 2026' },
    { day: 'Ter', date: '13 Out', full: '13 de Outubro de 2026' }
  ];

  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].full);

  const timeSlots = ['08:30', '10:00', '11:30', '14:00', '15:30', '17:00'];
  const [selectedTime, setSelectedTime] = useState<string>('14:00');

  // Contact fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Filter physicians based on specialty
  const matchedPhysicians = PHYSICIANS.filter(
    p => p.specialtyName.toLowerCase().includes(selectedSpecialty.toLowerCase()) ||
         selectedSpecialty.toLowerCase().includes(p.specialtyName.toLowerCase())
  );

  const availablePhysicians = matchedPhysicians.length > 0 ? matchedPhysicians : PHYSICIANS;

  const handleSpecialtyChange = (specName: string) => {
    setSelectedSpecialty(specName);
    const relatedDoc = PHYSICIANS.find(p => p.specialtyName.toLowerCase().includes(specName.toLowerCase()));
    if (relatedDoc) {
      setSelectedDoctor(relatedDoc.name);
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      const err = 'Por favor, informe seu nome completo.';
      setValidationError(err);
      showToast({
        type: 'warning',
        category: 'ATENÇÃO',
        title: 'Nome Necessário',
        description: err,
        duration: 4000
      });
      return;
    }
    if (!phone.trim()) {
      const err = 'Por favor, informe seu telefone com DDD.';
      setValidationError(err);
      showToast({
        type: 'warning',
        category: 'ATENÇÃO',
        title: 'Telefone Necessário',
        description: err,
        duration: 4000
      });
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      const err = 'Por favor, informe um e-mail válido.';
      setValidationError(err);
      showToast({
        type: 'warning',
        category: 'ATENÇÃO',
        title: 'E-mail Inválido',
        description: err,
        duration: 4000
      });
      return;
    }

    setValidationError('');
    setIsConfirmed(true);
    showToast({
      type: 'success',
      category: 'AGENDAMENTO · VITRAE MEDICAL',
      title: 'Solicitação Registrada com Sucesso',
      description: `${selectedSpecialty} com ${selectedDoctor} em ${selectedDate} às ${selectedTime}.`,
      duration: 6500
    });
  };

  return (
    <section id="agendamento" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Atendimento Personalizado
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Experiência de agendamento premium
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Selecione sua especialidade, profissional de preferência, data e horário conveniente. Nossa equipe de acolhimento entrará em contato para confirmar detalhes.
          </p>
        </div>

        {/* Form and Live Summary Grid (12 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Booking Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-[#1E2229]/10 rounded-2xl p-6 sm:p-10 shadow-sm">
            
            {/* Step 1: Especialidade */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#64748B] block mb-3">
                1. Selecione a Especialidade
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SPECIALTIES.map((spec) => {
                  const isSelected = selectedSpecialty === spec.name;
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => handleSpecialtyChange(spec.name)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F1B29] text-white border-[#0F1B29] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/20 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold truncate">{spec.name}</div>
                      <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-[#5EEAD4]' : 'text-[#64748B]'}`}>
                        {spec.category}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Profissional */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#64748B] block mb-3">
                2. Selecione o Profissional
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availablePhysicians.map((physician) => {
                  const isSelected = selectedDoctor === physician.name;
                  return (
                    <button
                      key={physician.id}
                      type="button"
                      onClick={() => setSelectedDoctor(physician.name)}
                      className={`p-3.5 rounded-xl text-left border text-xs transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#0F1B29] text-white border-[#0F1B29] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/20 hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold font-display">{physician.name}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-[#5EEAD4]' : 'text-[#64748B]'}`}>
                          {physician.specialtyName}
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#5EEAD4]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Data */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#64748B] block mb-3">
                3. Selecione a Data Disponível
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                {availableDates.map((item) => {
                  const isSelected = selectedDate === item.full;
                  return (
                    <button
                      key={item.date}
                      type="button"
                      onClick={() => setSelectedDate(item.full)}
                      className={`py-3 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F1B29] text-white border-[#0F1B29]'
                          : 'bg-[#FAF8F5] text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/20'
                      }`}
                    >
                      <div className={`text-[10px] uppercase font-mono ${isSelected ? 'text-[#5EEAD4]' : 'text-[#64748B]'}`}>
                        {item.day}
                      </div>
                      <div className="font-bold text-xs sm:text-sm font-mono mt-0.5">
                        {item.date}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Horário */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#64748B] block mb-3">
                4. Selecione o Horário Desejado
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-lg text-center border text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F1B29] text-white border-[#0F1B29] font-bold shadow-xs'
                          : 'bg-[#FAF8F5] text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/20'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Contact Details */}
            <div className="pt-4 border-t border-[#1E2229]/8">
              <label className="text-xs font-mono uppercase tracking-wider text-[#64748B] block mb-4">
                5. Seus Dados para Confirmação
              </label>

              {validationError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1E2229] mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Beatriz Albuquerque"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2229] mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 98765-4321"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#1E2229] mb-1">
                    E-mail Preferencial *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#1E2229] mb-1">
                    Observações ou Objetivo Principal (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ex: Gostaria de alinhar check-up preventivo anual e checagem de biomarcadores de sono."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1E2229]/12 bg-[#FAF8F5] text-xs text-[#1E2229] focus:outline-none focus:ring-1 focus:ring-[#0D9488]"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F1B29] text-white rounded-2xl p-6 sm:p-8 shadow-md sticky top-28 space-y-6">
            
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#5EEAD4] mb-2">
                Resumo da Sua Solicitação
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Consulta Personalizada
              </h3>
            </div>

            {/* Live Parameters (Requested in Prompt) */}
            <div className="space-y-4 py-4 border-y border-white/10 text-xs">
              <div>
                <span className="text-white/60 block text-[11px] font-mono">Especialidade Escolhida:</span>
                <span className="text-white font-semibold text-sm">{selectedSpecialty}</span>
              </div>

              <div>
                <span className="text-white/60 block text-[11px] font-mono">Profissional Selecionado:</span>
                <span className="text-white font-semibold text-sm">{selectedDoctor}</span>
              </div>

              <div>
                <span className="text-white/60 block text-[11px] font-mono">Data:</span>
                <span className="text-white font-semibold text-sm">{selectedDate}</span>
              </div>

              <div>
                <span className="text-white/60 block text-[11px] font-mono">Horário:</span>
                <span className="text-white font-semibold text-sm font-mono">{selectedTime}</span>
              </div>
            </div>

            <div className="text-xs text-white/70 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>Consulta com tempo integral de 60 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>Integração de prontuário e histórico</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
                <span>Sigilo e privacidade garantidos</span>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full py-3.5 px-4 rounded-lg bg-[#0D9488] hover:bg-[#14B8A6] active:scale-[0.98] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Confirmar solicitação</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-white/50 text-center leading-relaxed">
              Demonstração de interface. Não gera cobrança prévia. O concierge entrará em contato para acolhimento e confirmação final de horário.
            </p>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {isConfirmed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsConfirmed(false)}
        >
          <div 
            className="bg-[#FAF8F5] border border-[#1E2229]/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsConfirmed(false)}
              className="absolute top-4 right-4 p-2 text-[#475569] hover:text-[#0F1B29] rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-[#0D9488] mb-1">
              Solicitação Registrada · Código #VT-2026-91
            </div>

            <h3 className="text-2xl font-bold font-display text-[#0F1B29] mb-3">
              Atendimento Solicitado com Sucesso
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed mb-6">
              Obrigado, <strong className="text-[#0F1B29]">{name || 'Paciente'}</strong>. Recebemos sua solicitação para a clínica VITRAE MEDICAL.
            </p>

            {/* Booking Summary Box */}
            <div className="p-4 rounded-xl bg-white border border-[#1E2229]/8 space-y-2 text-xs mb-6">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Especialidade:</span>
                <span className="font-semibold text-[#0F1B29]">{selectedSpecialty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Profissional:</span>
                <span className="font-semibold text-[#0F1B29]">{selectedDoctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Data:</span>
                <span className="font-semibold text-[#0F1B29]">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Horário:</span>
                <span className="font-semibold font-mono text-[#0F1B29]">{selectedTime}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0F1B29] text-white text-xs space-y-1 mb-6">
              <span className="font-semibold text-[#5EEAD4] block">Próximos Passos:</span>
              <p className="text-white/80 leading-relaxed text-[11px]">
                Nosso Concierge de Saúde enviará via WhatsApp uma mensagem de acolhimento com as orientações prévias de consulta e o link para envio seguro de exames anteriores.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsConfirmed(false)}
                className="flex-1 py-3 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] transition-colors cursor-pointer text-center"
              >
                Concluir
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
