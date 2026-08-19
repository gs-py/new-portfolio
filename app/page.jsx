import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import HeroWidget from "@/components/HeroWidget";
import Counter from "@/components/Counter";
import Social from "@/components/Social";
import { headlineStats, profile, projects, skillGroups } from "@/lib/data";

const Home = () => {
  const [lead, ...rest] = projects;

  return (
    <>
      {/* Hero */}
      <section className="container pb-8 pt-10 lg:pb-20 lg:pt-16">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl text-center lg:text-left">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.role} · Open to work
            </span>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,4.5rem)] font-bold leading-[1.02]">
              Gladwin
              <br />
              Santhosh
            </h1>

            <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-muted lg:mx-0">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:items-center">
              <Link href="/work" className="btn-primary w-full sm:w-auto">
                See the work
                <FiArrowRight className="text-base" />
              </Link>
              <Social />
            </div>
          </div>

          <HeroWidget />
        </div>
      </section>

      {/* Stats — pressed into one trough, not four floating cards */}
      <section className="container py-10 lg:py-16" aria-label="Impact">
        <div className="grid grid-cols-2 gap-y-10 rounded-[36px] px-8 py-11 shadow-neu-in sm:px-12 lg:grid-cols-4 lg:gap-6">
          {headlineStats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-[clamp(2rem,4.5vw,2.9rem)] font-bold leading-none tracking-tight">
                <Counter
                  to={stat.to}
                  decimals={stat.decimals}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-3 text-[14px] font-medium text-ink">{stat.label}</p>
              <p className="text-[13px] text-ink-faint">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work — deliberately unequal */}
      <section className="container py-12 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-bold">Selected work</h2>
          <Link href="/work" className="group inline-flex items-center gap-2 text-[15px] text-ink-muted hover:text-accent">
            All projects
            <FiArrowUpRight className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Link
              href={lead.live ?? lead.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-[32px] bg-surface p-4 shadow-neu transition-shadow duration-500 ease-soft hover:shadow-neu-lg"
            >
              <span className="relative block aspect-[16/10] overflow-hidden rounded-[24px] bg-surface-sunk">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                />
              </span>
              <span className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-6">
                <span className="text-[13px] uppercase tracking-[0.14em] text-ink-faint">{lead.category}</span>
                <span className="font-display text-[23px] font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent">
                  {lead.title}
                </span>
                <span className="text-[15px] leading-relaxed text-ink-muted">{lead.description}</span>
                <span className="mt-2 flex flex-wrap gap-2">
                  {lead.stack.map((tech) => (
                    <span key={tech} className="rounded-full px-3 py-1.5 text-[12px] text-ink-muted shadow-neu-in-sm">
                      {tech}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {rest.map((project, i) => (
              <div key={project.title} className="flex-1">
                <Link
                  href={project.live ?? project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-5 rounded-[28px] bg-surface p-4 shadow-neu-sm transition-shadow duration-500 ease-soft hover:shadow-neu"
                >
                  <span className="relative block h-[104px] w-[104px] shrink-0 overflow-hidden rounded-[20px] bg-surface-sunk">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.07]"
                    />
                  </span>
                  <span className="min-w-0 flex-1 pr-2">
                    <span className="block text-[12px] uppercase tracking-[0.14em] text-ink-faint">
                      {project.category}
                    </span>
                    <span className="mt-1.5 block font-display text-[18px] font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </span>
                    <span className="mt-2 block text-[13px] text-ink-muted">
                      {project.stack.slice(0, 3).join(" · ")}
                    </span>
                  </span>
                  <FiArrowUpRight className="shrink-0 text-ink-faint transition-all duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="container py-12 lg:py-16">
        <div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-bold">The stack I reach for</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div key={group.group}>
              <div className="h-full rounded-[28px] bg-surface p-7 shadow-neu">
                <h3 className="font-display text-[17px] font-semibold tracking-tight text-accent">{group.group}</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full px-3.5 py-2 text-[13px] text-ink-muted shadow-neu-in-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 lg:py-20">
        <div>
          <div className="flex flex-col items-center gap-7 rounded-[40px] bg-surface px-8 py-16 text-center shadow-neu-lg">
            <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.1]">
              Have a product that needs shipping end to end?
            </h2>
            <p className="max-w-lg text-[16px] text-ink-muted">
              Frontend, backend, mobile, and the SEO work that makes it findable — I take features the whole way.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a conversation
              <FiArrowRight className="text-base" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
