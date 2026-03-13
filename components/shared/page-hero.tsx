export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="panel panel-glow p-6 md:p-10">
      <span className="pill">{eyebrow}</span>
      <h1 className="mt-5 font-display text-6xl leading-none tracking-[0.1em] md:text-8xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">{subtitle}</p>
    </section>
  );
}
