import { sitePath } from "@/lib/site-path";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/portfolio";
export default function PortfolioFooter() {
  return (
    <>
      <section className="contact-section wrap" id="contact">
        <div className="eyebrow">LET’S CONNECT</div>
        <div className="contact-layout">
          <h2>
            Good products start
            <br />
            with a <em>conversation.</em>
          </h2>
          <div>
            <p>
              Have a product design role in mind?
              <br />
              I’d love to hear about your team.
              <br />
              Thoughtful freelance projects are welcome, too.
            </p>
            <a className="button primary" href={`mailto:${profile.email}`}>
              Get in touch <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <footer className="wrap footer">
        <a className="footer-name" href={sitePath("/")}>
          Andrian Cedric<span>Product & UI/UX Designer</span>
        </a>
        <div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href={`mailto:${profile.email}`}>
            Email <ArrowUpRight size={14} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} · Jakarta, Indonesia</p>
      </footer>
    </>
  );
}
