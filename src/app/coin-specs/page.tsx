import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Silver Britannia Specifications | Weight, Purity & Dimensions",
  description:
    "Complete technical specifications for British Silver Britannia coins: 1 troy oz .999 fine silver, 38.61mm diameter, 3.00mm thickness, £2 face value. Royal Mint security features and IRA eligibility details.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Silver Britannia Specifications | Weight, Purity & Dimensions",
    description:
      "Complete technical specifications for British Silver Britannia coins: 1 troy oz .999 fine silver, 38.61mm diameter, £2 face value, Royal Mint security features.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silver Britannia Specifications",
    description:
      "Complete specifications for British Silver Britannia coins: 1 troy oz .999 fine silver, 38.61mm diameter, £2 face value, IRA eligible.",
  },
};

const specsData = [
  { label: "Purity", value: ".999 fine silver (99.9% pure)", highlight: true },
  { label: "Silver Content", value: "1.0000 troy ounce (31.1035 grams)" },
  { label: "Gross Weight", value: "31.21 grams (1.004 troy oz)" },
  { label: "Diameter", value: "38.61 mm (1.52 inches)" },
  { label: "Thickness", value: "3.00 mm (0.12 inches)" },
  { label: "Face Value", value: "£2 GBP (British legal tender)" },
  { label: "Issuing Mint", value: "Royal Mint, Llantrisant, Wales" },
  { label: "Edge", value: "Reeded" },
  { label: "Obverse", value: "Monarch portrait (King Charles III from 2023)" },
  { label: "Reverse", value: "Britannia motif with trident and shield" },
  { label: "IRA Eligible", value: "Yes (meets IRS .999 minimum)", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of the British Silver Britannia?",
    answer:
      "The British Silver Britannia is .999 fine silver, meaning it contains 99.9% pure silver. This high purity was upgraded from the original .958 (Britannia silver) in 2013, ensuring maximum silver content and meeting IRS requirements for Precious Metals IRA eligibility.",
  },
  {
    question: "How much silver is in a Silver Britannia?",
    answer:
      "Each British Silver Britannia contains exactly 1.0000 troy ounce (31.1035 grams) of pure silver. The gross weight is slightly higher at 31.21 grams due to the small amount of alloy metals.",
  },
  {
    question: "Is the Silver Britannia legal tender?",
    answer:
      "Yes, the Silver Britannia carries legal tender status in the United Kingdom with a face value of £2 GBP. While its silver content is worth significantly more than face value, this government backing provides Royal Mint authenticity assurance and establishes the coin's official standing as British currency.",
  },
  {
    question: "Can I hold Silver Britannias in an IRA?",
    answer:
      "Yes, British Silver Britannias meet IRS requirements for inclusion in a Precious Metals IRA. The .999 purity meets the IRS minimum fineness requirement. You will need a qualified custodian and approved depository to hold IRA-owned coins.",
  },
  {
    question: "What security features do Silver Britannias have?",
    answer:
      "Modern Silver Britannias feature the Royal Mint's advanced security technology including: micro-text (visible under magnification), surface animation (image shifts when tilted), radial sunburst lines (background pattern), and a latent image feature. These make Britannias among the most secure silver coins available.",
  },
  {
    question: "Why do Silver Britannias have a premium over spot price?",
    answer:
      "Premiums reflect Royal Mint production costs, distribution margins, and supply/demand dynamics. Britannias command premiums for their advanced security features, Royal Mint quality assurance, legal tender status, and strong global recognition.",
  },
  {
    question: "How does the Silver Britannia compare to other silver coins?",
    answer:
      "The Silver Britannia offers .999 purity, industry-leading four-layer security features, and the heritage of the Royal Mint (operating since c. 886 AD). As British legal tender with £2 face value and the iconic Britannia design, it stands out among major government-minted silver coins for its anti-counterfeiting technology.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "British Silver Britannia Specifications",
    description:
      "Complete technical specifications and investor facts for British Silver Britannia coins from the Royal Mint.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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

      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Silver Britannia</span> Specifications
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technical details for British Silver Britannia coins: 1 troy ounce of .999 fine silver, £2 face value, and Royal Mint quality assurance.
            </p>
          </div>

          {/* Specifications Table */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-slate-200">
                  {specsData.map((spec, index) => (
                    <tr key={index} className={spec.highlight ? "bg-slate-50" : ""}>
                      <td className="py-4 pr-4 text-slate-500 font-medium w-1/3">
                        {spec.label}
                      </td>
                      <td className={`py-4 ${spec.highlight ? "text-slate-800 font-semibold" : "text-slate-700"}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Security Features */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Royal Mint Security Features
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Introduced in 2021, the Silver Britannia incorporates the Royal Mint&apos;s cutting-edge anti-counterfeiting technology, making it one of the most secure silver bullion coins in the world:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Surface Animation</strong>: The Britannia design appears to shift and move when the coin is tilted, creating a dynamic wave-like visual effect that is extremely difficult to counterfeit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Micro-Text</strong>: Tiny inscriptions around the design are visible only under magnification, requiring precision minting that is nearly impossible to replicate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Radial Sunburst</strong>: Fine lines radiating from the center create a distinctive background pattern unique to genuine Royal Mint Britannias</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Latent Image</strong>: A trident and padlock symbol becomes visible only when viewed from specific angles, providing quick visual authentication</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">
              These features make authentication straightforward for dealers and investors, supporting the coin&apos;s strong liquidity. Learn more at{" "}
              <a
                href={SITE_CONFIG.monexLinks.productPage}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Britannia
              </a>
            </p>
          </section>

          {/* Legal Tender Status */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Legal Tender Status & Investor Appeal
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The British Silver Britannia carries £2 legal tender status in the United Kingdom—a face value established by the Royal Mint that provides government backing and investor protections:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Royal Mint Guarantee</h3>
                <p className="text-slate-500 text-sm">
                  Weight (1 troy oz) and purity (.999 fine) guaranteed by the Royal Mint, with over 1,100 years of minting heritage since c. 886 AD.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-slate-500 text-sm">
                  Produced with strict quality controls and industry-leading security features for easy authentication.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Global Liquidity</h3>
                <p className="text-slate-500 text-sm">
                  Widely recognized and accepted by dealers worldwide, allowing easy buying and selling in major markets.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">IRA Eligibility</h3>
                <p className="text-slate-500 text-sm">
                  Legal tender status and .999 purity meet IRS requirements for tax-advantaged Precious Metals IRAs.
                </p>
              </div>
            </div>
          </section>

          {/* IRA Considerations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              IRA Eligibility Considerations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              British Silver Britannias qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-slate-600 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Meets IRS purity requirement (.999 minimum)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Produced by an approved national mint (Royal Mint)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Must be held by an IRS-approved custodian and depository</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Cannot be stored at home for IRA purposes</span>
              </li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Note:</strong> This is general information, not tax or investment advice. Consult a qualified tax professional or IRA custodian for guidance specific to your situation.
              </p>
            </div>
          </section>

          {/* Premium Drivers */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Understanding Premium Drivers
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver Britannias trade at a premium above the spot price of silver. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Royal Mint Production</h3>
                <p className="text-slate-500 text-sm">
                  Advanced security technology, precision manufacturing, and strict quality control.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Distribution Chain</h3>
                <p className="text-slate-500 text-sm">
                  Authorized distributors and dealer margins that fund operations.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Supply & Demand</h3>
                <p className="text-slate-500 text-sm">
                  Royal Mint production capacity versus global investor demand.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Security Premium</h3>
                <p className="text-slate-500 text-sm">
                  Advanced anti-counterfeiting features command additional value for security-conscious investors.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Global Recognition</h3>
                <p className="text-slate-500 text-sm">
                  Royal Mint heritage and worldwide dealer acceptance support liquidity.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              View current Britannia pricing at{" "}
              <a
                href={SITE_CONFIG.monexLinks.priceCharts}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Britannia Price Charts
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-silver-prices" className="btn-primary">
                View Britannia Prices
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
