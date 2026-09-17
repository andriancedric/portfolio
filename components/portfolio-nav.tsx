"use client";
import { sitePath } from "@/lib/site-path";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
const links = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["About", "about"],
  ["Contact", "contact"],
];
export default function PortfolioNav({
  project = false,
}: {
  project?: boolean;
}) {
  const [active, setActive] = useState(project ? "work" : "");
  useEffect(() => {
    if (project) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [project]);
  const href = (id: string) => (project ? sitePath(`/#${id}`) : `#${id}`);
  return (
    <header className="nav-shell">
      <nav className="glass-nav" aria-label="Main navigation">
        <a
          className="wordmark"
          href={sitePath("/")}
          aria-label="Andrian Cedric home"
        >
          ac<span>.</span>
        </a>
        <div className="desktop-links">
          {links.map(([label, id]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              href={href(id)}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="nav-resume"
          href={sitePath("/Andrian-Cedric-Resume.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          Résumé <ArrowUpRight size={16} />
        </a>
        <Sheet>
          <SheetTrigger className="mobile-menu" aria-label="Open navigation">
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent className="mobile-panel">
            <SheetTitle>Explore</SheetTitle>
            <SheetDescription>
              Andrian Cedric · Product & UI/UX Design
            </SheetDescription>
            <div className="mobile-links">
              {links.map(([label, id]) => (
                <SheetClose asChild key={id}>
                  <a href={href(id)}>{label}</a>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
