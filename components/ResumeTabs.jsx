"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { education, experience, profile, skillGroups } from "@/lib/data";

const TABS = ["Experience", "Education", "Skills", "About"];

const facts = [
  { k: "Name", v: profile.name },
  { k: "Phone", v: profile.phone },
  { k: "Email", v: profile.email },
  { k: "Location", v: profile.location },
  { k: "Nationality", v: profile.nationality },
  { k: "Languages", v: profile.languages },
  { k: "Freelance", v: profile.freelance },
];

const panel = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22, ease: "easeIn" } },
};

const ResumeTabs = () => {
  const [tab, setTab] = useState("Experience");

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
      {/* segmented control — active tab is pressed into the surface */}
      <div
        role="tablist"
        aria-label="Resume sections"
        className="flex shrink-0 gap-2 overflow-x-auto rounded-[26px] p-2 shadow-neu-in lg:w-[240px] lg:flex-col lg:overflow-visible lg:rounded-[30px] lg:p-3"
      >
        {TABS.map((name) => {
          const active = tab === name;
          return (
            <button
              key={name}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setTab(name)}
              className={`relative shrink-0 rounded-[20px] px-6 py-3.5 text-left font-display text-[15px] font-semibold tracking-tight transition-colors duration-300 lg:px-7 lg:py-4 ${
                active ? "text-accent" : "text-ink-muted hover:text-ink"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="resume-tab"
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="absolute inset-0 rounded-[20px] bg-surface shadow-neu-sm"
                />
              )}
              <span className="relative">{name}</span>
            </button>
          );
        })}
      </div>

      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={tab} variants={panel} initial="hidden" animate="show" exit="exit">
            {tab === "Experience" && (
              <ol className="flex flex-col gap-6">
                {experience.map((job) => (
                  <li key={job.company} className="rounded-[30px] bg-surface p-7 shadow-neu sm:p-9">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-display text-[21px] font-semibold tracking-tight">{job.position}</h3>
                      <span className="text-[13px] text-ink-faint tnum">{job.duration}</span>
                    </div>
                    <p className="mt-2 flex items-center gap-2.5 text-[15px] text-ink-muted">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${job.current ? "animate-breathe bg-accent" : "bg-ink-faint"}`}
                      />
                      {job.company}
                    </p>
                    {job.highlights.length > 0 && (
                      <ul className="mt-6 flex flex-col gap-3.5">
                        {job.highlights.map((point) => (
                          <li key={point} className="flex gap-3.5 text-[15px] leading-relaxed text-ink-muted">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full shadow-neu-in-sm" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            )}

            {tab === "Education" && (
              <ol className="grid gap-6 sm:grid-cols-2">
                {education.map((edu) => (
                  <li key={edu.degree} className="rounded-[28px] bg-surface p-7 shadow-neu">
                    <span className="text-[13px] text-ink-faint tnum">{edu.duration}</span>
                    <h3 className="mt-2 font-display text-[19px] font-semibold leading-snug tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="mt-3 flex items-center gap-2.5 text-[15px] text-ink-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" />
                      {edu.institution}
                    </p>
                  </li>
                ))}
              </ol>
            )}

            {tab === "Skills" && (
              <div className="flex flex-col gap-6">
                {skillGroups.map((group) => (
                  <div key={group.group} className="rounded-[28px] bg-surface p-7 shadow-neu">
                    <h3 className="font-display text-[17px] font-semibold tracking-tight text-accent">
                      {group.group}
                    </h3>
                    <ul className="mt-5 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full px-4 py-2.5 text-[13px] text-ink-muted shadow-neu-in-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {tab === "About" && (
              <div className="rounded-[30px] bg-surface p-7 shadow-neu sm:p-9">
                <p className="max-w-[68ch] text-[17px] leading-relaxed text-ink-muted">{profile.about}</p>
                <dl className="mt-9 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div key={fact.k} className="flex flex-col gap-1">
                      <dt className="text-[12px] uppercase tracking-[0.14em] text-ink-faint">{fact.k}</dt>
                      <dd className="text-[15px] text-ink">{fact.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeTabs;
