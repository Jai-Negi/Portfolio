import { Reveal } from './Reveal';
import { Section } from './Section';
import { certifications } from '../data/skills';

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.06}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="card block p-6">
              <p className="text-sm font-semibold">{cert.name}</p>
              <p className="mt-1.5 text-xs text-text-dim">{cert.issuer}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                View Credential
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 12.5 12.5 6M12.5 6H7M12.5 6v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
