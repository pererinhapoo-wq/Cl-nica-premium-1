import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAccessibility: () => void;
  onNavigateToBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAccessibility,
  onNavigateToBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Filosofia', href: '#filosofia' },
    { label: 'Central de Cuidado', href: '#central' },
    { label: 'Meu Plano', href: '#meu-plano' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Profissionais', href: '#profissionais' },
    { label: 'Ambientes', href: '#ambientes' }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1E2229]/8 py-3.5 shadow-xs'
          : 'bg-[#FAF8F5]/60 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-[#0F1B29] font-display whitespace-nowrap hover:opacity-85 transition-opacity"
        >
          VITRAE MEDICAL
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#475569]"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="hover:text-[#0F1B29] transition-colors relative py-1 cursor-pointer group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D9488] transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAccessibility}
            className="p-2 text-[#475569] hover:text-[#0F1B29] hover:bg-[#1E2229]/5 rounded-lg transition-colors cursor-pointer"
            title="Acessibilidade e Ajustes Visuais"
            aria-label="Abrir painel de acessibilidade"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateToBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#0F1B29] hover:bg-[#1E2229] active:scale-[0.98] rounded-md transition-all cursor-pointer shadow-xs whitespace-nowrap"
          >
            <span>Agendar Atendimento</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E2229] hover:bg-[#1E2229]/5 rounded-lg cursor-pointer"
            aria-label="Menu móvel"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#1E2229]/10 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1E2229]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2 border-b border-[#1E2229]/6 hover:text-[#0D9488] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToBooking();
                }}
                className="w-full py-3 text-xs tracking-wider uppercase font-semibold text-center text-white bg-[#0F1B29] rounded-md transition-colors"
              >
                Agendar Atendimento
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
