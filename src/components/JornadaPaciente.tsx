import React, { useState } from 'react';
import { PATIENT_JOURNEY_STEPS } from '../data/clinicData';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const JornadaPaciente: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF]/60 border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Metodologia Clínica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Do primeiro contato ao acompanhamento
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Uma linha do tempo fluida e previsível, desenhada para que você nunca se sinta desamparado ou incerto quanto aos próximos passos da sua saúde.
          </p>
        </div>

        {/* Visual Stepper Track (Horizontal on tablet/desktop) */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {PATIENT_JOURNEY_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-[#0F1B29] text-white border-[#0F1B29] shadow-md ring-1 ring-[#0D9488]/40'
                      : 'bg-white text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/20 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="text-xs font-mono mb-1 flex items-center justify-between">
                    <span className={isActive ? 'text-[#5EEAD4]' : 'text-[#0D9488]'}>
                      {step.number}
                    </span>
                    <span className="text-[10px] opacity-75">{step.timeframe}</span>
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm leading-tight">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Visual Showcase */}
        {(() => {
          const current = PATIENT_JOURNEY_STEPS[activeStepIndex];
          return (
            <div className="bg-white border border-[#1E2229]/10 rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0D9488] uppercase tracking-wider">
                  <span>Etapa {current.number} da Jornada</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.timeframe}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1B29]">
                  {current.title}
                </h3>
                
                <p className="text-base text-[#1E2229] font-medium">
                  {current.subtitle}
                </p>

                <p className="text-sm text-[#475569] leading-relaxed max-w-2xl">
                  {current.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs text-[#0F1B29] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Entrega chave: <strong className="font-semibold text-[#0F1B29]">{current.deliverable}</strong></span>
                </div>
              </div>

              {/* Step Navigation Controls (4 cols) */}
              <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#1E2229]/8 rounded-xl p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Navegação da Jornada
                  </div>
                  <div className="text-xs text-[#475569] mb-4">
                    Explore os 6 marcos cronológicos que estruturam a metodologia VITRAE.
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-[#1E2229]/6">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                    className="flex-1 py-2 px-3 rounded-lg border border-[#1E2229]/12 text-xs font-medium text-[#1E2229] bg-white hover:bg-[#F5F3EF] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    Anterior
                  </button>
                  <button
                    disabled={activeStepIndex === PATIENT_JOURNEY_STEPS.length - 1}
                    onClick={() => setActiveStepIndex(prev => Math.min(PATIENT_JOURNEY_STEPS.length - 1, prev + 1))}
                    className="flex-1 py-2 px-3 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold hover:bg-[#1E2229] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    Próxima Etapa
                  </button>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
