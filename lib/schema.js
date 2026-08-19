import { abs, SITE_TITLE, SITE_DESCRIPTION, ogImageUrl } from "@/lib/seo";
import { education, experience, posts, profile, projects, services, skillGroups } from "@/lib/data";

const PERSON_ID = abs("/#person");
const SITE_ID = abs("/#website");

/** Referenced by @id everywhere else so the graph has one Person node, not six. */
export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  url: abs("/"),
  jobTitle: profile.role,
  description: profile.about,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  image: ogImageUrl({ title: profile.name, subtitle: profile.role }),
  nationality: profile.nationality,
  knowsLanguage: profile.languages.split(", "),
  knowsAbout: skillGroups.flatMap((group) => group.items),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: education.map((item) => ({ "@type": "EducationalOrganization", name: item.institution })),
  sameAs: [profile.github, profile.linkedin],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: abs("/"),
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};

export const breadcrumbSchema = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

export const webPageSchema = ({ type = "WebPage", path, name, description }) => ({
  "@type": type,
  "@id": abs(`${path}#webpage`),
  url: abs(path),
  name,
  description,
  inLanguage: "en",
  isPartOf: { "@id": SITE_ID },
  about: { "@id": PERSON_ID },
  ...(type === "ProfilePage" ? { mainEntity: { "@id": PERSON_ID } } : {}),
});

export const projectsSchema = {
  "@type": "ItemList",
  name: "Selected projects",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      genre: project.category,
      image: abs(project.image),
      keywords: project.stack.join(", "),
      author: { "@id": PERSON_ID },
      ...(project.live || project.github ? { url: project.live ?? project.github } : {}),
    },
  })),
};

export const servicesSchema = {
  "@type": "ItemList",
  name: "Services",
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.title,
      provider: { "@id": PERSON_ID },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
  })),
};

export const postSchema = (post) => ({
  "@type": "BlogPosting",
  "@id": abs(`/blog/${post.slug}#article`),
  headline: post.title,
  description: post.intro,
  articleSection: post.tag,
  keywords: post.keywords?.join(", "),
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  inLanguage: "en",
  url: abs(`/blog/${post.slug}`),
  mainEntityOfPage: { "@id": abs(`/blog/${post.slug}#webpage`) },
  image: ogImageUrl({ title: post.title, subtitle: post.intro, eyebrow: post.tag }),
  wordCount: [post.intro, ...post.sections.map((section) => section.body)].join(" ").split(/\s+/).length,
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
});

export const blogSchema = {
  "@type": "Blog",
  "@id": abs("/blog#blog"),
  name: "Writing",
  description: "Engineering case studies from production work.",
  url: abs("/blog"),
  inLanguage: "en",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    "@id": abs(`/blog/${post.slug}#article`),
    headline: post.title,
    datePublished: post.publishedAt,
    url: abs(`/blog/${post.slug}`),
  })),
};

/** One @graph per page — cheaper for crawlers than N sibling script tags. */
export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes.flat() });
