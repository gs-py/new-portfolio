import Link from "next/link";
import Social from "@/components/Social";
import { navLinks, profile } from "@/lib/data";

const Footer = () => (
  <footer className="mt-24 pb-12">
    <div className="container">
      <div className="rule mb-12" />
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Building something? <br />
            <span className="text-accent">Let&apos;s talk.</span>
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-[15px] text-ink-muted underline decoration-ink-faint/50 hover:text-accent"
          >
            {profile.email}
          </a>
          <p className="mt-1 text-[15px] text-ink-muted tnum">{profile.phone}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-[15px]">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="text-ink-muted hover:text-accent">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-5 md:items-end">
          <Social />
          <p className="text-[13px] text-ink-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
