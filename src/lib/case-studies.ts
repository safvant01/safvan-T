import mockup2 from "@/assets/mockup-2.png.asset.json";
import seatMapBoard from "@/assets/seat-map-case-study-board-v2.jpg.asset.json";
import luxuryPerfumeBoard from "@/assets/luxury-perfume-case-study-board.jpg.asset.json";
import topoBoard from "@/assets/topo-aluminum-window-case-study-board.jpg.asset.json";
import dashboardScreen from "@/assets/office-sphere-dashboard-screen.png.asset.json";

const IMG = "https://safvan.netlify.app/image/";

export type CaseStudy = {
  slug: string;
  title: string;
  intro: string;
  year: string;
  role: string;
  client: string;
  timeline: string;
  hero?: string;
  problem: string;
  changed: string[];
  learned: string;
  outcome: string;
  liveUrl: string;
  gallery?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "seat-map-app",
    title: "Seat Map App",
    intro:
      "A mobile seat-selection experience that lets people browse, compare and book seats in a few taps. I designed the full flow from onboarding to checkout, with a visual seat map at its core.",
    year: "2026",
    role: "UI/UX Designer",
    client: "Personal project",
    timeline: "4 weeks",
    hero: mockup2.url,
    gallery: seatMapBoard.url,
    problem:
      "Booking a seat usually means decoding a cramped, grey grid that all looks the same. People couldn't tell which seats were good value, and the steps between picking a seat and paying felt long enough to abandon.",
    changed: [
      "I mapped the booking journey and cut it to three steps: choose, review, pay. The seat map became the hero — a clear, color-coded layout where availability, price tiers and the best views are readable at a glance.",
      "Onboarding and checkout screens were redesigned around one decision per screen, with persistent seat details so users never lose their selection while comparing options.",
    ],
    learned:
      "People don't want more seat information — they want the right three facts (view, price, legroom) at the moment they tap. Everything else can wait one tap deeper.",
    outcome:
      "The final prototype flows from opening the app to a confirmed seat in under a minute, and usability tests showed users could identify the best-value seat without any guidance.",
    liveUrl: "https://safvan.netlify.app/car_rent_wireframe",
  },
  {
    slug: "seat-map-logo-design",
    title: "Luxury Perfume website Design",
    intro:
      "Aromeo is a luxury perfume brand website built around one feeling — quiet, premium, and impossible to scroll past. I designed the full site from cover to footer, with a dark, glowing product world at its centre.",
    year: "2025",
    role: "UI/UX Designer",
    client: "Personal project",
    timeline: "3 weeks",
    hero: IMG + "Luxury%20perfume%20web.svg",
    gallery: luxuryPerfumeBoard.url,
    problem:
      "A perfume website has to sell a scent people cannot smell. The first screen had to carry that weight on its own, and the page beneath it had to keep the story moving through collection, offer and craft without turning into a catalogue.",
    changed: [
      "I set the visual language first — near-black backgrounds, a single royal blue accent and a soft glow that makes every bottle look lit from inside — then built the hero around one bottle on stone and a clear promise: 'Luxury Scents That Leave A Lasting Impression.'",
      "Below the hero the page runs on rhythm: featured collection, a seasonal offer, the signature grid with All / Men / Women filters, the craft story and the footer — each section given one job and enough dark space to breathe.",
    ],
    learned:
      "For a premium brand, restraint is the message. Holding the palette to black, white, deep navy and one blue let the photography do the persuading — the site felt more expensive the less I added.",
    outcome:
      "The design ships as a complete website with a defined colour palette and type system (Kugile for headers, Poppins for body), ready to be handed to development.",
    liveUrl: "https://safvan.netlify.app/luxuryperfume",
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    intro:
      "A large-format poster series exploring bold typography, color and composition — designed to stop people mid-scroll and mid-step.",
    year: "2025",
    role: "Graphic Designer",
    client: "Self-initiated",
    timeline: "1 week",
    hero: IMG + "music%20web%20design.png",
    problem:
      "A poster has about two seconds to earn attention. The challenge was building a composition that communicates one clear message instantly, then rewards a longer look.",
    changed: [
      "I built the layout around a single dominant visual and a tight type hierarchy, so the headline lands first and supporting details follow naturally.",
      "Color and contrast were tuned for both screen and print viewing distances, keeping the piece legible from across a room and rich up close.",
    ],
    learned:
      "Restraint beats decoration. Removing elements until only the essential ones remained made the poster stronger at every stage of the process.",
    outcome:
      "The final poster works across digital and print formats and became part of my ongoing visual exploration series.",
    liveUrl: "https://safvan.netlify.app/musiclandingfull",
  },
  {
    slug: "food-ordering-app",
    title: "Food Ordering App",
    intro:
      "A food delivery app concept designed around one goal: get hungry people from craving to checkout as fast and appetizingly as possible.",
    year: "2025",
    role: "UI/UX Designer",
    client: "Personal project",
    timeline: "3 weeks",
    hero: IMG + "Food%20ordeign%20app%20desi%20new.png",
    problem:
      "Most food apps bury dishes under categories, banners and upsells. People open them already knowing roughly what they want, and every extra screen between them and the order costs conversions.",
    changed: [
      "I designed a browse-first home screen where food photography does the selling, with search and reordering one tap away.",
      "The cart and checkout flow was compressed into a single, clear path with live order totals, so users always know where they stand.",
    ],
    learned:
      "In food apps, photography is the interface. Giving dishes more room and UI chrome less made every screen feel faster, even before any optimization.",
    outcome:
      "The high-fidelity prototype covers the full journey from browsing to order confirmation, ready for development handoff.",
    liveUrl: "https://safvan.netlify.app/foodordeingapp",
  },
  {
    slug: "poster-design-2",
    title: "Poster Design",
    intro:
      "A promotional poster crafted for print and digital — bold color, clean type and a single message delivered with impact.",
    year: "2025",
    role: "Graphic Designer",
    client: "Self-initiated",
    timeline: "1 week",
    gallery: dashboardScreen.url,
    problem:
      "The piece needed to feel premium at billboard scale and as a social media crop, two formats with opposite viewing conditions.",
    changed: [
      "I designed the composition on a flexible grid that keeps the focal point and headline intact across every crop ratio.",
      "Mockups in real environments — walls, billboards and feeds — guided refinements to scale, contrast and spacing.",
    ],
    learned:
      "Designing in context changes decisions. Seeing the poster on a real facade exposed contrast issues that were invisible on the artboard.",
    outcome:
      "The final artwork ships in print-ready and social formats, with the composition surviving every crop.",
    liveUrl: "https://safvan.netlify.app/works/Perfume%20web/",
  },
  {
    slug: "logo-design",
    title: "Aluminum Window Website Design",
    intro:
      "TOPO — premium aluminum window solutions for modern living. I designed the full website around one idea: let the architecture do the selling, with the windows framed as the product rather than a spec sheet.",
    year: "2025",
    role: "UI/UX Designer",
    client: "Personal project",
    timeline: "3 weeks",
    gallery: topoBoard.url,
    problem:
      "Aluminum windows are sold on things people can't see in a photo — durability, thermal insulation, weather resistance. The first screen had to carry that weight on its own, and the page beneath it had to keep the story moving through products, features and gallery without turning into a catalogue.",
    changed: [
      "I set the visual language first — a blue of #0066B2 on white with a soft #E1ECFF tint — then built the hero around one full-bleed architectural photograph and a single promise: 'Framing the future of modern living.'",
      "Below the hero the page runs on rhythm: About, Our Products, Why Choose Topo, client reviews, product features, an FAQ and a project gallery — each section given one job, with Poppins for headers and Montserrat for body holding the type system together.",
    ],
    learned:
      "For a product people buy on trust, photography is the argument. Holding the palette to one blue and two neutrals let the interiors persuade, and the copy only had to keep up.",
    outcome:
      "The design ships as a complete, responsive website — desktop and mobile — with a defined colour palette and type system, ready to be handed to development.",
    liveUrl: "https://www.behance.net/gallery/257567419/Aluminum-Window-Website-Design",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const nextCaseStudy = (slug: string): CaseStudy => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(i + 1) % caseStudies.length];
  if (!next) throw new Error(`No case study after ${slug}`);
  return next;
};
