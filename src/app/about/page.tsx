import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About British Silver Britannia Coins | Independent Educational Resource",
  description:
    "British Silver Britannia Coins is an independent educational resource about Silver Britannia coins from the Royal Mint. Learn about .999 fine purity, security features, and IRA eligibility. We do not sell precious metals or provide financial advice.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/about`,
  },
  openGraph: {
    title: "About British Silver Britannia Coins | Independent Educational Resource",
    description:
      "Independent educational resource about Silver Britannia coins from the Royal Mint. We do not sell precious metals or provide financial advice.",
    url: `${SITE_CONFIG.domain}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About British Silver Britannia Coins | Independent Educational Resource",
    description:
      "Independent educational resource about Silver Britannia coins from the Royal Mint. We do not sell precious metals or provide financial advice.",
  },
};

export default function AboutPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About British Silver Britannia Coins",
    description:
      "Learn about British Silver Britannia Coins, an independent educational resource about Silver Britannia coins from the Royal Mint.",
    url: `${SITE_CONFIG.domain}/about`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="accent-text">{SITE_CONFIG.brandName}</span>
            </h1>
            <p className="text-xl text-slate-600">
              An independent educational resource for Silver Britannia investors
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* What We Are */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                What We Are
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {SITE_CONFIG.brandName} is an independent educational website
                dedicated to helping investors understand{" "}
                {SITE_CONFIG.primaryProduct} from the Royal Mint. These 
                government-minted coins feature .999 fine silver purity, the iconic 
                Britannia motif, and industry-leading security features that make 
                them among the most secure silver bullion coins available.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to provide clear, unbiased information about 
                Silver Britannia investing, including the Royal Mint&apos;s heritage, 
                pricing mechanics and premiums, advanced anti-counterfeiting technology, 
                IRA eligibility, global liquidity, and how Britannias compare 
                to other major government-minted silver coins.
              </p>
            </section>

            {/* What We Are NOT */}
            <section className="card p-6 md:p-8 border-red-200">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                What We Are{" "}
                <span className="text-red-500">NOT</span>
              </h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">Not a dealer:</strong> We do
                    not sell Silver Britannias, bars, or any precious metals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">Not affiliated:</strong> We
                    have no financial relationship with Monex, the Royal Mint, or 
                    any of the dealers mentioned on our site.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">Not financial advisors:</strong>{" "}
                    We do not provide investment advice, recommendations, or
                    personalized guidance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">No endorsements:</strong> Listing
                    a dealer or resource does not constitute an endorsement or
                    recommendation.
                  </span>
                </li>
              </ul>
            </section>

            {/* Pricing Data */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                How We Source Pricing Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The live silver prices displayed on our{" "}
                <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
                  prices page
                </Link>{" "}
                are fetched from the Monex API. We display two price feeds:
              </p>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span>
                    <strong className="text-slate-900">Silver Britannia price</strong> (current
                    ask price for British Silver Britannia coins)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span>
                    <strong className="text-slate-900">Silver spot price</strong> (raw
                    spot price per troy ounce)
                  </span>
                </li>
              </ul>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-500 text-sm">
                  <strong className="text-slate-700">Important:</strong> Prices
                  are fetched once per page load for display purposes only. We
                  strongly encourage cross-checking prices with multiple sources
                  (<a
                    href="https://www.kitco.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >Kitco</a>, <a
                    href="https://silverprice.org/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >SilverPrice.org</a>, dealer websites) before making any
                  purchasing decisions.
                </p>
              </div>
            </section>

            {/* Editorial Independence */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                Editorial Independence
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {SITE_CONFIG.brandName} operates independently. We:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Do not receive commissions or referral fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Do not accept payment for listings or rankings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>List multiple dealers for educational comparison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Encourage readers to conduct independent research</span>
                </li>
              </ul>
            </section>

            {/* About Silver Britannia */}
            <section className="card p-6 md:p-8 bg-slate-50 border-slate-200">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                About the Silver Britannia
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The British Silver Britannia is a government-minted bullion coin produced 
                by the Royal Mint at their facility in Llantrisant, Wales. First minted in 1997, 
                the coin features the iconic Britannia motif and these key specifications:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">.999 fine silver</strong> purity (upgraded from .958 in 2013)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">1 troy ounce</strong> of pure silver content (31.1035g)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">£2 face value</strong> (British legal tender)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">Royal Mint security</strong>: surface animation, micro-text, radial sunburst, latent image</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">Obverse</strong>: monarch portrait (King Charles III from 2023; Queen Elizabeth II 1997-2022)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">Reverse</strong>: Britannia with trident, shield, and Corinthian helmet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">IRA eligible</strong> for tax-advantaged Precious Metals IRAs</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For questions, corrections, or feedback about the educational
                content on this site:
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-900">Website:</strong>{" "}
                <a
                  href={SITE_CONFIG.domain}
                  className="text-slate-700 hover:underline font-medium"
                >
                  {SITE_CONFIG.domain}
                </a>
              </p>
              <p className="text-slate-500 text-sm mt-4">
                Note: We cannot provide investment advice or dealer
                recommendations. Please consult a qualified financial advisor
                for personalized guidance.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="text-center pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
                All content on {SITE_CONFIG.brandName} is for educational and
                informational purposes only. Silver investments carry risks, and
                prices can fluctuate significantly. Past performance does not
                guarantee future results. Always conduct your own research and
                consult with qualified professionals before making investment
                decisions.
              </p>
            </section>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/" className="btn-primary">
                Return Home
              </Link>
              <Link href="/live-silver-prices" className="btn-secondary">
                View Britannia Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
