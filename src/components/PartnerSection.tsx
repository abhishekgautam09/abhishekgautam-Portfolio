import { useRef, useCallback } from 'react';
import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

export default function PartnerSection() {
  const { ref, inView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);
  const gifIndexRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnRef.current < 80) return;
    lastSpawnRef.current = now;

    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const img = document.createElement('img');
    img.src = GIFS[gifIndexRef.current % GIFS.length];
    gifIndexRef.current++;
    const rotation = Math.random() * 20 - 10;
    img.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 120px;
      height: 80px;
      object-fit: cover;
      border-radius: 12px;
      transform: translate(-50%, -50%) rotate(${rotation}deg);
      pointer-events: none;
      opacity: 1;
      transition: opacity 1000ms ease, transform 1000ms ease;
      z-index: 10;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    `;
    container.appendChild(img);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.opacity = '0';
        img.style.transform = `translate(-50%, -60%) rotate(${rotation}deg) scale(0.8)`;
      });
    });

    setTimeout(() => img.remove(), 1100);
  }, []);

  return (
    <section className="w-full py-12 px-6">
      <div
        ref={(el) => {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        }}
        className="max-w-7xl mx-auto py-48 rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden cursor-crosshair"
        style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}
        onMouseMove={handleMouseMove}
      >
        <h2
          className={`font-serif text-[48px] md:text-[64px] lg:text-[80px] text-[#0F1738] tracking-tight mb-12 text-center relative z-20 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          Let's work together
        </h2>
        <div className={`relative z-20 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={inView ? { animationDelay: '0.2s' } : {}}>
          <Button variant="primary" href="mailto:gautam2000abhishek@gmail.com">
            <img src="/abhishek.jpg" alt="Abhishek Gautam" className="w-10 h-10 rounded-full object-cover" />
            Get in touch with Abhishek
          </Button>
        </div>
      </div>
    </section>
  );
}
