import { Reveal } from './Reveal';
import { contact } from '../data/skills';

export function Contact() {
  return (
    <section id="contact" className="section bg-bg-soft text-center">
      <div className="mx-auto w-full max-w-xl px-6">
        <Reveal>
          <h2 className="section-title">Let's Build Something Together</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-text-dim">
            Interested in collaborating, discussing opportunities, or building scalable digital solutions? Let's connect.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${contact.email}`} className="btn-solid">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email Me
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M3.5 5.5h2.3v7.3H3.5V5.5Zm1.15-3.7a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM7.3 5.5h2.2v1h.03c.3-.57 1.05-1.17 2.17-1.17 2.32 0 2.75 1.53 2.75 3.52v4h-2.3V9.3c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.94-1.38 1.9v3.55H7.3V5.5Z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-text-dim">
            <a href={contact.phoneHref} className="transition-colors hover:text-primary">
              {contact.phoneDisplay}
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              GitHub ↗
            </a>
            <span>{contact.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
