import Button from './Button';

const shadowNav = '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.04)';

export default function BottomNav() {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 flex items-center gap-4"
      style={{ boxShadow: shadowNav }}
    >
      <span className="font-serif text-2xl font-semibold text-[#0A0E27]">A</span>
      <Button variant="primary" href="mailto:gautam2000abhishek@gmail.com">
        Get in touch
      </Button>
    </div>
  );
}
