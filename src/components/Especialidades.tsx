import React, { useState } from 'react';
import { SPECIALTIES, Specialty } from '../data/clinicData';
import { ArrowRight, Clock, User, CheckCircle2, Cpu } from 'lucide-react';

interface EspecialidadesProps {
  onScheduleSpecialty: (specialtyName: string) => void;
}

export const Especialidades: React.FC<EspecialidadesProps> = ({
  onScheduleSpecialty
}) => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>('clinica-medica');

  const selectedSpecialty = SPECIALTIES.find(s => s.id === activeSpecialtyId) || SPECIALTIES[0];

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-[#F5F3EF]/40 border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Áreas de Atuação
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Especialidades integradas
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Seis disciplinas médicas e de saúde funcional que operam em sinergia contínua, conectadas por um prontuário unificado e discussões clínicas periódicas.
          </p>
        </div>

        {/* Asymmetric Interactive Layout (Vertical selector + Editorial Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Nav List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {SPECIALTIES.map((spec, index) => {
              const isActive = spec.id === activeSpecialtyId;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpecialtyId(spec.id)}
                  className={`p-4 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#0F1B29] text-white border-[#0F1B29] shadow-sm'
                      : 'bg-white text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/20 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider opacity-60 mb-0.5">
                      0{index + 1}
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base">
                      {spec.name}
                    </div>
                    <div className={`text-xs mt-0.5 truncate ${isActive ? 'text-[#5EEAD4]' : 'text-[#64748B]'}`}>
                      {spec.category}
                    </div>
                  </div>

                  <div className={`w-2 h-2 rounded-full transition-transform ${
                    isActive ? 'bg-[#5EEAD4] scale-125' : 'bg-transparent'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Editorial Showcase of Selected Specialty (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#1E2229]/10 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all duration-300">
            
            {/* Header info */}
            <div className="border-b border-[#1E2229]/8 pb-6 mb-8">
              <div className="text-xs font-mono tracking-wider uppercase text-[#0D9488] mb-1">
                {selectedSpecialty.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1B29]">
                {selectedSpecialty.name}
              </h3>
              <p className="text-base text-[#1E2229] font-medium mt-2 italic">
                “{selectedSpecialty.tagline}”
              </p>
              <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                {selectedSpecialty.description}
              </p>
            </div>

            {/* In-Depth Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Focus Areas */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3">
                  Áreas de Foco Clínico
                </div>
                <div className="space-y-2.5">
                  {selectedSpecialty.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1E2229]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] mt-0.5 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Tecnologia & Equipamentos</span>
                </div>
                <div className="space-y-2.5">
                  {selectedSpecialty.technologies.map((tech, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/6 text-xs text-[#475569]">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Meta & Booking Trigger */}
            <div className="pt-6 border-t border-[#1E2229]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0F1B29]" />
                  <span>Responsável: <strong className="text-[#0F1B29]">{selectedSpecialty.leadDoctor}</strong></span>
                </div>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Duração: <strong className="text-[#0F1B29]">{selectedSpecialty.consultationDuration}</strong></span>
                </div>
              </div>

              <button
                onClick={() => onScheduleSpecialty(selectedSpecialty.name)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] active:scale-[0.98] transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>Agendar com esta especialidade</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
