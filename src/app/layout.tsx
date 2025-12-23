import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | Royal Mint .999 Fine Silver`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Comprehensive guide to British Silver Britannia coins from the Royal Mint. Government-minted .999 fine silver with advanced anti-counterfeiting security features, strong global liquidity, and IRA eligibility. Learn about the iconic Britannia design, premiums, and investing.",
  keywords: [
    "British Silver Britannia",
    "Silver Britannia coin",
    "Royal Mint silver",
    "1 oz silver Britannia",
    ".999 fine silver",
    "silver bullion coins",
    "buy Silver Britannia",
    "Britannia coin prices",
    "silver coin investment",
    "IRA eligible silver",
    "UK silver coins",
    "Britannia security features",
    "Royal Mint bullion",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | Royal Mint .999 Fine Silver`,
    description:
      "Comprehensive guide to British Silver Britannia coins. Government-minted by the Royal Mint with .999 fine silver, advanced security features, and strong global liquidity.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "British Silver Britannia Coins - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | Royal Mint .999 Fine Silver`,
    description:
      "Comprehensive guide to British Silver Britannia coins. Government-minted by the Royal Mint with .999 fine silver, advanced security, and strong liquidity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
