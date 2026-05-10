import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import "./styles/index.css";

/* ─── Data ─── */
const experience = [
  {
    period: "Nov 2025 — Feb 2026",
    title: "DevOps Intern",
    company: "TCS iON (Tata Consultancy Services)",
    companyUrl: "https://www.tcsion.com",
    description: "Designed and implemented an automated CI/CD pipeline using AWS CodeCommit, CodePipeline, CodeDeploy, and Amazon EC2 for continuous application delivery. Configured IAM roles, AWS CLI, and Apache web server. Automated build and deployment processes, reducing deployment effort by ~40%.",
    tech: ["AWS", "CodePipeline", "CodeDeploy", "EC2", "IAM", "Apache", "CI/CD"]
  }
];

const projects = [
  {
    title: "Cricket Ground Booking Platform",
    description: "Full-stack web platform enabling users to book cricket grounds with real-time availability, calendar scheduling, and automated booking management. Built with a PostgreSQL-backed reservation system using Drizzle ORM.",
    tech: ["TypeScript", "React", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    github: "https://github.com/SapotaDA/academy-test",
    period: "Aug — Nov 2025"
  },
  {
    title: "TaskiFlow — Task Management App",
    description: "Full-stack task management system with JWT authentication, bcrypt password hashing, email notifications via Nodemailer, and production-ready deployment with Helmet, rate-limiting, and input sanitization.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Vite", "TailwindCSS", "Nodemailer"],
    github: "https://github.com/SapotaDA",
    live: "https://taskiflow.vercel.app/login",
    period: "Nov 2025 — Feb 2026"
  }
];

const certifications = [
  { title: "Frontend Development using React — Board Infinity", platform: "Coursera", date: "Oct 2025", id: "SOAT74O0JE39" },
  { title: "CI/CD Pipeline with AWS Native", platform: "TCS iON", date: "Nov 2025 — Feb 2026", id: "1252-28910953-1016" },
  { title: "Interactive Statistical Data Visualization 101", platform: "Coursera", date: "Apr 2025", id: "HJUCJHDYBVOX" },
  { title: "Strategic Leadership & Management Capstone", platform: "Univ. of Illinois Urbana-Champaign", date: "Apr 2025", id: "DM4L8URG9K7" },
];

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
];

/* ─── Color Picker Component ─── */
function ColorPicker() {
  const { accentKey, setAccentKey, colors } = useTheme();
  return (
    <div className="flex items-center gap-2.5">
      {Object.entries(colors).map(([key, val]) => (
        <button
          key={key}
          onClick={() => setAccentKey(key)}
          className={`color-dot ${accentKey === key ? 'active' : ''}`}
          style={{ background: val.hex }}
          title={val.label}
        />
      ))}
    </div>
  );
}

/* ─── Main Layout ─── */
function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mainRef = useRef(null);

  // Mouse spotlight
  useEffect(() => {
    const handler = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // Intersection observer for active nav
  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Cursor Spotlight */}
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--accent), 0.06), transparent 40%)`
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* ══════ LEFT PANEL (Fixed) ══════ */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: 'var(--text)' }}>
                <a href="/">Aarav Uniyal</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl" style={{ color: 'var(--text)' }}>
                Full-Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I build scalable, production-ready web applications with React, Node.js, and AWS.
              </p>

              {/* Nav */}
              <nav className="hidden lg:block mt-16" aria-label="In-page navigation">
                <ul className="space-y-5">
                  {NAV.map(n => (
                    <li key={n.id}>
                      <a href={`#${n.id}`} className={`nav-link group flex items-center gap-4 ${activeSection === n.id ? 'active' : ''}`}>
                        <span className="nav-indicator" />
                        <span className="nav-label">{n.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom: Color picker + Socials */}
            <div className="mt-8 lg:mt-0">
              <div className="mb-5">
                <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Theme</p>
                <ColorPicker />
              </div>
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://github.com/SapotaDA" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                    <Github size={22} />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/aaravuniyal" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                </li>
                <li>
                  <a href="mailto:aaravuniyal3@gmail.com" className="social-icon" title="Email">
                    <Mail size={22} />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* ══════ RIGHT PANEL (Scrolls) ══════ */}
          <main ref={mainRef} id="content" className="pt-24 lg:w-1/2 lg:py-24">

            {/* ── ABOUT ── */}
            <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="section-heading lg:sr-only">About</div>
              <div className="space-y-4">
                <p>
                  I'm a <span style={{ color: 'var(--text)' }}>final-year BCA student</span> at Yenepoya University, Bangalore
                  (CGPA: 7.6, expected graduation June 2026) and a former{' '}
                  <span style={{ color: 'var(--text)' }}>DevOps Intern at TCS iON</span>.
                  I specialize in building full-stack web applications using React.js, Node.js, and PostgreSQL/MongoDB.
                </p>
                <p>
                  During my internship, I designed and deployed a{' '}
                  <span style={{ color: 'rgba(var(--accent), 1)' }}>CI/CD pipeline on AWS</span>{' '}
                  that reduced deployment effort by ~40%. I've delivered two production-ready projects
                  featuring JWT authentication, RESTful APIs, and real-time booking workflows.
                </p>
                <p>
                  I'm currently seeking a{' '}
                  <span style={{ color: 'rgba(var(--accent), 1)' }}>full-stack or backend developer role</span>{' '}
                  where I can contribute to scalable, user-focused products.
                </p>
                <p>
                  My toolkit includes{' '}
                  <span style={{ color: 'var(--text)' }}>JavaScript, TypeScript, Python, SQL, React, Node.js, Express.js,
                  PostgreSQL, MongoDB, AWS (EC2, S3, RDS), Docker, and Git</span>.
                </p>
              </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="section-heading">Experience</div>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <a key={i} href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover-card block group" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <span className="text-xs font-semibold uppercase tracking-wide whitespace-nowrap mt-1" style={{ color: 'var(--text-muted)', minWidth: '140px' }}>
                        {exp.period}
                      </span>
                      <div className="flex-1">
                        <h3 className="card-title font-medium leading-snug">
                          {exp.title} · {exp.company}{' '}
                          <ArrowUpRight size={14} className="card-arrow inline ml-1" />
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">{exp.description}</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {exp.tech.map(t => <li key={t} className="tech-tag">{t}</li>)}
                        </ul>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="/Aarav_Uniyal_Resume.pdf"
                  target="_blank"
                  className="group inline-flex items-center gap-1 font-medium text-sm leading-tight"
                  style={{ color: 'var(--text)', textDecoration: 'none' }}
                >
                  View Full Résumé
                  <ArrowUpRight size={14} className="card-arrow inline" />
                </a>
              </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="section-heading">Projects</div>
              <div className="space-y-4">
                {projects.map((p, i) => (
                  <a key={i} href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="hover-card block group" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <span className="text-xs font-semibold uppercase tracking-wide whitespace-nowrap mt-1" style={{ color: 'var(--text-muted)', minWidth: '140px' }}>
                        {p.period}
                      </span>
                      <div className="flex-1">
                        <h3 className="card-title font-medium leading-snug">
                          {p.title}{' '}
                          <ArrowUpRight size={14} className="card-arrow inline ml-1" />
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {p.tech.map(t => <li key={t} className="tech-tag">{t}</li>)}
                        </ul>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* ── CERTIFICATIONS ── */}
            <section id="certifications" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="section-heading">Certifications</div>
              <div className="space-y-2">
                {certifications.map((c, i) => (
                  <div key={i} className="hover-card group">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                      <span className="text-xs font-semibold uppercase tracking-wide whitespace-nowrap mt-1" style={{ color: 'var(--text-muted)', minWidth: '140px' }}>
                        {c.date}
                      </span>
                      <div className="flex-1">
                        <h3 className="card-title text-sm font-medium leading-snug">{c.title}</h3>
                        <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{c.platform} · ID: {c.id}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="pb-16 text-sm" style={{ color: 'var(--text-muted)' }}>
              <p>
                Coded in{' '}
                <span style={{ color: 'var(--text-secondary)' }}>Visual Studio Code</span>. Built with{' '}
                <span style={{ color: 'var(--text-secondary)' }}>React</span> and{' '}
                <span style={{ color: 'var(--text-secondary)' }}>Tailwind CSS</span>, deployed with{' '}
                <span style={{ color: 'var(--text-secondary)' }}>Vercel</span>. All text set in the{' '}
                <span style={{ color: 'var(--text-secondary)' }}>Inter</span> typeface.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
