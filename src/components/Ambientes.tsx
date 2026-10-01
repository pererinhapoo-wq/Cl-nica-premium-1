import React, { useState } from 'react';
import { CLINIC_SPACES, ClinicSpace } from '../data/clinicData';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const Ambientes: React.FC = () => {
  const [activeModalSpace, setActiveModalSpace] = useState<ClinicSpace | null>(null);

  return (
    <section id="ambientes" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Espaços & Arquitetura
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Ambientes concebidos para serenidade e precisão
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Uma abordagem arquitetônica biofílica que substitui a frieza hospitalar por luz natural, materiais minerais nobres, privacidade acústica e conforto sensorial.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Recepção (Large 7 cols) */}
          <div
            onClick={() => setActiveModalSpace(CLINIC_SPACES[0])}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1E2229]/10 bg-[#0F1B29] min-h-[360px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={CLINIC_SPACES[0].image}
              alt={CLINIC_SPACES[0].name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4]">
                {CLINIC_SPACES[0].subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display mt-1 mb-2">
                {CLINIC_SPACES[0].name}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-lg">
                {CLINIC_SPACES[0].description}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Consultórios (5 cols) */}
          <div
            onClick={() => setActiveModalSpace(CLINIC_SPACES[1])}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1E2229]/10 bg-[#0F1B29] min-h-[360px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={CLINIC_SPACES[1].image}
              alt={CLINIC_SPACES[1].name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4]">
                {CLINIC_SPACES[1].subtitle}
              </span>
              <h3 className="text-xl font-bold font-display mt-1 mb-2">
                {CLINIC_SPACES[1].name}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2">
                {CLINIC_SPACES[1].description}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Sala de Avaliação (5 cols) */}
          <div
            onClick={() => setActiveModalSpace(CLINIC_SPACES[2])}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1E2229]/10 bg-[#0F1B29] min-h-[340px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={CLINIC_SPACES[2].image}
              alt={CLINIC_SPACES[2].name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4]">
                {CLINIC_SPACES[2].subtitle}
              </span>
              <h3 className="text-xl font-bold font-display mt-1 mb-2">
                {CLINIC_SPACES[2].name}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2">
                {CLINIC_SPACES[2].description}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Fisioterapia & Recuperação (7 cols) */}
          <div
            onClick={() => setActiveModalSpace(CLINIC_SPACES[3])}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer border border-[#1E2229]/10 bg-[#0F1B29] min-h-[340px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={CLINIC_SPACES[3].image}
              alt={CLINIC_SPACES[3].name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4]">
                {CLINIC_SPACES[3].subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display mt-1 mb-2">
                {CLINIC_SPACES[3].name}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-lg">
                {CLINIC_SPACES[3].description}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>

      {/* Enlarged Lightbox Modal */}
      {activeModalSpace && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalSpace(null)}
        >
          <div 
            className="bg-[#FAF8F5] border border-[#1E2229]/20 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalSpace(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-96 w-full bg-[#13161B]">
              <img
                src={activeModalSpace.image}
                alt={activeModalSpace.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0D9488] mb-1">
                {activeModalSpace.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1B29] mb-3">
                {activeModalSpace.name}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                {activeModalSpace.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1E2229]/8 text-xs text-[#1E2229]">
                <div>
                  <strong className="font-semibold block text-[#0F1B29] mb-0.5">Conceito Arquitetônico:</strong>
                  <span className="text-[#64748B]">{activeModalSpace.concept}</span>
                </div>
                <div>
                  <strong className="font-semibold block text-[#0F1B29] mb-0.5">Dimensões & Recursos:</strong>
                  <span className="text-[#64748B]">{activeModalSpace.specs}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
