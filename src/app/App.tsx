import { useState, useEffect, useRef, Fragment } from "react";
import { Menu, X, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import dtLogo from "../imports/DTC_logo_enhanced.svg";
import sunblazeImg from "../imports/case_sunblaze_remanso.jpg";
import whitewillowImg from "../imports/case_white_willow_product.jpg";
import gsincImg from "../imports/case_gsinc_annual_report_2024_25.jpg";
import blogRealEstateImg from "../imports/blog_real_estate_branding.png";
import blogAnnualReportImg from "../imports/blog_annual_report.png";
import blogBrandGenesisImg from "../imports/blog_brand_genesis.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type Page = "home" | "about" | "blueprint" | "work" | "insights";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    index: "01",
    title: "Real Estate\nCommunications",
    description:
      "Helping developers communicate projects from concept to launch through strategic positioning, project branding and integrated communication assets.",
    tags: ["Communication Strategy", "Project Positioning", "Sales Brochures", "Digital Communication", "Launch Communication"],
  },
  {
    index: "02",
    title: "Corporate\nBranding",
    description:
      "Building communication systems that strengthen corporate identity, improve stakeholder engagement and create consistent brand experiences across every platform.",
    tags: ["Brand Identity", "Visual Systems", "Messaging Frameworks", "Annual Reports", "Corporate Profiles"],
  },
  {
    index: "03",
    title: "Event\nCommunications",
    description:
      "Creating communication that captures attention before the event, enhances the experience during it and extends its impact long after it concludes.",
    tags: ["Event Identity", "Pre-event Communication", "Spatial & Environmental", "Post-event Publications"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Decision Tree Consulting helped translate our brand promise into clear, engaging communication. Their ability to understand our vision and reflect it consistently across our website strengthened the way we present our business.",
    name: "P. Veeraraja",
    title: "Managing Director, KayPee Homes Pvt. Ltd.",
  },
  {
    quote:
      "Decision Tree quickly understood our brand and translated it into communication that remained clear and consistent across every customer touchpoint. Their ability to combine strategic thinking with timely execution has made them a trusted communication partner.",
    name: "Abhishek Jain",
    title: "Co-Founder, The White Willow",
  },
  {
    quote:
      "Decision Tree captured the essence of our products with remarkable clarity. Their writing didn't just describe our collections—it communicated the craftsmanship, artistry and value behind them.",
    name: "Priya Mulgund Revankar",
    title: "Founder, The KO Jewellery Shop",
  },
  {
    quote:
      "Decision Tree Consulting has become our trusted partner for communicating the work of the Goa State Innovation Council. Their ability to transform complex programmes and achievements into meaningful, engaging publications has made them an integral part of our communication efforts.",
    name: "Sudip Faldesai",
    title: "Project Officer, Goa State Innovation Council",
  },
];

const BLUEPRINT_STAGES = [
  {
    n: "01",
    title: "Discovery",
    subtitle: "Understanding the Business Before Communicating It",
    body: "Every engagement begins with listening. We immerse ourselves in your business to understand its vision, objectives, challenges and aspirations. We study the project, engage with stakeholders and identify what success should look like before communication begins.",
    activities: ["Business Discovery", "Project Understanding", "Stakeholder Discussions", "Vision & Objectives", "Competitive Context", "Existing Communication Audit"],
    outcome: "A clear understanding of the business and the opportunity ahead.",
  },
  {
    n: "02",
    title: "Market",
    subtitle: "Understanding the Environment You Compete In",
    body: "Communication doesn't exist in isolation. We study the competitive landscape, market trends and customer expectations to identify opportunities that can help your brand occupy a distinctive position.",
    activities: ["Market Research", "Competitor Analysis", "Category Benchmarking", "Communication Gap Analysis", "Opportunity Mapping"],
    outcome: "A clearer understanding of the market your communication must compete within.",
  },
  {
    n: "03",
    title: "Buyer Insight",
    subtitle: "Understanding Who You're Really Talking To",
    body: "People don't buy products. They buy solutions, aspirations, lifestyles and experiences. We identify your ideal audience and understand what motivates their decisions, concerns and expectations.",
    activities: ["Buyer Persona Development", "Customer Motivations", "Decision Drivers", "Pain Points", "Purchase Journey"],
    outcome: "Communication rooted in customer insight rather than assumptions.",
  },
  {
    n: "04",
    title: "Positioning",
    subtitle: "Defining Why Your Brand Deserves Attention",
    body: "Positioning is where strategy becomes direction. Together, we define what your audience should remember about your brand and why they should choose you over alternatives. This stage establishes the foundation for every communication asset that follows.",
    activities: ["Brand Positioning", "Value Proposition", "Key Differentiators", "Brand Promise", "Communication Objectives"],
    outcome: "A distinctive market position supported by a clear communication strategy.",
  },
  {
    n: "05",
    title: "Narrative",
    subtitle: "Creating the Story That Connects",
    body: "Every memorable brand tells a consistent story. This stage transforms strategic thinking into meaningful communication by defining the language, personality and emotional direction that will guide every customer interaction.",
    activities: ["Brand Narrative", "Messaging Framework", "Tone of Voice", "Naming", "Tagline", "Storytelling"],
    outcome: "A communication language that reflects your brand consistently across every platform.",
  },
  {
    n: "06",
    title: "Architecture",
    subtitle: "Building the Communication Ecosystem",
    body: "Once the strategy is established, we determine how it should be experienced. Rather than creating isolated deliverables, we design a communication system where every asset plays a defined role in the customer's journey.",
    activities: ["Brand Guidelines", "Website Information Architecture", "Sales Brochures", "Corporate Presentations", "Channel Partner Kits", "Annual Reports", "Digital Communication"],
    outcome: "A connected communication ecosystem where every touchpoint reinforces the same brand promise.",
  },
  {
    n: "07",
    title: "Execution",
    subtitle: "Bringing Strategy to Life",
    body: "Only after the strategic groundwork is complete do we begin creating communication assets. Every deliverable is developed using the Blueprint as its foundation, ensuring consistency across design, content and customer experience.",
    activities: ["Content Development", "Copywriting", "Design Direction", "Brochures", "Presentations", "Digital Assets", "Editorial Publications"],
    outcome: "Communication that is strategic, cohesive and ready for the market.",
  },
];

const CASE_STUDIES = [
  {
    id: "sunblaze",
    title: "Sunblaze Remanso",
    subtitle: "Building a Market Position",
    category: "Real Estate Communications",
    lead: "Creating a Communication System for a Premium Residential Development",
    image: sunblazeImg,
    deliverables: "Brand Strategy · Brochure · Website · Corporate Presentation",
    scope: "Communication Strategy · Buyer Research · Positioning · Naming · Brand Narrative · Brochure Strategy · Website Content & Design · Sales Communication",
    outcome: "A communication system that transformed a collection of premium villas into a distinctive coastal lifestyle proposition—giving the project a clear identity before it entered the market.",
    insight: "Rather than positioning the villas as another luxury development, we built the narrative around the idea of 'Slow Luxury by the Sea'—a home where buyers could own time, tranquillity and the timeless charm of Goa.",
    body: `SunBlaze approached us with a premium residential development in South Goa. Instead of beginning with a brochure or a website, we began with a simple question: "Who is this project really for?"

Through discussions with the developer, market analysis and audience profiling, we identified the project's defining strengths, buyer aspirations and the emotional value it offered beyond its physical spaces. These insights became the foundation for every communication decision that followed.

Our research identified five high-potential buyer segments—from metro-based HNIs and NRIs to lifestyle-driven entrepreneurs, early retirees and premium local buyers. While each had different motivations, they all shared one aspiration: to own a peaceful coastal retreat that offered privacy, permanence and a slower way of life.

That insight shaped the entire communication strategy. The name Remanso, derived from Portuguese, meaning haven or place of peace, perfectly expressed the calm, unhurried lifestyle the project promised.

The brochure was structured to take buyers on a journey—from emotion and aspiration to architecture, lifestyle, location and investment value—allowing them to imagine life at Remanso before evaluating its features.`,
  },
  {
    id: "whitewillow",
    title: "The White Willow",
    subtitle: "Building a Loved Brand Over Time",
    category: "Corporate Branding",
    lead: "Building a Brand That Customers Could Trust, Understand and Remember",
    image: whitewillowImg,
    deliverables: "Brand Identity · Website · Amazon A+ Content · Product Communication",
    scope: "Brand Positioning · Communication Strategy · Brand Narrative · Rebranding Support · Founder Story · Product Naming · Website Information Architecture · Website Content · Amazon A+ Content · Packaging Communication · Social Media Content",
    outcome: "A cohesive brand communication system that brought consistency across digital, print and marketplace platforms while enabling The White Willow to confidently introduce new products and rank as one of the top selling brands on Amazon.",
    insight: "Customers rarely buy a pillow because of its material alone. They buy the promise of deeper sleep, greater comfort and better mornings. That understanding became the foundation for every communication decision.",
    body: `The White Willow began as a premium sleep and wellness brand with a growing product portfolio and ambitious plans for expansion. While the products reflected quality and innovation, communication across different customer touchpoints had evolved over time, resulting in fragmented messaging and an inconsistent brand experience.

Rather than beginning with individual communication assets, we first asked: "What should people remember about The White Willow?"

Our discovery process involved understanding the brand's products, founders' vision, customer expectations and the increasingly competitive sleep solutions market. We recognised that customers were investing in something far more personal—a better night's sleep, improved well-being and everyday comfort.

This insight shifted the communication from describing product features to communicating meaningful benefits. The conversation moved away from foam density and specifications towards rest, recovery and healthier living.

As the brand evolved, so did our engagement. We contributed to the brand's repositioning, developed communication for new product launches, crafted compelling product names, wrote founder and brand stories, restructured website content, created Amazon A+ content, strengthened packaging communication and supported ongoing social media and marketing initiatives.`,
  },
  {
    id: "gsinc",
    title: "Goa State Innovation Council",
    subtitle: "Communicating Innovation through Editorial Design",
    category: "Corporate Publications",
    lead: "Annual Reports & Corporate Publications",
    image: gsincImg,
    deliverables: "Annual Reports · Publications · Innovation Communication",
    scope: "Editorial Strategy · Content Architecture · Annual Report Design Direction · Programme Narrative · Stakeholder Communication · Institutional Publications",
    outcome: "More than a statutory publication—a document that reflected the Council's vision, celebrated its achievements and strengthened its institutional identity.",
    insight: "An annual report should do more than document the past. It should demonstrate impact, inspire confidence and communicate the organisation's direction for the future.",
    body: `Annual reports often become repositories of information—filled with statistics, activities and compliance requirements, but rarely engaging enough to tell the organisation's story.

For the Goa State Innovation Council (GSInC), the objective was different. The publication needed to communicate the Council's vision, demonstrate measurable impact and present a year's worth of initiatives in a way that would resonate with government stakeholders, educational institutions, innovators, industry partners and the public.

Our work began by understanding the Council's programmes, objectives and the larger innovation ecosystem in Goa. Rather than treating each chapter as an independent report, we structured the publication around a coherent narrative that showcased how individual initiatives collectively contributed to nurturing innovation across the state.

Complex programme data, technical achievements and institutional updates were distilled into clear, engaging content supported by thoughtful information hierarchy and editorial structure. Every chapter was carefully rewritten to improve readability while preserving accuracy, ensuring that policy makers, educators, entrepreneurs and students could all engage with the report meaningfully.`,
  },
];

const BLOG_POSTS = [
  {
    id: "branding-challenge-indian-housing",
    category: "Real Estate",
    title: "The Branding Challenge in Indian Housing",
    excerpt: "When amenities stop differentiating projects, clarity of positioning and consistency of communication become commercial advantages.",
    date: "February 19, 2026",
    readTime: "6 min read",
    sourceUrl: "https://decisiontree.in/when-amenities-dont-differentiate/",
    image: blogRealEstateImg,
    body: `This Decision Tree insight explains why strong real estate projects can still sound interchangeable when their communication depends only on amenities, specifications and feature lists.

The central argument is simple: amenities have become expected, not exceptional. When every project talks about pools, clubhouses, landscaped gardens, wellness spaces and smart features, buyers struggle to identify what makes one project meaningfully different from another.

The article reframes real estate branding as a strategic lever. Instead of asking only what the project offers, developers need to define what the project is fundamentally about, who it is for, how its value should be explained and how brokers, sales teams and marketing assets should speak in one consistent voice.

For developers, the practical takeaway is that narrative clarity reduces confusion, strengthens broker conviction and helps buyers understand value before the conversation collapses into price, discounts and payment plans.`,
  },
  {
    id: "annual-report-public-trust",
    category: "Report Writing",
    title: "The Annual Report: From Ticking a Box to Building Public Trust",
    excerpt: "A perspective on transforming annual reports from mandatory documentation into clear, credible and stakeholder-facing institutional narratives.",
    date: "September 3, 2025",
    readTime: "5 min read",
    sourceUrl: "https://decisiontree.in/the-annual-report-from-ticking-a-box-to-building-public-trust/",
    image: blogAnnualReportImg,
    body: `This report-writing insight positions the annual report as more than a mandatory submission or administrative record. It argues that a well-developed report can become a trust-building communication asset for public institutions, companies and stakeholder-facing organisations.

The article is especially relevant to organisations that need to explain complex work, programme achievements, financial information, public value, impact and future direction with clarity.

Rather than treating the annual report as a compliance document, the communication approach should bring structure, editorial clarity and narrative flow to the organisation's achievements. This helps readers understand not only what was done, but why it mattered.

The practical message is that reporting is not only documentation. Done well, it becomes institutional storytelling, credibility building and stakeholder communication.`,
  },
  {
    id: "genesis-of-your-brand",
    category: "Corporate Branding",
    title: "The Genesis of Your Brand",
    excerpt: "Why a website is no longer just a digital address, but the starting point of brand credibility, clarity and conversion.",
    date: "November 10, 2025",
    readTime: "5 min read",
    sourceUrl: "https://decisiontree.in/the-genesis-of-your-brand/",
    image: blogBrandGenesisImg,
    body: `This corporate branding article frames the website as a core business asset rather than a static digital brochure.

For growing businesses, the website is often the first place where customers, partners, investors and employees try to understand the brand. That makes it the genesis of perception: the place where clarity, credibility and conversion begin.

The article's central idea is that businesses cannot treat website content as surface-level copy. The website must communicate the brand's purpose, positioning, value proposition and proof in a way that helps people quickly understand why the business matters.

For corporate brands, this means website strategy, content architecture and narrative are not cosmetic decisions. They are foundational brand decisions.`,
  },
];


// ─── Helpers ──────────────────────────────────────────────────────────────────
function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

function smoothScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Count-up number (e.g. 700+ counts from 0 when scrolled into view) ───────
function CountUp({ value, duration = 1800 }: { value: string; duration?: number }) {
  const m = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!m || !ref.current) return;
    const target = parseInt(m[1], 10);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(target); return; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  if (!m) return <>{value}</>;
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{n}{m[2]}</span>;
}

// ─── Scroll progress + back-to-top ───────────────────────────────────────────
function Extras() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <>
      <div className="progress-bar" aria-hidden style={{ transform: `scaleX(${pct})` }} />
      <button
        className="to-top glass"
        data-show={pct > 0.12 ? "true" : "false"}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowRight size={16} style={{ transform: "rotate(-90deg)" }} />
      </button>
    </>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const scrolled = useScrolled();

  // Soft scroll-reveal for section content
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    const scan = () =>
      document.querySelectorAll("section > div:not(.reveal):not([data-static])").forEach((el) => {
        if (el.closest("[data-hero]")) return;
        el.classList.add("reveal");
        io.observe(el);
      });
    scan();
    const mo = new MutationObserver(() => requestAnimationFrame(scan));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSection = (page: Page, section?: string) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      setMenuOpen(false);
      window.scrollTo({ top: 0 });
      if (section) {
        setTimeout(() => smoothScroll(section), 80);
      }
    } else {
      setMenuOpen(false);
      if (section) smoothScroll(section);
    }
  };

  const openCaseStudy = (id: string) => {
    setActiveCaseStudy(id);
    setCurrentPage("work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", action: () => navigate("about") },
    { label: "Blueprint", action: () => navigate("blueprint") },
    { label: "Work", action: () => navigate("work") },
    { label: "Insights", action: () => navigate("insights") },
    { label: "Contact", action: () => goToSection("home", "#contact") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "var(--font-body)" }}>
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav" data-scrolled={scrolled ? "true" : "false"}>
        <nav className="max-w-[1200px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="flex items-center"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img src={dtLogo} alt="Decision Tree Consulting" className="h-11 lg:h-12 w-auto object-contain" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => goToSection("home", "#contact")}
              className="text-[15px] px-6 py-2.5 transition-all duration-200 rounded-full"
              style={{ borderColor: "var(--foreground)", color: "var(--foreground)", background: "transparent", fontFamily: "var(--font-body)", cursor: "pointer", border: "1.5px solid var(--foreground)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)";
                (e.currentTarget as HTMLElement).style.color = "var(--background)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
              }}
            >
              Discuss Your Project
            </button>
          </div>

          <button className="md:hidden p-2 bg-transparent border-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "380px" : "0",
            background: "var(--glass)",
            backdropFilter: "blur(18px) saturate(1.4)",
            borderBottom: menuOpen ? "1px solid var(--border)" : "none",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button key={link.label} onClick={link.action} className="text-lg text-left bg-transparent border-none cursor-pointer py-1" style={{ color: "var(--foreground)", fontFamily: "var(--font-body)" }}>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <Extras />

      {/* ── PAGE ROUTER ── */}
      <div key={currentPage} className="page-in">
      {currentPage === "home" && (
        <HomePage
          navigateToAbout={() => navigate("about")}
          navigateToBlueprint={() => navigate("blueprint")}
          navigateToWork={() => navigate("work")}
          openCaseStudy={openCaseStudy}
        />
      )}
      {currentPage === "about" && <AboutPage onCTA={() => goToSection("home", "#contact")} />}
      {currentPage === "blueprint" && <BlueprintPage onCTA={() => goToSection("home", "#contact")} />}
      {currentPage === "work" && (
        <WorkPage
          activeCaseStudy={activeCaseStudy}
          setActiveCaseStudy={setActiveCaseStudy}
          onCTA={() => goToSection("home", "#contact")}
        />
      )}
      {currentPage === "insights" && <InsightsPage onCTA={() => goToSection("home", "#contact")} />}

      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t py-10" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <img src={dtLogo} alt="Decision Tree Consulting" className="h-12 lg:h-14 w-auto object-contain mb-2" />
              <div className="text-sm tracking-[0.08em] uppercase" style={{ color: "var(--muted-foreground)" }}>
                Brand Communications — Goa, India
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <button key={link.label} onClick={link.action} className="nav-link" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                  {link.label}
                </button>
              ))}
            </div>
            <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              © 2026 Decision Tree Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────────────────────────────────────
function HomePage({
  navigateToAbout,
  navigateToBlueprint,
  navigateToWork,
  openCaseStudy,
}: {
  navigateToAbout: () => void;
  navigateToBlueprint: () => void;
  navigateToWork: () => void;
  openCaseStudy: (id: string) => void;
}) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const clients = [
    "KayPee Homes", "The White Willow", "Sunblaze Remanso", "Goa State Innovation Council",
    "The KO Jewellery Shop", "KayPee Homes", "The White Willow", "Sunblaze Remanso",
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section data-hero className="pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-12">
            <div className="rise flex flex-col gap-1 mb-6 text-sm tracking-[0.1em] uppercase">
              <span style={{ color: "var(--muted-foreground)" }}>Strategy · Narrative · Design</span>
              <span style={{ color: "var(--accent)" }}>Brand Communications Agency</span>
            </div>
            <h1
              className="rise rise-2 mb-7"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 4.8vw, 3.7rem)", fontWeight: 400, letterSpacing: "-0.015em" }}
            >
              Shaping How{" "}<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Brands</em> Are Understood.
            </h1>
            <p className="rise rise-3 text-lg mb-4 max-w-[540px]" style={{ color: "var(--foreground)" }}>
              Strategic communication that gives brands clarity, character and coherence.
            </p>
            <p className="rise rise-3 text-base mb-9 max-w-[540px]" style={{ color: "var(--muted-foreground)" }}>
              We help organisations define how they should be understood — then translate that thinking into narratives, identities and communication systems that work across critical brand touchpoints.
            </p>
            <div className="rise rise-4 flex flex-wrap gap-4">
              <button
                onClick={() => smoothScroll("#contact")}
                className="inline-flex items-center gap-3 text-base px-7 py-3.5 transition-all duration-200 border-none cursor-pointer rounded-full"
                style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; }}
              >
                Discuss Your Project <ArrowRight size={16} />
              </button>
              <button
                onClick={navigateToWork}
                className="inline-flex items-center gap-3 text-base px-7 py-3.5 transition-all duration-200 cursor-pointer rounded-full"
                style={{ border: "1.5px solid var(--foreground)", color: "var(--foreground)", background: "transparent", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; (e.currentTarget as HTMLElement).style.color = "var(--background)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--foreground)"; }}
              >
                Explore Our Work
              </button>
            </div>
            <div className="rise rise-4 mt-12 hidden md:flex items-center gap-3" style={{ color: "var(--muted-foreground)" }}>
              <div className="w-8 h-px" style={{ backgroundColor: "var(--muted-foreground)" }} />
              <span className="text-sm tracking-[0.1em] uppercase">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div data-static className="border-y py-5 overflow-hidden" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="marquee-track flex gap-12 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
          {[...clients, ...clients].map((c, i) => (
            <Fragment key={i}><span className="text-lg italic shrink-0" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-display)" }}>{c}</span><span aria-hidden className="shrink-0" style={{ color: "var(--accent)" }}>·</span></Fragment>
          ))}
        </div>
      </div>

      {/* ── HOW WE HELP ── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>How We Help</p>
              <h2
                className="leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                We Bring Every{" "}<br />
                Message Together.
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="text-base mb-5" style={{ color: "var(--muted-foreground)" }}>
                We believe communication should never be an afterthought. Before the first brochure is designed or the first campaign is launched, we define how your brand should be positioned, what it should communicate and how every customer touchpoint should reinforce that promise.
              </p>
              <p className="text-base mb-8" style={{ color: "var(--muted-foreground)" }}>
                From communication strategy and storytelling to websites, brochures, presentations, annual reports and digital assets, we create communication systems that help brands present themselves with clarity, consistency and purpose.
              </p>
              <button
                onClick={navigateToAbout}
                className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent bg-transparent border-none cursor-pointer"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-body)" }}
              >
                Learn About Our Practice <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b" style={{ borderColor: "var(--border)" }}>
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Capabilities</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                From clarity to expression.
              </h2>
            </div>
            <p className="max-w-[400px] text-base" style={{ color: "var(--muted-foreground)" }}>
              Our work connects strategic thinking with the communication people eventually see, read and experience.
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6 list-none p-0 m-0">
            {["Brand Strategy & Positioning", "Narrative & Messaging", "Communication Architecture", "Brand Identity & Design", "Brand Assets & Experiences"].map((c, i) => (
              <li key={c} className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="text-sm font-medium mb-2" style={{ color: "var(--accent)" }}>0{i + 1}</div>
                <div className="leading-snug" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}>{c}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section id="services" className="pb-28 lg:pb-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b" style={{ borderColor: "var(--border)" }}>
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Who We Help</p>
              <h2
                className="leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                Three practice areas,{" "}<br />
                one clear objective.
              </h2>
            </div>
            <p className="max-w-[360px] text-base" style={{ color: "var(--muted-foreground)" }}>
              To create communication that builds clarity, trust and preference — regardless of industry.
            </p>
          </div>
          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {SERVICES.map((s) => <ServiceRow key={s.index} service={s} />)}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK TEASER ── */}
      <section
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-5" style={{ color: "var(--accent)" }}>
                Our Framework
              </p>
              <h2
                className="mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em", color: "var(--background)" }}
              >
                Every Great Project{" "}<br />
                Begins With a{" "}<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Clear Direction.</em>
              </h2>
              <p className="text-base mb-8 max-w-[440px]" style={{ color: "rgba(254,250,224,0.78)" }}>
                Our Project Communication Blueprint is the framework that ensures every brochure, website, presentation, campaign and sales conversation grows from one clear communication strategy.
              </p>
              <button
                onClick={navigateToBlueprint}
                className="inline-flex items-center gap-3 text-base tracking-wide px-7 py-3.5 transition-all duration-200 cursor-pointer rounded-full"
                style={{ border: "1.5px solid var(--background)", color: "var(--background)", background: "transparent", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--background)";
                }}
              >
                Explore the Blueprint <ArrowRight size={14} />
              </button>
            </div>
            {/* Stages strip */}
            <div className="grid grid-cols-4 gap-3 lg:gap-4">
              {["Discovery", "Market", "Buyer Insight", "Positioning", "Narrative", "Architecture", "Execution"].map((stage, i) => (
                <div
                  key={stage}
                  className="p-3 lg:p-4"
                  style={{
                    border: "1px solid rgba(254,250,224,0.16)",
                    gridColumn: i === 6 ? "span 1" : undefined,
                  }}
                >
                  <div className="text-[12px] tracking-[0.1em] uppercase mb-2" style={{ color: "var(--accent)" }}>
                    0{i + 1}
                  </div>
                  <div className="text-sm leading-snug" style={{ color: "rgba(254,250,224,0.82)" }}>
                    {stage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-10" style={{ color: "var(--accent)" }}>What Our Clients Say</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Active testimonial — large */}
            <div className="lg:col-span-2">
              <blockquote
                className="text-xl lg:text-2xl leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic", letterSpacing: "-0.01em" }}
              >
                "{TESTIMONIALS[activeTestimonial].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px" style={{ backgroundColor: "var(--accent)" }} />
                <div>
                  <div className="text-base font-medium">{TESTIMONIALS[activeTestimonial].name}</div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>{TESTIMONIALS[activeTestimonial].title}</div>
                </div>
              </div>
            </div>
            {/* Selector list */}
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="w-full text-left p-4 transition-all duration-200 cursor-pointer border-none"
                  style={{
                    backgroundColor: activeTestimonial === i ? "var(--background)" : "transparent",
                    borderLeft: `2px solid ${activeTestimonial === i ? "var(--accent)" : "transparent"}`,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <div className="text-sm font-medium mb-0.5" style={{ color: activeTestimonial === i ? "var(--foreground)" : "var(--muted-foreground)" }}>{t.name}</div>
                  <div className="text-[13px]" style={{ color: "var(--muted-foreground)" }}>{t.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="py-14 lg:py-20 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>Milestones</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                Experience that shows up{" "}<br />
                <em style={{ fontStyle: "italic" }}>in every engagement.</em>
              </h2>
            </div>
            <p className="max-w-[420px] text-base" style={{ color: "var(--muted-foreground)" }}>
              Over a decade of helping brands, businesses and institutions communicate with clarity, consistency and purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0" style={{ borderColor: "var(--border)", border: "1px solid var(--border)" }}>
            {[
              { value: "700+", label: "Clients Served" },
              { value: "10+", label: "Years in Practice" },
              { value: "30+", label: "Sectors Served" },
              { value: "3", label: "Core Practice Areas" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-9 px-6 text-center" style={{ backgroundColor: "var(--card)" }}>
                <div
                  className="mb-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 4vw, 3.4rem)", fontWeight: 400, color: "var(--foreground)", lineHeight: 1 }}
                >
                  <CountUp value={s.value} />
                </div>
                <div className="text-sm tracking-[0.1em] uppercase" style={{ color: "var(--muted-foreground)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS STAY ── */}
      <section className="py-12 lg:py-16 border-y" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>Why Clients Continue Working With Us</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
                Partnerships that grow{" "}<br />from one brief into many.
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "We begin with understanding, not assumptions.",
                "Every communication asset supports one clear strategy.",
                "We work as an extension of your team, not an external vendor.",
                "Our partnerships often grow from one assignment into long-term communication support.",
              ].map((point, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-sm tracking-[0.1em] pt-0.5 shrink-0 font-medium" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                  <span className="text-base" style={{ color: "var(--muted-foreground)" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="work" className="py-14 lg:py-20" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Selected Work</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                Our Work.
              </h2>
            </div>
            <button
              onClick={navigateToWork}
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
            >
              View All Case Studies <ArrowUpRight size={12} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} onClick={() => openCaseStudy(cs.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-12 lg:py-16 border-y" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>Let's Work Together</p>
          <h2 className="mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)", fontWeight: 400 }}>
            Let's Build Something Worth Remembering.
          </h2>
          <p className="text-base mb-2 max-w-[560px] mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Whether you're preparing to launch a new project, strengthening an existing brand or planning your next corporate initiative, we'll help you communicate it with clarity, consistency and confidence.
          </p>
          <p className="text-base mb-10 leading-relaxed max-w-[560px] mx-auto" style={{ color: "var(--muted-foreground)", fontStyle: "italic" }}>
            Every successful brand begins with a clear idea. Every successful market position begins with clear communication.
          </p>
          <button
            onClick={() => smoothScroll("#contact")}
            className="inline-flex items-center gap-3 text-base tracking-wide px-8 py-4 transition-all duration-200 border-none cursor-pointer rounded-full"
            style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; }}
          >
            Discuss Your Project <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>Get in Touch</p>
              <h2 className="mb-8 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 3vw, 2.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                Let's start with{" "}<br />a conversation.
              </h2>
              <p className="text-base mb-10 max-w-[400px]" style={{ color: "var(--muted-foreground)" }}>
                Whether you have a brief ready or are just beginning to think about your communication, we'd be delighted to explore how we can help.
              </p>
              <div className="space-y-0">
                {[
                  { label: "Email", value: "content@decisiontree.in", href: "mailto:content@decisiontree.in" },
                  { label: "Phone", value: "+91-9049349863", href: "tel:+919049349863" },
                  { label: "Location", value: "Goa, India" },
                  { label: "Working Across", value: "India & International Markets" },
                ].map((c) => (
                  <div key={c.label} className="flex justify-between items-baseline gap-8 py-4 border-b" style={{ borderColor: "var(--border)" }}>
                    <span className="text-sm tracking-[0.1em] uppercase" style={{ color: "var(--muted-foreground)" }}>{c.label}</span>
                    {c.href ? (
                      <a className="text-base font-medium transition-colors duration-200 text-right" href={c.href} style={{ color: "var(--foreground)" }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--foreground)"; }}>
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-base font-medium text-right">{c.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 lg:p-10" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: 16 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PAGE
// ─────────────────────────────────────────────────────────────────────────────
function AboutPage({ onCTA }: { onCTA: () => void }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-14 lg:py-20 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>About the Studio</p>
          <h1 className="mb-8 leading-tight max-w-[700px]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.4vw, 3.45rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
            Every Brand Has Something{" "}<br />Worth Saying.
          </h1>
          <p className="text-base leading-relaxed max-w-[600px] mb-4" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>
            Our role is to ensure the right people hear it, understand it and remember it.
          </p>
          <p className="text-base leading-relaxed max-w-[640px]" style={{ color: "var(--muted-foreground)" }}>
            Communication is more than a collection of brochures, websites, campaigns or presentations. It is the way people experience your brand before they experience your product. At Decision Tree Consulting, we help businesses shape that experience through strategic communication—bringing together insight, positioning, storytelling and execution into one clear, consistent system.
          </p>
        </div>
      </section>

      {/* Our Belief */}
      <section className="py-12 lg:py-16 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:gap-14 items-start max-w-[700px]">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-5" style={{ color: "var(--accent)" }}>Our Belief</p>
              <h2 className="mb-6 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
                Great Communication Begins{" "}<br />Long Before Design.
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>
                The strongest brands don't communicate more. They communicate with greater clarity.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                We begin by understanding the business, the market and the people it seeks to serve. Only then do we create communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 lg:py-16 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>Who We Are</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 1.8vw, 1.8rem)", fontWeight: 400 }}>
                Headquartered in Goa.{" "}<br />Working across India.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Decision Tree Consulting is a brand communications consultancy headquartered in Goa, working with clients across India and international markets.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                We began as a content-led practice at a time when businesses were embracing digital platforms but often struggled to articulate their purpose, positioning and value proposition consistently. Over time, our work naturally evolved beyond writing into strategic brand communication—helping organisations across 30+ sectors define not just what they wanted to say, but why it mattered and how it should be communicated.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Today, we work across three practice areas: Real Estate Project Communications, Corporate Branding & Communication, and Event Communications. While the industries differ, the objective remains the same: to create communication that builds clarity, trust and preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 lg:py-16 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-10" style={{ color: "var(--accent)" }}>What Makes Us Different</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="mb-6 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
                Our role is to ensure{" "}<br />they all communicate{" "}<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>the same idea.</em>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Communication today involves efforts from multiple specialists. A new real estate project requires architects, designers, website developers, 3D renderers, digital marketers, and channel partners among others. Each contributes to the customer experience. As your strategic communication partner, we help develop your communication lifecycle—from determining the audience to crafting collaterals that speak directly to your target customer base.
              </p>
            </div>
            <div className="space-y-0">
              {[
                { title: "Project Communications", desc: "Positioning and communication for real estate developments" },
                { title: "Brand Strategy", desc: "Communication systems for consumer brands" },
                { title: "Institutional Publications", desc: "Annual reports and editorial publications" },
                { title: "Digital Content", desc: "Website information architecture and digital content" },
                { title: "Brand Storytelling", desc: "Launch communication and brand narratives" },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start py-4 border-b" style={{ borderColor: "var(--border)" }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                  <div>
                    <div className="text-base font-medium mb-0.5">{item.title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats + Team */}
      <section className="py-12 lg:py-16 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-8" style={{ color: "var(--accent)" }}>Our Experience</p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "12+", label: "Years in practice" },
                  { value: "30+", label: "Sectors served" },
                  { value: "Pan-India", label: "Reach" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}><CountUp value={s.value} /></div>
                    <div className="text-sm tracking-wide uppercase leading-tight" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Over the years, we've had the privilege of working with organisations across diverse industries—from real estate developers and consumer brands to government institutions and startups.
              </p>
            </div>
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>The Team Behind the Thinking</p>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>
                Decision Tree Consulting brings together professionals from diverse backgrounds including business, management, law, finance, education and communication. This multidisciplinary perspective enables us to look beyond words and design—to understand business problems first and communication solutions second.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                As businesses grow, communication inevitably becomes more complex. New channels emerge, audiences diversify and customer interactions multiply across platforms. In this environment, clarity is no longer a creative advantage—it is a business necessity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="mb-4 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
            Let's Start with a Conversation.
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-[500px] mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Whether you're launching a real estate project, strengthening your corporate brand or preparing your next major initiative, we'd be delighted to explore how strategic communication can help.
          </p>
          <button
            onClick={onCTA}
            className="inline-flex items-center gap-3 text-base tracking-wide px-8 py-4 transition-all duration-200 border-none cursor-pointer rounded-full"
            style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; }}
          >
            Discuss Your Project <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BLUEPRINT PAGE
// ─────────────────────────────────────────────────────────────────────────────
function BlueprintPage({ onCTA }: { onCTA: () => void }) {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-14 lg:py-20 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>The Decision Tree Project Communications Framework</p>
          <h1 className="mb-8 leading-tight max-w-[700px]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4.2vw, 3.35rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
            Every Great Project Begins{" "}<br />With a <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Clear Direction.</em>
          </h1>
          <p className="text-base leading-relaxed max-w-[600px] mb-4" style={{ color: "var(--muted-foreground)" }}>
            Real estate projects don't become memorable because they have a beautiful brochure or an impressive website. They become memorable because every customer interaction reinforces the same idea.
          </p>
          <p className="text-base leading-relaxed max-w-[600px]" style={{ color: "var(--muted-foreground)" }}>
            Our Project Communication Blueprint is the framework that ensures every brochure, website, presentation, campaign and sales conversation grows from one clear communication strategy.
          </p>
        </div>
      </section>

      {/* Why section */}
      <section className="py-12 lg:py-16 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-5" style={{ color: "var(--accent)" }}>Why Projects Need a Communication Blueprint</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                Without a shared direction, every communication asset is created in isolation. The brochure tells one story, the website tells another. Sales teams develop their own language, while digital campaigns chase short-term attention. Channel partners explain the project entirely differently.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Individually, these assets may be well designed — but collectively, they dilute your market position. Clarity and consistency in marketing and sales communications directly helps the buyer in their purchase-making decision.
              </p>
            </div>
            <blockquote className="p-8 border-l-2" style={{ borderColor: "var(--accent)", backgroundColor: "var(--card)" }}>
              <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Analogy</p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                Imagine constructing a building without architectural drawings. Every contractor would work independently. The structure might still stand—but it would lack cohesion. Communication works the same way.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 7 Stages */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>The Framework</p>
          <h2 className="mb-10 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
            Seven interconnected stages.{" "}<br />Each answers a critical business question.
          </h2>
          <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
            {BLUEPRINT_STAGES.map((stage, i) => (
              <BlueprintStageRow
                key={stage.n}
                stage={stage}
                isOpen={activeStage === i}
                onToggle={() => setActiveStage(activeStage === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blueprint in Action */}
      <section className="py-12 lg:py-16 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-10" style={{ color: "var(--accent)" }}>Blueprint in Action</p>
          <h2 className="mb-12 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
            The framework has guided communication{" "}<br />across diverse industries.
          </h2>
          <div className="space-y-8">
            {[
              { project: "Sunblaze Remanso", type: "Real Estate Project Communications", desc: "A premium residential development where buyer insights led to the project's positioning, Portuguese-inspired naming, lifestyle narrative and integrated communication across brochures and digital platforms." },
              { project: "The White Willow", type: "Online Consumer Brand", desc: "A growing wellness brand where strategic positioning evolved into a long-term communication system spanning brand storytelling, website architecture, marketplace communication and product launches." },
              { project: "Goa State Innovation Council", type: "Autonomous Government Entity", desc: "An institutional publication where editorial strategy transformed technical programme information into a compelling narrative of innovation and measurable impact." },
            ].map((item) => (
              <div key={item.project} className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="lg:col-span-3">
                  <div className="text-base font-medium mb-1">{item.project}</div>
                  <div className="text-sm tracking-wide" style={{ color: "var(--accent)" }}>{item.type}</div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-12 lg:py-16 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-5" style={{ color: "var(--accent)" }}>Why This Approach Works</p>
              <h2 className="mb-6 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400 }}>
                Communication is often viewed as a collection of deliverables. We see it as a connected system.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
                Every communication asset should answer the same question: "Why should someone choose this brand?" The Project Communication Blueprint ensures every brochure, website, presentation, campaign and conversation answers that question consistently.
              </p>
              <button
                onClick={onCTA}
                className="inline-flex items-center gap-3 text-base tracking-wide px-7 py-3.5 transition-all duration-200 border-none cursor-pointer rounded-full"
                style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; }}
              >
                Discuss Your Project <ArrowRight size={14} />
              </button>
            </div>
            <ul className="space-y-4">
              {[
                "Brands become easier to understand.",
                "Projects become easier to differentiate.",
                "Marketing becomes more consistent.",
                "Sales conversations become more compelling.",
                "Customers build trust faster.",
              ].map((point, i) => (
                <li key={i} className="flex gap-4 items-start py-4 border-b" style={{ borderColor: "var(--border)" }}>
                  <span className="text-sm tracking-[0.1em] pt-0.5 shrink-0 font-medium" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                  <span className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WORK PAGE
// ─────────────────────────────────────────────────────────────────────────────
function WorkPage({
  activeCaseStudy,
  setActiveCaseStudy,
  onCTA,
}: {
  activeCaseStudy: string | null;
  setActiveCaseStudy: (id: string | null) => void;
  onCTA: () => void;
}) {
  const cs = activeCaseStudy ? CASE_STUDIES.find((c) => c.id === activeCaseStudy) : null;

  if (cs) {
    return (
      <div className="pt-20">
        {/* Case Study Hero */}
        <section className="border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8 lg:py-10">
            <img src={cs.image} alt={cs.title} className="w-full max-h-[520px] object-contain mx-auto" style={{ borderRadius: 8 }} />
          </div>
        </section>

        <section className="py-12 lg:py-16 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <button
              onClick={() => { setActiveCaseStudy(null); window.scrollTo({ top: 0 }); }}
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-10 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
            >
              ← All Case Studies
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
                <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>{cs.category}</p>
                <h1 className="mb-3 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>{cs.title}</h1>
                <p className="text-lg mb-8" style={{ color: "var(--muted-foreground)", fontWeight: 300 }}>{cs.subtitle}</p>
                <p className="text-base leading-relaxed mb-6 italic" style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}>{cs.lead}</p>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {cs.body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div className="p-6" style={{ border: "1px solid var(--border)", borderRadius: 16 }}>
                  <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>Strategic Insight</p>
                  <blockquote className="text-base leading-relaxed italic" style={{ fontFamily: "var(--font-display)" }}>
                    "{cs.insight}"
                  </blockquote>
                </div>
                <div>
                  <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>Scope</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{cs.scope}</p>
                </div>
                <div className="p-6" style={{ backgroundColor: "var(--secondary)" }}>
                  <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Outcome</p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{cs.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other case studies */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <p className="text-sm tracking-[0.1em] uppercase mb-10" style={{ color: "var(--accent)" }}>Other Work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_STUDIES.filter((c) => c.id !== cs.id).map((c) => (
                <CaseStudyCard key={c.id} caseStudy={c} onClick={() => { setActiveCaseStudy(c.id); window.scrollTo({ top: 0 }); }} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-12 lg:py-20 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>Case Studies</p>
          <h1 className="mb-6 leading-tight max-w-[600px]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.9vw, 3rem)", fontWeight: 400, letterSpacing: "-0.01em" }}>
            Work we are proud{" "}<br />to have shaped.
          </h1>
          <p className="text-base leading-relaxed max-w-[520px]" style={{ color: "var(--muted-foreground)" }}>
            Each project begins with the same question: what does this brand need to communicate, and how can it do it with greater clarity?
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            {CASE_STUDIES.map((cs, i) => (
              <WorkListItem key={cs.id} caseStudy={cs} index={i} onClick={() => setActiveCaseStudy(cs.id)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t text-center" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400 }}>
            Planning Your Next Project?
          </h2>
          <p className="text-base mb-8 max-w-[400px] mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Let's begin where great communication should always begin—with clarity.
          </p>
          <button
            onClick={onCTA}
            className="inline-flex items-center gap-3 text-base tracking-wide px-8 py-4 transition-all duration-200 border-none cursor-pointer rounded-full"
            style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; }}
          >
            Discuss Your Project <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function InsightsPage({ onCTA }: { onCTA: () => void }) {
  const [activePost, setActivePost] = useState<string | null>(null);
  const selected = BLOG_POSTS.find((p) => p.id === activePost);
  const featured = BLOG_POSTS[0];

  if (selected) {
    return (
      <main className="pt-20 min-h-screen">
        <section className="border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-16">
            <button
              onClick={() => setActivePost(null)}
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mb-10 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
            >
              ← Back to Insights
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-sm tracking-[0.1em] uppercase mb-5" style={{ color: "var(--accent)" }}>{selected.category}</p>
                <h1 className="leading-tight mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.4vw, 3.8rem)", fontWeight: 400, letterSpacing: "-0.03em" }}>
                  {selected.title}
                </h1>
                <p className="text-base" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}>
                  {selected.date} · {selected.readTime}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--muted)" }}>
                  <img src={(selected as any).image} alt={selected.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-[980px] mx-auto px-6 lg:px-10">
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {selected.body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={(selected as any).sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 text-base tracking-wide px-7 py-3.5 transition-all duration-200 no-underline rounded-full"
                style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
              >
                Read Original on DecisionTree.in <ArrowUpRight size={14} />
              </a>
              <button
                onClick={onCTA}
                className="inline-flex items-center justify-center gap-3 text-base tracking-wide px-7 py-3.5 transition-all duration-200 cursor-pointer rounded-full"
                style={{ border: "1.5px solid var(--foreground)", color: "var(--foreground)", background: "transparent", fontFamily: "var(--font-body)" }}
              >
                Discuss Similar Work <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen">
      <section className="py-12 lg:py-20 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>Insights</p>
              <h1 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4.4rem)", fontWeight: 400, letterSpacing: "-0.04em" }}>
                Thought Foundry.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Perspectives on real estate project branding, institutional reporting and corporate communication from Decision Tree Consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
            <article
              className="lg:col-span-12 lg:grid lg:grid-cols-2 cursor-pointer group overflow-hidden"
              onClick={() => { setActivePost(featured.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: 16 }}
            >
              <div className="aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden" style={{ backgroundColor: "var(--muted)" }}>
                <img src={(featured as any).image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-7 lg:p-12 flex flex-col justify-center">
                <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>{featured.category}</p>
                <h2 className="leading-tight mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 2.6vw, 2.55rem)", fontWeight: 400, letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>{featured.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase" style={{ color: "var(--foreground)" }}>
                  Read Insight <ArrowUpRight size={12} />
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
            <div>
              <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Selected Articles</p>
              <h2 className="leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 2.7vw, 2.25rem)", fontWeight: 400 }}>
                From the Decision Tree blog.
              </h2>
            </div>
            <a
              href="https://decisiontree.in/blog/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase hover:text-accent transition-colors no-underline"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-body)" }}
            >
              View all on DecisionTree.in <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {BLOG_POSTS.slice(1).map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer flex flex-col overflow-hidden"
                onClick={() => { setActivePost(post.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
              >
                <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--muted)" }}>
                  <img src={(post as any).image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <p className="text-[13px] tracking-[0.1em] uppercase" style={{ color: "var(--accent)" }}>{post.category}</p>
                    <p className="text-[13px]" style={{ color: "var(--muted-foreground)" }}>{post.date}</p>
                  </div>
                  <h3 className="leading-tight mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem", fontWeight: 400 }}>
                    {post.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "var(--muted-foreground)" }}>{post.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase mt-auto" style={{ color: "var(--foreground)" }}>
                    Read More <ArrowUpRight size={12} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceRow({ service }: { service: typeof SERVICES[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-7 cursor-pointer group" onClick={() => setOpen(!open)}>
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-8 flex-1">
          <span className="text-sm tracking-[0.1em] pt-1.5 shrink-0 font-medium" style={{ color: "var(--accent)" }}>{service.index}</span>
          <div className="flex-1">
            <h3
              className="leading-tight group-hover:text-accent transition-colors duration-200 whitespace-pre-line"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", fontWeight: 400 }}
            >
              {service.title}
            </h3>
            <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: open ? "300px" : "0" }}>
              <p className="mt-5 text-base leading-relaxed max-w-[580px] mb-4" style={{ color: "var(--muted-foreground)" }}>{service.description}</p>
              <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>Focus</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span key={t} className="text-sm tracking-[0.1em] uppercase px-3 py-1.5" style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 pt-1.5 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <ArrowRight size={15} style={{ color: "var(--muted-foreground)" }} />
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ caseStudy, onClick }: { caseStudy: typeof CASE_STUDIES[number]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="cursor-pointer group overflow-hidden" onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div
        className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        <div className="absolute inset-0 transition-opacity duration-300" style={{ backgroundColor: "var(--foreground)", opacity: hovered ? 0.3 : 0 }} />
        <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300" style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(8px)" }}>
          <span className="inline-flex items-center gap-2 text-sm tracking-wide uppercase px-3 py-1.5" style={{ backgroundColor: "var(--accent)", color: "var(--primary-foreground)" }}>
            Read Case Study <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
      <div className="pt-5 pb-2">
        <h3 className="text-xl leading-snug mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{caseStudy.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)", letterSpacing: "0.01em" }}>{(caseStudy as any).deliverables || caseStudy.category}</p>
      </div>
    </div>
  );
}

function WorkListItem({ caseStudy, index, onClick }: { caseStudy: typeof CASE_STUDIES[number]; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 cursor-pointer group border-b pb-12"
      style={{ borderColor: "var(--border)" }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="lg:col-span-5 overflow-hidden aspect-[4/3] flex items-center justify-center"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
        />
      </div>
      <div className="lg:col-span-7 flex flex-col justify-center">
        <p className="text-sm tracking-[0.1em] uppercase mb-4" style={{ color: "var(--accent)" }}>{caseStudy.category}</p>
        <h2
          className="mb-4 leading-tight transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.2vw, 1.95rem)", fontWeight: 400, color: hovered ? "var(--accent)" : "var(--foreground)" }}
        >
          {caseStudy.title}
        </h2>
        <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)", letterSpacing: "0.01em" }}>{(caseStudy as any).deliverables || caseStudy.category}</p>
        <p className="text-base mb-6 max-w-[480px]" style={{ color: "var(--muted-foreground)" }}>{caseStudy.lead}</p>
        <div className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase" style={{ color: "var(--foreground)" }}>
          Read Case Study <ArrowUpRight size={12} />
        </div>
      </div>
    </div>
  );
}

function BlueprintStageRow({ stage, isOpen, onToggle }: { stage: typeof BLUEPRINT_STAGES[number]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="py-6 cursor-pointer group" onClick={onToggle}>
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-8 flex-1">
          <span className="text-sm tracking-[0.1em] pt-1 shrink-0 font-medium" style={{ color: "var(--accent)" }}>{stage.n}</span>
          <div className="flex-1">
            <div className="flex items-baseline gap-4">
              <h3
                className="leading-tight group-hover:text-accent transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400 }}
              >
                {stage.title}
              </h3>
              <span className="text-sm hidden md:block" style={{ color: "var(--muted-foreground)" }}>{stage.subtitle}</span>
            </div>
            <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isOpen ? "500px" : "0" }}>
              <p className="mt-5 text-base leading-relaxed max-w-[600px] mb-5" style={{ color: "var(--muted-foreground)" }}>{stage.body}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div>
                  <p className="text-sm tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>Typical Activities</p>
                  <ul className="space-y-1.5">
                    {stage.activities.map((a) => (
                      <li key={a} className="text-sm flex gap-2 items-center" style={{ color: "var(--muted-foreground)" }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4" style={{ backgroundColor: "var(--secondary)" }}>
                  <p className="text-sm tracking-[0.1em] uppercase mb-2" style={{ color: "var(--accent)" }}>Outcome</p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{stage.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 pt-1 transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          <ChevronDown size={16} style={{ color: "var(--muted-foreground)" }} />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    backgroundColor: "var(--background)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    borderRadius: "8px",
    outline: "none",
    width: "100%",
    padding: "13px 16px",
    transition: "border-color 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--accent)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--border)";
  };

  if (submitted) {
    return (
      <div className="min-h-[300px] flex flex-col justify-center items-center text-center py-12 lg:py-16">
        <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ backgroundColor: "var(--accent)" }}>
          <ArrowRight size={16} style={{ color: "var(--background)" }} />
        </div>
        <h3 className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400 }}>Thank you.</h3>
        <p className="text-base" style={{ color: "var(--muted-foreground)" }}>We will be in touch within two business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <p className="text-sm tracking-[0.1em] uppercase mb-6" style={{ color: "var(--accent)" }}>Send an Enquiry</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Name</label>
          <input type="text" required style={inputStyle} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={handleFocus} onBlur={handleBlur} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Organisation</label>
          <input type="text" style={inputStyle} placeholder="Company / Project" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} onFocus={handleFocus} onBlur={handleBlur} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Email</label>
        <input type="email" required style={inputStyle} placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Area of Interest</label>
        <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} onFocus={handleFocus} onBlur={handleBlur}>
          <option value="">Select a practice area</option>
          <option>Real Estate Communications</option>
          <option>Corporate Branding</option>
          <option>Event Communications</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Tell us about your project</label>
        <textarea required rows={5} style={{ ...inputStyle, resize: "none" }} placeholder="Brief description of what you are working on..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <button
        type="submit"
        className="w-full rounded-full py-4 text-base tracking-wide transition-all duration-200 cursor-pointer border-none"
        style={{ backgroundColor: "var(--foreground)", color: "var(--background)", fontFamily: "var(--font-body)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--foreground)"; }}
      >
        Discuss Your Project
      </button>
    </form>
  );
}
