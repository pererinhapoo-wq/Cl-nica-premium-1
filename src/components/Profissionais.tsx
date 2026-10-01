import React, { useState } from 'react';
import { PHYSICIANS, Physician } from '../data/clinicData';
import { ArrowRight, GraduationCap, Award, Stethoscope, ChevronRight } from 'lucide-react';

interface ProfissionaisProps {
  onSelectDoctorForBooking: (doctorName: string, specialtyName: string) => void;
}

export const Profissionais: React.FC<ProfissionaisProps> = ({
  onSelectDoctorForBooking
}) => {
  const [selectedPhysician, setSelectedPhysician] = useState<Physician>(PHYSICIANS[0]);

  const featuredDoctor = PHYSICIANS.find(p => p.featured) || PHYSICIANS[0];
  const otherDoctors = PHYSICIANS.filter(p => !p.featured);

  return (
    <section id="profissionais" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Corpo Clínico & Especialistas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Profissionais dedicados ao seu cuidado integral
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Médicos e especialistas em saúde funcional com sólida formação acadêmica e compromisso intransigente com a escuta qualificada.
          </p>
        </div>

        {/* Editorial Feature Layout: Lead Physician Feature Banner (Asymmetric 12-col) */}
        <div className="bg-white border border-[#1E2229]/10 rounded-2xl overflow-hidden shadow-sm mb-12 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Portrait Image Column (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-[#13161B]">
            <img
              src={featuredDoctor.image || '/src/assets/images/vitrae_physician_portrait_1790830691879.jpg'}
              alt={featuredDoctor.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono tracking-wider uppercase text-[#5EEAD4]">
                Diretoria Clínica
              </span>
              <p className="text-lg font-bold font-display mt-0.5">{featuredDoctor.name}</p>
              <p className="text-xs text-white/80">{featuredDoctor.crm}</p>
            </div>
          </div>

          {/* Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#0D9488] mb-2">
                {featuredDoctor.specialtyName}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1B29] mb-4">
                {featuredDoctor.title}
              </h3>
              
              <blockquote className="text-base sm:text-lg italic text-[#1E2229] border-l-2 border-[#0D9488] pl-4 py-1 mb-6">
                “{featuredDoctor.approach}”
              </blockquote>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {featuredDoctor.bio}
              </p>

              {/* Education */}
              <div className="space-y-2 mb-8">
                <div className="text-xs font-semibold uppercase font-mono tracking-wider text-[#1E2229] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Trajetória Acadêmica</span>
                </div>
                {featuredDoctor.education.map((edu, eIdx) => (
                  <div key={eIdx} className="text-xs text-[#64748B]">
                    · {edu}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E2229]/8 flex items-center justify-between">
              <span className="text-xs text-[#64748B]">Consultas com tempo mínimo de 60 minutos</span>
              <button
                onClick={() => onSelectDoctorForBooking(featuredDoctor.name, featuredDoctor.specialtyName)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] transition-all cursor-pointer shadow-xs"
              >
                <span>Agendar com Dra. Helena</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Secondary Physicians: Curated Editorial List */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-6">
            Especialistas Multidisciplinares Coordenados
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-[#1E2229]/8 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#1E2229]/20 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#0D9488] mb-2">
                    <span>{doc.specialtyName}</span>
                    <span className="text-[11px] text-[#94A3B8]">{doc.crm}</span>
                  </div>

                  <h4 className="text-xl font-bold font-display text-[#0F1B29] group-hover:text-[#0D9488] transition-colors mb-1">
                    {doc.name}
                  </h4>
                  <div className="text-xs font-medium text-[#475569] mb-4">
                    {doc.title}
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                    {doc.bio}
                  </p>

                  <div className="border-t border-[#1E2229]/6 pt-4 mb-6">
                    <p className="text-xs text-[#1E2229] italic">
                      “{doc.approach}”
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1E2229]/6 flex items-center justify-between">
                  <span className="text-[11px] text-[#94A3B8]">Prontuário unificado</span>
                  <button
                    onClick={() => onSelectDoctorForBooking(doc.name, doc.specialtyName)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F1B29] hover:text-[#0D9488] transition-colors cursor-pointer"
                  >
                    <span>Agendar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
