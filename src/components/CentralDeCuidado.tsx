import React, { useState } from 'react';
import { 
  Calendar, 
  UserCheck, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  AlertCircle,
  Eye
} from 'lucide-react';

export const CentralDeCuidado: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'geral' | 'exames' | 'orientacoes' | 'equipe'>('geral');

  return (
    <section id="central" className="py-24 md:py-32 bg-[#F5F3EF]/60 border-t border-[#1E2229]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
              Demonstração Digital
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
              Central de cuidado
            </h2>
            <p className="text-base text-[#475569] mt-3 font-normal leading-relaxed">
              Visualize como suas informações clínicas, laudos, cronogramas e orientações são organizados de maneira límpida, segura e acessível.
            </p>
          </div>

          {/* Interactive Simulated View Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#1E2229]/10 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('geral')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'geral'
                  ? 'bg-[#0F1B29] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#0F1B29]'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('exames')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'exames'
                  ? 'bg-[#0F1B29] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#0F1B29]'
              }`}
            >
              Exames & Biomarcadores
            </button>
            <button
              onClick={() => setActiveTab('orientacoes')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'orientacoes'
                  ? 'bg-[#0F1B29] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#0F1B29]'
              }`}
            >
              Orientações
            </button>
            <button
              onClick={() => setActiveTab('equipe')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'equipe'
                  ? 'bg-[#0F1B29] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#0F1B29]'
              }`}
            >
              Equipe Responsável
            </button>
          </div>
        </div>

        {/* Central Dashboard Simulated Canvas */}
        <div className="bg-white border border-[#1E2229]/10 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Top Bar of the Hub */}
          <div className="px-6 py-4 border-b border-[#1E2229]/8 bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0F1B29] text-white font-medium text-xs flex items-center justify-center font-display">
                CS
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0F1B29] flex items-center gap-2">
                  <span>Clara S. Mendes</span>
                  <span className="text-xs font-normal text-[#64748B]">· Prontuário #VT-8829</span>
                </div>
                <div className="text-xs text-[#64748B]">
                  Protocolo Ativo: Longevidade, Sono e Resiliência Metabólica
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#475569]">
              <span className="inline-flex items-center gap-1.5 text-[#0D9488] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                Acompanhamento em andamento
              </span>
              <span aria-hidden="true" className="text-[#CBD5E1]">|</span>
              <span>Ciclo 2026</span>
            </div>
          </div>

          {/* Inner Content depending on active tab */}
          <div className="p-6 sm:p-8">

            {activeTab === 'geral' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Top Row: Next Appointment & Lead Doctor */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Próximo Atendimento (7 cols) */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#1E2229]/8 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0D9488] font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Próximo Atendimento</span>
                      </div>
                      <span className="text-xs text-[#64748B]">Confirmado</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E2229]/6">
                      <div>
                        <h4 className="text-lg font-bold text-[#0F1B29] font-display">
                          Reavaliação Metabólica & Consulta Integradora
                        </h4>
                        <p className="text-sm text-[#475569] mt-0.5">
                          Com Dra. Helena Martins · Clínica Médica
                        </p>
                      </div>

                      <div className="text-left sm:text-right bg-white sm:bg-transparent p-3 sm:p-0 rounded-lg border sm:border-0 border-[#1E2229]/6">
                        <div className="text-sm font-bold text-[#0F1B29] font-mono">
                          14 de Outubro · 14:30
                        </div>
                        <div className="text-xs text-[#64748B]">
                          Suíte 03 · Duração prevista: 60 min
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#475569]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#0D9488]" />
                        <span>Recomendação: Jejum de 4h para conferência de bioimpedância segmentada</span>
                      </div>
                    </div>
                  </div>

                  {/* Profissional Responsável & Concierge (5 cols) */}
                  <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#1E2229]/8 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0D9488] font-semibold mb-4">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Profissional Responsável</span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-[#0F1B29] text-white flex items-center justify-center font-display font-bold text-sm">
                          HM
                        </div>
                        <div>
                          <div className="text-base font-bold text-[#0F1B29] font-display">
                            Dra. Helena Martins
                          </div>
                          <div className="text-xs text-[#64748B]">
                            Clínica Médica & Longevidade
                          </div>
                          <div className="text-[11px] font-mono text-[#94A3B8]">
                            CRM-SP 184.220 · RQE 92.110
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1E2229]/6 flex items-center justify-between text-xs">
                      <span className="text-[#64748B]">Concierge designado:</span>
                      <span className="font-semibold text-[#0F1B29]">Lucas M. (Disponível)</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Row: Plano de Acompanhamento & Próximos Passos */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Plano de Acompanhamento (7 cols) */}
                  <div className="lg:col-span-7 bg-white border border-[#1E2229]/8 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#475569] font-semibold">
                        Plano de Acompanhamento · Linha do Tempo
                      </div>
                      <span className="text-xs text-[#0D9488] font-medium">Etapa 3 de 5</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9488] mt-0.5 shrink-0" />
                        <div className="text-xs flex-1">
                          <div className="font-semibold text-[#0F1B29]">01. Mapeamento Laboratorial Inicial (68 biomarcadores)</div>
                          <div className="text-[#64748B]">Concluído em 12/Set · Laudos integrados com sucesso</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9488] mt-0.5 shrink-0" />
                        <div className="text-xs flex-1">
                          <div className="font-semibold text-[#0F1B29]">02. Consulta Médica Integrada & Bioimpedância</div>
                          <div className="text-[#64748B]">Concluído em 18/Set · Prescrição de crononutrição emitida</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-[#0D9488] bg-white flex items-center justify-center mt-0.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                        </div>
                        <div className="text-xs flex-1">
                          <div className="font-semibold text-[#0F1B29]">03. Fase de Modulação Circadiana e Suplementação</div>
                          <div className="text-[#0D9488] font-medium">Em andamento · Semana 4 do protocolo</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 opacity-60">
                        <div className="w-4 h-4 rounded-full border border-[#94A3B8] bg-white mt-0.5 shrink-0" />
                        <div className="text-xs flex-1">
                          <div className="font-semibold text-[#475569]">04. Reavaliação Laboratorial de Controle</div>
                          <div className="text-[#64748B]">Programado para Novembro/2026</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Próximos Passos (5 cols) */}
                  <div className="lg:col-span-5 bg-white border border-[#1E2229]/8 rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#475569] font-semibold mb-4">
                        Próximos Passos
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/6 flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                          <div className="text-xs">
                            <span className="font-semibold text-[#0F1B29]">Sessão de Fisioterapia Biomecânica</span>
                            <p className="text-[#64748B] mt-0.5">Sexta-feira às 10:00 com Lucas Almeida</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/6 flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] mt-1.5 shrink-0" />
                          <div className="text-xs">
                            <span className="font-semibold text-[#0F1B29]">Preenchimento do Registro de Sono</span>
                            <p className="text-[#64748B] mt-0.5">Semana 4 · 3 dias restantes para análise</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1E2229]/6 text-[11px] text-[#64748B] flex items-center justify-between">
                      <span>Última sincronização: hoje às 08:30</span>
                      <span className="text-[#0D9488] font-medium">Dados atualizados</span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'exames' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-xs text-[#64748B]">
                  Painel sintético dos principais biomarcadores monitorados no protocolo atual.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#64748B] font-mono">ApoB (Apolipoproteína B)</div>
                    <div className="text-xl font-bold font-mono text-[#0F1B29] my-1">
                      68 <span className="text-xs font-normal text-[#64748B]">mg/dL</span>
                    </div>
                    <div className="text-[11px] text-[#0D9488] font-medium">
                      ✓ Faixa ótima (&lt; 70 mg/dL)
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#64748B] font-mono">PCR Ultrassensível</div>
                    <div className="text-xl font-bold font-mono text-[#0F1B29] my-1">
                      0.42 <span className="text-xs font-normal text-[#64748B]">mg/L</span>
                    </div>
                    <div className="text-[11px] text-[#0D9488] font-medium">
                      ✓ Baixo risco inflamatório
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#64748B] font-mono">Vitamina D (25-OH)</div>
                    <div className="text-xl font-bold font-mono text-[#0F1B29] my-1">
                      54 <span className="text-xs font-normal text-[#64748B]">ng/mL</span>
                    </div>
                    <div className="text-[11px] text-[#0D9488] font-medium">
                      ✓ Nível terapêutico adequado
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#64748B] font-mono">Índice HOMA-IR</div>
                    <div className="text-xl font-bold font-mono text-[#0F1B29] my-1">
                      0.98 <span className="text-xs font-normal text-[#64748B]">score</span>
                    </div>
                    <div className="text-[11px] text-[#0D9488] font-medium">
                      ✓ Alta sensibilidade à insulina
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#0F1B29]" />
                    <div>
                      <div className="text-xs font-semibold text-[#0F1B29]">
                        Relatório Biológico Integrado — Ciclo 2026.1 (PDF Estruturado)
                      </div>
                      <div className="text-[11px] text-[#64748B]">
                        Compilado por Dra. Helena Martins e Marina Costa em 18 de Setembro
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#0D9488] font-medium">
                    Laudo Disponível no Aplicativo
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'orientacoes' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="text-xs text-[#64748B] mb-2">
                  Diretrizes personalizadas em vigor, calibradas pela equipe multidisciplinar.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="p-5 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs font-semibold text-[#0F1B29] uppercase font-mono tracking-wider text-[#0D9488] mb-2">
                      Crononutrição
                    </div>
                    <h5 className="text-sm font-bold text-[#0F1B29] mb-1">
                      Janela Alimentar Circadiana
                    </h5>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      Conclusão da última refeição pelo menos 3 horas antes de dormir para permitir recuperação mitocondrial e pico de secreção de GH.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs font-semibold text-[#0F1B29] uppercase font-mono tracking-wider text-[#0D9488] mb-2">
                      Higiene de Luz
                    </div>
                    <h5 className="text-sm font-bold text-[#0F1B29] mb-1">
                      Exposição Solar Matinal
                    </h5>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      15 minutos de exposição à luz natural direta nas primeiras duas horas após o despertar para sincronização do ciclo circadiano e energia.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs font-semibold text-[#0F1B29] uppercase font-mono tracking-wider text-[#0D9488] mb-2">
                      Biomecânica
                    </div>
                    <h5 className="text-sm font-bold text-[#0F1B29] mb-1">
                      Micro-Pausas de Mobilidade
                    </h5>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      Série de 3 minutos de descompressão torácica a cada 2 horas de trabalho em mesa para diminuir a sobrecarga cervical.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'equipe' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="text-xs text-[#64748B] mb-2">
                  Corpo clínico e suporte dedicado à coordenação do seu caso.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#0D9488] font-mono mb-1">Médica Coordenadora</div>
                    <div className="text-sm font-bold text-[#0F1B29]">Dra. Helena Martins</div>
                    <div className="text-xs text-[#64748B]">Clínica Médica</div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#0D9488] font-mono mb-1">Nutricionista Clínica</div>
                    <div className="text-sm font-bold text-[#0F1B29]">Marina Costa</div>
                    <div className="text-xs text-[#64748B]">Metabolismo & Crononutrição</div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#1E2229]/8 bg-[#FAF8F5]">
                    <div className="text-xs text-[#0D9488] font-mono mb-1">Fisioterapeuta</div>
                    <div className="text-sm font-bold text-[#0F1B29]">Lucas Almeida</div>
                    <div className="text-xs text-[#64748B]">Biomecânica Funcional</div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer note: Explicitly states this is a visual demonstration */}
          <div className="px-6 py-3 bg-[#1E2229]/3 border-t border-[#1E2229]/6 flex items-center justify-between text-[11px] text-[#64748B]">
            <span>Demonstração de interface da experiência digital VITRAE</span>
            <span>Ambiente seguro fictício para fins de apresentação</span>
          </div>

        </div>

      </div>
    </section>
  );
};
