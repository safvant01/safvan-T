import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCaseStudy } from "@/lib/case-studies";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Case study"} — Muhammed Safvan T` },
      { name: "description", content: loaderData?.intro ?? "" },
      { property: "og:title", content: `${loaderData?.title ?? "Case study"} — Muhammed Safvan T` },
      { property: "og:description", content: loaderData?.intro ?? "" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const study = Route.useLoaderData();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const reveal = (el: HTMLElement) => el.removeAttribute("data-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().bottom < 0) { reveal(element); return; }
      element.setAttribute("data-reveal", "pending");
      observer.observe(element);
    });

    const fallback = window.setTimeout(() => {
      elements.forEach((element) => {
        if (element.hasAttribute("data-reveal")) {
          reveal(element);
          observer.unobserve(element);
        }
      });
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      elements.forEach((element) => element.removeAttribute("data-reveal"));
    };
  }, [study.slug]);

  return (
    <div className="grain min-h-screen">

      {/* Nav */}
      <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border bg-card/70 p-2 backdrop-blur-md">
          <Link to="/" className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">MS</Link>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/" hash="work" className="hover:text-foreground">Work</Link>
            <Link to="/" hash="about" className="hover:text-foreground">About</Link>
          </div>
          <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        <Link to="/" hash="work" className="reveal inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <h1 className="reveal mt-8 font-display text-6xl font-bold tracking-[-0.04em] md:text-8xl">{study.title}</h1>
        <p className="reveal mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{study.intro}</p>

        {/* Meta */}
        <div className="reveal mt-12 grid grid-cols-2 gap-8 border-y py-8 sm:grid-cols-4">
          {[
            ["Year", study.year],
            ["Role", study.role],
            ["Client", study.client],
            ["Timeline", study.timeline],
          ].map(([l, v]) => (
            <div key={l}>
              <div className="label-mono">{l}</div>
              <div className="mt-2 text-sm">{v}</div>
            </div>
          ))}
        </div>

        {/* Hero image */}
        {study.hero && (
          <div className="reveal mt-12 overflow-hidden rounded-3xl border bg-card">
            <img src={study.hero} alt={study.title} className="w-full object-cover" />
          </div>
        )}

        {/* Full case study board */}
        {study.gallery && (
          <div className={`reveal ${study.hero ? "mt-6" : "mt-12"} overflow-hidden rounded-3xl border bg-card`}>
            <img src={study.gallery} alt={`${study.title} — full case study`} loading="lazy" className="w-full" />
          </div>
        )}

        {/* Body */}
        <div className="mt-20 space-y-20">
          <section className="reveal">
            <div className="label-mono">The problem</div>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">{study.problem}</p>
          </section>

          <section className="reveal">
            <div className="label-mono">What I changed</div>
            <div className="mt-4 max-w-2xl space-y-4">
              {study.changed.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
          </section>

          <section className="reveal rounded-3xl border bg-card p-8 md:p-12">
            <div className="label-mono">What I learned</div>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">{study.learned}</p>
          </section>

        </div>
      </article>


      {/* CTA */}
      <section className="mx-auto max-w-6xl border-t px-6 py-28 text-center">
        <div className="label-mono">Contact</div>
        <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.04em] md:text-7xl">Have a project like this?</h2>
        <a href="https://www.linkedin.com/in/muhammed-safvan-t1/" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
          Let's Talk <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Muhammed Safvan T
      </footer>
    </div>
  );
}
