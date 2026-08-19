import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Page not found",
  // A soft 404 that ranks is worse than no page at all.
  robots: { index: false, follow: true },
};

const NotFound = () => (
  <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
    <p className="font-display text-[clamp(4rem,14vw,8rem)] font-bold leading-none engraved">404</p>
    <h1 className="mt-8 font-display text-[clamp(1.5rem,3vw,2rem)] font-bold">This page doesn&apos;t exist</h1>
    <p className="mt-3 max-w-[44ch] text-[16px] text-ink-muted">
      The link may be old, or the page moved. Everything else is still where you left it.
    </p>
    <Link href="/" className="btn-ghost mt-9">
      <FiArrowLeft className="text-base" />
      Back home
    </Link>
  </section>
);

export default NotFound;
