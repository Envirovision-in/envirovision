interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  variant = 'light',
  showText = true,
  className = '',
  size = 'md'
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-sm' },
    md: { icon: 40, text: 'text-lg' },
    lg: { icon: 56, text: 'text-2xl' },
  };

  const textColor = variant === 'dark' ? '#FFFFFF' : '#1A1F2E';
  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Globe Icon - Network/Connected Earth */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`globeGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00968e" />
            <stop offset="50%" stopColor="#007a73" />
            <stop offset="100%" stopColor="#005f5a" />
          </linearGradient>
        </defs>

        {/* Main sphere */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={`url(#globeGradient-${variant})`}
        />

        {/* Highlight/shine effect */}
        <ellipse
          cx="35"
          cy="35"
          rx="20"
          ry="15"
          fill="white"
          opacity="0.2"
        />

        {/* Network lines - horizontal */}
        <ellipse cx="50" cy="50" rx="45" ry="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="45" ry="35" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Network lines - vertical */}
        <ellipse cx="50" cy="50" rx="20" ry="45" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="35" ry="45" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Connection nodes */}
        <circle cx="50" cy="10" r="4" fill="white" />
        <circle cx="50" cy="90" r="4" fill="white" />
        <circle cx="10" cy="50" r="4" fill="white" />
        <circle cx="90" cy="50" r="4" fill="white" />
        <circle cx="25" cy="25" r="3" fill="white" opacity="0.8" />
        <circle cx="75" cy="25" r="3" fill="white" opacity="0.8" />
        <circle cx="25" cy="75" r="3" fill="white" opacity="0.8" />
        <circle cx="75" cy="75" r="3" fill="white" opacity="0.8" />
        <circle cx="50" cy="30" r="3" fill="white" opacity="0.8" />
        <circle cx="50" cy="70" r="3" fill="white" opacity="0.8" />
        <circle cx="30" cy="50" r="3" fill="white" opacity="0.8" />
        <circle cx="70" cy="50" r="3" fill="white" opacity="0.8" />
      </svg>

      {showText && (
        <span
          className={`font-semibold tracking-wider ${text}`}
          style={{ color: textColor, letterSpacing: '0.15em' }}
        >
          ENVIROVISION
        </span>
      )}
    </div>
  );
}

// Icon-only version for favicon and small spaces
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="globeGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00968e" />
          <stop offset="50%" stopColor="#007a73" />
          <stop offset="100%" stopColor="#005f5a" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="45" fill="url(#globeGradientIcon)" />
      <ellipse cx="35" cy="35" rx="20" ry="15" fill="white" opacity="0.2" />
      <ellipse cx="50" cy="50" rx="45" ry="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="45" ry="35" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="20" ry="45" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="35" ry="45" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="50" cy="10" r="4" fill="white" />
      <circle cx="50" cy="90" r="4" fill="white" />
      <circle cx="10" cy="50" r="4" fill="white" />
      <circle cx="90" cy="50" r="4" fill="white" />
      <circle cx="25" cy="25" r="3" fill="white" opacity="0.8" />
      <circle cx="75" cy="25" r="3" fill="white" opacity="0.8" />
      <circle cx="25" cy="75" r="3" fill="white" opacity="0.8" />
      <circle cx="75" cy="75" r="3" fill="white" opacity="0.8" />
      <circle cx="50" cy="30" r="3" fill="white" opacity="0.8" />
      <circle cx="50" cy="70" r="3" fill="white" opacity="0.8" />
      <circle cx="30" cy="50" r="3" fill="white" opacity="0.8" />
      <circle cx="70" cy="50" r="3" fill="white" opacity="0.8" />
    </svg>
  );
}
