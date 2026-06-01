import { ArrowUpRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const ARTICLES = [
  {
    title: 'I Thought I Understood Design Systems Until a Developer Ignored Every Spec I Made',
    excerpt:
      'Blindly following design rules without understanding their purpose leads to poor outcomes. Understanding the reasoning behind spacing, type scales, and proportion — rather than applying them dogmatically — improves designer–developer collaboration.',
    date: 'Feb 26, 2026',
    tags: ['Design Systems', 'Product Design'],
    url: 'https://designabhishekgautam.medium.com/i-thought-i-understood-design-systems-until-a-developer-ignored-every-spec-i-made-cd9120a841f5',
  },
  {
    title: 'Tips and Tricks for Effective UX/UI Design: A Comprehensive Guide',
    excerpt:
      'Ten essential principles for UX/UI design — user research, simplicity, accessibility, responsive design, and iteration. Effective design requires understanding user needs, collaborating with developers, and continuous learning.',
    date: 'Aug 20, 2023',
    tags: ['UX Design', 'User Research'],
    url: 'https://designabhishekgautam.medium.com/tips-and-tricks-for-effective-ux-ui-design-a-comprehensive-guide-f4c3c3a0dc2d',
  },
];

export default function ArticlesSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12" ref={ref}>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0F1738] tracking-tight">
          <span className="text-[#1E40E0]">Writing</span>
        </h2>
        <a
          href="https://medium.com/@designabhishekgautam"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-sm text-[#0A0E27] hover:opacity-70 transition-opacity"
        >
          Read all on Medium <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES.map((article, i) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col bg-white rounded-[32px] p-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              ...(inView ? { animationDelay: `${(i + 1) * 0.1}s` } : {}),
              boxShadow: '0 4px 16px rgba(10,14,39,0.08)',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-mono text-[#0A0E27]/60 border border-[#0F1738]/15 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl md:text-2xl leading-snug text-[#0F1738] tracking-tight mb-3">
              {article.title}
            </h3>
            <p className="text-sm md:text-base text-[#0A0E27]/70 leading-relaxed mb-6 flex-1">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#5B6480]">{article.date}</span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#0A0E27]">
                Read article
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
