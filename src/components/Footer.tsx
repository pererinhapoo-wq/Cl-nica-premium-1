import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Filosofia', href: '#filosofia' },
    { label: 'Central de Cuidado', href: '#central' },
    { label: 'Meu Plano de Cuidado', href: '#meu-plano' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Corpo Clínico', href: '#profissionais' },
    { label: 'Ambientes', href: '#ambientes' },
    { label: 'Agendamento', href: '#agendamento' }
  ];

  const specialtiesList = [
    'Clínica Médica & Longevidade',
    'Dermatologia & Laser Avançado',
    'Nutrição Metabólica & Cronobiologia',
    'Fisioterapia & Biomecânica',
    'Psicologia & Neurocognição',
    'Medicina Preventiva & Genômica'
  ];

  return (
    <footer className="bg-[#0B131E] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white font-display block"
            >
              VITRAE MEDICAL
            </a>
            
            <p className="text-sm text-[#5EEAD4] font-medium italic">
              Cuidado preciso. Experiência humana.
            </p>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Centro médico de referência em saúde integrada, diagnóstico preventivo longitudinal e acompanhamento contínuo em ambiente contemporâneo.
            </p>

            <div className="pt-2 text-xs text-white/40 font-mono">
              Responsável Técnico: Dra. Helena Martins · CRM-SP 184.220 / RQE 92.110
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#5EEAD4]">
              Navegação
            </div>
            <ul className="space-y-2.5 text-xs text-white/70">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Especialidades (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#5EEAD4]">
              Especialidades
            </div>
            <ul className="space-y-2.5 text-xs text-white/70">
              {specialtiesList.map((item) => (
                <li key={item} className="truncate">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#5EEAD4]">
              Comunicação
            </div>
            <div className="space-y-2 text-xs text-white/70">
              <div>atendimento@vitraemedical.com.br</div>
              <div>(11) 3088-7200</div>
              <div className="text-white/40 pt-2">Itaim Bibi · São Paulo</div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-2">
                Presença Digital
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-white/70">
                <a href="#instagram" className="hover:text-[#5EEAD4] transition-colors">@vitraemedical</a>
                <a href="#linkedin" className="hover:text-[#5EEAD4] transition-colors">LinkedIn · Vitrae Medical</a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright & Medical Ethics Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="text-center md:text-left leading-relaxed">
            <p>© {new Date().getFullYear()} VITRAE MEDICAL LTDA. Todos os direitos reservados.</p>
            <p className="text-[11px] text-white/30 mt-1">
              As informações contidas neste site possuem caráter estritamente informativo e educacional. Não substituem o parecer médico individualizado.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
