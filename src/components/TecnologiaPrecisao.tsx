import React from 'react';
import { Shield, Sparkles, Activity, Bell, MessageSquare, Database, Check } from 'lucide-react';

export const TecnologiaPrecisao: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0F1B29] text-white relative overflow-hidden">
      {/* Background architectural aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#5EEAD4] mb-3">
            Infraestrutura Digital & Precisão
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Tecnologia que simplifica o cuidado
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-3 font-normal leading-relaxed">
            Eliminamos os atritos da medicina fragmentada através de uma arquitetura digital desenhada para unificar históricos, antecipar etapas e conectar você aos seus médicos.
          </p>
        </div>

        {/* Asymmetric Visual Composition (Not an icon list!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Showcase (7 cols): Simulated Encrypted Data Architecture */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col justify-between backdrop-blur-xs">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div>
                  <span className="text-[11px] font-mono text-[#5EEAD4] uppercase tracking-wider block">
                    Arquitetura Central
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                    Prontuário Unificado Longitudinal
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/60 font-mono">
                  <Shield className="w-4 h-4 text-[#14B8A6]" />
                  <span>Criptografia de Ponta a Ponta</span>
                </div>
              </div>

              <p className="text-sm text-white/75 leading-relaxed mb-8">
                Esqueça pastas físicas de exames antigos ou laudos perdidos em e-mails. Todos os seus dados — laboratoriais, genéticos, imagens de ressonância e anotações clínicas de cada especialista — convergem para uma linha do tempo única e inteligível.
              </p>

              {/* Visual Architectural Data Stream Demonstration */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    <span className="text-white/90">Histórico de 84 biomarcadores sincronizados</span>
                  </div>
                  <span className="text-white/40">Tempo real</span>
                </div>

                <div className="p-3.5 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
                    <span className="text-white/90">Reuniões multidisciplinares documentadas</span>
                  </div>
                  <span className="text-white/40">Integrado</span>
                </div>

                <div className="p-3.5 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white/90">Soberania de dados e exportação em padrão internacional</span>
                  </div>
                  <span className="text-white/40">PDF / FHIR</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
              <span>Acesso restrito ao corpo clínico autorizado</span>
              <span>Conformidade estrita com a LGPD e sigilo médico</span>
            </div>
          </div>

          {/* Secondary Stacked Technological Modules (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Module 1: Smart Reminders & Continuous Monitoring */}
            <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 flex-1 flex flex-col justify-between backdrop-blur-xs">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4] mb-2">
                  Notificações Calibradas
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  Lembretes Inteligentes sem Ruído
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Avisos precisos sobre jejum antes de exames, renovação de prescrições e checagem pontual de adesão aos protocolos de saúde, sem spam.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/20 border border-white/8 text-xs text-white/80 flex items-center gap-2.5">
                <Bell className="w-4 h-4 text-[#5EEAD4] shrink-0" />
                <span>Notificações antecipadas com roteiro de preparação personalizado</span>
              </div>
            </div>

            {/* Module 2: Direct Concierge & Medical Line */}
            <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 flex-1 flex flex-col justify-between backdrop-blur-xs">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4] mb-2">
                  Canal Dedicado
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  Comunicação Direta com o Concierge
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Dúvidas sobre medicações, ajustes na rotina de treinos ou agendamentos são encaminhados diretamente ao profissional responsável sem intermediários impessoais.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/20 border border-white/8 text-xs text-white/80 flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#5EEAD4] shrink-0" />
                <span>Atendimento humanizado com tempo médio de resposta sob 2 horas</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
