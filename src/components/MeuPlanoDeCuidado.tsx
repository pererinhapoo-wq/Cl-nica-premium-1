import React, { useState } from 'react';
import { CARE_PLANS, CarePlanFocus } from '../data/clinicData';
import { useToast } from '../context/ToastContext';
import { 
  Check, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Info, 
  ChevronRight, 
  Activity, 
  Download, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface MeuPlanoDeCuidadoProps {
  onSelectPlanForBooking: (planTitle: string) => void;
}

export const MeuPlanoDeCuidado: React.FC<MeuPlanoDeCuidadoProps> = ({
  onSelectPlanForBooking
}) => {
  const { showToast } = useToast();
  const [selectedPlanId, setSelectedPlanId] = useState<string>('prevencao');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [customCadence, setCustomCadence] = useState<'trimestral' | 'semestral'>('semestral');
  const [simulationSaved, setSimulationSaved] = useState<boolean>(false);

  const currentPlan = CARE_PLANS.find(p => p.id === selectedPlanId) || CARE_PLANS[0];
  const activeStage = currentPlan.stages[selectedStageIndex] || currentPlan.stages[0];

  const handleSelectPlan = (id: string) => {
    setSelectedPlanId(id);
    setSelectedStageIndex(0);
    setSimulationSaved(false);
  };

  const handleSaveSimulation = () => {
    setSimulationSaved(true);
    showToast({
      type: 'info',
      category: 'MEU PLANO DE CUIDADO',
      title: 'Síntese Salva com Sucesso',
      description: `Parâmetros do plano de ${currentPlan.title} (${customCadence}) memorizados para sua sessão.`,
      duration: 4500
    });
    setTimeout(() => setSimulationSaved(false), 3500);
  };

  return (
    <section id="meu-plano" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#0D9488] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Funcionalidade Exclusiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1B29] font-display">
            Meu Plano de Cuidado
          </h2>
          <p className="text-base sm:text-lg text-[#475569] mt-3 font-normal leading-relaxed">
            Simule uma jornada de acompanhamento estruturada e veja como a VITRAE orquestra cada fase do seu cuidado ao longo do tempo.
          </p>
        </div>

        {/* Mandatory Transparency & Safety Banner */}
        <div className="mb-10 p-4 rounded-xl bg-[#F5F3EF] border border-[#1E2229]/8 flex items-start gap-3 text-xs text-[#475569]">
          <Info className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-[#0F1B29]">Demonstração de Interface Digital:</span> Esta é uma visualização conceitual da metodologia de acompanhamento da VITRAE MEDICAL. Não constitui diagnóstico médico, recomendação terapêutica ou garantia de desfecho. Cada plano real é desenhado exclusivamente durante consultas individuais.
          </div>
        </div>

        {/* 1. Step 1: Area of Interest Selection */}
        <div className="mb-8">
          <div className="text-xs uppercase font-mono tracking-wider text-[#64748B] mb-3">
            Passo 1 · Selecione sua área de interesse para a simulação:
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CARE_PLANS.map((plan) => {
              const isSelected = plan.id === selectedPlanId;
              return (
                <button
                  key={plan.id}
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0F1B29] text-white border-[#0F1B29] shadow-md ring-1 ring-[#0D9488]/50'
                      : 'bg-white text-[#1E2229] border-[#1E2229]/8 hover:border-[#1E2229]/25 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] uppercase font-mono tracking-wider ${
                      isSelected ? 'text-[#5EEAD4]' : 'text-[#64748B]'
                    }`}>
                      Área
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#5EEAD4]" />}
                  </div>
                  <div className="font-bold text-sm font-display leading-tight">
                    {plan.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Simulation Canvas */}
        <div className="bg-white border border-[#1E2229]/10 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Plan Summary Bar */}
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#1E2229]/8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#0D9488] uppercase mb-1">
                <span>Plano Selecionado</span>
                <span aria-hidden="true">·</span>
                <span>{currentPlan.title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F1B29]">
                {currentPlan.subtitle}
              </h3>
              <p className="text-sm text-[#475569] mt-1 max-w-2xl leading-relaxed">
                {currentPlan.description}
              </p>
            </div>

            {/* Customizer Cadence Pill Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#64748B] font-mono whitespace-nowrap">Ciclo recomendado:</span>
              <div className="flex items-center p-1 bg-white border border-[#1E2229]/10 rounded-lg text-xs">
                <button
                  onClick={() => setCustomCadence('semestral')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                    customCadence === 'semestral'
                      ? 'bg-[#0F1B29] text-white'
                      : 'text-[#475569] hover:text-[#0F1B29]'
                  }`}
                >
                  Semestral (6 meses)
                </button>
                <button
                  onClick={() => setCustomCadence('trimestral')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                    customCadence === 'trimestral'
                      ? 'bg-[#0F1B29] text-white'
                      : 'text-[#475569] hover:text-[#0F1B29]'
                  }`}
                >
                  Trimestral (3 meses)
                </button>
              </div>
            </div>
          </div>

          {/* Visual Journey Progress Bar (The 5 Stages) */}
          <div className="p-6 sm:p-8 border-b border-[#1E2229]/8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-4 flex items-center justify-between">
              <span>Jornada em 5 Fases Fictícias:</span>
              <span className="text-[#0D9488] font-semibold">
                Fase {selectedStageIndex + 1} de 5 selecionada
              </span>
            </div>

            {/* Stage Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
              {currentPlan.stages.map((stage, idx) => {
                const isActive = idx === selectedStageIndex;
                const isPast = idx < selectedStageIndex;

                return (
                  <button
                    key={stage.number}
                    onClick={() => setSelectedStageIndex(idx)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer relative ${
                      isActive
                        ? 'bg-[#0F1B29] text-white border-[#0F1B29] shadow-sm'
                        : isPast
                        ? 'bg-[#F5F3EF] border-[#1E2229]/10 text-[#1E2229]'
                        : 'bg-white border-[#1E2229]/8 text-[#475569] hover:border-[#1E2229]/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isActive ? 'text-[#5EEAD4]' : 'text-[#64748B]'}>
                        {stage.number}
                      </span>
                      <span className="text-[11px] opacity-75">{stage.timeline}</span>
                    </div>
                    <div className="text-xs font-bold font-display leading-tight truncate">
                      {stage.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Deep Dive */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono text-[#0D9488] uppercase tracking-wider mb-1">
                  Detalhamento da Fase {activeStage.number} · {activeStage.timeline}
                </div>
                <h4 className="text-2xl font-bold font-display text-[#0F1B29]">
                  {activeStage.name}
                </h4>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                  {activeStage.objective}
                </p>
              </div>

              {/* Deliverables / Actions */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase font-mono tracking-wider text-[#1E2229]">
                  O que acontece nesta etapa:
                </div>
                <div className="space-y-2.5">
                  {activeStage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F5] border border-[#1E2229]/6">
                      <div className="w-5 h-5 rounded-full bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {dIdx + 1}
                      </div>
                      <span className="text-xs text-[#1E2229] leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#1E2229]/8 rounded-xl p-6 space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
                  Indicadores Mapeados Neste Plano
                </div>
                <div className="space-y-2">
                  {currentPlan.keyIndicators.map((ind, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs text-[#1E2229]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E2229]/8 text-xs text-[#64748B] space-y-1">
                <div><strong className="text-[#0F1B29]">Perfil:</strong> {currentPlan.idealFor}</div>
                <div><strong className="text-[#0F1B29]">Biomarcadores:</strong> Até {currentPlan.biomarkersCount} parâmetros laboratoriais integrados</div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => onSelectPlanForBooking(currentPlan.title)}
                  className="w-full py-3 px-4 rounded-lg bg-[#0F1B29] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E2229] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Agendar este plano de cuidado</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleSaveSimulation}
                  className="w-full py-2.5 px-4 rounded-lg bg-white border border-[#1E2229]/12 text-[#1E2229] text-xs font-medium hover:bg-[#F5F3EF] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>{simulationSaved ? 'Simulação salva na sessão!' : 'Salvar síntese da simulação'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
