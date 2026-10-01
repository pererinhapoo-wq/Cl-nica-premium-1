export interface Specialty {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  technologies: string[];
  leadDoctor: string;
  consultationDuration: string;
}

export interface Physician {
  id: string;
  name: string;
  specialtyId: string;
  specialtyName: string;
  title: string;
  crm: string;
  bio: string;
  approach: string;
  education: string[];
  image?: string;
  featured?: boolean;
}

export interface CarePlanFocus {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  biomarkersCount: number;
  consultationsCycle: string;
  stages: {
    number: string;
    name: string;
    objective: string;
    details: string[];
    timeline: string;
  }[];
  keyIndicators: string[];
}

export interface ClinicSpace {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  concept: string;
  specs: string;
  image: string;
  ratio: 'wide' | 'tall' | 'standard';
}

export interface EditorialArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  fullText: string[];
}

export const SPECIALTIES: Specialty[] = [
  {
    id: 'clinica-medica',
    name: 'Clínica Médica',
    category: 'Medicina Geral & Longevidade',
    tagline: 'Visão integral do organismo e orquestração do cuidado contínuo.',
    description: 'A Clínica Médica na VITRAE não é uma consulta pontual de sintomas isolados. Atuamos como orquestradores de sua saúde longitudinal, mapeando interações metabólicas, cardiovasculares e imunológicas.',
    focusAreas: [
      'Check-up executivo aprofundado',
      'Mapeamento metabólico e hormonal',
      'Gerenciamento de fatores de risco cardiovascular',
      'Coordenação de especialistas multidisciplinares'
    ],
    technologies: [
      'Análise laboratorial expandida de 84 biomarcadores',
      'Eletrocardiograma de alta resolução em repouso',
      'Prontuário unificado com linha do tempo fisiológica'
    ],
    leadDoctor: 'Dra. Helena Martins',
    consultationDuration: '60 a 75 minutos'
  },
  {
    id: 'dermatologia',
    name: 'Dermatologia',
    category: 'Saúde Cutânea & Tecnologia a Laser',
    tagline: 'Saúde da pele, prevenção oncológica e rejuvenescimento estrutural.',
    description: 'Diagnóstico precoce de lesões com mapeamento corporal digitalizado e intervenções estético-funcionais de alta precisão que respeitam a anatomia natural.',
    focusAreas: [
      'Mapeamento digital de nevos (pintas)',
      'Tricologia diagnóstica e recuperação capilar',
      'Bioestimulação tecidual e remodelação dérmica',
      'Tratamento a laser fracionado e vascular'
    ],
    technologies: [
      'Dermatoscopia digital epiluminescente FotoFinder',
      'Plataforma laser fracionada não ablativa',
      'Ultrassom microfocado de precisão tecidual'
    ],
    leadDoctor: 'Dr. Rafael Duarte',
    consultationDuration: '50 a 60 minutos'
  },
  {
    id: 'nutricao',
    name: 'Nutrição',
    category: 'Metabolismo & Nutrologia Funcional',
    tagline: 'Crononutrição personalizada alinhada ao seu perfil genético e rotina.',
    description: 'Prescrições alimentares baseadas em dados bioelétricos e rotina circadiana. O objetivo é equilibrar níveis de inflamação subclínica, otimizar energia celular e apoiar metas de longevidade.',
    focusAreas: [
      'Modulação da microbiota intestinal',
      'Cronobiologia nutricional e ritmo circadiano',
      'Adequação metabólica para alta performance',
      'Estratégias nutricionais pós-procedimentos'
    ],
    technologies: [
      'Bioimpedância octopolar segmentada de multifrequência',
      'Calorimetria indireta de repouso (taxa metabólica basal)',
      'Monitoramento contínuo de resposta glicêmica'
    ],
    leadDoctor: 'Marina Costa',
    consultationDuration: '60 minutos'
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    category: 'Biomecânica & Recuperação',
    tagline: 'Reeducação do movimento, equilíbrio postural e restauração musculoesquelética.',
    description: 'Tratamentos de mobilidade e reabilitação baseados em testes cinemáticos digitais. Do alívio de sobrecargas posturais crônicas à recuperação de lesões complexas.',
    focusAreas: [
      'Avaliação postural cinemática 3D',
      'Reabilitação ortopédica funcional',
      'Terapia manual guiada e liberação miofascial',
      'Condicionamento neuromotor preventivo'
    ],
    technologies: [
      'Dinamometria digital para balanço de força simétrica',
      'Plataforma de estabilometria e baropodometria',
      'Fotogrametria biomecânica computadorizada'
    ],
    leadDoctor: 'Lucas Almeida',
    consultationDuration: '50 minutos'
  },
  {
    id: 'psicologia',
    name: 'Psicologia',
    category: 'Saúde Mental & Cognição',
    tagline: 'Regulação emocional, foco e sustentabilidade psicológica contemporânea.',
    description: 'Cuidado confidencial focado nas demandas complexas da vida atual: sobrecarga cognitiva, ansiedade de desempenho, qualidade do descanso mental e tomada de decisão sustentável.',
    focusAreas: [
      'Terapia Cognitivo-Comportamental contemporânea',
      'Manejo de sobrecarga e esgotamento mental (burnout)',
      'Biofeedback de variabilidade da frequência cardíaca (VFC)',
      'Higiene mental para tomada de decisões complexas'
    ],
    technologies: [
      'Sensores de biofeedback autonômico de precisão',
      'Protocolos validados de mapeamento neuropsicológico',
      'Ambiente com isolamento acústico classe hospitalar privativo'
    ],
    leadDoctor: 'Dr. Gabriel Fontes',
    consultationDuration: '50 a 60 minutos'
  },
  {
    id: 'medicina-preventiva',
    name: 'Medicina Preventiva',
    category: 'Genômica & Biomarcadores',
    tagline: 'Detecção de vulnerabilidades biológicas antes que se tornem manifestações clínicas.',
    description: 'Integrando genética, histórico familiar detalhado e biomarcadores de senescência celular para construir uma estratégia proativa de preservação da vitalidade.',
    focusAreas: [
      'Painéis genômicos de predisposição cardiovascular e oncológica',
      'Avaliação da idade biológica celular e telômeros',
      'Check-ups preventivos individualizados',
      'Estratégias de preservação neurocognitiva'
    ],
    technologies: [
      'Sequenciamento genético preventivo direcionado',
      'Análise de estresse oxidativo e marcadores endoteliais',
      'Mapeamento longitudinal de risco cardiovascular multivariado'
    ],
    leadDoctor: 'Dra. Sofia Valente',
    consultationDuration: '60 a 90 minutos'
  }
];

export const PHYSICIANS: Physician[] = [
  {
    id: 'helena-martins',
    name: 'Dra. Helena Martins',
    specialtyId: 'clinica-medica',
    specialtyName: 'Clínica Médica & Longevidade',
    title: 'Diretora Clínica Integrativa',
    crm: 'CRM-SP 184.220 · RQE 92.110',
    bio: 'Pós-graduada pelo Hospital das Clínicas da FMUSP com mais de 15 anos de prática em medicina interna e coordenação de cuidados complexos. Foco em visão sistêmica e medicina personalizada.',
    approach: 'Acredito que o médico deve ser o curador e parceiro da jornada do paciente, conectando cada sinal biológico com seu contexto de vida real.',
    education: [
      'Graduação e Residência em Clínica Médica — FMUSP',
      'Fellowship em Medicina Preventiva e Longevidade — Charité Berlin',
      'Membro da Sociedade Brasileira de Clínica Médica'
    ],
    image: '/src/assets/images/vitrae_physician_portrait_1790830691879.jpg',
    featured: true
  },
  {
    id: 'rafael-duarte',
    name: 'Dr. Rafael Duarte',
    specialtyId: 'dermatologia',
    specialtyName: 'Dermatologia & Laser Avançado',
    title: 'Especialista em Saúde Cutânea',
    crm: 'CRM-SP 165.419 · RQE 84.302',
    bio: 'Especialista em mapeamento digital corporal precoce e dermatologia intervencionista minimamente invasiva, com ênfase em harmonia e preservação da arquitetura tecidual.',
    approach: 'A pele é o espelho do equilíbrio sistêmico. Tratamos com a máxima tecnologia diagnóstica preservando a identidade única de cada pessoa.',
    education: [
      'Graduação em Medicina — UNIFESP',
      'Residência em Dermatologia — Escola Paulista de Medicina',
      'Título de Especialista pela Sociedade Brasileira de Dermatologia (SBD)'
    ]
  },
  {
    id: 'marina-costa',
    name: 'Marina Costa',
    specialtyId: 'nutricao',
    specialtyName: 'Nutrição Clínica & Metabólica',
    title: 'Especialista em Crononutrição',
    crm: 'CRN-3 48.912',
    bio: 'Pesquisadora em modulação do microbioma e metabolismo energético celular. Especializada em planos alimentares sustentáveis alinhados à fisiologia individual.',
    approach: 'Nutrição não é sobre restrição punitiva, mas sobre alimentar o metabolismo com precisão biológica e inteligência de rotina.',
    education: [
      'Graduação em Nutrição — USP',
      'Mestrado em Ciências da Nutrição e Fisiologia Metabólica — Unicamp',
      'Certificação Internacional em Nutrição Funcional e Genômica'
    ]
  },
  {
    id: 'lucas-almeida',
    name: 'Lucas Almeida',
    specialtyId: 'fisioterapia',
    specialtyName: 'Fisioterapia & Biomecânica',
    title: 'Coordenador de Reabilitação Funcional',
    crm: 'CREFITO-3 219.043',
    bio: 'Especialista em análise cinemática tridimensional do movimento humano e reabilitação postural integrada para executivos e esportistas de alto rendimento.',
    approach: 'O movimento correto cura e protege. Cada articulação deve funcionar em harmonia para que o corpo suporte as demandas diárias sem dor.',
    education: [
      'Graduação em Fisioterapia — UFSCar',
      'Especialização em Fisioterapia Ortopédica e Traumatológica — Santa Casa de SP',
      'Certificação em Avaliação Biomecânica Computadorizada 3D'
    ]
  },
  {
    id: 'sofia-valente',
    name: 'Dra. Sofia Valente',
    specialtyId: 'medicina-preventiva',
    specialtyName: 'Medicina Preventiva & Genômica',
    title: 'Especialista em Biomarcadores',
    crm: 'CRM-SP 192.831 · RQE 97.404',
    bio: 'Doutora em Genômica Médica pela USP, atua no mapeamento de biomarcadores precoces e formulação de estratégias de mitigação de vulnerabilidades genéticas.',
    approach: 'Antecipação é o mais nobre ato da medicina contemporânea. Trabalhamos para manter o paciente em sua melhor curva de saúde.',
    education: [
      'Graduação em Medicina — FMUSP',
      'Doutorado em Genômica Translacional — Instituto de Biociências USP',
      'Membro do American College of Lifestyle Medicine'
    ]
  },
  {
    id: 'gabriel-fontes',
    name: 'Dr. Gabriel Fontes',
    specialtyId: 'psicologia',
    specialtyName: 'Psicologia Cognitiva & Saúde Mental',
    title: 'Especialista em Neuropsicologia',
    crm: 'CRP 06/142.980',
    bio: 'Especializado em intervenções cognitivo-comportamentais focadas em redução de estresse crônico, foco atencional e regulação do sistema nervoso autônomo.',
    approach: 'A mente necessita de método e acolhimento. Criamos um espaço seguro de escuta ativa aliado a ferramentas concretas de equilíbrio diário.',
    education: [
      'Graduação em Psicologia — PUC-SP',
      'Especialização em Neuropsicologia Clínica — Hospital Sírio-Libanês',
      'Treinamento em Biofeedback e Manejo de Burnout'
    ]
  }
];

export const CARE_PLANS: CarePlanFocus[] = [
  {
    id: 'prevencao',
    title: 'Prevenção',
    subtitle: 'Mapeamento profundo e preservação da vitalidade',
    description: 'Protocolo preventivo desenhado para identificar desequilíbrios subclínicos e fatores de risco anos antes do aparecimento de sintomas.',
    idealFor: 'Pessoas que buscam tranquilidade com checagens estruturadas e proativas.',
    biomarkersCount: 68,
    consultationsCycle: 'Trimestral ou Semestral',
    keyIndicators: ['Marcadores inflamatórios ultrassensíveis', 'Perfil lipídico avançado ApoB/Lp(a)', 'Saúde endotelial', 'Avaliação metabólica glicêmica'],
    stages: [
      {
        number: '01',
        name: 'Avaliação Inicial',
        objective: 'Mapeamento completo do histórico, estilo de vida e triagem de vulnerabilidades.',
        details: [
          'Entrevista clínica aprofundada de 90 minutos com médico internista',
          'Coleta de 68 biomarcadores séricos e hormonais',
          'Avaliação de composição corporal por bioimpedância segmentada'
        ],
        timeline: 'Semana 1'
      },
      {
        number: '02',
        name: 'Consulta Integradora',
        objective: 'Apresentação conjunta dos laudos e definição das prioridades.',
        details: [
          'Reunião da equipe multidisciplinar (Médico, Nutricionista e Fisioterapeuta)',
          'Entrega do Relatório Biológico Consolidado em formato digital interativo',
          'Alinhamento de expectativas e metas de curto e médio prazo'
        ],
        timeline: 'Semana 2'
      },
      {
        number: '03',
        name: 'Orientações Personalizadas',
        objective: 'Implementação de protocolos adaptados à sua rotina real.',
        details: [
          'Plano de crononutrição e suplementação baseado em deficiências reais',
          'Diretrizes de higiene do sono e modulação de estresse',
          'Orientações posturais e de ergonomia no trabalho'
        ],
        timeline: 'Semanas 3 a 4'
      },
      {
        number: '04',
        name: 'Acompanhamento Contínuo',
        objective: 'Suporte longitudinal e monitoramento ativo de adesão.',
        details: [
          'Canal direto com o Concierge de Saúde VITRAE para ajustes',
          'Monitoramento de resposta metabólica e sintomas',
          'Envio pontual de lembretes e suporte para novos exames'
        ],
        timeline: 'Meses 2 a 5'
      },
      {
        number: '05',
        name: 'Reavaliação Periódica',
        objective: 'Comparação de biomarcadores e refinamento do plano anual.',
        details: [
          'Reavaliação laboratorial dos marcadores alterados na fase inicial',
          'Consulta de fechamento do ciclo e emissão de gráfico evolutivo',
          'Renovação estratégica dos objetivos para o próximo período'
        ],
        timeline: 'Mês 6'
      }
    ]
  },
  {
    id: 'bem-estar',
    title: 'Bem-estar',
    subtitle: 'Equilíbrio físico, clareza mental e regeneração',
    description: 'Focado em modular os efeitos da sobrecarga diária, melhorando a qualidade do sono, digestão, energia matinal e estabilidade emocional.',
    idealFor: 'Profissionais e pessoas que sentem cansaço crônico, sono não reparador ou instabilidade de energia.',
    biomarkersCount: 52,
    consultationsCycle: 'Bimestral',
    keyIndicators: ['Curva de cortisol salivar em 4 pontos', 'Variabilidade da frequência cardíaca (VFC)', 'Homocisteína e B12 ativa', 'Marcadores da microbiota'],
    stages: [
      {
        number: '01',
        name: 'Avaliação Inicial',
        objective: 'Análise da rotina, padrões de sono e nível de esgotamento.',
        details: [
          'Questionário validado de estresse percebido e qualidade de sono (PSQI)',
          'Coleta de curva circadiana de cortisol e painel tireoidiano completo',
          'Mapeamento de tensões musculares e pontos de sobrecarga'
        ],
        timeline: 'Semana 1'
      },
      {
        number: '02',
        name: 'Consulta Integradora',
        objective: 'Sincronização entre saúde mental, endocrinologia e hábitos.',
        details: [
          'Sessão integrada com psicólogo e médico integrativo',
          'Identificação dos principais gatilhos de fadiga e desregulação',
          'Criação da rota de restauração de energia'
        ],
        timeline: 'Semana 2'
      },
      {
        number: '03',
        name: 'Orientações Personalizadas',
        objective: 'Prescrição de rotinas regenerativas sem intervenções drásticas.',
        details: [
          'Protocolo de descompressão noturna e estímulo à melatonina endógena',
          'Nutrição anti-inflamatória com suporte mitocondrial',
          'Sessões de alívio miofascial e biofeedback respiratório'
        ],
        timeline: 'Semanas 3 a 5'
      },
      {
        number: '04',
        name: 'Acompanhamento Contínuo',
        objective: 'Suporte semanal e checagem de bem-estar.',
        details: [
          'Acompanhamento de métricas de sono e sensação de vitalidade',
          'Ajustes finos na rotina alimentar e pausas no trabalho',
          'Feedback quinzenal via central digital'
        ],
        timeline: 'Meses 2 a 4'
      },
      {
        number: '05',
        name: 'Reavaliação Periódica',
        objective: 'Medição objetiva da recuperação fisiológica.',
        details: [
          'Novo teste de variabilidade cardíaca e marcadores de estresse',
          'Avaliação de impacto na produtividade e humor',
          'Transição para plano de manutenção autônoma'
        ],
        timeline: 'Mês 5'
      }
    ]
  },
  {
    id: 'saude-mulher',
    title: 'Saúde da Mulher',
    subtitle: 'Cuidado integrado para cada fase dos ciclos femininos',
    description: 'Abordagem especializada para transições hormonais, fertilidade, saúde óssea, equilíbrio metabólico e bem-estar dermatológico.',
    idealFor: 'Mulheres em todas as fases da vida adulta que buscam acompanhamento seguro, técnico e acolhedor.',
    biomarkersCount: 74,
    consultationsCycle: 'Trimestral',
    keyIndicators: ['Perfil hormonal feminino completo', 'Marcadores de densidade e metabolismo ósseo', 'Ferritina e estoques de ferro', 'Saúde cardiovascular específica'],
    stages: [
      {
        number: '01',
        name: 'Avaliação Inicial',
        objective: 'Compreensão aprofundada dos ciclos, sintomas e objetivos.',
        details: [
          'Histórico ginecológico e metabólico minucioso',
          'Painel hormonal e metabólico ajustado à fase do ciclo ou climatério',
          'Mapeamento dermatológico e de densidade capilar'
        ],
        timeline: 'Semana 1'
      },
      {
        number: '02',
        name: 'Consulta Integradora',
        objective: 'Visão coordenada entre ginecologia, endocrinologia e nutrição.',
        details: [
          'Discussão de opções terapêuticas com base em evidências científicas',
          'Plano preventivo para saúde cardiovascular e óssea',
          'Esclarecimento transparente de dúvidas sem pressa'
        ],
        timeline: 'Semana 2'
      },
      {
        number: '03',
        name: 'Orientações Personalizadas',
        objective: 'Adequação de suplementação, nutrição hormonal e exercícios.',
        details: [
          'Modulação nutricional para sintomas pré-menstruais ou da menopausa',
          'Prescrição de fortalecimento do assoalho pélvico e postura',
          'Cuidados tópicos dermatológicos de alta especificidade'
        ],
        timeline: 'Semanas 3 a 5'
      },
      {
        number: '04',
        name: 'Acompanhamento Contínuo',
        objective: 'Monitoramento da resposta terapêutica e tolerância.',
        details: [
          'Acompanhamento de adaptação caso haja reposição ou suporte fitoterápico',
          'Check-ins regulares com a equipe de enfermagem especializada',
          'Acesso facilitado para relatar alterações'
        ],
        timeline: 'Meses 2 a 5'
      },
      {
        number: '05',
        name: 'Reavaliação Periódica',
        objective: 'Revisão dos parâmetros e proteção a longo prazo.',
        details: [
          'Repetição direcionada de marcadores hormonais e metabólicos',
          'Checagem de exames de imagem e rastreamento preventivo',
          'Consolidação do plano para os meses seguintes'
        ],
        timeline: 'Mês 6'
      }
    ]
  },
  {
    id: 'saude-homem',
    title: 'Saúde do Homem',
    subtitle: 'Prevenção cardiovascular, saúde urológica e vigor metabólico',
    description: 'Focado nos pilares críticos da saúde masculina: endotélio vascular, testosterona livre, prevenção prostática e composição corporal.',
    idealFor: 'Homens que desejam manter alto rendimento físico e mental com proteção preventiva de ponta.',
    biomarkersCount: 64,
    consultationsCycle: 'Semestral',
    keyIndicators: ['PSA total e livre', 'Testosterona total, livre e SHBG', 'Escore de cálcio / perfil endotelial', 'Ácido úrico e esteatose hepática'],
    stages: [
      {
        number: '01',
        name: 'Avaliação Inicial',
        objective: 'Mapeamento de riscos cardiovasculares e perfil hormonal.',
        details: [
          'Check-up cardiovascular estratificado por escores internacionais',
          'Painel hormonal andrológico e metabólico expandido',
          'Eletrocardiograma de repouso e dinamometria de força'
        ],
        timeline: 'Semana 1'
      },
      {
        number: '02',
        name: 'Consulta Integradora',
        objective: 'Estratégia clínica focada em preservação de força e vitalidade.',
        details: [
          'Análise de resultados com médico especialista em saúde masculina',
          'Definição de metas de redução de gordura visceral e ganho de massa magra',
          'Protocolo de sono focado na produção endógena de testosterona'
        ],
        timeline: 'Semana 2'
      },
      {
        number: '03',
        name: 'Orientações Personalizadas',
        objective: 'Ajuste metabólico e prescrição de treinamento funcional.',
        details: [
          'Estratégia nutricional de suporte à síntese proteica e endotélio',
          'Treinamento resistido supervisionado para estímulo hormonal',
          'Suplementação individualizada com base nos laudos'
        ],
        timeline: 'Semanas 3 a 4'
      },
      {
        number: '04',
        name: 'Acompanhamento Contínuo',
        objective: 'Monitoramento de indicadores de energia e disposição.',
        details: [
          'Acompanhamento de composição corporal mensal',
          'Canal de suporte para dúvidas sobre rotina e exames complementares',
          'Ajuste das condutas de acordo com a resposta'
        ],
        timeline: 'Meses 2 a 5'
      },
      {
        number: '05',
        name: 'Reavaliação Periódica',
        objective: 'Validação dos ganhos metabólicos e controle preventivo.',
        details: [
          'Novo painel lipídico avançado e comparação de biomarcadores',
          'Medição evolutiva de gordura visceral e força muscular',
          'Emissão de novo plano de longevidade anual'
        ],
        timeline: 'Mês 6'
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Qualidade de Vida',
    subtitle: 'Eficiência metabólica, biomecânica e longevidade funcional',
    description: 'Para quem busca operar em seu melhor nível físico e cognitivo, prevenindo lesões e otimizando a recuperação muscular e foco.',
    idealFor: 'Atletas amadores, entusiastas de esportes, corredores e profissionais de alta exigência cognitiva.',
    biomarkersCount: 82,
    consultationsCycle: 'Trimestral',
    keyIndicators: ['VO2 máximo estimado', 'Marcadores de dano muscular (CPK/LDH)', 'Perfil eletrolítico e hidratação celular', 'Balanço autonômico VFC'],
    stages: [
      {
        number: '01',
        name: 'Avaliação Inicial',
        objective: 'Avaliação integrada de capacidade funcional e biomarcadores.',
        details: [
          'Teste cinemático de movimento e estabilidade articular',
          'Bioimpedância multifrequencial com água intra/extracelular',
          'Painel de micronutrientes, ferro sérico e capacidade antioxidante'
        ],
        timeline: 'Semana 1'
      },
      {
        number: '02',
        name: 'Consulta Integradora',
        objective: 'Alinhamento entre fisioterapeuta, nutricionista e médico do esporte.',
        details: [
          'Definição da periodização de treinos e recuperação',
          'Identificação de assimetrias posturais ou riscos de sobrecarga',
          'Planejamento de macronutrientes conforme volume de atividade'
        ],
        timeline: 'Semana 2'
      },
      {
        number: '03',
        name: 'Orientações Personalizadas',
        objective: 'Entrega do protocolo de ativação e regeneração rápida.',
        details: [
          'Suplementação orientada para redução de inflamação pós-esforço',
          'Exercícios corretivos de mobilidade torácica e estabilidade pélvica',
          'Estratégias de hidratação e reposição mineral individualizada'
        ],
        timeline: 'Semanas 3 a 5'
      },
      {
        number: '04',
        name: 'Acompanhamento Contínuo',
        objective: 'Gestão de carga e prevenção ativa de microtraumas.',
        details: [
          'Sessões de recuperação tecidual no espaço fisioterápico',
          'Acompanhamento de métricas de recuperação noturna',
          'Suporte do concierge para ajustes pré-competições ou viagens'
        ],
        timeline: 'Meses 2 a 4'
      },
      {
        number: '05',
        name: 'Reavaliação Periódica',
        objective: 'Mensuração da evolução biomecânica e metabólica.',
        details: [
          'Repetição da análise cinemática para atestar simetria',
          'Avaliação da composição corporal e ganho de massa magra',
          'Ajuste fino do protocolo para a temporada seguinte'
        ],
        timeline: 'Mês 5'
      }
    ]
  }
];

export const CLINIC_SPACES: ClinicSpace[] = [
  {
    id: 'recepcao',
    name: 'Recepção & Lounge Acolhedor',
    subtitle: 'Transição suave entre a cidade e o cuidado',
    description: 'Desenhada para eliminar qualquer sensação de espera hospitalar. Travertino esculpido, luz natural filtrada, mobiliário assinado e atmosfera sonora calibrada para relaxamento imediato.',
    concept: 'Arquitetura biofílica com materiais minerais nobres e privacidade acústica.',
    specs: 'Suíte de acolhimento de 140m² com serviço de chás botânicos e café especial.',
    image: '/src/assets/images/vitrae_lounge_reception_1790830661312.jpg',
    ratio: 'wide'
  },
  {
    id: 'consultorios',
    name: 'Consultórios Exclusivos',
    subtitle: 'Espaços de escuta, respeito e tempo generoso',
    description: 'Sem mesas frias de exame à vista. Mesas de madeira maciça aquecem a conversa entre médico e paciente, criando uma relação de parceria horizontal e confortável.',
    concept: 'Salas de consulta pensadas como gabinetes intelectuais serenos.',
    specs: '6 consultórios individuais com isolamento acústico duplo (STC 55).',
    image: '/src/assets/images/vitrae_consultation_suite_1790830671325.jpg',
    ratio: 'standard'
  },
  {
    id: 'sala-avaliacao',
    name: 'Sala de Avaliação Integrada',
    subtitle: 'Precisão diagnóstica em ambiente acolhedor',
    description: 'Equipamentos de última geração em bioimpedância segmentada, dinamometria e mapeamento digital organizados de forma discreta e elegante.',
    concept: 'Tecnologia embutida na arquitetura para evitar ruído visual.',
    specs: 'Espaço com iluminação indireta dimerizada e calibragem de temperatura.',
    image: '/src/assets/images/hero_vitrae_composition_1790830649987.jpg',
    ratio: 'wide'
  },
  {
    id: 'fisioterapia',
    name: 'Espaço de Fisioterapia & Recuperação',
    subtitle: 'Biomecânica guiada e restauração funcional',
    description: 'Área dedicada à reabilitação neuromuscular com piso vinílico de alta absorção de impacto, equipamentos ergonômicos e apoio de fisioterapeutas dedicados.',
    concept: 'Estúdio de movimento humano que combina elegância com funcionalidade esportiva.',
    specs: 'Área de 110m² com equipamentos suíços e esteiras cinemáticas com sensor de pressão.',
    image: '/src/assets/images/vitrae_recovery_lounge_1790830680552.jpg',
    ratio: 'standard'
  }
];

export const PATIENT_JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Primeiro Contato',
    subtitle: 'Acolhimento imediato e escuta das expectativas',
    description: 'Você entra em contato pelo canal de sua preferência. Nosso concierge de saúde compreende suas prioridades e orienta a escolha dos profissionais ideais.',
    timeframe: 'Imediato',
    deliverable: 'Agendamento com tempo dedicado e guia pré-consulta'
  },
  {
    number: '02',
    title: 'Entendimento das Necessidades',
    subtitle: 'Coleta de histórico e consolidação de exames prévios',
    description: 'Antes do primeiro encontro presencial, organizamos digitalmente seu histórico médico, exames antigos e principais queixas em um prontuário único.',
    timeframe: 'Pré-consulta',
    deliverable: 'Linha do tempo clínica inicial organizada'
  },
  {
    number: '03',
    title: 'Avaliação Presencial',
    subtitle: 'Consulta profunda com tempo médio de 60 minutos',
    description: 'Sem pressa. Avaliação clínica detalhada, exame físico completo e testes complementares de suporte diagnósticos realizados no mesmo local.',
    timeframe: 'Dia 1',
    deliverable: 'Exame físico minucioso e solicitação de biomarcadores específicos'
  },
  {
    number: '04',
    title: 'Plano Personalizado',
    subtitle: 'Construção da estratégia multidisciplinar',
    description: 'Os especialistas discutem seu caso e entregam um plano integrado de saúde com metas realistas, orientações de rotina e prioridades claras.',
    timeframe: 'Dia 7 a 10',
    deliverable: 'Relatório Biológico e Protocolo Terapêutico Integrado'
  },
  {
    number: '05',
    title: 'Acompanhamento Contínuo',
    subtitle: 'Cuidado que permanece com você entre as consultas',
    description: 'Suporte longitudinal através do concierge de saúde, monitoramento de biomarcadores e intervenções proativas sempre que necessário.',
    timeframe: 'Meses 1 a 6',
    deliverable: 'Comunicação direta, checagens ativas e suporte contínuo'
  },
  {
    number: '06',
    title: 'Reavaliação Estratégica',
    subtitle: 'Medição de resultados e refinamento dos próximos passos',
    description: 'Comparações objetivas de biomarcadores e sensação subjetiva de energia para calibrar e consolidar as conquistas de saúde alcançadas.',
    timeframe: 'Mês 6 ou 12',
    deliverable: 'Comparativo evolutivo e renovação das diretrizes anuais'
  }
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'longevidade-metabolica',
    title: 'A ciência da longevidade metabólica: além dos exames rotineiros',
    category: 'Medicina Preventiva',
    readTime: '4 min de leitura',
    date: 'Setembro 2026',
    author: 'Dra. Helena Martins · Clínica Médica',
    summary: 'Por que avaliar a sensibilidade insulínica e a inflamação subclínica anos antes de qualquer alteração de glicose tradicional é a chave para proteger vasos e neurônios.',
    fullText: [
      'Durante décadas, a medicina convencional tratou o colesterol e a glicemia como interruptores binários: normais ou alterados. Hoje, a biologia de sistemas demonstra que o processo de envelhecimento vascular inicia-se em níveis subclínicos de desregulação metabólica.',
      'Na VITRAE, examinamos biomarcadores como Apolipoproteína B (ApoB), Proteína C-Reativa ultrassensível e insulina basal em jejum como um ecossistema interconectado. Esse olhar permite intervenções sutis no estilo de vida e na crononutrição muito antes de qualquer necessidade farmacológica agressiva.',
      'O objetivo nunca é perseguir números perfeitos no papel, mas garantir que suas artérias, cérebro e coração mantenham flexibilidade fisiológica ao longo das próximas décadas.'
    ]
  },
  {
    id: 'ritmo-circadiano-energia',
    title: 'Cronobiologia aplicada: sincronizando trabalho, luz e descanso celular',
    category: 'Bem-estar & Neurociência',
    readTime: '5 min de leitura',
    date: 'Agosto 2026',
    author: 'Marina Costa · Nutrição Integrativa',
    summary: 'Pequenos ajustes na exposição solar matinal e no horário das refeições podem melhorar mais sua disposição do que qualquer estimulante artificial.',
    fullText: [
      'Quase todas as células do corpo humano possuem relógios moleculares próprios, sincronizados pelo núcleo supraquiasmático no cérebro. Quando nos alimentamos tarde da noite ou nos expomos a luz azul após as 22 horas, causamos um desalinhamento circadiano crônico.',
      'Esse desalinhamento reflete-se em digestão lenta, sono fragmentado e fadiga ao despertar. Ao reorganizar a janela alimentar e reintroduzir rituais de luz natural logo ao acordar, restabelecemos a sensibilidade hormonal e o reparo tecidual noturno.',
      'A verdadeira vitalidade não é resultado de um excesso de café ou tônicos energéticos, mas da harmonia entre o tempo do seu corpo e o ritmo da sua rotina.'
    ]
  },
  {
    id: 'biomecanica-postural',
    title: 'Ergonomia silenciosa: prevenindo dores crônicas no trabalho intelectual',
    category: 'Fisioterapia & Biomecânica',
    readTime: '3 min de leitura',
    date: 'Julho 2026',
    author: 'Lucas Almeida · Fisioterapia',
    summary: 'Como micro-pausas estratégicas e exercícios de mobilidade torácica neutralizam os efeitos nocivos de horas contínuas em frente a telas.',
    fullText: [
      'O corpo humano foi desenhado para a variedade de movimentos. Passar oito ou dez horas na mesma posição sentada sobrecarrega a coluna lombar e encurta a cadeia flexora anterior.',
      'A solução não exige horas diárias de exercícios extenuantes. Protocolos de apenas 3 minutos a cada duas horas, focados em extensão torácica e respiração diafragmática, restauram a oxigenação dos tecidos vertebrais.',
      'Na VITRAE, mapeamos com câmeras 3D os eixos de tensão corporal de cada paciente, prescrevendo rotinas sob medida que se adaptam perfeitamente à rotina de trabalho.'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: 'Pela primeira vez em anos, senti que todos os médicos estavam na mesma sala conversando sobre mim. Minha consulta durou mais de uma hora e saí com um plano claro, sem a sensação de estar sendo despachado.',
    author: 'Eduardo M. S.',
    role: 'Executivo de Tecnologia',
    detail: 'Paciente no protocolo de Longevidade & Prevenção há 18 meses'
  },
  {
    id: '2',
    quote: 'O ambiente é incrivelmente sereno. Não há cheiro de hospital, não há salas de espera lotadas. O concierge resolveu todos os meus exames em um só lugar. Isso transformou meu autocuidado.',
    author: 'Camila P. Ramos',
    role: 'Arquiteta Urbanista',
    detail: 'Acompanhamento na Saúde da Mulher e Dermatologia Integrada'
  },
  {
    id: '3',
    quote: 'A clareza dos relatórios é impressionante. Entendi exatamente o porquê de cada orientação nutricional e fisioterápica. Minha energia durante a semana mudou radicalmente sem nenhuma medida extrema.',
    author: 'Renato F. Castilho',
    role: 'Gestor de Investimentos',
    detail: 'Plano de Performance e Qualidade de Vida há 1 ano'
  }
];
