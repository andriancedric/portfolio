import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Andrian Cedric — Product & UI/UX Designer",
  description:
    "Jakarta-based UI/UX designer bringing clarity to complex enterprise products, workflows, and design systems.",
  icons: { icon: sitePath("/favicon.svg") },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
