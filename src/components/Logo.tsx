interface LogoProps {
  dark?: boolean;
  width?: number;
  /** 'full' = DOVOD + PARTNERS, 'name' = только DOVOD */
  variant?: 'full' | 'name';
}

export function Logo({ dark = false, width = 200, variant = 'full' }: LogoProps) {
  const src = variant === 'full'
    ? (dark ? '/logo-full-dark.svg' : '/logo-full.svg')
    : (dark ? '/logo-name-dark.svg' : '/logo-name.svg');

  return (
    <img
      src={src}
      alt="DOVOD Partners"
      width={width}
      style={{ display: 'block' }}
      draggable={false}
    />
  );
}
