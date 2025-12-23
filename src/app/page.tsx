import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveProductPriceCard from "@/components/LiveProductPriceCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "British Silver Britannia Coins | Royal Mint .999 Fine Silver Guide",
  description:
    "Comprehensive guide to British Silver Britannia coins from the Royal Mint. Government-minted .999 fine silver featuring the iconic Britannia motif with trident and shield. Advanced security features, strong liquidity, and IRA eligibility.",
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
  openGraph: {
    title: "British Silver Britannia Coins | Royal Mint .999 Fine Silver Guide",
    description:
      "Comprehensive guide to British Silver Britannia coins from the Royal Mint. Government-minted .999 fine silver with the iconic Britannia design, advanced security features, and strong global liquidity.",
    url: SITE_CONFIG.domain,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "British Silver Britannia Coins | Royal Mint .999 Fine Silver Guide",
    description:
      "Comprehensive guide to British Silver Britannia coins. Government-minted .999 fine silver with the iconic Britannia motif and advanced security features.",
  },
};

export default async function HomePage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  
  // Helper to format price as approximate (rounded to nearest $1)
  const formatApproxPrice = (price: number): string => {
    const rounded = Math.round(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };
  
  // Get approximate coin price for display
  const approxCoinPrice = priceData ? formatApproxPrice(priceData.ask) : "~$35";
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to Royal Mint Silver Britannia`,
    description:
      "Comprehensive educational resource about British Silver Britannia coins from the Royal Mint with .999 fine silver and advanced security features.",
    url: SITE_CONFIG.domain,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "British Silver Britannia Coin",
    description:
      "One troy ounce British Silver Britannia coin, .999 fine purity, minted by the Royal Mint with advanced security features.",
    brand: {
      "@type": "Brand",
      name: "Royal Mint",
    },
    category: "Silver Coins",
    material: "Silver",
    weight: {
      "@type": "QuantitativeValue",
      value: 1,
      unitCode: "ONT",
      unitText: "troy ounce",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Full-Bleed Hero Section */}
      <section className="hero-fullbleed relative min-h-[100vh] flex items-center overflow-hidden -mt-20">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/british-britannia-silver-coins-hero.png')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
          {/* Top gradient for nav readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent" style={{ height: '200px' }} />
          {/* Bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* Subtle coin motif accent */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-300/30 opacity-30 hidden lg:block" />
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-slate-300/20 opacity-20 hidden lg:block" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-24">
          <div className="max-w-2xl">
            {/* Certificate line - typographic treatment */}
            <p className="text-[13px] text-slate-500 tracking-[0.2em] uppercase mb-6">
              .999 Fine Silver&ensp;·&ensp;Royal Mint&ensp;·&ensp;Advanced Security
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="accent-text">Silver</span>
              <br />
              <span className="accent-text">Britannia</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Government-minted by the Royal Mint with .999 fine silver. 
              The iconic Britannia motif, industry-leading security features, and strong global liquidity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/live-silver-prices" className="btn-primary text-base">
                View Current Prices
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link href="/resources" className="btn-secondary text-base">
                Explore Resources
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex items-center mt-20 text-slate-400">
              <div className="w-px h-12 bg-gradient-to-b from-slate-400/50 to-transparent mr-4" />
              <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Silver Price Section */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Live Britannia Pricing</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Current market data for 1 oz British Silver Britannia coins.
            </p>
          </div>
          <LiveProductPriceCard />
        </div>
      </section>

      {/* Why Silver Britannia Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why <span className="accent-text">Silver Britannia</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              The Royal Mint&apos;s flagship silver bullion coin combines .999 fine purity with industry-leading security technology and over 1,100 years of British minting heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">
                Advanced Security
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The Silver Britannia features the Royal Mint&apos;s cutting-edge security technology: surface animation that shifts when tilted, micro-text visible under magnification, radial sunburst background pattern, and a latent trident/padlock image—making it one of the most secure silver coins available.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">
                Royal Mint Heritage
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Produced by the Royal Mint—one of the world&apos;s oldest mints, founded c. 886 AD with over 1,100 years of continuous operation. Each coin carries £2 British legal tender status and the Royal Mint&apos;s guarantee of weight and purity.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-slate-900">
                IRA Eligible
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Silver Britannias qualify for Precious Metals IRAs under IRS regulations. The .999 fine purity exceeds the IRS minimum requirement, and government-minted status makes them approved assets for tax-advantaged retirement accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys Silver Britannia Section */}
      <section className="py-16 md:py-24 relative overflow-hidden section-dark">
        <div className="absolute inset-0 accent-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Who Buys <span className="accent-text">Silver Britannias</span>?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Silver Britannia coins appeal to investors who value 
                Royal Mint quality, industry-leading security technology, and strong global liquidity for easy buying and selling.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Security-Conscious Investors
                    </h3>
                    <p className="text-slate-600">
                      Investors who prioritize anti-counterfeiting protection choose Britannias 
                      for their industry-leading security features including micro-text, 
                      surface animation, and radial lines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      IRA Investors
                    </h3>
                    <p className="text-slate-600">
                      Those building Precious Metals IRAs value Britannias for their 
                      IRS-approved status, Royal Mint guarantee, and strong 
                      secondary market for eventual distributions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-700 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Collectors & Investors
                    </h3>
                    <p className="text-slate-600">
                      The iconic Britannia motif—depicting Britain&apos;s female personification with 
                      trident, shield, and Corinthian helmet—appeals to collectors and bullion 
                      investors alike, combining classical artistry with investment value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard priceData={priceData} />
            </div>
          </div>
        </div>
      </section>

      {/* Coin Comparison Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comparing <span className="accent-text">Silver Bullion Coins</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Understanding how the Silver Britannia compares to other major coins 
              helps you make informed investment decisions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left py-4 px-6 text-slate-700 font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-slate-800 font-display font-semibold">
                    Britannia
                  </th>
                  <th className="text-center py-4 px-6 text-slate-500 font-display">
                    Silver Eagle
                  </th>
                  <th className="text-center py-4 px-6 text-slate-500 font-display">
                    Maple Leaf
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Silver Purity</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-medium">
                    .999
                  </td>
                  <td className="py-4 px-6 text-center">.999</td>
                  <td className="py-4 px-6 text-center">.9999</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Issuing Mint</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">
                    Royal Mint
                  </td>
                  <td className="py-4 px-6 text-center">U.S. Mint</td>
                  <td className="py-4 px-6 text-center">Royal Canadian</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Face Value</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">£2 GBP</td>
                  <td className="py-4 px-6 text-center">$1 USD</td>
                  <td className="py-4 px-6 text-center">$5 CAD</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">IRA Eligible</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-medium">Yes</td>
                  <td className="py-4 px-6 text-center text-emerald-600">Yes</td>
                  <td className="py-4 px-6 text-center text-emerald-600">Yes</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 px-6 font-medium">Security Features</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">Advanced</td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center text-slate-800 font-medium">
                    Security Features
                  </td>
                  <td className="py-4 px-6 text-center">U.S. Legal Tender</td>
                  <td className="py-4 px-6 text-center">Highest Purity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design & History Section */}
      <section className="py-16 md:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Iconic <span className="accent-text">Design & Heritage</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              The Silver Britannia features one of the most celebrated 
              coin designs in the world, with the Britannia motif rooted in over 2,000 years of British history.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-4">
                Obverse: The Monarch
              </h3>
              <p className="text-slate-600 mb-4">
                The obverse features a portrait of the reigning British monarch. Current issues 
                display King Charles III (from 2023), continuing the long tradition that 
                previously featured Queen Elizabeth II (1997-2022).
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Historical Note:</strong> The monarch portrait 
                tradition ensures continuity and authenticity, with each reign represented 
                on British coinage.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-4">
                Reverse: The Britannia Motif
              </h3>
              <p className="text-slate-600 mb-4">
                The reverse showcases the iconic figure of Britannia—the female 
                personification of Britain—depicted with her traditional symbols: a trident 
                representing naval power, a shield bearing the Union Flag, and a Corinthian helmet.
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Designer:</strong> The modern Britannia 
                design was created by Philip Nathan and has been refined over the years 
                while maintaining its classical elegance and powerful symbolism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 accent-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Further Reading
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            View{" "}
            <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
              current Britannia pricing
            </Link>
            {" "}or browse the{" "}
            <Link href="/resources" className="text-slate-700 hover:underline font-medium">
              resource library
            </Link>
            {" "}for detailed guides on premiums, storage, and IRA eligibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/live-silver-prices" className="btn-primary">
              View Current Britannia Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore Educational Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
