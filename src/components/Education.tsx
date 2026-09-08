import { Reveal } from './Reveal';
import { Section } from './Section';
import { education } from '../data/skills';

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.06}>
            <div className="card p-6">
              <h3 className="text-base font-semibold">{entry.title}</h3>
              <p className="mt-1 text-sm text-text-dim">{entry.institution}</p>
              <p className="mt-2 text-xs text-text-dim">
                {entry.period} · {entry.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
