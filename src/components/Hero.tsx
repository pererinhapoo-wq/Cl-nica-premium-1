import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

interface HeroProps {
  onExploreClinic: () => void;
  onScheduleAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClinic,
  onScheduleAppointment
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle fine architectural grid pattern in background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#1E2229 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition, Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle category kicker with typographic divider */}
            <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-6">
              <span>Clínica Médica de Precisão</span>
              <span aria-hidden="true" className="text-[#94A3B8]">/</span>
              <span className="text-[#475569] font-normal tracking-normal">São Paulo · Itaim Bibi</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F1B29] leading-[1.08] mb-6 font-display" style={{ textWrap: 'balance' }}>
              Cuidado preciso. <br className="hidden sm:inline" />
              <span className="text-[#1E2229] font-medium">Experiência humana.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-10 font-normal">
              Tecnologia, especialistas e acompanhamento integrado para transformar a maneira como você cuida da sua saúde.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <button
                onClick={onScheduleAppointment}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#0F1B29] hover:bg-[#1E2229] active:scale-[0.98] rounded-md transition-all cursor-pointer shadow-sm group whitespace-nowrap"
              >
                <span>Agendar atendimento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClinic}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1E2229] bg-white hover:bg-[#F5F3EF] border border-[#1E2229]/12 active:scale-[0.98] rounded-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Conhecer a clínica</span>
                <ArrowDown className="w-4 h-4 text-[#64748B]" />
              </button>
            </div>

            {/* Subtle Metadata Indicators (Zero-Pill Discipline: Unboxed clean text) */}
            <div className="pt-8 border-t border-[#1E2229]/8 grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-[#0F1B29] font-display font-bold text-xl sm:text-2xl tabular-nums">
                  <span>60</span>
                  <span className="text-sm font-normal text-[#64748B]">min</span>
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 leading-snug">
                  Tempo médio por consulta
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#0F1B29] font-display font-bold text-xl sm:text-2xl tabular-nums">
                  <span>100</span>
                  <span className="text-sm font-normal text-[#0D9488]">%</span>
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 leading-snug">
                  Prontuário unificado
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#0F1B29] font-display font-bold text-xl sm:text-2xl tabular-nums">
                  <span>6</span>
                  <span className="text-sm font-normal text-[#64748B]">áreas</span>
                </div>
                <div className="text-xs text-[#64748B] mt-0.5 leading-snug">
                  Especialistas coordenados
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Fine Architectural Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#1E2229]/10 bg-white">
                <img
                  src="/src/assets/images/hero_vitrae_composition_1790830649987.jpg"
                  alt="Espaço arquitetônico contemporâneo e sereno da clínica Vitrae Medical"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[480px] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Subtle scrim at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E]/70 via-transparent to-black/10 pointer-events-none" />

                {/* Overlaid Discrete Marker at bottom of image */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[11px] tracking-wider uppercase text-[#5EEAD4] font-medium font-mono">
                      Pavilhão Vitrae · Suíte 01
                    </p>
                    <p className="text-xs text-white/90 font-light mt-0.5">
                      Arquitetura acústica & conforto sensorial
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                </div>
              </div>

              {/* Asymmetric Floating Card: Longitudinal Follow-up Signal */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-[#1E2229]/10 rounded-xl p-4 shadow-lg max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F1B29] text-[#5EEAD4] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F1B29]">
                      Acompanhamento 365
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Cuidado ativo entre consultas
                    </div>
                  </div>
                </div>
              </div>

              {/* Asymmetric Floating Card: Discrete Privacy Indicator */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#1E2229]/10 rounded-xl px-3.5 py-2.5 shadow-lg hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
                <span className="text-xs font-medium text-[#1E2229]">
                  Privacidade integral
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
