import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Web and mobile development, backend and API work, SEO engineering, UI/UX design, and applied machine learning.",
};

const Services = () => (
  <section className="container py-12 lg:py-20">
    <div>
      <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.05]">
        What I can build for you
      </h1>
      <p className="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
        Six things I do in production every week, not a menu of aspirations.
      </p>
    </div>

    <div className="mt-14 flex flex-col">
      {services.map((service, i) => (
        <div key={service.title}>
          <Link
            href="/contact"
            className="group grid gap-4 rounded-[28px] px-6 py-9 transition-shadow duration-500 ease-soft hover:shadow-neu md:grid-cols-12 md:items-start md:gap-8 md:px-9"
          >
            <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold leading-[1.15] tracking-tight transition-colors duration-300 group-hover:text-accent md:col-span-5">
              {service.title}
            </h2>
            <p className="max-w-[62ch] text-[16px] leading-relaxed text-ink-muted md:col-span-6">
              {service.description}
            </p>
            <span className="flex md:col-span-1 md:justify-end">
              <span className="flex h-11 w-11 items-center justify-center rounded-full text-ink-faint shadow-neu-in-sm transition-all duration-400 ease-soft group-hover:text-accent group-hover:shadow-neu-flat">
                <FiArrowUpRight />
              </span>
            </span>
          </Link>
          {i < services.length - 1 && <div className="rule" />}
        </div>
      ))}
    </div>
  </section>
);

export default Services;
