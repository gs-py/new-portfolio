import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import ResumeTabs from "@/components/ResumeTabs";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, personSchema, webPageSchema } from "@/lib/schema";

const description =
  "Experience, education and stack for Gladwin Santhosh — Full Stack Developer at LyfSkills, shipping React, Next.js, FastAPI and React Native in production.";

export const metadata = pageMeta({
  title: "Resume",
  description,
  path: "/resume",
  eyebrow: "Experience",
});

const Resume = () => (
  <section className="container py-12 lg:py-20">
    <JsonLd
      data={graph(
        webPageSchema({ type: "ProfilePage", path: "/resume", name: "Resume", description }),
        breadcrumbSchema([{ name: "Resume", path: "/resume" }])
      )}
    />
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.05]">Resume</h1>
        <p className="mt-4 max-w-[56ch] text-[17px] leading-relaxed text-ink-muted">
          Three years from research fellowship to owning a five-repo production surface.
        </p>
      </div>
      <Link href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <FiDownload className="text-base" />
        Download CV
      </Link>
    </div>

    <div className="mt-14">
      <ResumeTabs />
    </div>
  </section>
);

export default Resume;
