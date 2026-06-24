/* On-brand SVG glyphs — horseshoe + stylized horse head (knight profile). */

type IconProps = { className?: string };

export function Horseshoe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 56c-6-4-10-12-10-22C10 20 19 11 32 11s22 9 22 23c0 10-4 18-10 22"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M27 54c-3-3-5-8-5-16 0-7 4-12 10-12s10 5 10 12c0 8-2 13-5 16"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {[
        [18, 22],
        [16, 33],
        [18, 45],
        [46, 22],
        [48, 33],
        [46, 45],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.7" fill="currentColor" />
      ))}
    </svg>
  );
}

export function HorseHead({ className }: IconProps) {
  // Stylized horse-head / knight profile facing left.
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M70 92c2-13 4-21 4-31 0-15-9-23-20-28 1-4 0-9-3-13-1 4-3 6-6 7-9-1-17 3-23 11-4 5-7 12-9 21-1 5 1 8 5 8 2 0 3-1 5-4 2-4 5-6 9-7-3 5-5 11-6 19-1 6-1 11-1 17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="36" cy="40" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Instagram({ className, size = 20 }: IconProps & { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function Diamond({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M6 0l6 6-6 6-6-6z" fill="currentColor" />
    </svg>
  );
}
