import Button from './Button';

const shadowNav = '0 8px 32px rgba(10,14,39,0.14), 0 2px 8px rgba(10,14,39,0.10), 0 0 0 0.5px rgba(10,14,39,0.05)';

export default function BottomNav() {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 flex items-center gap-4"
      style={{ boxShadow: shadowNav }}
    >
      <span className="text-2xl font-semibold text-[#0A0E27]">A</span>
      <Button variant="primary" href="mailto:gautam2000abhishek@gmail.com">
        Get in touch
      </Button>
    </div>
  );
}
