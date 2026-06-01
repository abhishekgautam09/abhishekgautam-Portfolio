import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Button variant="primary" href="mailto:gautam2000abhishek@gmail.com">
          Get in touch
        </Button>
        <div className="flex items-start gap-12">
          <ArrowUpRight className="w-5 h-5 text-[#051A24] mt-0.5 flex-shrink-0" />
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              {['Work', 'Services', 'About'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/designabhishekgautam/' },
                { label: 'Behance', href: 'https://www.behance.net/designabhishekgautam' },
                { label: 'Email', href: 'mailto:gautam2000abhishek@gmail.com' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
