import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/safvan-portrait.png.asset.json";
import topoMockup from "@/assets/topo-aluminum-mockup.png.asset.json";
import mockup2 from "@/assets/mockup-2.png.asset.json";
import tealPoster from "@/assets/teal-poster-mockup.png.asset.json";
import hennaSignage from "@/assets/henna-mirah-emerald-signage.png.asset.json";
import seatMapIcon from "@/assets/seat-map-app-icon-mockup.png.asset.json";
import marketingPoster from "@/assets/digital-marketing-poster.png.asset.json";
import billboardPoster from "@/assets/digital-marketing-billboard-poster.png.asset.json";
import knovistaPoster from "@/assets/knovista-fullstack-course-wall-poster.png.asset.json";
import futuraPoster from "@/assets/futura-labs-vacation-course-billboard.png.asset.json";
import easterFacade from "@/assets/easter-poster-slatted-facade.png.asset.json";
import homeFlyer from "@/assets/malayalam-3d-home-design-flyer.png.asset.json";
import dashboardMockup from "@/assets/office-sphere-dashboard-mockup.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Safvan T — UI/UX Designer & Front-End Developer" },
      { name: "description", content: "Portfolio of Muhammed Safvan T, a UI/UX designer and front-end developer crafting intuitive, accessible digital experiences." },
      { property: "og:title", content: "Muhammed Safvan T — UI/UX Designer" },
      { property: "og:description", content: "Web design, app design, user research and front-end development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const IMG = "https://safvan.netlify.app/image/";
type Work = { t: string; k: string; img?: string; src?: string; href: string; slug?: string; g?: string; e?: string };
const imgSrc = (w: Work) => w.src ?? IMG + w.img;

const works: Work[] = [
  { t: "Poster Design", g: "Seat Map App", k: "\n", src: mockup2.url, href: "car_rent_wireframe", slug: "seat-map-app" },
  { t: "Website Design", e: "Logo Design", g: "Luxury Perfume Website", k: "\n", img: "Luxury%20perfume%20web.svg", href: "luxuryperfume", slug: "seat-map-logo-design" },
  { t: "Poster Design", g: "Aluminum Website Design", k: "\n", src: topoMockup.url, href: "https://www.behance.net/gallery/257567419/Aluminum-Window-Website-Design", slug: "logo-design" },
  { t: "Food App Design", e: "Poster Design", k: "\n", img: "Food%20ordeign%20app%20desi%20new.png", href: "foodordeingapp", slug: "food-ordering-app" },
  { t: "Dashboard Design", e: "Poster Design", k: "\n", src: dashboardMockup.url, href: "works/Perfume%20web/", slug: "poster-design-2" },
  { t: "Logo Design", g: "Music Website", k: "\n", img: "music%20web%20design.png", href: "musiclandingfull", slug: "poster-design" },
  { t: "Poster Design", k: "", img: "watch%20web%20img.png", href: "watchweb" },
  { t: "Poster Design", k: "\n", img: "food%20ordering%20mockup%20wire.png", href: "foodorderinwir" },
  { t: "Poster Design", k: "\n", img: "grocery%20app%20wireframe%20new.png", href: "grocery_app_wireframe" },
];

const experience = [
  { when: "2026 — May", role: "UI/UX & Graphic Designer", org: "Knovista Technologies, Lulu IT Twin Towers", desc: "Designing and building websites, landing pages and app interfaces for clients — from wireframes to production code." },
  { when: "2025 — Present", role: "Graphic Design & AI Video Creation", org: "Freelance", desc: "Designing brand identities, posters and social creatives, and producing AI-generated videos for products and brands — from concept to final cut." },
  { when: "2025 - July", role: "UI/UX & Graphic Designer", org: "Softroniics", desc: "Designing user-centric product interfaces and compelling brand visuals, including wireframes, layouts, and graphic assets for diverse client projects." },
];

const services = [
  { t: "UI/UX Design", d: "Intuitive, user-centered interfaces with a focus on usability, accessibility and design consistency." },
  { t: "Graphic Design", d: "Logos, brand identities, posters and social media creatives that make a business stand out." },
  { t: "AI Video Creation", d: "Engaging AI-generated videos for products, brands and social media — from concept to final cut." },
];

const tools = ["Figma", "Photoshop", "Illustrator", "HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "Claude", "Framer", "FigJam", "Google Stitch", "Lovable"];

// The Visual & Creative Design gallery: three columns, two cards each.
// Shapes are chosen so every column ends on the same line and no picture loses its text or subject.
const workAt = (i: number): Work => works[i] ?? { t: "", k: "", href: "" };
type Exploration = { w: Work; img: string; a: string };
const explorations: Exploration[][] = [
  [
    { w: workAt(8), img: tealPoster.url, a: "aspect-[3/4]" },
    { w: workAt(7), img: knovistaPoster.url, a: "aspect-square" },
    { w: workAt(3), img: easterFacade.url, a: "aspect-square" },
  ],
  [
    { w: workAt(5), img: hennaSignage.url, a: "aspect-[6/5]" },
    { w: workAt(4), img: billboardPoster.url, a: "aspect-[4/5]" },
    { w: workAt(6), img: futuraPoster.url, a: "aspect-[4/5]" },
  ],
  [
    { w: workAt(2), img: marketingPoster.url, a: "aspect-[3/4]" },
    { w: workAt(1), img: seatMapIcon.url, a: "aspect-square" },
    { w: workAt(0), img: homeFlyer.url, a: "aspect-square" },
  ],
];


const socials = [
  { n: "Behance", u: "https://www.behance.net/muhammadsafvan8" },
  { n: "LinkedIn", u: "https://www.linkedin.com/in/muhammed-safvan-t1/" },
  { n: "Dribbble", u: "https://dribbble.com/account/profile" },
  { n: "Instagram", u: "https://instagram.com/mo_safvan.____" },
];

function Index() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll<HTMLElement>('#explorations .reveal');
    const reveal = (el: HTMLElement) => el.removeAttribute('data-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    elements.forEach((element) => {
      // Cards already scrolled past sit above the viewport and would never
      // intersect again — show them immediately instead of hiding them.
      if (element.getBoundingClientRect().bottom < 0) { reveal(element); return; }
      element.setAttribute('data-reveal', 'pending');
      observer.observe(element);
    });

    // Safety net: never leave a card shifted out of line if the observer misses it.
    const fallback = window.setTimeout(() => {
      elements.forEach((element) => {
        if (element.hasAttribute('data-reveal')) {
          reveal(element);
          observer.unobserve(element);
        }
      });
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      elements.forEach((element) => element.removeAttribute('data-reveal'));
    };
  }, []);

  return (
    <div className="grain min-h-screen">
      {/* Nav */}
      <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border bg-card/70 p-2 backdrop-blur-md">
          <a href="#top" className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">MS</a>
          <div className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#top" className="hover:text-foreground">Home</a>
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#explorations" className="hover:text-foreground">Explorations</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Let's Talk <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-24">
        <h1 className="font-display text-[15vw] font-bold leading-[0.9] tracking-[-0.06em] sm:text-[9.5rem]">
          Muhammed Safvan T
        </h1>
        <p className="mt-10 max-w-xl text-xl leading-relaxed">
          I design intuitive digital products and build the front end myself.{" "}
          <span className="text-muted-foreground">Great design is invisible — it guides without getting in the way.</span>
        </p>
      </section>

      {/* Marquee */}
      <div className="fade-edges mt-20 overflow-hidden">
        <div className="marquee flex w-max gap-4">
          {[...works, ...works].map((w, i) => (
            <img key={i} src={imgSrc(w)} alt={w.t} loading="lazy" className="h-56 w-80 shrink-0 rounded-xl bg-card object-cover" />
          ))}
        </div>
      </div>

      {/* Info row */}
      <section className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-8 border-b px-6 pb-10 md:flex md:flex-nowrap md:justify-between">
        {[
          ["Role", "UI/UX Graphic Designer · Front-End Dev"],
          ["Based in", "Kerala, India"],
          ["PREFERRED", "All GCC Countries & UAE"],
        ].map(([l, v]) => (
          <div key={l}><div className="label-mono">{l}</div><div className={`mt-2 text-sm${l === "Role" ? " md:whitespace-nowrap" : ""}`}>{v}</div></div>
        ))}
        <div>
          <div className="label-mono">Availability</div>
          <div className="mt-2 flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-success" />Open for projects</div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <div className="label-mono">Selected work</div>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-tight">Recent projects.</h2>
        <p className="mt-3 text-muted-foreground">Website Design, App Design and Dashboard.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.slice(0, 6).map((w, i) => (
            <Link key={w.t + i} to="/work/$slug" params={{ slug: w.slug! }} className="group">

              <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-card">
                <img src={imgSrc(w)} alt={w.t} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <div className="font-semibold">{w.g ?? w.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{w.k}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl gap-12 border-t px-6 py-28 md:grid-cols-[1fr_1.4fr]">
        <div>
          <img src={portrait.url} alt="Muhammed Safvan T" className="aspect-[3/4] w-full rounded-2xl border bg-card object-cover" />
          <div className="mt-4 flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-success" />Open for new projects</div>
        </div>
        <div>
          <div className="label-mono">About</div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Designing meaningful experiences that connect people and products.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>Hi, I’m Muhammed Safvan T, a UI/UX Designer and Graphic Designer focused on creating intuitive, engaging, and visually impactful digital experiences.</p>
            <p>I combine user-centered design, visual design, and technology to transform ideas into meaningful digital products — from research, wireframes, and user flows to high-fidelity interfaces and interactive prototypes.<br /><br />With experience in Figma, design systems, branding, graphic design, front-end development, WordPress, and AI-powered design tools, I enjoy solving complex problems through simple, thoughtful, and effective design.</p>
          </div>


          <div className="label-mono mt-14">Where I've worked</div>
          <div className="mt-4 divide-y border-y">
            {experience.map((e, i) => (
              <div key={e.role + i} className="py-6">

                <div className="font-mono text-xs text-muted-foreground">{e.when}</div>
                <div className="mt-2 text-lg font-semibold">{e.role}</div>
                <div className="text-sm text-primary">{e.org}</div>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="rounded-full border bg-card px-4 py-1.5 text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Explorations */}
      <section id="explorations" className="mx-auto max-w-[1440px] border-t px-6 py-28 sm:px-10 lg:px-16">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="label-mono">Explorations</div>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight">Visual &amp; Creative Design</h2>
          <p className="mt-4 text-muted-foreground">Branding, social media creatives and visual explorations..</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {explorations.map((col, c) => (
            <div key={c} className="flex flex-col justify-between gap-6">
              {col.map((item, i) => (
                <figure key={item.w.t + i} className="reveal group">
                  <div className="overflow-hidden rounded-3xl bg-card">
                    <img src={item.img} alt={item.w.t} loading="lazy" className={`w-full object-cover transition duration-700 ease-out group-hover:scale-105 ${item.a}`} />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-4 px-1">
                    <span className="text-base">{item.w.e ?? item.w.t}</span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">{item.w.k}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl border-t px-6 py-28">
        <div className="label-mono">Services</div>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-tight">What I do.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.t} className="rounded-2xl border bg-card p-8">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <div className="mt-6 text-xl font-semibold">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl border-t px-6 py-28 text-center">
        <div className="label-mono">Contact</div>
        <h2 className="mt-4 font-display text-6xl font-bold tracking-[-0.04em] md:text-8xl">Have a project?</h2>
        <a href="mailto:safvan1375@gmail.com" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
          Let's Talk <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          {socials.map((s) => (
            <a key={s.n} href={s.u} target="_blank" rel="noreferrer" className="hover:text-foreground">{s.n}</a>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Muhammed Safvan T
      </footer>
    </div>
  );
}
