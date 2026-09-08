import { Reveal } from './Reveal';
import { Section } from './Section';
import { Badge } from './Badge';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <Section id="projects" title="Projects" band>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <div className="card h-full p-6">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary" aria-hidden="true">
                  <path
                    d="M1.5 3.5a1 1 0 0 1 1-1h3l1.2 1.5H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1v-8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
              </div>
              <p className="mt-2 text-sm text-text-dim">{project.description}</p>
              <ul className="mt-4 space-y-1.5">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 text-sm text-text-dim">
                    <span className="absolute left-0 text-text-dim">–</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 12.5 12.5 6M12.5 6H7M12.5 6v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  View on GitHub
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 12.5 12.5 6M12.5 6H7M12.5 6v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
