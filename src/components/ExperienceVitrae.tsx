import React from 'react';
import { Sparkles, Compass, Shield, Users } from 'lucide-react';

export const ExperienceVitrae: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Editorial Restraint */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            Filosofia de Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display leading-tight mb-6">
            Uma nova forma de cuidar.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Acreditamos que a medicina de excelência nasce no ponto exato em que a tecnologia diagnóstica mais avançada se encontra com a escuta empática e o acompanhamento meticulosamente coordenado.
          </p>
        </div>

        {/* Editorial Asymmetric Composition (Not 4 identical cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Large Editorial Anchor (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1B29] text-white rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background gradient and geometric lines */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="text-xs font-mono tracking-widest text-[#5EEAD4] uppercase mb-8">
                01 · Visão Longitudinal
              </div>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium leading-snug text-white/95 mb-8">
                “A medicina mais avançada é aquela que não espera a queixa se tornar sintoma. Cuidamos do seu tempo e da sua biologia de forma contínua.”
              </blockquote>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
                Em clínicas tradicionais, o cuidado termina quando a porta do consultório se fecha. Na VITRAE, a consulta é apenas o ponto de partida de um ciclo contínuo de monitoramento de biomarcadores, orientações adaptativas e comunicação direta com sua equipe médica.
              </p>
            </div>

            <div className="relative z-10 pt-10 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                <span>Protocolo de Investigação de 360 Graus</span>
              </div>
              <span>Dra. Helena Martins · Diretora Clínica</span>
            </div>
          </div>

          {/* Secondary Stacked Columns (5 cols) with Distinct Editorial Personalities */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Block 2: Human Reception & Generous Time */}
            <div className="bg-white border border-[#1E2229]/8 rounded-2xl p-8 flex-1 flex flex-col justify-between hover:border-[#1E2229]/20 transition-colors">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#64748B] uppercase mb-3">
                  02 · Tempo & Escuta
                </div>
                <h3 className="text-xl font-bold text-[#0F1B29] font-display mb-3">
                  Consultas com tempo generoso e sem pressa
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Eliminamos as consultas corridas de 15 minutos. Nossos encontros têm duração média de 60 a 75 minutos, permitindo investigar rotina, sono, histórico familiar e nuances psicológicas com serenidade e respeito.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#1E2229]/6 flex items-center justify-between text-xs text-[#64748B]">
                <span>Ambiente privativo com isolamento acústico</span>
                <span className="font-mono text-[#0D9488]">60-75 min</span>
              </div>
            </div>

            {/* Block 3: Integrated Coordination (Concierge & Multidisciplinary) */}
            <div className="bg-[#F5F3EF] border border-[#1E2229]/8 rounded-2xl p-8 flex-1 flex flex-col justify-between hover:border-[#1E2229]/20 transition-colors">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#0D9488] uppercase mb-3">
                  03 · Integração Real
                </div>
                <h3 className="text-xl font-bold text-[#0F1B29] font-display mb-3">
                  Especialistas que dialogam entre si
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Clínico geral, dermatologista, nutricionista, fisioterapeuta e psicólogo compartilham um prontuário único estruturado e realizam reuniões clínicas para alinhar cada conduta do seu plano.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#1E2229]/8 flex items-center justify-between text-xs text-[#64748B]">
                <span>Suporte ativo pelo Concierge de Saúde</span>
                <span className="font-medium text-[#0F1B29]">Equipe Unificada</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
