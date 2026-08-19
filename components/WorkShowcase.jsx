"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];

const WorkShowcase = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const go = (step) => setIndex((i) => (i + step + projects.length) % projects.length);

  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
      {/* rail: the selected project sits pressed in */}
      <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-none lg:w-[260px] lg:shrink-0 lg:flex-col lg:self-start lg:overflow-visible lg:pb-0">
        {projects.map((item, i) => {
          const active = i === index;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={active}
              className={`flex min-w-[210px] items-center gap-3 rounded-[22px] px-4 py-3.5 text-left transition-[box-shadow,color] duration-400 ease-soft lg:min-w-0 ${
                active ? "shadow-neu-in text-ink" : "bg-surface shadow-neu-sm text-ink-muted hover:text-ink"
              }`}
            >
              <span className={`font-display text-[13px] font-bold tnum ${active ? "text-accent" : "text-ink-faint"}`}>
                {item.num}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-[14px] font-semibold tracking-tight">
                  {item.title}
                </span>
                <span className="block truncate text-[12px] text-ink-faint">{item.category}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease }}
            className="grid gap-8 lg:grid-cols-2 lg:gap-10"
          >
            <div className="order-2 flex flex-col gap-5 lg:order-none">
              <span className="text-[13px] uppercase tracking-[0.16em] text-ink-faint">{project.category}</span>
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.3rem)] font-bold leading-[1.12]">
                {project.title}
              </h2>
              <p className="max-w-[58ch] text-[16px] leading-relaxed text-ink-muted">{project.description}</p>

              <ul className="flex flex-wrap gap-2.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full px-3.5 py-2 text-[13px] text-ink-muted shadow-neu-in-sm">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="rule my-2" />

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-press flex h-[60px] w-[60px] items-center justify-center !rounded-full text-xl text-ink hover:text-accent"
                    aria-label={`${project.title} — live site`}
                  >
                    <FiArrowUpRight />
                  </Link>
                )}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-press flex h-[60px] w-[60px] items-center justify-center !rounded-full text-xl text-ink hover:text-accent"
                  aria-label={`${project.title} — source on GitHub`}
                >
                  <FaGithub />
                </Link>

                <div className="ml-auto flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous project"
                    className="neu-press flex h-12 w-12 items-center justify-center !rounded-full text-ink-muted hover:text-accent"
                  >
                    <FiChevronLeft />
                  </button>
                  <span className="text-[13px] text-ink-faint tnum">
                    {project.num} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next project"
                    className="neu-press flex h-12 w-12 items-center justify-center !rounded-full text-ink-muted hover:text-accent"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="self-start rounded-[32px] bg-surface p-4 shadow-neu">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-surface-sunk shadow-neu-in-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkShowcase;
