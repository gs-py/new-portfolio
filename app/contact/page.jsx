import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import Social from "@/components/Social";
import Clock from "@/components/Clock";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const description =
  "Get in touch with Gladwin Santhosh — Full Stack Developer based in Thrissur, Kerala. Freelance work, full-time roles, or a question about something I shipped.";

export const metadata = pageMeta({
  title: "Contact",
  description,
  path: "/contact",
  eyebrow: "Get in touch",
});

const details = [
  { icon: <FiPhone />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: <FiMail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiMapPin />, label: "Based in", value: profile.location, href: null },
];

const Contact = () => (
  <section className="container py-12 lg:py-20">
    <JsonLd
      data={graph(
        webPageSchema({ type: "ContactPage", path: "/contact", name: "Contact", description }),
        breadcrumbSchema([{ name: "Contact", path: "/contact" }])
      )}
    />
    <div className="max-w-[56ch]">
      <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.05]">Contact</h1>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">
        Freelance work, full-time roles, or a question about something I shipped — all welcome.
      </p>
    </div>

    <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <ContactForm />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5">
        <div>
          <ul className="flex flex-col gap-6 rounded-[30px] bg-surface p-7 shadow-neu sm:p-8">
            {details.map((item) => (
              <li key={item.label} className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[19px] text-accent shadow-neu-in-sm">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] uppercase tracking-[0.14em] text-ink-faint">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="block break-words text-[15px] text-ink hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    <span className="block text-[15px] text-ink">{item.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-7 rounded-[30px] bg-surface p-7 shadow-neu sm:p-8">
            <Clock size={132} />
            <div>
              <p className="font-display text-[17px] font-semibold tracking-tight">My local time</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                IST (UTC+5:30). I usually reply the same working day.
              </p>
              <Social containerStyles="mt-5 flex gap-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
