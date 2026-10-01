import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Quote } from 'lucide-react';

export const Depoimentos: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F3EF]/60 border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Experiência Real
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            A percepção de quem vivencia o cuidado
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Relatos espontâneos sobre a coordenação, a atenção dedicada e a serenidade do processo clínico na VITRAE.
          </p>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#1E2229]/8 rounded-2xl p-8 flex flex-col justify-between hover:border-[#1E2229]/20 transition-colors shadow-xs"
            >
              <div>
                <Quote className="w-6 h-6 text-[#0D9488]/40 mb-4" />
                <p className="text-sm sm:text-base text-[#1E2229] leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#1E2229]/6">
                <div className="font-bold text-sm text-[#0F1B29] font-display">
                  {item.author}
                </div>
                <div className="text-xs text-[#475569]">
                  {item.role}
                </div>
                <div className="text-[11px] text-[#0D9488] mt-1 font-mono">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
