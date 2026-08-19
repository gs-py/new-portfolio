"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";
import { track } from "@/lib/analytics";

/** Apple's move/reposition spring: critically damped, 0.4s response. */
const NAV_SPRING = { type: "spring", bounce: 0, duration: 0.4 };

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-surface">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center" aria-label="Gladwin Santhosh — home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface font-display text-[15px] font-bold text-accent shadow-neu-sm transition-shadow duration-300 ease-soft group-hover:shadow-neu">
            GS
          </span>
        </Link>

        {/* Desktop nav — the raised pill slides between routes on an Apple-style
            reposition spring (damping 1.0 / response 0.4). */}
        <nav className="hidden items-center rounded-full p-1.5 shadow-neu-in-sm lg:flex">
          {navLinks.map((link) => {
            const active = link.path === pathname;
            return (
              <Link
                key={link.path}
                href={link.path}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300 ease-soft ${
                  active ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={NAV_SPRING}
                    className="absolute inset-0 rounded-full bg-surface shadow-neu-flat"
                  />
                )}
                <span className="relative">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onClick={() => track("cta_click", { cta: "hire_me", location: "header" })}
            className="btn-primary hidden !rounded-full !px-5 !py-3 !text-[14px] md:inline-flex"
          >
            Hire me
            <FiArrowUpRight className="text-base" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="neu-press flex h-11 w-11 items-center justify-center !rounded-full text-lg text-ink lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto bg-surface px-5 pb-10 pt-6 lg:hidden"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const active = link.path === pathname;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-2xl px-6 py-5 font-display text-lg font-semibold transition-shadow duration-300 ease-soft ${
                        active ? "text-accent shadow-neu-in" : "text-ink shadow-neu"
                      }`}
                    >
                      {link.name}
                      <FiArrowUpRight className={active ? "text-accent" : "text-ink-faint"} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a href={`mailto:${profile.email}`} className="mt-8 block text-center text-sm text-ink-muted">
              {profile.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
