"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Menu,
  Send,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";

const projects = [
  {
    number: "01",
    title: "Dilash Mobile",
    category: "E-commerce",
    description:
      "A mobile-first electronics storefront built around product discovery, clear shopping flows and a responsive interface.",
    stack: ["React", "TypeScript", "Redux Toolkit", "Tailwind"],
    demo: "https://dilashmobile.vercel.app",
    github: "https://github.com/mehrvarshodiev/dilashmobile",
    featured: true,
    symbol: "DM",
  },
  {
    number: "02",
    title: "SpasMed Clinic",
    category: "Healthcare",
    description:
      "A calm, modern digital presence for a clinic, balancing service information, trust and clear contact paths.",
    stack: ["React", "TypeScript", "Tailwind"],
    demo: "https://spasmedclinic.vercel.app",
    github: "https://github.com/mehrvarshodiev/spasmedclinic",
    featured: false,
    symbol: "SM",
  },
  {
    number: "03",
    title: "Dr. Mona",
    category: "Brand website",
    description:
      "A premium dental brand direction with warm editorial typography and a polished, patient-friendly experience.",
    stack: ["React", "TypeScript", "Motion"],
    demo: "https://drmonaabdullaeva.vercel.app",
    github: "https://github.com/mehrvarshodiev/drmonaabdullaeva",
    featured: false,
    symbol: "MA",
  },
  {
    number: "04",
    title: "Arzon Market",
    category: "Marketplace",
    description:
      "A product-led marketplace experience focused on browsing, useful product information and straightforward navigation.",
    stack: ["React", "Supabase", "Tailwind"],
    demo: "https://arzonmarket-omega.vercel.app",
    github: "https://github.com/mehrvarshodiev/arzonmarket",
    featured: true,
    symbol: "AM",
  },
];

const skillGroups = [
  { title: "Frameworks", icon: Layers3, items: ["React", "Next.js", "React Router"] },
  { title: "Languages", icon: Braces, items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "Styling & motion", icon: Sparkles, items: ["Tailwind CSS", "Framer Motion", "Responsive UI"] },
  { title: "Tools & data", icon: Wrench, items: ["Git", "GitHub", "Vercel", "Redux Toolkit", "Supabase"] },
];

const milestones = [
  {
    period: "FOUNDATION",
    title: "Learning by building",
    description:
      "Growing a strong foundation in frontend engineering, responsive layouts and modern web interfaces.",
  },
  {
    period: "PROJECT WORK",
    title: "Turning ideas into products",
    description:
      "Building storefronts and service websites with attention to usability, visual consistency and maintainable code.",
  },
  {
    period: "NEXT CHAPTER",
    title: "Engineering better experiences",
    description:
      "Continuing to improve architecture, accessibility, performance and interaction design with every project.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  function move(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }
  return (
    <div
      onPointerMove={move}
      className={`spotlight-card relative overflow-hidden rounded-3xl border border-white/10 bg-surface ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Magnetic({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current || event.pointerType !== "mouse") return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x * 0.1}px, ${y * 0.1}px, 0)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  }
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={reset} className={className} style={{ transition: "transform 180ms cubic-bezier(.2,.8,.2,1)" }}>
      {children}
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav aria-label="Main navigation" className="relative mx-auto flex max-w-4xl items-center justify-between rounded-full border border-white/10 bg-[#111118]/85 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:px-6">
        <a href="#home" className="font-mono text-sm font-bold tracking-tight" aria-label="Mehrvar Shodiev, home">
          MS<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">{link.label}</a>
          ))}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-transform hover:scale-[1.03] md:flex">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="rounded-full p-2 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl border border-white/10 bg-[#111118]/95 p-3 backdrop-blur-xl md:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white">
                {link.label}<ArrowUpRight size={15} />
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  const words = ["DIGITAL", "EXPERIENCES."];
  return (
    <section id="home" className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 md:px-10 lg:min-h-screen">
      <div aria-hidden="true" className="pointer-events-none absolute right-[-12%] top-[20%] h-[360px] w-[360px] rounded-full bg-accent/[0.06] blur-[110px] md:h-[520px] md:w-[520px]" />
      <div aria-hidden="true" className="project-grid-lines pointer-events-none absolute inset-x-0 top-24 h-72 opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-site">
        <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 md:text-xs">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_#C7FF6B]" />
          Frontend developer · Open to opportunities
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } }} className="relative text-[clamp(3.3rem,10.5vw,9rem)] font-semibold leading-[0.88] tracking-editorial">
          {words.map((word, index) => (
            <motion.span key={word} variants={{ hidden: { opacity: 0, y: 55 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }} className={`block ${index === 1 ? "text-accent" : "text-[#F4F4F7]"}`}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg">
            I&apos;m Mehrvar Shodiev — a frontend developer turning ideas into thoughtful, fast and memorable digital products.
          </p>
          <div className="flex flex-wrap gap-3">
            <Magnetic><a href="#work" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-canvas">Explore my work <ArrowDown size={16} /></a></Magnetic>
            <Magnetic><a href="https://github.com/mehrvarshodiev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm text-white transition-colors hover:bg-white/5">GitHub <ArrowUpRight size={16} /></a></Magnetic>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/35">React / Next.js / TypeScript</span>
          <Code2 className="text-white/40" size={18} />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const reduced = useReducedMotion();
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-site">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-5">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">01 / Selected work</p><h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Things I&apos;ve built<span className="text-accent">.</span></h2></div>
            <span className="hidden font-mono text-xs text-white/40 sm:block">04 PROJECTS</span>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.06} className={project.featured ? "md:col-span-7" : "md:col-span-5"}>
              <motion.article whileHover={reduced ? undefined : { y: -5 }} transition={{ duration: 0.25 }} className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-surface">
                <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`} className="project-art relative flex aspect-[16/10] items-center justify-center overflow-hidden">
                  <div aria-hidden="true" className="project-grid-lines absolute inset-0 opacity-70" />
                  <div className="relative flex size-36 items-center justify-center rounded-[2rem] border border-white/15 bg-black/20 shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:scale-110 md:size-44">
                    <span className="font-mono text-5xl font-semibold tracking-[-0.1em] text-white/90 md:text-6xl">{project.symbol}<span className="text-accent">.</span></span>
                    <span className="absolute -right-3 -top-3 grid size-10 place-items-center rounded-full bg-accent text-canvas"><ArrowUpRight size={18} /></span>
                  </div>
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">{project.category}</span>
                  <span className="absolute bottom-5 right-5 font-mono text-xs text-white/50">0{index + 1} / 04</span>
                </a>
                <div className="p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div><p className="mb-2 font-mono text-xs text-white/35">/ {project.number}</p><h3 className="text-2xl font-medium tracking-tight">{project.title}</h3></div>
                    <div className="flex gap-2">
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="rounded-full border border-white/10 p-2 text-white/65 hover:text-accent"><ArrowUpRight size={18} /></a>
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`} className="rounded-full border border-white/10 p-2 text-white/65 hover:text-accent"><Github size={18} /></a>
                    </div>
                  </div>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/50">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white/60">{tech}</span>)}</div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="stack" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-site">
        <Reveal><p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">02 / Toolkit</p><h2 className="mb-12 text-4xl font-semibold tracking-tight md:text-6xl">Tools of the trade<span className="text-accent">.</span></h2></Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const wide = index === 0 || index === 3;
            return (
              <Reveal key={group.title} delay={index * 0.06} className={wide ? "md:col-span-2" : ""}>
                <SpotlightCard className="h-full p-6 md:p-7">
                  <div className="mb-8 flex items-center justify-between"><Icon className="text-accent" size={22} /><span className="font-mono text-xs text-white/30">0{index + 1}</span></div>
                  <h3 className="mb-5 text-xl font-medium">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-white/65">{item}</span>)}</div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 70%", "end 70%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="about" ref={sectionRef} className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-site">
        <Reveal><p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">03 / Approach</p><h2 className="mb-16 text-4xl font-semibold tracking-tight md:text-6xl">Good work is a process<span className="text-accent">.</span></h2></Reveal>
        <div className="relative ml-2 max-w-3xl pl-8 md:pl-12">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />
          <motion.div aria-hidden="true" className="absolute left-0 top-0 w-px origin-top bg-accent shadow-[0_0_14px_rgba(199,255,107,.45)]" style={{ scaleY, height: "100%" }} />
          <div className="space-y-14">
            {milestones.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="relative">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-canvas shadow-[0_0_12px_rgba(199,255,107,.4)] md:-left-[53px]" />
                  <p className="mb-3 font-mono text-[10px] tracking-widest text-accent">{item.period}</p>
                  <h3 className="text-2xl font-medium md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 md:text-base">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const socials = [
    { label: "GitHub", href: "https://github.com/mehrvarshodiev", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "Telegram", href: "https://t.me/mehrvar_01", icon: Send },
  ];
  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-site overflow-hidden rounded-[28px] border border-white/10 bg-surface p-6 md:p-12 lg:p-16">
        <Reveal>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">04 / Start a conversation</p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-editorial md:text-7xl lg:text-8xl">Let&apos;s build something <span className="text-accent">epic.</span></h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="max-w-md leading-7 text-white/55">Have an idea, a product to build, or an interesting challenge? Tell me about it and let&apos;s explore what we can create.</p>
              <div className="mt-8 flex flex-wrap gap-3">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-white/70 transition-colors hover:border-accent/40 hover:text-accent"><Icon size={16} />{label}<ArrowUpRight size={14} /></a>)}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/10 p-5 md:p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">Have a project in mind?</p>
              <p className="mt-4 text-xl leading-8 text-white/80">The best way to start is a short message with a little context about your idea.</p>
              <a href="https://t.me/mehrvar_01" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-canvas transition-transform hover:scale-[1.02]">Message me on Telegram <ArrowUpRight size={16} /></a>
              <p className="mt-4 text-xs leading-5 text-white/35">Opens Telegram in a new tab. No message is sent automatically.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PortfolioClient() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-site flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mehrvar Shodiev</span>
          <span className="font-mono">DESIGNED WITH INTENTION.</span>
          <a href="#home" className="transition-colors hover:text-accent">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
