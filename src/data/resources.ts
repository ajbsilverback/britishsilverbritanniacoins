import { SITE_CONFIG } from "@/lib/siteConfig";

export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Silver Britannia Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why Silver Britannias carry 3-5% premiums over spot, and how Royal Mint production costs, security features, and dealer margins affect your purchase price.",
    excerpt:
      "Discover why Silver Britannias carry premiums over spot and how to maximize your silver buying power.",
    category: "Pricing",
    monexLink: SITE_CONFIG.monexLinks.priceCharts,
  },
  {
    slug: "coin-comparison",
    title: "How Silver Britannias Compare: Security, Purity & Liquidity",
    description:
      "Compare the British Silver Britannia's .999 purity, Royal Mint security features, and global liquidity against other major silver bullion coins.",
    excerpt:
      "Understand how Silver Britannias stack up on purity, premiums, security features, and investor appeal.",
    category: "Investment",
    monexLink: SITE_CONFIG.monexLinks.productPage,
  },
  {
    slug: "storage-options",
    title: "Storing Your Silver Britannias: Options and Best Practices",
    description:
      "Compare storage solutions for Silver Britannia coins: home safes, bank safe deposit boxes, and IRS-approved depositories for IRA holdings.",
    excerpt:
      "A comprehensive guide to securing your Silver Britannia investment with appropriate storage solutions.",
    category: "Security",
    monexLink: SITE_CONFIG.monexLinks.knowledgeBase,
  },
  {
    slug: "purity-advantages",
    title: "Silver Britannia .999 Purity: What It Means for Investors",
    description:
      "Understanding the .999 fine silver purity of Silver Britannias, upgraded from .958 in 2013, and why it matters for IRA eligibility and valuation.",
    excerpt:
      "Learn why Silver Britannia purity standards matter for investors and IRA eligibility.",
    category: "Products",
    monexLink: SITE_CONFIG.monexLinks.productPage,
  },
  {
    slug: "liquidity-considerations",
    title: "Silver Britannia Liquidity: Buying and Selling with Ease",
    description:
      "Understanding the strong global liquidity of Silver Britannia coins, how Royal Mint recognition supports dealer markets, and strategies for efficient transactions.",
    excerpt:
      "Explore the liquidity dynamics of Silver Britannias and strategies for efficient transactions.",
    category: "Investment",
    monexLink: SITE_CONFIG.monexLinks.priceCharts,
  },
  {
    slug: "market-dynamics",
    title: "Silver Market Dynamics: What Moves Silver Britannia Prices",
    description:
      "Understanding the economic factors, industrial demand (solar, electronics), investment flows, and market forces that influence silver and Britannia prices.",
    excerpt:
      "Explore the key drivers behind silver price movements and what they mean for Britannia investors.",
    category: "Market",
    monexLink: SITE_CONFIG.monexLinks.silverPrices,
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Silver Britannias",
    description:
      "Learn how dealer spreads work on Silver Britannias (typically 3-5%), calculate your break-even point, and minimize costs when buying and selling.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your Britannia trades.",
    category: "Pricing",
    monexLink: SITE_CONFIG.monexLinks.priceCharts,
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Silver Britannias: Royal Mint Security Features",
    description:
      "Learn to verify Silver Britannia authenticity using Royal Mint security features: surface animation, micro-text, radial sunburst, and latent image technology.",
    excerpt:
      "Protect your investment by understanding the four-layer security features that make Britannias easy to authenticate.",
    category: "Security",
    monexLink: SITE_CONFIG.monexLinks.productPage,
  },
  {
    slug: "ira-eligibility",
    title: "Silver Britannia IRA Eligibility: Adding Britannias to Your IRA",
    description:
      "How Silver Britannias meet IRS requirements for Precious Metals IRAs: .999 purity, government-minted status, and approved custodian requirements.",
    excerpt:
      "Learn how Silver Britannias meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: SITE_CONFIG.monexLinks.investingInSilver,
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Silver Britannias in Your Portfolio",
    description:
      "Strategic considerations for incorporating Silver Britannia coins into a diversified portfolio: allocation percentages, dollar-cost averaging, and physical vs paper silver.",
    excerpt:
      "Discover how Silver Britannias fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: SITE_CONFIG.monexLinks.investingInSilver,
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Silver Britannias: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time Silver Britannia buyers: choosing reputable dealers, understanding premiums, payment methods, and verifying Royal Mint authenticity.",
    excerpt:
      "Learn what to expect when purchasing your first Silver Britannia, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: SITE_CONFIG.monexLinks.productPage,
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Silver Britannias",
    description:
      "A high-level overview of tax considerations for Silver Britannia ownership: collectible classification, capital gains, state sales tax, and IRA ownership rules.",
    excerpt:
      "Understand the tax landscape for physical silver investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: SITE_CONFIG.monexLinks.knowledgeBase,
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
