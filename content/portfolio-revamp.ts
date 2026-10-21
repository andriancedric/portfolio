// Verified against Andrian's brief, review requests, and follow-up on 21 October 2026.
// Feedback is an informal owner-reported observation, not a recruiter study.
export const revampSteps = [
  {
    id: "critique", title: "Ask for a critical starting point",
    description: "I asked AI to examine completeness, findability, and how the existing portfolio presented me to recruiters. The critique raised questions about positioning, project narratives, personal contribution, and evidence of outcomes.",
    human: "I defined what to evaluate and explicitly asked for candid criticism.",
    ai: "Examined the experience and proposed areas to improve.",
    result: "An initial set of questions and priorities to discuss before building.",
  },
  {
    id: "clarify", title: "Clarify the audience and the constraints",
    description: "Before implementation, I asked to discuss the structure and code requirements. I then set Product/UI/UX recruiters as the primary audience, with freelance clients as a secondary audience.",
    human: "I chose the audience, retained navy–cyan, and specified Plus Jakarta Sans and floating glass navigation.",
    ai: "Discussed the brief and proposed a structure and implementation approach.",
    result: "A shared direction against which I could review the next proposals.",
  },
  {
    id: "develop", title: "Turn the direction into something reviewable",
    description: "AI helped translate the brief into page layouts, draft copy, and working code. Previews gave me a concrete experience to inspect, so feedback could address particular elements and pages.",
    human: "I supplied project references, reviewed the output, and requested specific changes.",
    ai: "Generated and revised the website in response to that feedback.",
    result: "A working portfolio that developed through review and iteration.",
  },
  {
    id: "refine", title: "Make focused decisions through iteration",
    description: "I requested that the resume link remain only in the top navigation, that the hero contain my portrait, and that ST Engineering and IDX CTP follow the Bank Indonesia case-study layout with their own project details.",
    human: "I selected the changes and approved the previews before publishing.",
    ai: "Adapted the shared layout and implemented the requested revisions.",
    result: "Consistent case studies, a personal introduction, and a clear resume entry point.",
  },
  {
    id: "publish", title: "Build an editing workflow I could continue",
    description: "I chose a code-based website partly to refresh my technical skills. With AI guidance, I worked through repository access, local previews, and publishing the Next.js website on GitHub Pages.",
    human: "I worked with the local files and decided when the reviewed changes were ready to publish.",
    ai: "Contributed implementation code and explained the development and deployment steps.",
    result: "A published portfolio with a repository-based editing workflow.",
  },
  {
    id: "maintain", title: "Keep reviewing after launch",
    description: "The later DWP update added space for master mockup examples. Integrating the files also exposed styling and Git synchronization issues, including a CSS conflict during rebase.",
    human: "I shared the errors and conflicting file, applied the reviewed fix, and continued the local workflow.",
    ai: "Helped diagnose the issue and prepared a resolution preserving the existing and new DWP styles.",
    result: "The DWP template reached the repository, with empty editorial slots kept out of the public build.",
  },
] as const;

export const revampExcerpts = [
  {
    label: "01 / DISCUSS BEFORE BUILDING",
    quote: "harap diskusi dulu untuk penerapan website dan code yang perlu disiapkan",
    meaning: "I asked to discuss the website and code requirements before implementation.",
  },
  {
    label: "02 / SET THE AUDIENCE",
    quote: "Untuk penentuan arah, saya lebih dominan untuk rekruter Product/UI/UX Designer saja dengan ada kemungkinan klien freelance untuk melihat.",
    meaning: "I established a primary audience while leaving room for a secondary one.",
  },
  {
    label: "03 / REVIEW BEFORE PUBLISHING",
    quote: "Jika mengerti, dapat lakukan perubahan dan preview sebelum di push",
    meaning: "I required a preview before the changes were pushed.",
  },
  {
    label: "04 / MAKE THE RELEASE DECISION",
    quote: "saya puas dengan hasil previewnya. sekarang bisa lakukan update dan push ke github saya",
    meaning: "I approved the reviewed result and explicitly requested the GitHub update.",
  },
] as const;

// One source for the desktop table and the stacked mobile comparison.
export const revampComparison = [
  { area: "Positioning", before: "UI/UX Designer & Framer Developer", after: "Product & UI/UX Designer, with a focus on complex digital products" },
  { area: "Navigation", before: "A full-width bar with section links", after: "A floating glass navbar with a consistent resume entry point" },
  { area: "Case studies", before: "Large project introductions and summary cards", after: "A shared structure with project facts, section navigation, contribution, decisions, and reflection" },
  { area: "Contact", before: "“Have a project in mind?”", after: "A message that leads with product design roles and also welcomes freelance projects" },
  { area: "Maintenance", before: "A Framer editing workflow", after: "Source files, local previews, and GitHub Pages deployment" },
] as const;

export const revampArchive = [
  { file: "framer-case-hero.png", title: "The earlier case-study introduction", alt: "Framer DWP case study with a large screenshot backdrop and an overlaid project title", caption: "The earlier DWP introduction placed the title and description over a large project visual." },
  { file: "framer-case-summary.png", title: "The earlier project summary", alt: "Framer project summary with duration, team members, and tools followed by two text columns", caption: "Project facts were presented in cards, followed by the problem and solution narrative." },
  { file: "framer-contact.png", title: "The earlier contact section", alt: "Framer experience and contact section headed Have a project in mind", caption: "The earlier contact message addressed prospective clients. The current site leads with product design roles and also welcomes freelance projects." },
] as const;
