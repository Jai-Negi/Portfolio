import { motion, type Variants } from 'framer-motion';
import { contact } from '../data/skills';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="bg-bg-soft pb-6 pt-20 sm:pb-8 sm:pt-24">
      <motion.div
        className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 sm:grid-cols-[auto_1fr]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-primary sm:mx-0 sm:h-56 sm:w-56">
          <img src="/profile.jpg" alt={contact.name} className="h-full w-full object-cover" />
        </motion.div>

        <div className="text-center sm:text-left">
          <motion.h1 variants={item} className="text-4xl font-bold text-primary sm:text-5xl">
            {contact.name}
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-lg text-text-dim sm:text-xl">
            {contact.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-col gap-2 text-sm text-text sm:text-base">
            <span className="inline-flex items-center justify-center gap-2 sm:justify-start">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary" aria-hidden="true">
                <path
                  d="M8 1.5c-2.4 0-4.3 1.9-4.3 4.2C3.7 9 8 14.5 8 14.5S12.3 9 12.3 5.7c0-2.3-1.9-4.2-4.3-4.2Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <circle cx="8" cy="5.7" r="1.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              {contact.location}
            </span>
            <span className="inline-flex items-center justify-center gap-2 sm:justify-start">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary" aria-hidden="true">
                <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {contact.email}
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-solid">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M3.5 5.5h2.3v7.3H3.5V5.5Zm1.15-3.7a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM7.3 5.5h2.2v1h.03c.3-.57 1.05-1.17 2.17-1.17 2.32 0 2.75 1.53 2.75 3.52v4h-2.3V9.3c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.94-1.38 1.9v3.55H7.3V5.5Z" />
              </svg>
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn-solid">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 .8a7.2 7.2 0 0 0-2.28 14.03c.36.07.49-.16.49-.35v-1.36c-2 .44-2.42-.85-2.42-.85-.33-.83-.8-1.05-.8-1.05-.65-.45.05-.44.05-.44.72.05 1.1.74 1.1.74.64 1.1 1.68.78 2.09.6.06-.46.25-.78.46-.96-1.6-.18-3.28-.8-3.28-3.56 0-.79.28-1.43.74-1.93-.07-.18-.32-.92.07-1.92 0 0 .6-.2 1.98.73a6.8 6.8 0 0 1 3.6 0c1.37-.93 1.98-.73 1.98-.73.4 1 .15 1.74.07 1.92.46.5.73 1.14.73 1.93 0 2.77-1.68 3.38-3.29 3.56.26.22.49.66.49 1.33v1.97c0 .2.13.43.5.35A7.2 7.2 0 0 0 8 .8Z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
