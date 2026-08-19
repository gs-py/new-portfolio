import WorkShowcase from "@/components/WorkShowcase";

export const metadata = {
  title: "Work",
  description:
    "Selected projects by Gladwin Santhosh — agentic AI tooling, deepfake detection with ResNeXt and LSTM, and a full-stack SaaS music platform.",
};

const Work = () => (
  <section className="container py-12 lg:py-20">
    <div>
      <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.05]">Work</h1>
      <p className="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-ink-muted">
        Things I built end to end — from an LLM agent that lives in your terminal to a deep learning model that
        catches manipulated video.
      </p>
    </div>

    <div className="mt-14">
      <WorkShowcase />
    </div>
  </section>
);

export default Work;
