import { useEffect, useState } from 'react';
import { contact } from '../data/skills';

const sections = [
  { id: 'top', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export function TopNav() {
  const [active, setActive] = useState('top');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-primary shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-head text-base font-bold text-white">
          {contact.name}
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Section navigation">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`border-b-2 pb-1 text-sm transition-colors ${
                active === s.id ? 'border-white text-white' : 'border-transparent text-white/70 hover:text-white'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white lg:hidden"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/15 bg-primary px-6 py-3 lg:hidden" aria-label="Section navigation mobile">
          <div className="flex flex-col gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === s.id ? 'true' : undefined}
                className={`px-3 py-2.5 text-sm ${active === s.id ? 'font-semibold text-white' : 'text-white/70'}`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
