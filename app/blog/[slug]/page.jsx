import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import JsonLd from "@/components/JsonLd";
import { posts } from "@/lib/data";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, graph, postSchema, webPageSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return {};

  return pageMeta({
    title: post.title,
    description: post.intro,
    path: `/blog/${post.slug}`,
    eyebrow: post.tag,
    socialTitle: post.title,
    type: "article",
    publishedTime: post.publishedAt,
    tags: post.keywords,
  });
}

const Post = ({ params }) => {
  const index = posts.findIndex((item) => item.slug === params.slug);
  if (index === -1) notFound();

  const post = posts[index];
  const next = posts[(index + 1) % posts.length];

  return (
    <article className="container py-12 lg:py-20">
      <JsonLd
        data={graph(
          webPageSchema({
            path: `/blog/${post.slug}`,
            name: post.title,
            description: post.intro,
          }),
          breadcrumbSchema([
            { name: "Writing", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          postSchema(post)
        )}
      />

      <Link href="/blog" className="group inline-flex items-center gap-2 text-[15px] text-ink-muted hover:text-accent">
        <FiArrowLeft className="transition-transform duration-300 ease-soft group-hover:-translate-x-0.5" />
        All writing
      </Link>

      <header className="mt-9 max-w-[24ch]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent shadow-neu-in-sm">
            {post.tag}
          </span>
          <time dateTime={post.publishedAt} className="text-[13px] text-ink-faint">
            {post.date}
          </time>
        </div>
        <h1 className="mt-6 font-display text-[clamp(2rem,4.4vw,3rem)] font-bold leading-[1.1]">{post.title}</h1>
      </header>

      <dl
        className={`mt-10 grid grid-cols-2 gap-y-7 rounded-[24px] px-6 py-7 shadow-neu-in ${
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

      <p className="mt-10 max-w-[68ch] text-[17px] leading-[1.75] text-ink">{post.intro}</p>

      <div className="mt-10 flex flex-col gap-9">
        {post.sections.map((section) => (
          <section key={section.heading} className="max-w-[68ch]">
            <h2 className="font-display text-[clamp(1.2rem,2.2vw,1.5rem)] font-semibold tracking-tight">
              {section.heading}
            </h2>
            <p className="mt-3 text-[16px] leading-[1.75] text-ink-muted">{section.body}</p>
          </section>
        ))}
      </div>

      <nav aria-label="More writing" className="mt-16 rounded-[30px] bg-surface p-7 shadow-neu sm:p-9">
        <p className="text-[12px] uppercase tracking-[0.14em] text-ink-faint">Read next</p>
        <Link
          href={`/blog/${next.slug}`}
          className="group mt-3 flex items-center justify-between gap-6 text-ink hover:text-accent"
        >
          <span className="max-w-[40ch] font-display text-[19px] font-semibold leading-snug tracking-tight">
            {next.title}
          </span>
          <FiArrowRight className="shrink-0 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </article>
  );
};

export default Post;
