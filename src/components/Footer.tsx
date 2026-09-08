import { contact } from '../data/skills';

export function Footer() {
  return (
    <footer className="bg-primary py-6 text-center text-sm text-white/85">
      © {new Date().getFullYear()} {contact.name}
    </footer>
  );
}
