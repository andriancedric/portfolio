# Portfolio revamp case study — editing guide

Prepared against `andriancedric/portfolio` main commit `fbbb12e046ccf34cabc7147dc6a7ecc10dae136a`, checked 21 October 2026. The owner approved the revised preview, including its mobile corrections, for publication.

## Files

- `app/page.tsx`: one import and one project link added after IDX CTP.
- `app/work/portfolio-revamp/page.tsx`: new case-study page.
- `app/work/portfolio-revamp/revamp.module.css`: page-specific styles; global styles remain unchanged.
- `content/portfolio-revamp.ts`: editable process stages, original conversation excerpts, and reference captions.
- `public/images/portfolio-revamp/`: five supplied Framer screenshots, copied without image edits.
- `docs/PORTFOLIO-REVAMP-GUIDE.md`: these notes.

No package or lockfile changes are required. All application-local links and asset URLs use the existing `sitePath()` helper.

## User confirmations incorporated

1. No major AI proposal was rejected. The specific brief and prompts established alignment early. The case study uses direction-setting and review as evidence of ownership; it does not invent a rejected idea or a disagreement.
2. Informal viewers were impressed by how closely the generated design reflected the user's direction and by its natural feel. This is reported as owner-summarized informal feedback, not a quotation from a named individual, recruiter validation, or measured improvement.
3. The five uploaded screenshots may be used, and relevant conversation excerpts may be shown. Excerpts preserve the original Indonesian wording and use English explanatory notes.

The supplied screenshots show the Framer version and are dated by the supply/capture date, 21 October 2026. They are not represented as screenshots taken before the project began. Their content is visual evidence of the supplied version; old audit defects are not all asserted to remain present.

## Editorial ownership

Andrian is the project owner and UI/UX designer directing the work. AI provided critique, discussion, drafts, implementation code, and technical guidance. Do not describe this as a staffed human team or independently hand-coded implementation.

The critique's scores and hiring probabilities are excluded as outcomes. No total duration, time saved, conversion improvement, or hiring success is claimed.

## Local review

Run `npm run dev`, then open `/work/portfolio-revamp/` at the localhost URL printed by Next.js. The new homepage link is the fourth Selected Work project. No draft flag is needed for this page.

For the production subpath: `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`, then `npm run typecheck`.

The standalone HTML preview contains the homepage and new case study. It embeds CSS, fonts, and images. React hydration is omitted; preview navigation and the mobile menu have a small preview-only script. The native HTML reference disclosures are preserved. Existing project links open the published website. Browser visual QA is unavailable in this environment; the static export and TypeScript checks are used for implementation validation.

## Mobile correction after the first preview

- The preview serializer emitted invalid closing tags for void HTML elements (`<br></br>`). Browsers can interpret the closing `br` as another line break. The serializer now preserves HTML void-element semantics; production markup already used normal `<br/>` elements.
- The mobile article grid retained its automatic minimum width, and the comparison table's 520 px minimum pushed its contents outside the 390 px viewport. The page now gives the article and grid items a zero minimum width and uses a zero-minimum grid track on mobile.
- The comparison uses stacked entries on mobile and the original table on desktop, both driven by `revampComparison` in the content file. No global overflow clipping is used.
- Browser-based viewport measurements were unavailable in the implementation environment. The owner reviewed the updated preview and approved the corrections before publication.

## Future updates

Recheck GitHub main before applying this update. Merge only the homepage import/card if main has changed; do not replace the entire repository or unrelated files. Include the new page, scoped CSS, content, and five screenshots. Do not include generated build files, cached dependencies, or temporary preview tooling.
