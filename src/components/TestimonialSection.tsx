import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function TestimonialSection() {
  const { ref, inView } = useInViewAnimation();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = parallaxRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = Math.min(200, Math.max(-200, (progress - 0.5) * 200));
        setParallaxY(offset);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const delay = (d: number): CSSProperties =>
    inView ? { animationDelay: `${d}s` } : {};

  return (
    <section className="py-12 px-6 flex flex-col items-center" ref={ref}>
      <div className="max-w-2xl w-full">
        <div className={inView ? 'animate-fade-in-up' : 'opacity-0'} style={delay(0.1)}>
          <Quote className="w-6 h-6 text-slate-900 mb-4" />
        </div>

        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.2)}
        >
          He never limited himself to design execution — he thought like a{' '}
          <span className="font-serif">product</span>{' '}person.
        </h2>

        <p
          className={`italic text-sm text-[#273C46] mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.3)}
        >
          Deepak Kumar — worked with Abhishek at Altstac Technologies
        </p>

        <div
          className={`flex items-center gap-8 mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.4)}
        >
          <span className="font-medium text-slate-900 text-xl md:text-2xl">Anteriad</span>
          <span className="font-medium text-slate-900 text-xl md:text-2xl">Altclik</span>
          <span className="font-medium text-slate-900 text-xl md:text-2xl">Altstac</span>
        </div>

        <div
          ref={parallaxRef}
          className={`flex justify-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.5)}
        >
          <div style={{ transform: `translateY(${parallaxY}px)`, transition: 'transform 0.1s linear', willChange: 'transform' }}>
            <img
              src="/abhishek.jpg"
              alt="Abhishek Gautam"
              className="w-full max-w-xs rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
