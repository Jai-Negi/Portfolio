export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'CloudEco - Wildfire Detection API',
    description:
      'Production-grade AI inference service detecting wildfire and smoke in real time, deployed on a self-managed Kubernetes cluster.',
    bullets: [
      'Built and deployed a production-grade AI inference service using YOLOv8 and FastAPI on Google Cloud Platform',
      'Containerised the application with Docker and orchestrated deployment across a 3-node Kubernetes cluster',
      'Provisioned cloud infrastructure using Terraform and validated horizontal scaling under load',
    ],
    tech: ['Python', 'FastAPI', 'YOLOv8', 'Docker', 'Kubernetes', 'Terraform', 'GCP'],
    githubUrl: 'https://github.com/Jai-Negi/cloudeco-wildfire-detection',
  },
  {
    title: 'AI News Aggregator',
    description: 'Python-based AI pipeline for automated content extraction, summarisation, and analysis.',
    bullets: [
      'Built a Python-based AI pipeline integrating LLM APIs for automated content extraction, summarisation, and analysis',
      'Designed an end-to-end data ingestion pipeline with structured outputs stored in PostgreSQL',
      'Automated reporting workflows to deliver actionable insights',
    ],
    tech: ['Python', 'LLM APIs', 'PostgreSQL', 'Automation'],
    githubUrl: 'https://github.com/Jai-Negi',
  },
  {
    title: 'Databricks End-to-End Data Pipeline',
    description: 'Complete batch and streaming data pipeline built on Azure Databricks.',
    bullets: [
      'Built a complete data pipeline on Azure Databricks managing batch and streaming workloads',
      'Implemented Delta Live Tables for ETL orchestration and real-time data ingestion',
      'Applied dimensional data modelling and managed data governance using Unity Catalog',
    ],
    tech: ['Azure Databricks', 'Delta Live Tables', 'Delta Lake', 'Unity Catalog'],
    githubUrl: 'https://github.com/Jai-Negi',
  },
  {
    title: 'Hush - Sensory-Aware Walking Routes',
    description: 'Smart web app giving neurodiverse commuters quieter, sensory-aware navigation routes.',
    bullets: [
      'Collaborated with a team to develop a smart web application using Python (FastAPI) and React',
      'Integrated real-time pedestrian sensor data to provide neurodiverse commuters with quieter navigation routes',
      'Deployed a live, production-grade application serving real users',
    ],
    tech: ['Python', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/Vanamali-Sims/hush',
  },
];
