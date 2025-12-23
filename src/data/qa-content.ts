import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$35" (ask price rounded)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$32-$38" (ask ± range)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$35+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$35+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the British Silver Britannia?",
    answer: "The British Silver Britannia is a government-minted bullion coin produced by the Royal Mint at Llantrisant, Wales. It contains 1 troy ounce (31.1035g) of .999 fine silver, carries £2 face value as British legal tender, and features the iconic Britannia figure with trident and shield. First minted in 1997, it includes advanced security features (introduced 2021) making it one of the most secure silver coins available.",
  },
  {
    question: "Why choose Silver Britannias over other silver coins?",
    answer: "Silver Britannias offer unique advantages: industry-leading security features (surface animation, micro-text, radial sunburst, latent image), Royal Mint heritage spanning over 1,100 years since c. 886 AD, competitive premiums (typically 3-5% over spot), and strong global liquidity. The iconic Britannia motif—depicting Britain's female personification—has appeared on British coinage since 1672.",
  },
  {
    question: "How much does a Silver Britannia cost?",
    answer: "At current silver prices, a 1 oz Silver Britannia costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the silver spot value plus a premium typically ranging from 3-5% for standard bullion coins. Premium levels are competitive with other major government silver coins.",
  },
  {
    question: "Are Silver Britannias easy to sell?",
    answer: "Yes, Silver Britannias are highly liquid. As Royal Mint products with British legal tender status, they are recognized and readily purchased by dealers worldwide. Their advanced security features make authentication straightforward—surface animation and radial lines are easy to verify—and most established dealers will buy Silver Britannias at competitive prices.",
  },
  {
    question: "Can I hold Silver Britannias in my IRA?",
    answer: "Yes, British Silver Britannias are IRS-approved for Precious Metals IRAs. The .999 fine purity exceeds the IRS minimum requirement (.995 for silver), and their government-minted legal tender status meets eligibility requirements. Coins must be held by an approved custodian in an approved depository while in your IRA.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and Silver Britannia prices?",
    answer: "The Silver Britannia price equals the silver spot price (per troy ounce) plus a premium typically ranging from 3-5%. The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This premium covers Royal Mint production costs, advanced security feature manufacturing, authorized distributor margins, and dealer margins.",
  },
  {
    question: "Why do Silver Britannia premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers are Royal Mint authorized distributors with direct access to inventory. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my Silver Britannia investment?",
    answer: "The bid-ask spread on Silver Britannias is typically 3-5% for standard bullion coins. With a {{CAPITAL_REQUIREMENT}} coin, this represents about $1-$2 in transaction cost. Your silver must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "How do Silver Britannia premiums compare to other coins?",
    answer: "Silver Britannias typically carry competitive 3-5% premiums over spot, similar to other major government coins. The premium reflects Royal Mint quality, .999 purity, advanced security features, and global liquidity. Premium levels fluctuate with supply and demand conditions.",
  },
  {
    question: "When is the best time to buy Silver Britannias based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (3-5% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 10-15% or higher as physical supply tightens. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Silver Britannia resources cover?",
    answer: "Our educational library covers all aspects of Silver Britannia investing including: understanding premiums and pricing, Royal Mint security features (surface animation, micro-text, radial sunburst, latent image), storage options, .999 purity standards, IRA eligibility, market dynamics, bid-ask spreads, authentication methods, and portfolio allocation strategies.",
  },
  {
    question: "What makes the Silver Britannia design significant?",
    answer: "The Britannia motif depicts Britain's female personification with trident, shield, and Corinthian helmet—symbols representing naval power, strength, and classical heritage. The figure first appeared on Roman coins around AD 119 and returned to British coinage in 1672 under Charles II. Designer Philip Nathan created the modern bullion version.",
  },
  {
    question: "What security features do Silver Britannias have?",
    answer: "Since 2021, Silver Britannias feature the Royal Mint's advanced security technology: surface animation (design shifts when tilted), micro-text (tiny inscriptions visible under magnification), radial sunburst lines (fine background pattern), and a latent image (trident and padlock visible at certain angles). These make Britannias among the most secure silver coins available.",
  },
  {
    question: "What should I look for when buying my first Silver Britannia?",
    answer: "For first-time buyers: purchase from reputable dealers, verify dealer credentials and industry memberships, compare premiums across multiple sources (expect 3-5% over spot), ensure documentation is provided, and plan storage before delivery. Verify security features upon receipt—check for surface animation and radial lines.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a Silver Britannia?",
      answer: "Typical premiums for Silver Britannias range from 3-5% over spot under normal market conditions. This is competitive with other major government bullion coins. During supply constraints, premiums can temporarily rise to 10-15% or more.",
    },
    {
      question: "Why do Silver Britannia premiums exist?",
      answer: "Premiums cover Royal Mint production costs, advanced security feature manufacturing, distributor margins, dealer margins, and reflect the value of the coin's legal tender status and .999 purity. Britannias command premiums for their security features and global recognition.",
    },
    {
      question: "Do I recover the premium when I sell my Silver Britannia?",
      answer: "You typically don't recover the full premium on resale, but Silver Britannias have competitive bid-ask spreads (3-5%). Their strong recognition and security features support good buyback prices. The combination of reasonable purchase premiums and competitive spreads makes Britannias economically efficient.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Silver Britannia and Silver Eagle?",
      answer: "Key differences include: mint origin (Royal Mint vs U.S. Mint), security features (Britannias have advanced anti-counterfeiting technology), and face value (£2 vs $1). Both are .999 fine and contain 1 troy ounce of silver. Britannias often have slightly lower premiums.",
    },
    {
      question: "Which silver coin has the lowest premium?",
      answer: "Among major silver bullion coins, Silver Britannias and Canadian Maple Leafs typically have slightly lower premiums (3-4%) than American Silver Eagles (4-6%). Premium differences are modest among major government coins, and liquidity should also factor into your decision.",
    },
    {
      question: "Are all these coins IRA eligible?",
      answer: "Yes, British Silver Britannias, American Silver Eagles, and Canadian Maple Leafs are all IRS-approved for Precious Metals IRAs. They meet the .999 minimum purity requirement (Maple Leaf exceeds it at .9999). All are government-minted legal tender coins.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for Silver Britannias?",
      answer: "Silver Britannias are practical for multiple storage options. A quality home safe works well for modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage with approved depositories is available.",
    },
    {
      question: "Can I store Silver Britannias at home?",
      answer: "Yes, Silver Britannias are well-suited for home storage. A quality fireproof safe (ideally bolted down) provides reasonable security for a modest collection. Consider insurance coverage for high-value holdings. Keep coins in protective holders to prevent scratching and tarnish.",
    },
    {
      question: "Do IRA Silver Britannias have special storage requirements?",
      answer: "Yes, IRA silver must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA silver while it remains in the account. The custodian handles storage arrangements and maintains records for IRS compliance.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why does .999 purity matter for Silver Britannias?",
      answer: "The .999 purity means the Silver Britannia contains minimal alloy metals. It's essentially pure silver. This meets IRA requirements, ensures consistent silver content across coins, and provides straightforward valuation based on silver weight.",
    },
    {
      question: "Is .9999 silver more valuable than .999 silver?",
      answer: "Spot value is based on silver content, not purity grade. A 1 oz .999 Britannia and a 1 oz .9999 Maple Leaf both contain essentially 1 troy ounce of silver with the same value. The practical difference is negligible for investment purposes. Premiums are similar for both.",
    },
    {
      question: "Does higher purity mean better resale value?",
      answer: "Not significantly for well-known coins. Both .999 and .9999 coins are highly liquid with similar resale dynamics. Dealer recognition and government-mint status matter more than the minor purity difference. Silver Britannias trade equally well as .9999 coins.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a Silver Britannia?",
      answer: "Silver Britannias can typically be sold within 1-2 business days through established dealers. As Royal Mint products with legal tender status and advanced security features, they are instantly recognized. Same-day transactions are often possible at local coin shops with cash payment.",
    },
    {
      question: "Do all silver coins trade equally well?",
      answer: "Major government-minted silver coins all have excellent liquidity. Silver Britannias have particularly strong global recognition, valuable for international transactions. Their Royal Mint security features make authentication straightforward, supporting smooth dealer transactions worldwide.",
    },
    {
      question: "What documentation helps with Silver Britannia resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Original Royal Mint packaging (if purchased from mint) adds value for collectors. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports pricing.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes silver prices to rise or fall?",
      answer: "Silver prices respond to multiple factors: industrial demand (electronics, solar), investment flows, currency strength, inflation expectations, and supply dynamics. Silver is more volatile than gold due to its dual role as industrial metal and precious metal.",
    },
    {
      question: "How does industrial demand affect Silver Britannia values?",
      answer: "Industrial demand influences overall silver prices, which directly affects Britannia values. Growing sectors like solar energy and electronics increase silver consumption. Unlike gold, silver has significant industrial applications that can drive price independently of investment demand.",
    },
    {
      question: "Do Silver Britannia premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market uncertainty or crisis, demand for physical silver often spikes, pushing premiums to 10-15% or higher. During calm markets, premiums settle to normal 3-5% levels. Patient buyers secure better premiums.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for Silver Britannias?",
      answer: "Under normal market conditions, spreads of 3-5% for Silver Britannias represent competitive pricing. This is comparable to other major government bullion coins. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a Silver Britannia?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 4% over spot and expect to receive 3% below spot when selling, you need 7% silver appreciation to break even. On a {{CAPITAL_REQUIREMENT}} Silver Britannia, that's roughly $2-$3 in silver price movement.",
    },
    {
      question: "Do spreads vary by coin type?",
      answer: "Spreads are similar among major government bullion coins. All benefit from strong recognition and dealer markets. Silver Britannias' four-layer security features make authentication particularly easy, potentially supporting tighter spreads with dealers who value quick verification.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Silver Britannia is authentic?",
      answer: "Key verification methods: confirm correct weight (31.21g gross), verify diameter (38.61mm) and thickness (3.00mm), check for security features on 2021+ coins (surface animation, radial lines, micro-text), and purchase from reputable dealers. The .999 silver has a distinct white metallic color. For secondary market purchases, professional authentication (NGC, PCGS) is available.",
    },
    {
      question: "What security features do Silver Britannias have?",
      answer: "Since 2021, Silver Britannias feature the Royal Mint's four-layer security: surface animation (Britannia appears to move when tilted), micro-text (tiny inscriptions around the design), radial sunburst (fine lines emanating from center), and latent image (trident and padlock visible at certain angles). These features are extremely difficult to counterfeit.",
    },
    {
      question: "Should I have Silver Britannias professionally authenticated?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary—the security features are easy to verify visually, and dealers stake their reputation on authenticity. For secondary market purchases, estate finds, or coins without clear provenance, professional authentication (NGC, PCGS, or XRF testing) provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Silver Britannias IRA-eligible?",
      answer: "Silver Britannias meet IRS requirements (.999 minimum purity, government-minted) for Precious Metals IRAs. Produced by the Royal Mint with legal tender status, they are approved assets for tax-advantaged retirement accounts.",
    },
    {
      question: "Can I take physical possession of my IRA Silver Britannias?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. When you take a distribution, you can receive the physical coins.",
    },
    {
      question: "What are the costs of holding Silver Britannias in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and any transaction fees. These costs should be weighed against the tax advantages of IRA ownership, especially for larger holdings.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in Silver Britannias?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. Silver Britannias can be part of that allocation alongside other silver products or gold. The specific percentage depends on your risk tolerance, investment horizon, and overall financial situation.",
    },
    {
      question: "Should I buy Silver Britannias all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Your approach should align with your investment timeline and market outlook.",
    },
    {
      question: "How do Silver Britannias fit with other investments?",
      answer: "Silver Britannias provide direct ownership with no counterparty risk, unlike ETFs or mining stocks. Physical silver offers portfolio diversification and a tangible store of value. Many investors hold both physical coins and paper silver (ETFs) for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a Silver Britannia?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods are accepted for Silver Britannia purchases?",
      answer: "Wire transfer is common for larger precious metals transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards often work well for single-coin purchases.",
    },
    {
      question: "Why do Silver Britannia prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers may be Royal Mint authorized distributors with direct access; others buy from other distributors. Always compare prices from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical silver taxed when sold?",
      answer: "Physical silver is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a Silver Britannia?",
      answer: "Sales tax treatment varies significantly by state. Many states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of holding Silver Britannias in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
