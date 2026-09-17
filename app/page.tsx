import { sitePath } from "@/lib/site-path";
import {
  ArrowUpRight,
  ArrowDown,
  Layers3,
  Workflow,
  Component,
} from "lucide-react";
import PortfolioNav from "@/components/portfolio-nav";
import PortfolioFooter from "@/components/portfolio-footer";
import { experience, capabilities, profile } from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <PortfolioNav />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-topline">
            <span>ANDRIAN CEDRIC / PRODUCT & UI/UX DESIGNER</span>
            <span>BASED IN JAKARTA, ID</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Clarity for
                <br />
                <em>complex</em>
                <br />
                digital products<span className="cyan">.</span>
              </h1>
              <p>
                I turn complex workflows into clear, considered experiences.
                Working across enterprise products, design systems, and the
                details that connect them.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work <ArrowDown size={18} />
                </a>
                <a
                  className="text-link"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-caption">
                <span>FROM COMPONENTS TO CONNECTED EXPERIENCES</span>
                <Layers3 size={19} />
              </div>
              <div className="hero-project">
                <img
                  src={sitePath("/images/dwp-system.png")}
                  alt="Digital Workplace design system: reusable interface components and variants"
                  fetchPriority="high"
                />
                <div className="hero-image-caption">
                  <span>DIGITAL WORKPLACE</span>
                  <span>Bank Indonesia</span>
                </div>
              </div>
              <div className="floating-note">
                <Component size={23} />
                <div>
                  Built to work together
                  <span>20+ components & their variants</span>
                </div>
              </div>
              <div className="visual-footnote">
                <span>Systems thinking.</span>
                <span>Human-centered execution.</span>
              </div>
            </div>
          </div>
          <div className="domain-strip">
            <span>EXPERIENCE ACROSS</span>
            <div>Banking & finance</div>
            <div>Capital markets</div>
            <div>Aviation</div>
            <div>Retail analytics</div>
          </div>
        </section>
        <section className="work-section wrap" id="work">
          <div className="section-top">
            <div>
              <div className="eyebrow">01 / SELECTED WORK</div>
              <h2>
                Complex challenges.
                <br />
                <span className="muted-heading">Considered solutions.</span>
              </h2>
            </div>
            <p>
              A closer look at the systems,
              <br />
              workflows, and decisions behind my work.
            </p>
          </div>
          <a
            className="featured-project"
            href={sitePath("/work/digital-workplace/")}
          >
            <div className="feature-visual">
              <div className="project-overline">
                <span>BANK INDONESIA</span>
                <span>01</span>
              </div>
              <img
                src={sitePath("/images/dwp-system.png")}
                alt="Overview of the Digital Workplace component library"
                loading="lazy"
              />
              <div className="visual-tag">DESIGN SYSTEM · WEB & MOBILE</div>
            </div>
            <div className="feature-copy">
              <span className="eyebrow">ENTERPRISE / DESIGN SYSTEMS</span>
              <h3>
                One shared language.
                <br />
                Across every screen.
              </h3>
              <p>
                Bringing consistency to Digital Workplace through a reusable
                component library and a central source of current mockups.
              </p>
              <div className="project-facts">
                <div>
                  <strong>20+</strong>
                  <span>Components & variants</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Device contexts</span>
                </div>
              </div>
              <span className="project-cta">
                Explore the DWP case study <ArrowUpRight size={20} />
              </span>
            </div>
          </a>
          <div className="other-projects">
            <a
              className="project-row"
              href="https://andriancedric.framer.ai/portfolio-st-engineering"
              target="_blank"
              rel="noreferrer"
            >
              <span className="row-number">02</span>
              <div className="row-icon">
                <Workflow />
              </div>
              <div>
                <span className="eyebrow">ST ENGINEERING AEROSPACE</span>
                <h3>From paper forms to connected workflows</h3>
                <p>19 forms · Enterprise UX · Rapid prototyping</p>
              </div>
              <span className="row-link">
                Original case study <ArrowUpRight size={20} />
              </span>
            </a>
            <a
              className="project-row"
              href="https://andriancedric.framer.ai/portfolio-ctp"
              target="_blank"
              rel="noreferrer"
            >
              <span className="row-number">03</span>
              <div className="row-icon">
                <Layers3 />
              </div>
              <div>
                <span className="eyebrow">INDONESIA STOCK EXCHANGE</span>
                <h3>Making complex trading flows clearer</h3>
                <p>10+ user flows · Financial systems · UI/UX redesign</p>
              </div>
              <span className="row-link">
                Original case study <ArrowUpRight size={20} />
              </span>
            </a>
          </div>
        </section>
        <section className="experience-section wrap" id="experience">
          <div className="section-top">
            <div>
              <div className="eyebrow">02 / EXPERIENCE</div>
              <h2>
                Grounded in real
                <br />
                <span className="muted-heading">product challenges.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View full résumé <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-row" key={job.company}>
                <span className="period">{job.period}</span>
                <div>
                  <h3>{job.company}</h3>
                  <span className="job-role">{job.role}</span>
                </div>
                <p>{job.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section wrap" id="about">
          <div>
            <div className="eyebrow">03 / A LITTLE ABOUT ME</div>
            <h2>
              A designer’s eye.
              <br />
              <em>An engineer’s curiosity.</em>
            </h2>
            <div className="about-education">
              INSTITUT TEKNOLOGI BANDUNG
              <span>B.Eng. in Informatics · 2021</span>
            </div>
          </div>
          <div className="about-copy">
            <p>
              I’m Andrian, a Jakarta-based UI/UX designer with an Informatics
              background. I enjoy untangling complex workflows and turning them
              into interfaces that people can understand and teams can build.
            </p>
            <p>
              My work connects research, interaction design, and reusable
              systems. I also build for the web—keeping design decisions close
              to how the final experience actually works.
            </p>
            <div className="chips">
              {capabilities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <div className="learning">
              <span className="eyebrow">CONTINUOUS LEARNING</span>
              <p>Google UX Design Professional Certificate</p>
              <p>
                IxDF · Mobile UI Design, Object-Oriented Design & AI for
                Designers <span className="distinction">Top 10%</span>
              </p>
            </div>
          </div>
        </section>
        <PortfolioFooter />
      </main>
    </>
  );
}
