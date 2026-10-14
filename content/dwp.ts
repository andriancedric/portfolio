/** Edit this file to add DWP examples. See docs/DWP-CONTENT-GUIDE.md. */
export type DwpImage = { src: string; alt: string; caption: string; device: string };
export type DwpExample = {
  id: string;
  published: boolean;
  title: string;
  userGoal: string;
  problem: string;
  contribution: string;
  decisions: string;
  states: string;
  validation: string;
  outcome: string;
  images: DwpImage[];
};
// Empty strings are intentional. Do not replace them with invented project claims.
// Set published:true only when the example and its images are ready for visitors.
export const dwpExamples: DwpExample[] = [
  {
    id: "flow-01", published: false, title: "",
    userGoal: "", problem: "", contribution: "", decisions: "",
    states: "", validation: "", outcome: "",
    images: [
      { src: "", alt: "", caption: "", device: "Desktop" },
      { src: "", alt: "", caption: "", device: "Mobile" },
    ],
  },
  {
    id: "flow-02", published: false, title: "",
    userGoal: "", problem: "", contribution: "", decisions: "",
    states: "", validation: "", outcome: "",
    images: [
      { src: "", alt: "", caption: "", device: "Desktop" },
      { src: "", alt: "", caption: "", device: "iPad" },
    ],
  },
  {
    id: "flow-03", published: false, title: "",
    userGoal: "", problem: "", contribution: "", decisions: "",
    states: "", validation: "", outcome: "",
    images: [{ src: "", alt: "", caption: "", device: "Detail / state" }],
  },
];
export const dwpReference = {
  organization: "",
  versioning: "",
  annotations: "",
  collaboration: "",
  image: { src: "", alt: "", caption: "", device: "Development reference" } as DwpImage,
};
