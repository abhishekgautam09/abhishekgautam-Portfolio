import { type CSSProperties } from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import Button from './components/Button';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import ArticlesSection from './components/ArticlesSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

const ALL_IMAGES = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

function HeroSection() {
  const { ref, inView } = useInViewAnimation(0.05);
  const delay = (d: number): CSSProperties =>
    inView ? { animationDelay: `${d}s` } : {};

  return (
    <section className="flex flex-col items-center px-6 pt-12 md:pt-16" ref={ref}>
      <div className="max-w-[440px] w-full">
        <h1
          className={`font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#0A0E27] tracking-tight mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.1)}
        >
          Abhishek Gautam
        </h1>

        <p
          className={`font-mono text-xs md:text-sm text-[#0A0E27] mb-2 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.2)}
        >
          UX Designer · Bengaluru, India
        </p>

        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0F1738] tracking-tight ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.3)}
        >
          I design UX where<br />
          <span className="font-serif text-[#1E40E0]">complexity hides.</span>
        </h2>

        <div
          className={`flex flex-col gap-6 mt-5 md:mt-6 text-sm md:text-base text-[#0A0E27] leading-relaxed ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.4)}
        >
          <p>
            I design UX for internal, data-heavy, and workflow-driven products — dashboards,
            internal platforms, automation flows, and multi-step systems that teams rely on
            daily to run operations and make decisions.
          </p>
          <p>
            My role goes beyond screens. I work closely with stakeholders and engineers to
            understand constraints, clarify requirements, and design flows that actually work
            in production. Structure before visuals, edge cases before polish.
          </p>
          <p>Currently exploring how AI and automation can support better product decisions.</p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={delay(0.5)}
        >
          <Button variant="primary" href="mailto:gautam2000abhishek@gmail.com">Get in touch</Button>
          <Button variant="secondary" href="#work">View work</Button>
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  return (
    <div className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {ALL_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
            style={{ width: 'auto' }}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-32">
      <HeroSection />
      <MarqueeSection />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <div id="work">
        <ProjectsSection />
      </div>
      <ArticlesSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
