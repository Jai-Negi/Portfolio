import { Reveal } from './Reveal';
import { contact } from '../data/skills';

export function About() {
  return (
    <section className="bg-bg py-6 sm:py-8">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <h2 className="text-xl font-bold text-primary sm:text-2xl">About Me</h2>
          <p className="mt-3 max-w-3xl text-justify text-lg text-text-dim">{contact.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
