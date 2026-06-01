import type { CSSProperties } from 'react';
import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const shadowPrimary =
  '0 1px 2px 0 rgba(10,14,39,0.1), 0 4px 4px 0 rgba(10,14,39,0.09), 0 9px 6px 0 rgba(10,14,39,0.05), 0 17px 7px 0 rgba(10,14,39,0.01), 0 26px 7px 0 rgba(10,14,39,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';

export default function PricingSection() {
  const { ref, inView } = useInViewAnimation();
  const delay = (d: number): CSSProperties =>
    inView ? { animationDelay: `${d}s` } : {};

  return (
    <section className="w-full py-12 px-6" ref={ref}>
      <div className="max-w-4xl ml-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dark card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            ...delay(0.1),
            background: '#0A0E27',
            boxShadow: 'inset 0 2px 24px 0 rgba(255,255,255,0.04)',
          }}
        >
          <p className="text-[#C7D2F0] text-xs font-mono mt-4 mb-6">01</p>
          <h3 className="text-[22px] font-medium text-[#F5F8FF] mb-3">Product UX</h3>
          <p className="text-sm text-[#C7D2F0] mb-6 leading-relaxed">
            Dashboards, internal platforms, and workflow-driven systems.<br />
            Structure, information architecture, and flows that hold up in production.
          </p>
          <ul className="text-sm text-[#C7D2F0] mb-8 space-y-2">
            <li>· UX for internal & data-heavy products</li>
            <li>· Dashboard & workflow design</li>
            <li>· Information architecture</li>
            <li>· Usability testing</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" href="mailto:gautam2000abhishek@gmail.com">Get in touch</Button>
          </div>
        </div>

        {/* Light card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-white ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            ...delay(0.2),
            boxShadow: '0 4px 16px rgba(10,14,39,0.08)',
          }}
        >
          <p className="text-[#0A0E27]/40 text-xs font-mono mt-4 mb-6">02</p>
          <h3 className="text-[22px] font-medium text-[#0F1738] mb-3">Web & Brand</h3>
          <p className="text-sm text-[#0A0E27]/70 mb-6 leading-relaxed">
            Landing pages, responsive websites, and brand systems.<br />
            From early concept to polished, shippable design.
          </p>
          <ul className="text-sm text-[#0A0E27]/70 mb-8 space-y-2">
            <li>· Landing page & website design</li>
            <li>· Design systems & brand guidelines</li>
            <li>· Interaction & visual design</li>
            <li>· Prototyping</li>
          </ul>
          <Button
            variant="tertiary"
            href="https://www.behance.net/designabhishekgautam"
            style={{ boxShadow: shadowPrimary }}
          >
            View on Behance
          </Button>
        </div>
      </div>
    </section>
  );
}
