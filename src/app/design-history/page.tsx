import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Silver Britannia Design & History | The Britannia Motif & Royal Mint Heritage",
  description:
    "Explore the history and design of British Silver Britannia coins. Learn about the iconic Britannia motif featuring trident and shield, the Royal Mint's 1,100+ year heritage, and the coin's evolution from 1997 to present.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Silver Britannia Design & History | The Britannia Motif & Royal Mint Heritage",
    description:
      "The story behind the iconic Britannia motif and Royal Mint heritage. Over 2,000 years of design history behind Britain's flagship silver bullion coin.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silver Britannia Design & History",
    description:
      "Explore the Britannia motif and Royal Mint heritage behind British Silver Britannia coins, from Roman origins to modern bullion.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Silver Britannia Design & History",
    description:
      "The history and design origins of British Silver Britannia coins from the Royal Mint.",
    url: `${SITE_CONFIG.domain}/design-history`,
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Design <span className="accent-text">&amp; History</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The story behind the iconic Britannia design, from ancient Roman origins to the modern Royal Mint bullion coin.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The Britannia Legacy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Britannia, the female personification of Britain, has appeared on British coinage for centuries. Depicted with her iconic symbols—a trident representing naval power, a shield bearing the Union Flag, and a Corinthian helmet—this powerful figure represents the strength, resilience, and maritime heritage of the British Isles.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The modern Silver Britannia bullion coin, first minted in 1997, continues this proud tradition. Produced by the Royal Mint—one of the world&apos;s oldest minting institutions with continuous operation since c. 886 AD—the Silver Britannia combines classical artistry with contemporary bullion standards, advanced security features, and strong global liquidity.
            </p>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Text Column */}
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Obverse: The Monarch&apos;s Portrait
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The obverse of the Silver Britannia features an official portrait of the reigning British monarch, following the longstanding tradition of British coinage that provides authenticity and continuity.
                </p>
                <ul className="space-y-3 text-slate-600 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">2023–present</strong>: King Charles III portrait by Martin Jennings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">1997–2022</strong>: Queen Elizabeth II portrait (various designs over her reign)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Inscriptions</strong>: Monarch&apos;s name, year of issue, and £2 denomination</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  The change of monarch creates natural collectibility, with many investors and collectors acquiring examples from both the Elizabeth II and Charles III eras.
                </p>
              </div>
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
                <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-square mx-auto">
                  <Image
                    src="/british-britannia-silver-coins-obverse.png"
                    alt="British Silver Britannia obverse showing monarch portrait"
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reverse Design */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-square mx-auto">
                  <Image
                    src="/british-britannia-silver-coins-reverse.png"
                    alt="British Silver Britannia reverse showing Britannia figure with trident and shield"
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Reverse: The Britannia Motif
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The reverse showcases the iconic figure of Britannia, the female personification of Britain. This powerful symbol has represented British strength, resilience, and maritime heritage for over 2,000 years, dating back to Roman-era coinage.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong className="text-slate-900">Iconic elements:</strong> Britannia is depicted with her defining symbols—a Corinthian helmet representing classical wisdom, a trident symbolizing naval power and dominion of the seas, and a shield bearing the Union Flag. She stands against the waves, representing Britain&apos;s island heritage.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Designer:</strong> The modern Britannia design was created by sculptor Philip Nathan and introduced with the bullion series. The design has been refined over the years while maintaining its classical elegance, and since 2021 incorporates advanced security features.
                </p>
              </div>
            </div>
          </section>

          {/* Historical Origins */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Historical Origins of Britannia
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The figure of Britannia has deep historical roots in British culture:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Roman Origins</h3>
                <p className="text-slate-500 text-sm">
                  The Romans first used Britannia as a personification of the British Isles on coins during the reign of Emperor Hadrian (AD 119).
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Return to British Coinage</h3>
                <p className="text-slate-500 text-sm">
                  Britannia reappeared on British coinage in 1672 during the reign of Charles II, beginning a tradition that continues today.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Symbol of Maritime Power</h3>
                <p className="text-slate-500 text-sm">
                  The trident represents Britain&apos;s naval dominance, while the shield and helmet symbolize strength and protection.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Modern Bullion Era</h3>
                <p className="text-slate-500 text-sm">
                  The Silver Britannia bullion coin launched in 1997, joining the Gold Britannia (1987) as flagship Royal Mint products.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              Learn more about the history of Silver Britannias at{" "}
              <a
                href={SITE_CONFIG.monexLinks.historyArticle}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Knowledge Base
              </a>
            </p>
          </section>

          {/* Royal Mint Heritage */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The Royal Mint
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Royal Mint is one of the world&apos;s oldest and most respected mints, with a history spanning over 1,100 years:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Founded c. 886 AD</h3>
                <p className="text-slate-500 text-sm">
                  Originally located within the Tower of London, producing coins for British monarchs for centuries.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Modern Facility</h3>
                <p className="text-slate-500 text-sm">
                  Today operates from a state-of-the-art facility in Llantrisant, Wales, producing coins for the UK and over 60 other countries.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Industry-Leading Security</h3>
                <p className="text-slate-500 text-sm">
                  Pioneered advanced anti-counterfeiting technology now featured on Silver Britannias.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Global Recognition</h3>
                <p className="text-slate-500 text-sm">
                  The Royal Mint name guarantees authenticity, quality, and strong liquidity worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Design Evolution */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Design Evolution
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              While the core Britannia motif remains consistent, the coin has evolved significantly since its 1997 debut, with improvements to purity, security, and obverse design:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-slate-800 font-semibold mb-3">1997–2012: Classic Era</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>• Philip Nathan&apos;s original Britannia design</li>
                  <li>• .958 silver (Britannia silver) purity</li>
                  <li>• Traditional minting techniques</li>
                  <li>• Queen Elizabeth II portrait throughout</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-slate-800 font-semibold mb-3">2013–Present: Modern Era</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>• Upgraded to .999 fine silver purity (2013)</li>
                  <li>• Advanced security features introduced (2021)</li>
                  <li>• King Charles III portrait (from 2023)</li>
                  <li>• Special editions with design variations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6">
              Key Dates in Silver Britannia History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1987</div>
                <p className="text-slate-600">Gold Britannia bullion coin launches, establishing the modern Britannia series</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1997</div>
                <p className="text-slate-600">Silver Britannia bullion coin introduced with .958 purity and Queen Elizabeth II obverse</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2013</div>
                <p className="text-slate-600">Purity upgraded from .958 to .999 fine silver, improving IRA eligibility and investor appeal</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2021</div>
                <p className="text-slate-600">Royal Mint introduces advanced security features: surface animation, micro-text, radial sunburst</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2023</div>
                <p className="text-slate-600">First Silver Britannias featuring King Charles III portrait by Martin Jennings</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-slate-600">Silver Britannia remains the Royal Mint&apos;s flagship silver bullion product with global liquidity</p>
              </div>
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources" className="btn-primary">
                Browse Resources
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
              <Link href="/coin-specs" className="btn-secondary">
                Coin Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
