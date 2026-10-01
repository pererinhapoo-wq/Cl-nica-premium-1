import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Shield, ExternalLink } from 'lucide-react';

export const LocalizacaoContato: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Localização & Acesso
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Espaço de acolhimento no coração do Itaim Bibi
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Localização estratégica com acesso privativo, serviço de valet cortesia, heliponto credenciado e total discrição.
          </p>
        </div>

        {/* 12-col Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact & Hours Info (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#1E2229]/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/8 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-mono uppercase tracking-wider text-[#64748B] mb-0.5">Endereço</div>
                  <div className="font-bold text-sm text-[#0F1B29] font-display">
                    Av. Brigadeiro Faria Lima, 3477
                  </div>
                  <div className="text-[#475569] mt-0.5">
                    14º Andar · Edifício Birmann 32 · Itaim Bibi<br />
                    São Paulo - SP · CEP 04538-133
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/8 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-mono uppercase tracking-wider text-[#64748B] mb-0.5">Comunicação Direta</div>
                  <div className="font-semibold text-sm text-[#0F1B29]">
                    (11) 3088-7200
                  </div>
                  <div className="text-[#475569] mt-0.5">
                    Concierge WhatsApp: (11) 98765-4321
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/8 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-mono uppercase tracking-wider text-[#64748B] mb-0.5">E-mail Corporativo</div>
                  <div className="font-semibold text-sm text-[#0F1B29]">
                    atendimento@vitraemedical.com.br
                  </div>
                  <div className="text-[#64748B] mt-0.5">
                    Respostas sob 2 horas em dias úteis
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/8 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-mono uppercase tracking-wider text-[#64748B] mb-0.5">Horário de Funcionamento</div>
                  <div className="font-medium text-[#0F1B29]">
                    Segunda a Sexta: <span className="font-mono">07:00 às 20:00</span>
                  </div>
                  <div className="text-[#475569]">
                    Sábado: <span className="font-mono">08:00 às 14:00</span>
                  </div>
                  <div className="text-[#94A3B8] text-[11px] mt-0.5">
                    Domingos: Suporte via concierge para protocolos ativos
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-8 border-t border-[#1E2229]/8 flex items-center gap-2 text-xs text-[#0D9488]">
              <Car className="w-4 h-4" />
              <span>Valet cortesia no subsolo com acesso privativo via elevador VIP</span>
            </div>
          </div>

          {/* Interactive Stylized Architectural Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1B29] rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            
            {/* Top Bar inside Map */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#5EEAD4] uppercase tracking-wider block">
                  Planta de Acesso
                </span>
                <span className="text-lg font-bold font-display text-white">
                  Itaim Bibi · Eixo Faria Lima
                </span>
              </div>
              <div className="p-2 rounded-lg bg-white/10 text-xs font-mono flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#5EEAD4]" />
                <span>GPS: -23.5855, -46.6841</span>
              </div>
            </div>

            {/* Stylized Architectural Vector Grid Map */}
            <div className="relative my-8 py-10 px-6 bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
              {/* Vector street grid */}
              <svg className="w-full h-48 opacity-40" viewBox="0 0 500 200" fill="none">
                <line x1="0" y1="40" x2="500" y2="40" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#5EEAD4" strokeWidth="2" />
                <line x1="0" y1="160" x2="500" y2="160" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="120" y1="0" x2="120" y2="200" stroke="#94A3B8" strokeWidth="1" />
                <line x1="280" y1="0" x2="280" y2="200" stroke="#94A3B8" strokeWidth="1.5" />
                <line x1="420" y1="0" x2="420" y2="200" stroke="#94A3B8" strokeWidth="1" />
                <text x="290" y="90" fill="#5EEAD4" fontSize="10" fontFamily="monospace">Av. Brig. Faria Lima</text>
                <text x="130" y="30" fill="#94A3B8" fontSize="9" fontFamily="monospace">R. Leopoldo Couto Magalhães</text>
                <text x="380" y="150" fill="#94A3B8" fontSize="9" fontFamily="monospace">Parque do Povo</text>
              </svg>

              {/* Pinpoint Indicator */}
              <div className="absolute top-1/2 left-[56%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-[#14B8A6]/30 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-[#5EEAD4] border-2 border-[#0F1B29] relative z-10 shadow-lg" />
                </div>
                <div className="mt-2 px-3 py-1 rounded-md bg-[#0F1B29] border border-[#5EEAD4]/40 text-[11px] font-mono font-bold text-white shadow-md whitespace-nowrap">
                  VITRAE MEDICAL · 14º Andar
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#5EEAD4]" />
                <span>Portaria com reconhecimento facial e pré-autorização pelo Concierge</span>
              </div>

              <div className="text-[#5EEAD4] font-mono text-[11px]">
                A 350m do Parque do Povo
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
