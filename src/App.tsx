/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceVitrae } from './components/ExperienceVitrae';
import { CentralDeCuidado } from './components/CentralDeCuidado';
import { MeuPlanoDeCuidado } from './components/MeuPlanoDeCuidado';
import { Especialidades } from './components/Especialidades';
import { Profissionais } from './components/Profissionais';
import { JornadaPaciente } from './components/JornadaPaciente';
import { Ambientes } from './components/Ambientes';
import { TecnologiaPrecisao } from './components/TecnologiaPrecisao';
import { Agendamento } from './components/Agendamento';
import { AvaliacaoInicial } from './components/AvaliacaoInicial';
import { ConteudoEditorial } from './components/ConteudoEditorial';
import { Depoimentos } from './components/Depoimentos';
import { LocalizacaoContato } from './components/LocalizacaoContato';
import { Footer } from './components/Footer';
import { AccessibilityModal } from './components/AccessibilityModal';
import { ToastProvider } from './context/ToastContext';

export default function App() {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string | undefined>();
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlanForBooking = (planTitle: string) => {
    // Map plan to a matching specialty
    if (planTitle.includes('Mulher')) {
      setPreselectedSpecialty('Clínica Médica');
    } else if (planTitle.includes('Performance')) {
      setPreselectedSpecialty('Fisioterapia');
    } else {
      setPreselectedSpecialty('Medicina Preventiva');
    }
    scrollToSection('agendamento');
  };

  const handleSelectDoctorForBooking = (doctorName: string, specialtyName: string) => {
    setPreselectedDoctor(doctorName);
    setPreselectedSpecialty(specialtyName);
    scrollToSection('agendamento');
  };

  const handleScheduleSpecialty = (specialtyName: string) => {
    setPreselectedSpecialty(specialtyName);
    scrollToSection('agendamento');
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1E2229] font-sans selection:bg-[#0D9488]/20 selection:text-[#0F1B29]">
        {/* Top Bar Navigation */}
        <Navbar
          onOpenAccessibility={() => setIsAccessibilityOpen(true)}
          onNavigateToBooking={() => scrollToSection('agendamento')}
        />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero */}
          <Hero
            onExploreClinic={() => scrollToSection('filosofia')}
            onScheduleAppointment={() => scrollToSection('agendamento')}
          />

          {/* 2. Experiência Vitrae: Uma nova forma de cuidar */}
          <ExperienceVitrae />

          {/* 3. Central de Cuidado: Demonstração da organização digital */}
          <CentralDeCuidado />

          {/* 4. Funcionalidade Premium: Meu Plano de Cuidado */}
          <MeuPlanoDeCuidado
            onSelectPlanForBooking={handleSelectPlanForBooking}
          />

          {/* 5. Especialidades: Navegação interativa não-tradicional */}
          <Especialidades
            onScheduleSpecialty={handleScheduleSpecialty}
          />

          {/* 6. Profissionais: Corpo clínico e abordagem editorial */}
          <Profissionais
            onSelectDoctorForBooking={handleSelectDoctorForBooking}
          />

          {/* 7. Jornada do Paciente: 01 ao 06 */}
          <JornadaPaciente />

          {/* 8. Ambientes: Galeria assimétrica com lightbox */}
          <Ambientes />

          {/* 9. Tecnologia e Precisão: Composição tecnológica */}
          <TecnologiaPrecisao />

          {/* 10. Agendamento: Fluxo completo de agendamento */}
          <Agendamento
            preselectedSpecialty={preselectedSpecialty}
            preselectedDoctor={preselectedDoctor}
          />

          {/* 11. Avaliação Inicial: Comece pelo que importa */}
          <AvaliacaoInicial />

          {/* 12. Conteúdo Editorial: Informação para escolhas melhores */}
          <ConteudoEditorial />

          {/* 13. Depoimentos: Experiências autênticas de pacientes */}
          <Depoimentos />

          {/* 14. Localização & Contato: Endereço, mapa interativo, horários */}
          <LocalizacaoContato />
        </main>

        {/* Footer */}
        <Footer />

        {/* Accessibility Control Panel Modal */}
        <AccessibilityModal
          isOpen={isAccessibilityOpen}
          onClose={() => setIsAccessibilityOpen(false)}
        />
      </div>
    </ToastProvider>
  );
}
