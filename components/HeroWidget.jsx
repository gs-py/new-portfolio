"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiCopy, FiCheck } from "react-icons/fi";
import { FaGithub, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiFastapi, SiTypescript } from "react-icons/si";
import Clock from "@/components/Clock";
import { profile } from "@/lib/data";

const stack = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiFastapi />, label: "FastAPI" },
  { icon: <FaPython />, label: "Python" },
];

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="neu-press flex h-14 w-14 shrink-0 items-center justify-center !rounded-full text-lg text-ink-muted hover:text-accent"
    >
      <motion.span
        key={copied ? "done" : "idle"}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="flex"
      >
        {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
      </motion.span>
    </button>
  );
};

/** The widget stack: everything here is live or real, nothing is placeholder chrome. */
const HeroWidget = () => {
  const panel = {
    hidden: { opacity: 0, y: 22, boxShadow: "0px 0px 0px #c6c7ce, 0px 0px 0px #ffffff" },
    show: {
      opacity: 1,
      y: 0,
      boxShadow: "18px 18px 36px #c0c1c9, -18px -18px 36px #ffffff",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      variants={panel}
      initial="hidden"
      animate="show"
      className="w-full max-w-[420px] rounded-[40px] bg-surface p-4 sm:p-5"
    >
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.09, delayChildren: 0.35 }}
        className="flex flex-col gap-4"
      >
        {/* headline */}
        <motion.div variants={item} className="flex items-start justify-between gap-4 rounded-[28px] px-6 py-5 shadow-neu-in">
          <div>
            <p className="font-display text-[27px] font-bold leading-[1.12] tracking-tight">
              Ships end
              <br />
              to end.
            </p>
            <p className="mt-2.5 text-[14px] leading-snug text-ink-muted">
              Frontend, backend, mobile — and the SEO that follows.
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-surface px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted shadow-neu-flat">
            <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-accent" />
            Open
            <span className="sr-only">to work</span>
          </span>
        </motion.div>

        {/* current role */}
        <motion.div variants={item} className="flex items-center gap-3 rounded-[28px] bg-surface p-3 pl-6 shadow-neu-sm">
          <div className="min-w-0 flex-1">
            <p className="text-[12px] text-ink-faint">Currently building</p>
            <p className="truncate font-display text-[19px] font-semibold tracking-tight">
              LyfSkills
              <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1 align-middle text-[10px] font-bold uppercase tracking-wider text-accent shadow-neu-in-sm">
                <span className="h-1.5 w-1.5 animate-breathe rounded-full bg-accent" />
                live
              </span>
            </p>
          </div>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="neu-press flex h-12 w-12 shrink-0 items-center justify-center !rounded-full text-ink-muted hover:text-accent"
          >
            <FaGithub />
          </Link>
        </motion.div>

        {/* clock + stack keypad */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <motion.div variants={item} className="flex flex-col items-center gap-2.5">
            <Clock size={196} />
            <p className="text-[12px] text-ink-faint">My local time · IST</p>
          </motion.div>

          <motion.div variants={item} className="min-w-0 flex-1">
            <ul className="grid h-full grid-cols-3 gap-2.5 sm:grid-cols-2">
              {stack.map((tech) => (
                <li key={tech.label} className="min-h-[58px]">
                  <span
                    title={tech.label}
                    className="flex h-full w-full items-center justify-center rounded-[18px] bg-surface text-[20px] text-ink-muted shadow-neu-sm transition-[color,box-shadow] duration-400 ease-soft hover:text-accent hover:shadow-neu"
                  >
                    {tech.icon}
                    <span className="sr-only">{tech.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* controls */}
        <motion.div variants={item} className="flex items-center gap-3">
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-press flex h-14 flex-1 items-center justify-center gap-2.5 !rounded-full font-display text-[15px] font-semibold text-ink hover:text-accent"
          >
            <FiDownload className="text-base" />
            Download CV
          </a>
          <CopyEmail />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroWidget;
