import { sitePath } from "@/lib/site-path";
import { dwpExamples, dwpReference, type DwpImage } from "@/content/dwp";
const draft = process.env.DWP_SHOW_DRAFTS === "true";
const prompts = [
  ["userGoal", "User goal", "Siapa penggunanya dan apa tujuan mereka pada alur ini?"],
  ["problem", "Problem & constraints", "Apa masalah spesifik, bukti, atau batasan yang memengaruhi desain?"],
  ["contribution", "My contribution", "Apa yang Anda kerjakan sendiri dan apa yang dikerjakan bersama tim?"],
  ["decisions", "Key design decisions", "Jelaskan 1–3 keputusan, alasannya, dan alternatif/trade-off jika ada."],
  ["states", "States & device adaptations", "Apa yang berubah antarperangkat? State error, loading, empty, atau permission apa yang relevan?"],
  ["validation", "Validation & iteration", "Siapa yang meninjau/menguji, apa feedback-nya, dan apa yang berubah?"],
  ["outcome", "Outcome", "Apa hasil yang bisa dibuktikan? Gunakan hasil kualitatif bila tidak ada metrik."],
] as const;
function ImageSlot({ image }: { image: DwpImage }) {
  if (!image.src || !image.alt) return draft ? <div className="dwp-image-slot"><span>{image.device}</span><strong>Image placeholder</strong><p>Tambahkan screenshot, alt text, dan caption.</p></div> : null;
  return <figure className="detail-figure dwp-image"><a href={sitePath(image.src)} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${image.alt}`}><img src={sitePath(image.src)} alt={image.alt} loading="lazy" /></a><figcaption>{image.device}{image.caption ? ` · ${image.caption}` : ""} · Open image for a closer look.</figcaption></figure>;
}
export function MasterMockups() {
  const examples = dwpExamples.filter(x => draft || (x.published && x.title && x.userGoal && x.contribution && x.decisions && x.images.some(i => i.src && i.alt)));
  return <section id="master-mockup">
    <div className="eyebrow">05 / MASTER MOCKUP</div>
    <h2>From reusable components.<br />To connected experiences.</h2>
    <p>The master mockup brings the latest feature designs into a shared reference across desktop, iPad, and mobile. Updated components are applied to the screens that the delivery team needs to maintain and build.</p>
    {draft && <p className="dwp-draft-note">EDITORIAL PREVIEW · Template isian, bukan klaim proyek. Slot kosong tidak ditampilkan pada build publik.</p>}
    {examples.map((example, index) => <div className="dwp-example" key={example.id} id={example.id}>
      <div className="eyebrow">WORKFLOW {String(index + 1).padStart(2,"0")}{draft && !example.published ? " / DRAFT" : ""}</div>
      <h3>{example.title || `Contoh alur ${index + 1} — nama fitur`}</h3>
      <dl className="dwp-fields">{prompts.map(([key,label,prompt]) => example[key] || draft ? <div key={key}><dt>{label}</dt><dd className={example[key] ? "" : "dwp-prompt"}>{example[key] || prompt}</dd></div> : null)}</dl>
      <div className="dwp-image-grid">{example.images.map((image, i) => <ImageSlot key={i} image={image} />)}</div>
    </div>)}
  </section>;
}
export function DevelopmentReference() {
  const fields = [
    ["organization", "File organization", "Bagaimana halaman, fitur, dan alur dikelompokkan di master file?"],
    ["versioning", "Current design & status", "Bagaimana tim mengetahui versi terbaru dan status siap dikembangkan?"],
    ["annotations", "Annotations & behavior", "Anotasi apa yang menjelaskan interaksi, state, atau aturan bisnis?"],
    ["collaboration", "Team usage", "Siapa yang memakai referensi ini dan bagaimana perubahan dikomunikasikan?"],
  ] as const;
  return <section id="development-reference"><div className="eyebrow">06 / DEVELOPMENT REFERENCE</div><h2>A shared reference.<br />For the people building it.</h2><p>The master file gives developers, system analysts, and technical writers a central place to reference current feature mockups, complementing sprint-based design work.</p><dl className="dwp-fields">{fields.map(([key,label,prompt]) => dwpReference[key] || draft ? <div key={key}><dt>{label}</dt><dd className={dwpReference[key] ? "" : "dwp-prompt"}>{dwpReference[key] || prompt}</dd></div> : null)}</dl><ImageSlot image={dwpReference.image} /></section>;
}
