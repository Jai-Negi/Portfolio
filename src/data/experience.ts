export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'AI Engineer',
    company: 'Monash AIM (Analysis of Images in Medicine), Australia',
    dates: 'Apr 2026 – Present',
    bullets: [
      'Built embedding and retrieval models for medical condition classification in the CohortX Kaggle competition, implementing SPLADE sparse retrieval and fusion techniques to improve ICD-10-CM code prediction accuracy.',
      'Evaluated and optimised NLP models for healthcare applications, collaborating on hybrid retrieval systems that balance performance and computational efficiency.',
    ],
  },
  {
    role: 'Project Consultant - Teamwork Internship Program',
    company: 'Monash University',
    dates: 'Jun 2026 – Jul 2026',
    bullets: [
      'Collaborated with an international team to conduct market research and competitive analysis for LangOptima.',
      'Interviewed founders to gather insights on growth strategy and market positioning.',
      'Learned how data-driven validation informs business decision-making, working across distributed teams and time zones.',
    ],
  },
  {
    role: 'Technical Consultant (Project Based)',
    company: 'AtivasInc, Australia',
    dates: 'Oct 2025 – Dec 2025',
    bullets: [
      'Partnered with clients and internal teams to diagnose technical requirements and translate complex automation challenges into scalable Azure-based solutions.',
      'Collaborated on an AI-powered document processing pipeline using Python and Azure Document Intelligence, integrating LLM APIs for data extraction.',
      'Communicated technical findings to stakeholders, translating automation outcomes into clear business impact.',
    ],
  },
  {
    role: 'Associate Data Analyst, Modelling',
    company: 'NielsenIQ',
    dates: 'Sep 2024 – Feb 2025',
    bullets: [
      'Designed and implemented data extraction and transformation workflows using Python and SQL.',
      'Established data quality validation processes and accuracy checks to ensure reliability across systems.',
      'Collaborated with cross-functional teams to understand requirements and deliver solutions under deadlines.',
    ],
  },
  {
    role: 'Intern',
    company: 'Hitachi Energy India Ltd.',
    dates: 'Feb 2024 – Apr 2024',
    bullets: [
      'Analysed operational incident data to identify trends and high-impact categories, supporting structured issue resolution and service improvement.',
      'Built interactive Tableau dashboards to visualise incident patterns and metrics for data-driven decision-making.',
      'Created incident tracking and documentation processes, translating technical insights into business value for operations teams.',
    ],
  },
];
