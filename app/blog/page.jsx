import { posts } from "@/lib/data";

export const metadata = {
  title: "Writing",
  description:
    "Engineering case studies from production work: scaling organic search to 15M impressions, shipping across five codebases, and building booking flows end to end.",
};

const Blog = () => (
  <section className="container py-12 lg:py-20">
    <div className="max-w-[62ch]">
      <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.05]">Writing</h1>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">
        Case studies from real production work — the problem, the decision, and the number it moved.
      </p>
    </div>

    <div className="mt-14 flex flex-col gap-10">
      {posts.map((post, i) => (
        <div key={post.slug}>
          <article id={post.slug} className="rounded-[34px] bg-surface p-7 shadow-neu sm:p-11">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent shadow-neu-in-sm">
                {post.tag}
              </span>
              <span className="text-[13px] text-ink-faint">{post.date}</span>
            </div>

            <h2 className="mt-6 max-w-[24ch] font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-[1.14]">
              {post.title}
            </h2>

            <dl
              className={`mt-8 grid grid-cols-2 gap-y-7 rounded-[24px] px-6 py-7 shadow-neu-in ${
                post.metrics.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
              }`}
            >
              {post.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="block font-display text-[26px] font-bold leading-none tracking-tight tnum">
                      {metric.value}
                    </span>
                    <span className="mt-2 block text-[12px] text-ink-faint">{metric.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 max-w-[68ch] text-[17px] leading-[1.75] text-ink">{post.intro}</p>

            <div className="mt-9 flex flex-col gap-8">
              {post.sections.map((section) => (
                <div key={section.heading} className="max-w-[68ch]">
                  <h3 className="font-display text-[18px] font-semibold tracking-tight">{section.heading}</h3>
                  <p className="mt-2.5 text-[16px] leading-[1.75] text-ink-muted">{section.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;
