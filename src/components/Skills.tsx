import type { ReactElement } from 'react';
import { Reveal } from './Reveal';
import { Section } from './Section';
import { skillGroups } from '../data/skills';

const icons: Record<string, ReactElement> = {
  'Programming Languages': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 8 3 12l5 4M16 8l5 4-5 4M14 4l-4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'AI & Machine Learning': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  'Web Development': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="6.2" r="0.6" fill="currentColor" />
      <circle cx="8.2" cy="6.2" r="0.6" fill="currentColor" />
    </svg>
  ),
  'Data Engineering': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  'Cloud & DevOps': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17.5a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.62-1.9A4.5 4.5 0 0 1 17.5 17.5H7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Tools & Practices': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3a3 3 0 0 1-4 4L5.5 15.5a1.5 1.5 0 0 1-2.1-2.1L8.6 8.2a3 3 0 0 1 4-4l-2 2 1 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function Skills() {
  return (
    <Section id="skills" title="Skills" band>
      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <h3 className="mb-4 text-base font-semibold text-text">{group.label}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {group.items.map((item) => (
                <div key={item} className="icon-tile">
                  {icons[group.label]}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
