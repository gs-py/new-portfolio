import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import ResumeTabs from "@/components/ResumeTabs";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Resume",
  description:
    "Experience, education and stack for Gladwin Santhosh — Full Stack Developer at LyfSkills.",
};

const Resume = () => (
  <section className="container py-12 lg:py-20">
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
