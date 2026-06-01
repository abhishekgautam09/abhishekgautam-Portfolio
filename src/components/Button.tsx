import React from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  href?: string;
}

const shadowPrimary =
  '0 1px 2px 0 rgba(10,14,39,0.1), 0 4px 4px 0 rgba(10,14,39,0.09), 0 9px 6px 0 rgba(10,14,39,0.05), 0 17px 7px 0 rgba(10,14,39,0.01), 0 26px 7px 0 rgba(10,14,39,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';
const shadowBrand =
  '0 1px 2px 0 rgba(30,64,224,0.2), 0 4px 8px 0 rgba(30,64,224,0.18), 0 9px 16px 0 rgba(30,64,224,0.12), 0 17px 24px 0 rgba(30,64,224,0.06), inset 0 2px 8px 0 rgba(255,255,255,0.25)';
const shadowSecondary = '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

export default function Button({ variant = 'primary', children, href, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-opacity hover:opacity-90 cursor-pointer';

  const styles: Record<Variant, React.CSSProperties> = {
    primary: { background: 'linear-gradient(180deg, #2A4DF0 0%, #1E40E0 100%)', color: '#fff', boxShadow: shadowBrand },
    secondary: { background: '#fff', color: '#0A0E27', boxShadow: shadowSecondary },
    tertiary: { background: '#fff', color: '#0A0E27', boxShadow: shadowPrimary },
  };

  const el = (
    <button
      style={styles[variant]}
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {el}
      </a>
    );
  }
  return el;
}
