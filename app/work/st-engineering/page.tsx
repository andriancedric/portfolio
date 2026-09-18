import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import PortfolioNav from "@/components/portfolio-nav";
import PortfolioFooter from "@/components/portfolio-footer";

export const metadata: Metadata = {
  title: "ST Engineering e-CSR — Andrian Cedric",
  description: "Turning 19 paper forms and multi-level approvals into a connected capability study workflow for ST Engineering Aerospace.",
};
const sections = [
  ["overview", "Overview"], ["challenge", "The challenge"],
  ["contribution", "Contribution"], ["approach", "Design approach"],
  ["deliverables", "Deliverables"], ["reflection", "Reflection"],
];
function Figure({ image, alt, caption }: { image: string; alt: string; caption: string }) {
  return <figure className="detail-figure">
    <a href={sitePath(`/images/${image}.png`)} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`}>
      <img src={sitePath(`/images/${image}.png`)} alt={alt} loading="lazy" />
    </a>
    <figcaption>{caption} Open image for a closer look.</figcaption>
  </figure>;
}
export default function StEngineering() {
  return <>
    <PortfolioNav project />
    <main id="main">
      <section className="case-hero wrap">
        <a className="text-link" href={sitePath("/#work")}><ArrowLeft size={16} /> Back to selected work</a>
        <div className="eyebrow">ST ENGINEERING AEROSPACE / E-CSR</div>
        <h1>From paper forms.<br /><em>To connected workflows.</em></h1>
        <p className="case-intro">Translating capability studies into a digital workspace that helps engineers prepare forms and approvers understand what needs their attention.</p>
        <div className="case-facts">
          <div><span>ROLE</span><strong>UI/UX Designer</strong></div>
          <div><span>CONTEXT</span><strong>Aviation · Enterprise web</strong></div>
          <div><span>SCOPE</span><strong>19 forms · Multi-level approvals</strong></div>
          <div><span>TOOLS</span><strong>Figma · Figma Make · v0</strong></div>
        </div>
        <figure className="case-cover st-cover">
          <img src={sitePath("/images/st-engineer.png")} alt="e-CSR engineer dashboard with capability study cards and completion indicators" fetchPriority="high" />
          <figcaption>e-CSR · Engineer workspace · Mockups use demonstration data</figcaption>
        </figure>
      </section>
      <div className="case-body wrap">
        <aside className="case-toc">
          <span className="eyebrow">IN THIS CASE STUDY</span>
          <nav aria-label="Case study contents">{sections.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        </aside>
        <article className="case-article">
          <section id="overview">
            <div className="eyebrow">01 / OVERVIEW</div>
            <h2>A connected view.<br />Across a complex study.</h2>
            <p>ST Engineering Aerospace’s Capability Study Report process brings together the information needed to assess aircraft maintenance capabilities. Engineers prepare multiple forms before the study moves through approval.</p>
            <p>The e-CSR project translated this paper-based process into a web experience. My work combined interface design and rapid prototyping, making the proposed workflow tangible for users to review.</p>
            <div className="scope-grid">
              <div><strong>19</strong><span>Forms in the project scope</span></div>
              <div><strong>Web</strong><span>Connected study workspace</span></div>
              <div><strong>Multi-role</strong><span>Engineers and approvers</span></div>
            </div>
          </section>
          <section id="challenge">
            <div className="eyebrow">02 / THE CHALLENGE</div>
            <h2>The paperwork was connected.<br />The information wasn’t.</h2>
            <p>Meetings with users revealed two recurring difficulties: keeping paper forms organized and tracing related information. Historical forms could be difficult to retrieve, while engineers needed to move between people and the workshop to check information.</p>
            <p>A digital version needed to communicate the relationship between a study, its required forms, and the next approval step. Simply recreating the paper layout on screen would leave that complexity for users to untangle.</p>
            <div className="insight"><span>THE DESIGN QUESTION</span><p>How can engineers see what remains to be completed, while approvers can identify the studies that need their attention?</p></div>
          </section>
          <section id="contribution">
            <div className="eyebrow">03 / CONTRIBUTION</div>
            <h2>From understanding the work.<br />To testing the flow.</h2>
            <p>I worked as a UI/UX Designer on the e-CSR experience, translating requirements into wireframes, detailed mockups, and interactive prototypes.</p>
            <ul className="contribution-list">
              <li>Mapped user needs into layouts and flows for preparing and reviewing capability studies.</li>
              <li>Created low- and high-fidelity designs for the engineer and approval experiences.</li>
              <li>Used Figma Make and v0 to turn designs into interactive prototypes for review.</li>
              <li>Contributed to shared interface components for the planned React-based implementation.</li>
            </ul>
            <p className="context-note">The design team included Saraska Putri I Lango. The decisions below describe our shared design work. A site visit and weekly discussions with the ST Engineering team helped ground the work in their day-to-day process.</p>
          </section>
          <section id="approach">
            <div className="eyebrow">04 / DESIGN APPROACH</div>
            <h2>Make the next action<br />easier to understand.</h2>
            <div className="decision"><span>01</span><div><h3>Bring priority and completeness together</h3><p>The engineer dashboard uses study cards to group related information. High-priority studies appear first, with completion indicators helping engineers identify unfinished work without opening each study.</p></div></div>
            <Figure image="st-engineer" alt="Engineer dashboard showing study cards, priorities, and completion status" caption="The dashboard brings a study’s status and progress into the same view." />
            <div className="decision"><span>02</span><div><h3>Show the whole study before submission</h3><p>A progress overview brings the required forms together. Engineers can see which parts still need attention before sending the study for approval. Within forms, grouped sections replace dense paper-style tables, with supporting uploads available for reference material.</p></div></div>
            <Figure image="st-progress" alt="Capability study overview showing the completion state of its forms" caption="The study overview connects individual forms to the larger submission." />
            <div className="decision"><span>03</span><div><h3>Give approvers a focused review queue</h3><p>The approval dashboard presents studies awaiting review in priority order. This adapts the workspace to the approver’s task, while the engineer experience remains focused on preparing the study.</p></div></div>
            <Figure image="st-approval" alt="Operations manager approval dashboard with capability studies awaiting review" caption="An approval workspace designed around review responsibilities." />
            <div className="insight"><span>VALIDATION THROUGH PROTOTYPES</span><p>Interactive prototypes supported usability testing and iteration with users before later development. They made the proposed sequence of actions available for discussion beyond static screens.</p></div>
          </section>
          <section id="deliverables">
            <div className="eyebrow">05 / DELIVERABLES</div>
            <h2>A workflow made tangible.<br />A foundation for delivery.</h2>
            <p>The design work covered the 19-form scope, engineer and approval interfaces, shared components, and interactive prototypes. These outputs supported discussions about the workflow and subsequent development.</p>
            <div className="deliverable-grid">
              <div><h3>Connected study experience</h3><p>Dashboard, form preparation, progress overview, and approval views.</p></div>
              <div><h3>Interactive design reference</h3><p>Detailed mockups, reusable interface patterns, and prototypes built with Figma Make and v0.</p></div>
            </div>
            <p className="context-note">The work shown represents design and prototyping outputs. Production adoption and measured processing-time improvements have not been established here.</p>
          </section>
          <section id="reflection">
            <div className="eyebrow">06 / REFLECTION</div>
            <h2>Digitizing a form is one step.<br />Connecting the work is the goal.</h2>
            <p>The central design challenge is the relationship between forms, people, and approval stages. Clear progress and role-specific views give that relationship a visible structure.</p>
            <p>A useful next evaluation would follow a complete study through preparation, review, and revision—checking where users hesitate, lose context, or need information from outside the system.</p>
          </section>
          <a className="back-work" href={sitePath("/#work")}><ArrowLeft size={18} /><div>Explore more work<span>Back to selected projects</span></div></a>
        </article>
      </div>
      <PortfolioFooter />
    </main>
  </>;
}
