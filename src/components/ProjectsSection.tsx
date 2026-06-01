import { useEffect, useRef, useState } from 'react';

const PROJECTS = [
  {
    name: 'B2B Dashboards & Internal Platforms',
    description: 'UX & UI for data-heavy internal products at Anteriad — admin workflows, role-based experiences, and end-to-end user flows built around real operational use cases.',
    image: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  },
  {
    name: 'Websites for Law Firms',
    description: 'End-to-end website design for lawyers and law firms at Altclik Digital — landing pages, responsive design, iconography, and custom solutions mapped to client goals.',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
  {
    name: 'Brand Identity & Product Design',
    description: 'Logos, brand guidelines, and marketing programs at Altstac — plus wireframing, prototyping, and design systems for mobile applications.',
    image: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  },
];

function ProjectItem({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`flex flex-col gap-6 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={visible ? { animationDelay: `${index * 0.1}s` } : {}}
    >
      <div className="ml-20 md:ml-28">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#051A24] mb-2">{project.name}</h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
        style={{ height: 480 }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((p, i) => (
          <ProjectItem key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
