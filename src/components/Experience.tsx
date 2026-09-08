import { Reveal } from './Reveal';
import { Section } from './Section';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience" band>
      <div className="space-y-5">
        {experience.map((entry, i) => (
          <Reveal key={`${entry.company}-${entry.dates}`} delay={i * 0.05}>
            <div className="card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold">
                  {entry.role} <span className="font-normal text-text-dim">- {entry.company}</span>
                </h3>
                <p className="text-xs text-text-dim">{entry.dates}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 text-sm text-text-dim">
                    <span className="absolute left-0 text-text-dim">–</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
