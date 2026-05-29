interface LogoProps {
  dark?: boolean;
  width?: number;
  className?: string;
  variant?: 'full' | 'name';
}

export function Logo({ dark = false, width = 200, className, variant = 'full' }: LogoProps) {
  const src = variant === 'full'
    ? (dark ? '/logo-full-dark.svg' : '/logo-full.svg')
    : (dark ? '/logo-name-dark.svg' : '/logo-name.svg');

  return (
    <img
      src={src}
      alt="DOVOD Partners"
      width={width}
      className={className}
      style={{ display: 'block' }}
      draggable={false}
    />
  );
}
