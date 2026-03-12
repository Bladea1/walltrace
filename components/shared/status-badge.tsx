export function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const className =
    normalized === 'approved'
      ? 'status-badge status-approved'
      : normalized === 'rejected'
        ? 'status-badge status-rejected'
        : 'status-badge status-pending';

  return <span className={className}>{status}</span>;
}
