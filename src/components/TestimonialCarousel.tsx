import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const BASE_TESTIMONIALS = [
  {
    quote: "I worked with Abhishek at Altstac Technologies, where he was a UX/UI Designer, and it was clear early on that he thought like a product person. He genuinely cared about the why behind features, asked thoughtful questions, and always looked at problems from a user's point of view. What I really appreciated was his balance of creativity and practicality — his designs were not just visually clean but made sense from a product standpoint.",
    name: 'Deepak Kumar',
    role: 'Sales / Revenue Operations · worked with Abhishek at Altstac',
  },
  {
    quote: "Abhishek reported directly to me as a UX/UI Designer. He showed strong ownership of design tasks, with a clear focus on usability, structure, and user needs. His approach was thoughtful, detail-oriented, and aimed at improving clarity across the products he worked on. He balanced visual design with practical UX considerations, which made him a solid contributor.",
    name: 'Nishant Bhaskar',
    role: 'Founder & CEO, Advanta · managed Abhishek at Altstac',
  },
];

const TESTIMONIALS = [...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS, ...BASE_TESTIMONIALS];
const COUNT = BASE_TESTIMONIALS.length;

export default function TestimonialCarousel() {
  const { ref } = useInViewAnimation();
  const [index, setIndex] = useState(COUNT);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setTransitioning(true);
    setIndex(next);
  }, []);

  const prev = () => {
    if (transitioning) return;
    goTo(index - 1);
  };

  const next = () => {
    if (transitioning) return;
    goTo(index + 1);
  };

  useEffect(() => {
    const handleEnd = () => {
      setTransitioning(false);
      setIndex(prev => {
        if (prev <= 0) return COUNT;
        if (prev >= TESTIMONIALS.length - 1) return COUNT * 2 - 1;
        return prev;
      });
    };
    const timeout = setTimeout(handleEnd, 800);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex(i => i + 1);
    }, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const cardWidth = 427.5;
  const gap = 24;

  return (
    <section className="w-full py-20 overflow-hidden" ref={ref}>
      <div className="px-6 mb-10">
        <div className="md:max-w-4xl md:ml-auto flex items-center justify-between">
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0F1738] tracking-tight">
            What <span className="text-[#1E40E0]">builders</span> say
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black text-black" />
              ))}
            </div>
            <span className="text-sm text-[#0A0E27] font-medium ml-1">Clutch 5/5</span>
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(24px - ${index * (cardWidth + gap)}px))`,
            transition: transitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            gap: gap,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8"
              style={{
                width: cardWidth,
                boxShadow: '0 4px 16px rgba(10,14,39,0.08)',
              }}
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-4 text-[#0A0E27]">
                <path d="M0 22V13.4C0 9.8 0.9 6.7 2.7 4C4.5 1.3 7.1 0 10.5 0L12 2.2C9.8 2.2 8 3 6.6 4.6C5.2 6.2 4.5 8.1 4.5 10.4H10.5V22H0ZM15.5 22V13.4C15.5 9.8 16.4 6.7 18.2 4C20 1.3 22.6 0 26 0L27.5 2.2C25.3 2.2 23.5 3 22.1 4.6C20.7 6.2 20 8.1 20 10.4H26V22H15.5Z" fill="currentColor" fillOpacity="0.15"/>
              </svg>
              <p className="text-base text-[#0F1738] leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0A0E27] text-[#F5F8FF] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0F1738]">{t.name}</p>
                  <p className="text-sm text-[#5B6480]">→ {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8 px-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{ borderColor: 'rgba(15,23,56,0.2)' }}
          >
            <ChevronLeft className="w-5 h-5 text-[#0F1738]" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{ borderColor: 'rgba(15,23,56,0.2)' }}
          >
            <ChevronRight className="w-5 h-5 text-[#0F1738]" />
          </button>
        </div>
      </div>
    </section>
  );
}
