import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "SARL HEBERT | Aménagement extérieur & terrassement à Lessay",
  description:
    "SARL HEBERT à Lessay : terrassement, cours, allées, clôtures, portails et aménagement paysager dans la Manche. Parlez-nous de votre projet.",
  keywords: [
    "aménagement extérieur Lessay",
    "terrassement Lessay",
    "paysagiste Lessay",
    "clôture portail Manche",
    "SARL HEBERT",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: `${basePath}/images/logo-hebert.png`,
    shortcut: `${basePath}/images/logo-hebert.png`,
    apple: `${basePath}/images/logo-hebert.png`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
