import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ArrowDown, Check, MessageSquare, Code2 } from "lucide-react";
import PortfolioNav from "@/components/portfolio-nav";
import PortfolioFooter from "@/components/portfolio-footer";
import { sitePath } from "@/lib/site-path";
import { revampSteps, revampExcerpts, revampArchive, revampComparison } from "@/content/portfolio-revamp";
import styles from "./revamp.module.css";

export const metadata: Metadata = {
  title: "Rebuilding My Portfolio with AI — Andrian Cedric",
  description: "From Framer to a code-based portfolio: how I used AI for critique, discussion, and implementation while retaining responsibility for design and publishing decisions.",
};
const sections = [["overview", "The starting point"], ["process", "The collaboration"], ["direction", "Direction & decisions"], ["evidence", "In my own words"], ["change", "What changed"], ["outcome", "Outcome & feedback"], ["reflection", "What I learned"]];
function Figure({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return <figure className={`detail-figure ${styles.figure}`}>
    <a href={sitePath(`/images/portfolio-revamp/${file}`)} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`}><img src={sitePath(`/images/portfolio-revamp/${file}`)} alt={alt} width={2048} height={1121} loading="lazy" /></a>
    <figcaption>{caption} <span>Framer reference supplied 21 October 2026. Open image for a closer look.</span></figcaption>
  </figure>;
}
export default function PortfolioRevamp() {
  return <>
    <PortfolioNav project />
    <main id="main" className={styles.page}>
      <section className="case-hero wrap">
        <a className="text-link" href={sitePath("/#work")}><ArrowLeft size={16} /> Back to selected work</a>
        <div className="eyebrow">PERSONAL PROJECT / AI-ASSISTED DESIGN & DEVELOPMENT</div>
        <h1>A new portfolio.<br /><em>A deliberate collaboration.</em></h1>
        <p className="case-intro">From Framer to a code-based website: how I used ChatGPT and Codex to critique, discuss, and build—while keeping the direction and final decisions in my hands.</p>
        <div className="case-facts">
          <div><span>MY ROLE</span><strong>Project owner · UI/UX direction</strong></div>
          <div><span>AI SUPPORT</span><strong>Critique · Discussion · Implementation</strong></div>
          <div><span>PLATFORM</span><strong>Next.js · GitHub Pages</strong></div>
          <div><span>STATUS</span><strong>Published · Continuing to evolve</strong></div>
        </div>
        <div className={styles.cover}>
          <div className={styles.coverImage}>
            <div className={styles.windowBar}><span aria-hidden="true">● ● ●</span><span>THE FRAMER STARTING POINT</span></div>
            <a href={sitePath("/images/portfolio-revamp/framer-home.png")} target="_blank" rel="noreferrer" aria-label="Open the original Framer homepage reference"><img src={sitePath("/images/portfolio-revamp/framer-home.png")} width={2048} height={1121} alt="Andrian’s Framer portfolio homepage with a navy–cyan hero, portrait, and UI/UX Designer and Framer Developer title" fetchPriority="high" /></a>
            <span className={styles.imageSource}>Owner-supplied reference · 21 October 2026</span>
          </div>
          <div className={styles.coverCopy}>
            <span className="eyebrow">THE QUESTION BEHIND THE REVAMP</span>
            <h2>How could AI help me present my work <em>more clearly?</em></h2>
            <p>I brought the context, constraints, and judgment. AI helped turn them into critique, proposals, and working code.</p>
            <a className="text-link" href="#process">Follow the process <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className={styles.ownership}><Check size={20} aria-hidden="true" /><p><strong>I owned the direction.</strong> AI supported the work. I reviewed the previews and approved publication.</p></div>
      </section>
      <div className="case-body wrap">
        <aside className="case-toc"><span className="eyebrow">IN THIS CASE STUDY</span><nav aria-label="Case study contents">{sections.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></aside>
        <article className="case-article">
          <section id="overview">
            <div className="eyebrow">01 / THE STARTING POINT</div>
            <h2>Reconsider the experience.<br />Then rebuild it.</h2>
            <p>My existing Framer portfolio already presented my enterprise design work. I wanted to examine how clearly it communicated my experience to Product and UI/UX recruiters, while keeping it relevant to potential freelance clients.</p>
            <p>I also wanted to refresh my technical skills. Moving to code would give me an opportunity to collaborate on implementation and learn how to maintain the website myself.</p>
            <div className={styles.intent}><div><MessageSquare size={22} aria-hidden="true" /><h3>A clearer design story</h3><p>Use critique to question positioning, project narratives, and the information a visitor needs.</p></div><div><Code2 size={22} aria-hidden="true" /><h3>A hands-on editing workflow</h3><p>Work with source files, local previews, and GitHub as the website continues to grow.</p></div></div>
          </section>
          <section id="process">
            <div className="eyebrow">02 / THE COLLABORATION</div>
            <h2>From a critical question.<br />To a working website.</h2>
            <p>The work developed through clarification, proposals, implementation, and review. AI supported different activities along the way; I set the brief and decided what to carry forward.</p>
            <ol className={styles.timeline}>{revampSteps.map((step,i) => <li key={step.id}>
              <span className={styles.stepNumber}>{String(i+1).padStart(2,"0")}</span>
              <div className={styles.stepContent}><h3>{step.title}</h3><p>{step.description}</p><dl className={styles.roles}><div><dt>MY ROLE</dt><dd>{step.human}</dd></div><div><dt>AI’S SUPPORT</dt><dd>{step.ai}</dd></div></dl><p className={styles.stepResult}><span>OUTPUT</span>{step.result}</p></div>
            </li>)}</ol>
            <p className="context-note">The initial critique was an AI-assisted evaluation, not research conducted with recruiters. Its scores and predicted hiring probabilities are not treated as measured results.</p>
          </section>
          <section id="direction">
            <div className="eyebrow">03 / DIRECTION & DECISIONS</div>
            <h2>Alignment started<br /><em>with a clear brief.</em></h2>
            <p>I did not need to reject a major proposal during this process. The suggestions generally matched what I wanted because I had already described the audience, styling, preferences, and constraints in my prompts.</p>
            <p>My ownership showed up in setting those conditions, reviewing how they were interpreted, and requesting targeted refinements. Accepting a proposal was still a decision I made.</p>
            <div className={styles.brief}><span className="eyebrow">THE DIRECTION I SET</span><dl><div><dt>Audience</dt><dd>Product/UI/UX recruiters first; freelance clients second.</dd></div><div><dt>Visual language</dt><dd>Navy–cyan, Plus Jakarta Sans, and floating glass navigation.</dd></div><div><dt>Working method</dt><dd>Discuss the approach, inspect previews, then approve publication.</dd></div><div><dt>Technical goal</dt><dd>A code-based website I could use to practise and maintain my skills.</dd></div></dl></div>
            <div className="decision"><span>01</span><div><h3>One consistent resume entry point</h3><p>I requested that “View Resume” remain in the top navigation and that duplicates elsewhere be removed. AI implemented the change across the shared experience.</p></div></div>
            <div className="decision"><span>02</span><div><h3>A personal introduction</h3><p>I asked for the hero visual to become a space for my portrait, then worked through how to replace the image in the repository.</p></div></div>
            <div className="decision"><span>03</span><div><h3>A repeatable case-study structure</h3><p>I used the Bank Indonesia page as the reference for ST Engineering and IDX CTP, requesting project-specific content within the same design language.</p></div></div>
          </section>
          <section id="evidence">
            <div className="eyebrow">04 / IN MY OWN WORDS</div>
            <h2>The decisions are visible<br />in the conversation.</h2>
            <p>These excerpts show how I set expectations, clarified the brief, and approved a release. The original Indonesian wording is retained; each note explains its role in the process.</p>
            <div className={styles.excerpts}>{revampExcerpts.map(x => <figure key={x.label} className={styles.excerpt}><figcaption>{x.label}</figcaption><blockquote lang="id">“{x.quote}”</blockquote><p>{x.meaning}</p><span>Andrian Cedric · Original project conversation</span></figure>)}</div>
          </section>
          <section id="change">
            <div className="eyebrow">05 / WHAT CHANGED</div>
            <h2>Keep the identity.<br />Rework the presentation.</h2>
            <p>The navy–cyan direction carried into the new website. The structure, typography, case-study format, and contact message were reconsidered around the audience I had chosen.</p>
            <Figure file="framer-work.png" alt="Framer selected work section showing large Bank Indonesia and ST Engineering project cards" caption="The Framer portfolio used a large card grid to introduce projects. The new homepage gives DWP a featured position, followed by concise project links." />
            <div className={styles.comparison} role="region" aria-label="Changes between the Framer portfolio and the current portfolio" tabIndex={0}><table><caption>From the supplied references to the current website</caption><thead><tr><th scope="col">Area</th><th scope="col">Framer reference</th><th scope="col">Current website</th></tr></thead><tbody>
              {revampComparison.map(item => <tr key={item.area}><th scope="row">{item.area}</th><td>{item.before}</td><td>{item.after}</td></tr>)}
            </tbody></table></div>
            <div className={styles.comparisonMobile}>
              {revampComparison.map(item => <div key={item.area}><h3>{item.area}</h3><dl><div><dt>Framer reference</dt><dd>{item.before}</dd></div><div><dt>Current website</dt><dd>{item.after}</dd></div></dl></div>)}
            </div>
            <a className={`text-link ${styles.liveLink}`} href={sitePath("/")} target="_blank" rel="noreferrer">Explore the current homepage <ArrowUpRight size={17} /></a>
            <div className={styles.archive}><h3>More from the Framer reference</h3><p>Open a reference to see how project details and contact information were presented.</p>{revampArchive.map(x => <details key={x.file}><summary>{x.title}</summary><Figure file={x.file} alt={x.alt} caption={x.caption} /></details>)}</div>
          </section>
          <section id="outcome">
            <div className="eyebrow">06 / OUTCOME & FEEDBACK</div>
            <h2>A published website.<br />An encouraging first response.</h2>
            <p>The project delivered a code-based portfolio on GitHub Pages, a personal homepage, and consistent case studies for Bank Indonesia, ST Engineering, and IDX CTP. Further updates introduced a template for documenting DWP master mockup examples.</p>
            <div className={styles.feedback}><span className="eyebrow">INFORMAL FEEDBACK · OWNER-REPORTED</span><h3>The direction came through.</h3><p>People I showed the design to were impressed by how closely the AI-generated result reflected my intended direction. They described it as feeling more natural than the AI-generated designs they remembered from a couple of years earlier.</p><p className={styles.feedbackNote}>This summarizes informal reactions I received. It is not a formal usability study or evidence of improved recruitment outcomes.</p></div>
            <p>The next useful evaluation would be to ask recruiters to find my resume and a relevant project, then explain what they understood about my role and contribution. That would test the portfolio beyond its visual impression.</p>
          </section>
          <section id="reflection">
            <div className="eyebrow">07 / WHAT I LEARNED</div>
            <h2>Clear direction matters.<br /><em>So does continued review.</em></h2>
            <p>AI was useful across the process: challenging the existing portfolio, helping me discuss improvements, drafting alternatives, generating code, and supporting troubleshooting. The clear brief gave those activities a direction.</p>
            <p>The work still required factual checks, integration, and decisions about what to publish. AI contributed substantial implementation assistance; I directed the design, supplied and corrected the context, reviewed the outputs, and worked through local updates.</p>
            <div className="insight"><span>MY TAKEAWAY</span><p>I can use AI as a collaborator across design and development while remaining responsible for the brief, the judgment, and the final result.</p></div>
          </section>
          <a className="back-work" href={sitePath("/#work")}><ArrowLeft size={18} /><div>Explore more work<span>Back to selected projects</span></div></a>
        </article>
      </div>
      <PortfolioFooter />
    </main>
  </>;
}
