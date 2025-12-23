import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { MetalPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveProductPriceCard from "@/components/LiveProductPriceCard";
import LiveSpotIndexCard from "@/components/LiveSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Live Silver Britannia Prices & Silver Spot Price Charts",
  description:
    "Track live British Silver Britannia coin prices and silver spot prices. Understand premiums (typically 3-5% over spot), bid-ask spreads, and market dynamics. Royal Mint .999 fine silver with advanced security features.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-silver-prices`,
  },
  openGraph: {
    title: "Live Silver Britannia Prices & Silver Spot Price Charts",
    description:
      "Track live Silver Britannia prices and silver spot prices. Understand premiums and market dynamics for Royal Mint .999 fine silver coins.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Silver Britannia Prices & Silver Spot Price Charts",
    description:
      "Track live Silver Britannia prices and silver spot prices. Understand premiums for Royal Mint .999 fine silver coins.",
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotData = await fetchMetalSpotIndex();
  
  // Get spot price per oz for examples (rounded to nearest dollar)
  const spotPerOz = spotData ? Math.round(spotData.last) : 30;
  const formatSpotPrice = (price: number) => formatUSD(price).replace(".00", "");
  
  // Calculate example prices based on current spot
  const britanniaPrice = Math.round(spotPerOz * 1.04); // 4% premium
  const otherCoinPrice = Math.round(spotPerOz * 1.05); // ~4-5% premium for other gov't coins
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Silver Britannia Prices & Live Silver Spot Prices",
    description:
      "Track live Silver Britannia prices and silver spot prices. Real-time charts and market data for Britannia investors.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of a Silver Britannia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a Silver Britannia consists of the silver spot price plus a premium that covers Royal Mint production, distribution, and dealer margins. Premiums typically range from 3-5% over spot.",
        },
      },
      {
        "@type": "Question",
        name: "Why do Silver Britannias have a premium over spot price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The premium covers Royal Mint production costs, advanced security feature manufacturing, distributor margins, dealer margins, and the value of the coin's .999 fine purity and legal tender status. Britannias command premiums for their security features and global recognition.",
        },
      },
      {
        "@type": "Question",
        name: "How often do silver prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Silver prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, industrial demand, geopolitical events, and supply and demand dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "Live Silver Britannia prices via Monex data (Royal Mint .999 fine silver)",
    "Track silver spot prices per troy ounce for market reference",
    "Understand spot-to-retail pricing: Britannias carry 3-5% premiums",
    "Learn what drives premiums: Royal Mint production, security features, distribution",
    "Compare Britannia pricing vs other major government-minted silver coins",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 accent-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Silver Britannia Prices</span>
              <br />
              <span className="text-slate-900">& Live Silver Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mt-6 text-left">
              Track live silver prices and understand how spot pricing affects 
              the cost of British Silver Britannia coins—Royal Mint bullion featuring 
              .999 fine silver and advanced security features. Use these tools to make 
              informed decisions about your precious metals investments. Return 
              to our{" "}
              <Link href="/" className="text-slate-700 hover:underline font-medium">
                Silver Britannia overview
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-slate-700 hover:underline font-medium">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live Silver Britannia Price Card */}
          <LiveProductPriceCard showCta={false} />

          {/* Live Silver Spot Index Card */}
          <LiveSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-900 text-center">
              Silver Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <MetalPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Silver Britannia Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="accent-text">Britannia Pricing</span>
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-800">
                  Spot Price vs. Britannia Price
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When purchasing a Silver Britannia, you&apos;ll pay a premium 
                  above the spot price. The spot price represents the current market 
                  rate for silver traded in bulk on commodities exchanges.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Silver Britannias typically carry <strong className="text-slate-900">3-5% 
                  premiums over spot</strong>, which covers Royal Mint production costs, 
                  advanced security feature manufacturing, distributor margins, dealer margins, 
                  and reflects the coin&apos;s .999 fine purity and legal tender status.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-800">
                  Why Britannias Command Premiums
                </h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Royal Mint Quality:</strong> The Royal Mint 
                      uses precision manufacturing to achieve .999 fine purity with 
                      exact weight specifications and advanced security features.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Security Technology:</strong> Britannias 
                      feature industry-leading anti-counterfeiting measures including 
                      micro-text, surface animation, and radial sunburst patterns.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Distribution Chain:</strong> Coins 
                      flow from the Royal Mint to authorized distributors to dealers, each adding 
                      margin for their services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Strong Global Liquidity:</strong> Recognized 
                      worldwide by dealers, Silver Britannias are easy to buy and sell in 
                      major markets, which supports their investor appeal and pricing power.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-800">
                  Premium Comparison: Silver Coins
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Silver coin premiums vary by mint and coin type:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-sm mb-2">
                    <strong className="text-slate-700">Example at {formatSpotPrice(spotPerOz)}/oz spot:</strong>
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• <strong className="text-slate-900">Silver Britannia (~4% premium):</strong> ~{formatSpotPrice(britanniaPrice)}</li>
                    <li>• <strong className="text-slate-900">Other gov&apos;t coins (~4-5% premium):</strong> ~{formatSpotPrice(otherCoinPrice)}</li>
                    <li className="pt-2 border-t border-slate-200">
                      <strong className="text-slate-700">Key factor:</strong> Britannias offer advanced security features at competitive premiums
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href={SITE_CONFIG.monexLinks.priceCharts}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            <span>Research Britannia prices at Monex</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Silver Britannia Resources
          </h2>
          <p className="text-slate-600 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-slate-700 hover:underline font-medium">
              educational resources
            </Link>{" "}
            to deepen your understanding of Silver Britannia investing, or return to our{" "}
            <Link href="/" className="text-slate-700 hover:underline font-medium">
              Silver Britannia overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
