'use client';

import { useFormStatus } from 'react-dom';

export function FormButton({
  children,
  pendingLabel,
  variant = 'primary',
}: {
  children: React.ReactNode;
  pendingLabel: string;
  variant?: 'primary' | 'secondary' | 'danger';
}) {
  const { pending } = useFormStatus();
  const className =
    variant === 'secondary' ? 'button-secondary' : variant === 'danger' ? 'button-danger' : 'button-primary';

  return (
    <button type="submit" className={className} disabled={pending}>
      {pending ? pendingLabel : children}
    </button>
  );
}
