import React from 'react';

interface LifLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
}

export const LifLogo: React.FC<LifLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const heights = {
    sm: 'h-7',
    md: 'h-9 sm:h-10',
    lg: 'h-14',
    hero: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 88"
        className={`${heights[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Lost in Frame (LIF) Logo"
      >
        <defs>
          <linearGradient id="lif-clean-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Letter L */}
        <path
          d="M 16 8 H 40 V 48 H 64 V 64 H 16 Z"
          fill="url(#lif-clean-gradient)"
        />

        {/* Letter I - Architectural frame slit */}
        <path
          d="M 76 8 H 106 V 34 L 76 40 Z"
          fill="url(#lif-clean-gradient)"
        />
        <path
          d="M 76 44 L 106 38 V 64 H 76 Z"
          fill="url(#lif-clean-gradient)"
        />

        {/* Letter F */}
        <path
          d="M 118 8 H 172 V 24 H 142 V 35 H 168 V 48 H 142 V 64 H 118 Z"
          fill="url(#lif-clean-gradient)"
        />

        {/* Subtitle: LOST IN FRAME */}
        {showSubtitle && (
          <text
            x="100"
            y="82"
            textAnchor="middle"
            fill="#B4B9C8"
            fontSize="10"
            fontFamily="var(--font-sans), sans-serif"
            fontWeight="700"
            letterSpacing="6.5"
            className="uppercase tracking-[0.4em]"
          >
            LOST IN FRAME
          </text>
        )}
      </svg>
    </div>
  );
};
