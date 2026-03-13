type AvatarCircleProps = {
  src?: string | null;
  name?: string | null;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const sizeClasses: Record<NonNullable<AvatarCircleProps['size']>, string> = {
  sm: 'h-12 w-12 text-sm',
  md: 'h-16 w-16 text-lg',
  lg: 'h-24 w-24 text-2xl',
  xl: 'h-28 w-28 text-3xl',
};

function getInitials(name?: string | null) {
  if (!name) return 'WT';
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase() ?? '').join('') || 'WT';
}

export function AvatarCircle({ src, name, size = 'lg', className = '' }: AvatarCircleProps) {
  const classes = `${sizeClasses[size]} ${className}`.trim();

  if (src) {
    return (
      <img
        src={src}
        alt={name ? `${name} avatar` : 'User avatar'}
        className={`${classes} rounded-full border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.28)]`}
      />
    );
  }

  return (
    <div
      className={`${classes} flex items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,90,54,0.32),rgba(255,255,255,0.08))] font-display tracking-[0.08em] text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)]`}
      aria-label={name ? `${name} avatar placeholder` : 'User avatar placeholder'}
    >
      {getInitials(name)}
    </div>
  );
}
