import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig, themeStyle } from "@/site.config";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <style>{`:root{${themeStyle()}}`}</style>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
