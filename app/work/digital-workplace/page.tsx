import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PortfolioNav from "@/components/portfolio-nav";
import PortfolioFooter from "@/components/portfolio-footer";
export const metadata: Metadata = {
  title: "Digital Workplace — Andrian Cedric",
  description:
    "Building a shared design system and master mockup structure for Bank Indonesia’s Digital Workplace across desktop, tablet, and mobile.",
};
const sections = [
  ["overview", "Overview"],
  ["challenge", "The challenge"],
  ["contribution", "Contribution"],
  ["approach", "Design approach"],
  ["deliverables", "Deliverables"],
  ["reflection", "Reflection"],
];
export default function Dwp() {
  return (
    <>
      <PortfolioNav project />
      <main id="main">
        <section className="case-hero wrap">
          <a className="text-link" href={sitePath("/#work")}>
            <ArrowLeft size={16} /> Back to selected work
          </a>
          <div className="eyebrow">BANK INDONESIA / DIGITAL WORKPLACE</div>
          <h1>
            A shared language.
            <br />
            <em>A clearer foundation.</em>
          </h1>
          <p className="case-intro">
            A design system and master mockup structure to bring consistency to
            a complex internal workspace—across desktop, tablet, and mobile.
          </p>
          <div className="case-facts">
            <div>
              <span>ROLE</span>
              <strong>UI/UX Designer</strong>
            </div>
            <div>
              <span>ENGAGEMENT</span>
              <strong>Via PT Adidata Informatika</strong>
            </div>
            <div>
              <span>CONTEXT</span>
              <strong>Desktop · iPad · Mobile</strong>
            </div>
            <div>
              <span>TOOLS</span>
              <strong>Figma</strong>
            </div>
          </div>
          <figure className="case-cover">
            <img
              src={sitePath("/images/dwp-system.png")}
              alt="DWP component library showing reusable components and interface variants"
              fetchPriority="high"
            />
            <figcaption>
              Digital Workplace · Shared component library
            </figcaption>
          </figure>
        </section>
        <div className="case-body wrap">
          <aside className="case-toc">
            <span className="eyebrow">IN THIS CASE STUDY</span>
            <nav aria-label="Case study contents">
              {sections.map(([id, label]) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <a
              className="text-link"
              href={sitePath("/Andrian-Cedric-Resume.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              View résumé <ArrowUpRight size={15} />
            </a>
          </aside>
          <article className="case-article">
            <section id="overview">
              <div className="eyebrow">01 / OVERVIEW</div>
              <h2>
                Consistency needs
                <br />a shared starting point.
              </h2>
              <p>
                Digital Workplace supports internal work at Bank Indonesia,
                including decision-making and event arrangements. Its interfaces
                span desktop, iPad, and mobile.
              </p>
              <p>
                My work focuses on developing a reusable design system, refining
                mockups with updated components, and contributing to a master
                file that developers, system analysts, and technical writers can
                reference.
              </p>
              <div className="scope-grid">
                <div>
                  <strong>20+</strong>
                  <span>Components, with variants</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Device contexts</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Master mockup structure</span>
                </div>
              </div>
            </section>
            <section id="challenge">
              <div className="eyebrow">02 / THE CHALLENGE</div>
              <h2>
                The latest design
                <br />
                wasn’t always easy to find.
              </h2>
              <p>
                Existing mockups were organized around sprint activities. As the
                product evolved, finding the current design for a feature became
                difficult for people joining the project and stakeholders
                reviewing the work.
              </p>
              <p>
                At the same time, the interface lacked a complete shared
                component system. Consistency depended on how individual screens
                were maintained.
              </p>
              <div className="insight">
                <span>THE DESIGN QUESTION</span>
                <p>
                  How can we make the current design easier to find—and easier
                  to keep consistent?
                </p>
              </div>
            </section>
            <section id="contribution">
              <div className="eyebrow">03 / CONTRIBUTION</div>
              <h2>
                Designing the system.
                <br />
                Maintaining the work.
              </h2>
              <p>
                As a UI/UX Designer assigned to Bank Indonesia through PT
                Adidata Informatika, I contribute to both the component library
                and ongoing mockup development.
              </p>
              <ul className="contribution-list">
                <li>
                  Developing more than 20 components and their variants in
                  Figma.
                </li>
                <li>
                  Refining existing mockups using the updated component system.
                </li>
                <li>Providing mockups for agreed sprint backlogs.</li>
                <li>
                  Creating a master mockup file for cross-functional reference.
                </li>
              </ul>
              <p className="context-note">
                The project’s published team includes fellow UI/UX Designer
                Femil Paraijun. The approach below describes the team’s work; it
                does not imply sole ownership of every design decision.
              </p>
            </section>
            <section id="approach">
              <div className="eyebrow">04 / DESIGN APPROACH</div>
              <h2>
                Connect the components
                <br />
                to the working process.
              </h2>
              <div className="decision">
                <span>01</span>
                <div>
                  <h3>Start with the existing product</h3>
                  <p>
                    The shared system was based on the application already in
                    use. This grounds component decisions in the interface the
                    team needs to maintain and extend.
                  </p>
                </div>
              </div>
              <div className="decision">
                <span>02</span>
                <div>
                  <h3>Create reusable components and variants</h3>
                  <p>
                    Common patterns were brought into a Figma component library,
                    with standardized icons. The aim is to give designers a
                    consistent foundation for future screens and refinements.
                  </p>
                </div>
              </div>
              <div className="decision">
                <span>03</span>
                <div>
                  <h3>Make current mockups easier to reference</h3>
                  <p>
                    A master mockup structure brings the latest designs for each
                    feature into a shared reference, complementing sprint-based
                    work across desktop, iPad, and mobile.
                  </p>
                </div>
              </div>
              <figure className="detail-figure">
                <a
                  href={sitePath("/images/dwp-system.png")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open full-size DWP component library"
                >
                  <img
                    src={sitePath("/images/dwp-system.png")}
                    alt="Detailed overview of DWP design system components and variants"
                    loading="lazy"
                  />
                </a>
                <figcaption>
                  The shared library provides the building blocks for mockup
                  refinement. Open image for a closer look.
                </figcaption>
              </figure>
            </section>
            <section id="deliverables">
              <div className="eyebrow">05 / DELIVERABLES</div>
              <h2>
                A foundation for
                <br />
                more consistent work.
              </h2>
              <p>
                The documented deliverables are a component library with more
                than 20 components and variants, updated mockups, and a master
                reference for the wider delivery team.
              </p>
              <div className="deliverable-grid">
                <div>
                  <h3>Shared design language</h3>
                  <p>A reusable set of components and standardized icons.</p>
                </div>
                <div>
                  <h3>Shared project reference</h3>
                  <p>
                    Current feature mockups organized for cross-functional use.
                  </p>
                </div>
              </div>
              <p className="context-note">
                These are delivery outputs. No measured reduction in handoff
                time or inconsistency is claimed in this case study.
              </p>
            </section>
            <section id="reflection">
              <div className="eyebrow">06 / REFLECTION</div>
              <h2>
                A library is only part
                <br />
                of the system.
              </h2>
              <p>
                This project connects two closely related problems: making
                interfaces consistent and making the current design easy to
                locate. A component library addresses the first; a maintained
                reference structure supports the second.
              </p>
              <p>
                A useful next evaluation would examine how reliably team members
                find the latest mockup, how often shared components are reused,
                and where exceptions still appear.
              </p>
            </section>
            <a className="back-work" href={sitePath("/#work")}>
              <ArrowLeft size={18} />
              <div>
                Explore more work<span>Back to selected projects</span>
              </div>
            </a>
          </article>
        </div>
        <PortfolioFooter />
      </main>
    </>
  );
}
