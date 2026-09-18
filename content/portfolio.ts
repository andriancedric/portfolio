import { sitePath } from "@/lib/site-path";
// Keep factual portfolio content here; layout belongs in app/ and components/.
export const profile = {
  name: "Andrian Cedric",
  // Add your image to public/images and set this to "/images/portrait.jpg".
  portrait: "",
  email: "andriancedric@gmail.com",
  linkedin: "https://www.linkedin.com/in/andrian-cedric-46822015b/",
  resume: sitePath("/Andrian-Cedric-Resume.pdf"),
};
export const experience = [
  {
    period: "Nov 2025 — Present",
    company: "Bank Indonesia",
    role: "UI/UX Designer · PT Adidata Informatika",
    description:
      "Developing a shared design system and refining Digital Workplace mockups across web and mobile.",
  },
  {
    period: "Sep 2021 — Aug 2025",
    company: "Moonlay Technologies",
    role: "UI/UX Designer",
    description:
      "Research, design systems, and prototypes for banking, capital markets, aviation, and retail analytics.",
  },
  {
    period: "2021 — 2025",
    company: "Independent projects",
    role: "UI/UX Design & Web Development",
    description:
      "Design and implementation for architecture, education, editorial, and sustainability-focused websites.",
  },
];
export const capabilities = [
  "Enterprise UX",
  "Design systems",
  "Workflow mapping",
  "Prototyping",
  "User research",
  "Developer collaboration",
];
