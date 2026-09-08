import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  band?: boolean;
  children: ReactNode;
}

export function Section({ id, title, band = false, children }: SectionProps) {
  return (
    <section id={id} className={`section ${band ? 'bg-bg-band' : 'bg-bg'}`}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
