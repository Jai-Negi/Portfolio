import { Reveal } from './Reveal';
import { Section } from './Section';
import { achievements } from '../data/skills';

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" band>
      <ul className="space-y-4">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} as="li">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-semibold">
                {item.title} <span className="font-normal text-text-dim">- {item.period}</span>
              </p>
            </div>
            <p className="mt-1 text-sm text-text-dim">{item.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
