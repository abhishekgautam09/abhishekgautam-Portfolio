import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const BEHANCE = 'https://www.behance.net';

const PROJECTS = [
  {
    name: 'H&Z Law Firm — Brand Style Guide',
    category: 'Brand Identity',
    url: `${BEHANCE}/gallery/150992367/H-Z-Law-Firm-Brand-Style-Guide`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/55148a150992367.Y3JvcCwyMzcyLDE4NTYsNDY0LDA.jpg',
  },
  {
    name: 'Crypto Legal — Company Profile Brochure',
    category: 'Print / Layout',
    url: `${BEHANCE}/gallery/151616051/Crypto-Legal-Company-Profile-Brochure`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/c008c5151616051.Y3JvcCwxMzgwLDEwODAsNzUsMA.gif',
  },
  {
    name: 'Book Mockups — Adobe XD',
    category: 'Mockups',
    url: `${BEHANCE}/gallery/152688623/Book-Mockups-Created-with-Adobe-XD`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/e8767a152688623.Y3JvcCwzNjY1LDI4NjYsMjAwNSw3MjU.png',
  },
  {
    name: 'Logos',
    category: 'Logo Design',
    url: `${BEHANCE}/gallery/150969609/Logos`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/34a354150969609.Y3JvcCwzMjA0LDI1MDYsMCwzNDg.png',
  },
  {
    name: 'Fastive — Social Media Post',
    category: 'Social Media',
    url: `${BEHANCE}/gallery/150969963/Fastive-social-media-post`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/4aad85150969963.Y3JvcCwyMTYwLDE2ODksMCwyMzU.png',
  },
  {
    name: 'Crypto Legal — Social Media',
    category: 'Social Media',
    url: `${BEHANCE}/gallery/150968193/Crypto-Legal-Social-Media-post`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/249aab150968193.Y3JvcCwzMjQwLDI1MzQsMCwzNTI.png',
  },
  {
    name: 'Festival — Social Media Creatives',
    category: 'Social Media',
    url: `${BEHANCE}/gallery/150967615/Festival-Social-Media-Creatives`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/489c3f150967615.Y3JvcCw0MzI0LDMzODIsMCw0NzA.png',
  },
  {
    name: 'Startup Legal Guide — Cover',
    category: 'Print / Layout',
    url: `${BEHANCE}/gallery/150967163/Startup-Legal-Guide-cover`,
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/d94f09150967163.Y3JvcCw1MDAwLDM5MTAsMCw0OQ.png',
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col gap-3 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={visible ? { animationDelay: `${(index % 2) * 0.1}s` } : {}}
    >
      <div className="overflow-hidden rounded-2xl shadow-lg bg-gray-100">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-[260px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#0A0E27]">{project.name}</h3>
          <p className="text-sm text-[#0A0E27]/60 mt-1">{project.category}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-[#0A0E27] mt-1 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0F1738] tracking-tight">
          Selected <span className="font-serif text-[#1E40E0]">work</span>
        </h2>
        <a
          href="https://www.behance.net/designabhishekgautam"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-sm text-[#0A0E27] hover:opacity-70 transition-opacity"
        >
          View all on Behance <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.url} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
