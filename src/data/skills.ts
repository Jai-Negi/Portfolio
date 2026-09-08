export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Web Development',
    items: ['React', 'Vue.js', 'TypeScript', 'FastAPI', 'REST API Design', 'Responsive Design'],
  },
  {
    label: 'AI & Machine Learning',
    items: [
      'LLM Integration',
      'RAG',
      'Prompt Engineering',
      'LangChain',
      'LangGraph',
      'AI Agent Orchestration',
      'NLP',
      'Hugging Face',
      'Llama',
      'Workflow Automation',
    ],
  },
  {
    label: 'Data Engineering',
    items: ['Apache Spark', 'Kafka', 'Databricks', 'Delta Lake', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    label: 'Tools & Practices',
    items: ['Git', 'Agile/Scrum', 'Unit, Integration & E2E Testing', 'Data Structures & Algorithms'],
  },
];

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  detail: string;
}

export const education: EducationEntry[] = [
  {
    title: 'Master of Information Technology',
    institution: 'Monash University, Melbourne, Australia',
    period: 'Mar 2025 – Dec 2026',
    detail: 'CGPA 3.67 / 4.0',
  },
  {
    title: 'Bachelor of Computer Engineering',
    institution: 'Gujarat Technological University, Gujarat, India',
    period: 'Aug 2020 – Jun 2024',
    detail: 'CGPA 8.6 / 10.0',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/QR86HFTMM6DK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
  },
  {
    name: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    link: 'https://learn.microsoft.com/en-gb/users/jainegi-7913/credentials/f14aac5259905479',
  },
  {
    name: 'Azure AI Fundamentals (AI-901)',
    issuer: 'Microsoft',
    link: 'https://learn.microsoft.com/en-gb/users/jainegi-7913/credentials/58661041db5c2ac9',
  },
];

export interface Achievement {
  title: string;
  period: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Monash AIM - CohortX Kaggle Competition',
    period: 'Apr 2026 – Present',
    description:
      'Built embedding and retrieval models for medical condition classification, implementing SPLADE sparse retrieval and fusion techniques to improve ICD-10-CM code prediction accuracy - as AI Engineer with Monash AIM (Analysis of Images in Medicine).',
  },
];

export const contact = {
  name: 'Jai Negi',
  location: 'Melbourne, Australia',
  tagline: 'Master of Information Technology graduate - AI, Data Engineering & Software Development',
  summary:
    "Master of Information Technology graduate with a curiosity for solving complex problems and building innovative solutions. Demonstrated international exposure, academic initiative, and the ability to adapt across technology domains. Passionate about rapid learning and collaborative problem-solving.",
  email: 'jainegi008@gmail.com',
  phone: '0431885776',
  phoneDisplay: '0431 885 776',
  phoneHref: 'tel:+61431885776',
  linkedin: 'https://www.linkedin.com/in/jai--negi/',
  github: 'https://github.com/Jai-Negi',
};

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '4', label: 'Projects Shipped' },
  { value: '5', label: 'Roles Held' },
  { value: '3', label: 'Certifications' },
  { value: '3.67', label: 'Master’s CGPA' },
];
