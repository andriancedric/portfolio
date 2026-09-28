import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import PortfolioNav from "@/components/portfolio-nav";
import PortfolioFooter from "@/components/portfolio-footer";

export const metadata: Metadata = {
  title: "IDX Centralized Trading Platform — Andrian Cedric",
  description: "Redesigning more than 10 user flows for IDX’s Centralized Trading Platform, with clearer data tables, auction interfaces, and reusable components.",
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
export default function Ctp() {
  return <>
    <PortfolioNav project />
    <main id="main">
      <section className="case-hero wrap">
        <a className="text-link" href={sitePath("/#work")}><ArrowLeft size={16} /> Back to selected work</a>
        <div className="eyebrow">INDONESIA STOCK EXCHANGE / CENTRALIZED TRADING PLATFORM</div>
        <h1>Complex trading flows.<br /><em>A clearer way through.</em></h1>
        <p className="case-intro">Redesigning a data-intensive trading workspace for market participants, IDX administrators, and government users—with clearer information, consistent patterns, and attention to transaction context.</p>
        <div className="case-facts">
          <div><span>ROLE</span><strong>UI/UX Designer</strong></div>
          <div><span>CONTEXT</span><strong>Capital markets · Enterprise web</strong></div>
          <div><span>SCOPE</span><strong>10+ user flows · PD & admin</strong></div>
          <div><span>TOOLS</span><strong>Figma · shadcn/ui · ChatGPT</strong></div>
        </div>
        <figure className="case-cover st-cover">
          <img src={sitePath("/images/ctp-dashboard.png")} alt="CTP dashboard presenting auction schedules and trading information, with sensitive details obscured" fetchPriority="high" />
          <figcaption>Centralized Trading Platform · Selected interface mockups · Sensitive information obscured</figcaption>
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
            <h2>One platform.<br />Different responsibilities.</h2>
            <p>The Centralized Trading Platform (CTP) supports securities trading, auction activity, and monitoring for the Indonesia Stock Exchange and related participants. Its users include representatives from banks and securities companies, IDX administrators, and government stakeholders.</p>
            <p>My work focused on the CTP MOFIDS PD and admin redesign: translating requirements into mockups, prototypes, and a shared design system across more than 10 user flows.</p>
            <div className="scope-grid">
              <div><strong>10+</strong><span>User flows in the redesign</span></div>
              <div><strong>Multi-role</strong><span>Participant and admin contexts</span></div>
              <div><strong>Shared</strong><span>Component-based design system</span></div>
            </div>
            <p className="context-note">This is a confidential project. The selected mockups retain the obscured information used in the public portfolio; internal specifications and sensitive transaction data are not reproduced.</p>
          </section>
          <section id="challenge">
            <div className="eyebrow">02 / THE CHALLENGE</div>
            <h2>Dense information.<br />Demanding workflows.</h2>
            <p>Discussions with IDX users identified usability difficulties and inconsistencies in the existing interface. The redesign had to accommodate detailed records, different responsibilities, and strict requirements for handling trading information.</p>
            <p>Users move between an overview, searchable records, and transaction details. The design challenge was to make those transitions understandable while retaining the information needed to carry out each task.</p>
            <div className="insight"><span>THE DESIGN QUESTION</span><p>How can a consistent interface help users find the right record, understand its context, and identify the actions available to them?</p></div>
          </section>
          <section id="contribution">
            <div className="eyebrow">03 / CONTRIBUTION</div>
            <h2>Clarify the requirements.<br />Connect the experience.</h2>
            <p>As the UI/UX Designer, I worked on the platform’s mockups, prototypes, and design system. Meetings with users and stakeholders informed the requirements and design direction.</p>
            <ul className="contribution-list">
              <li>Translated user needs into low- and high-fidelity wireframes across more than 10 flows.</li>
              <li>Designed dashboard, record-list, auction-detail, lending-form, and administration interfaces.</li>
              <li>Developed a custom component system aligned with shadcn/ui for the implementation team.</li>
              <li>Used prototypes in usability testing and iterated the designs with users.</li>
            </ul>
            <p className="context-note">User and stakeholder input shaped the design; software implementation was handled by the development team.</p>
          </section>
          <section id="approach">
            <div className="eyebrow">04 / DESIGN APPROACH</div>
            <h2>Consistent patterns.<br />Context where it matters.</h2>
            <div className="decision"><span>01</span><div><h3>Start with an overview of the work</h3><p>The dashboard brings auction schedules, trading figures, and securities-lending information into an overview. It gives users a starting point before they move into the detailed records required for a particular task.</p></div></div>
            <Figure image="ctp-dashboard" alt="CTP dashboard with summary figures, auction information, and lending information" caption="An overview connects the platform’s major areas of activity." />
            <div className="decision"><span>02</span><div><h3>Give data-heavy pages a shared structure</h3><p>List pages follow a recurring table pattern, with a dedicated Search Criteria area whose fields change for the page context. This provides a consistent location for filtering while allowing each dataset to use relevant criteria.</p><p>The table toolbar groups export to Excel, copy to clipboard, column management, and refresh actions. Column management gives users control over the visible data without requiring a different layout for every task.</p></div></div>
            <Figure image="ctp-table" alt="CTP record table with search criteria, column controls, and data actions" caption="A repeatable pattern for filtering, reviewing, and working with records." />
            <div className="decision"><span>03</span><div><h3>Keep auction actions in their session context</h3><p>The auction-detail view brings the auction information and transaction area into the same workspace. Transactions are associated with an active session and its requirements, making the relationship between the record and the available action a central part of the screen.</p></div></div>
            <Figure image="ctp-auction" alt="CTP auction-detail interface with session information and transaction fields" caption="Auction details and transaction context are presented together." />
            <div className="decision"><span>04</span><div><h3>Carry the patterns into reusable components</h3><p>A custom design system built on shadcn/ui patterns provides shared interface building blocks. It connects the screen designs to components the development team can implement and reuse across participant and administration views.</p></div></div>
            <Figure image="ctp-system" alt="CTP design system showing reusable interface components" caption="Shared components provide a consistent foundation across the redesigned flows." />
            <div className="insight"><span>VALIDATION WITH USERS</span><p>Wireframes and prototypes were reviewed and tested with users, with feedback informing iterations. The available project record does not include participant counts or task-level results, so no quantitative usability improvement is claimed.</p></div>
          </section>
          <section id="deliverables">
            <div className="eyebrow">05 / DELIVERABLES</div>
            <h2>From individual screens.<br />To a shared foundation.</h2>
            <p>The project produced UI/UX mockups and prototypes for more than 10 user flows, together with a reusable design system. The scope includes participant workflows and administration screens for configuring parameters and default values.</p>
            <div className="deliverable-grid">
              <div><h3>Connected product flows</h3><p>Dashboard, searchable records, auction details, lending forms, and admin interfaces.</p></div>
              <div><h3>Reusable interface patterns</h3><p>A component system aligned with shadcn/ui to support implementation across the product.</p></div>
            </div>
            <p className="context-note">These are design delivery outputs. Current production status and measured business impact are not established in this case study.</p>
          </section>
          <section id="reflection">
            <div className="eyebrow">06 / REFLECTION</div>
            <h2>Clarity comes from structure.<br />And from context.</h2>
            <p>A trading workspace needs both: repeatable patterns for navigating dense information, and clear context for actions tied to a particular record or session. The table structure and auction-detail view address these complementary needs.</p>
            <p>A useful next evaluation would trace complete tasks—from finding a record to reviewing details and submitting an action. Particular attention should go to empty search results, session boundaries, validation errors, and the differences between participant and administrator responsibilities.</p>
          </section>
          <a className="back-work" href={sitePath("/#work")}><ArrowLeft size={18} /><div>Explore more work<span>Back to selected projects</span></div></a>
        </article>
      </div>
      <PortfolioFooter />
    </main>
  </>;
}
