/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * British Silver Britannia Coins
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (BSB for product, SBSPOT for spot)
 * - Monex API endpoints
 * - Monex chart embed script
 * - Navigation IA
 * 
 * PRICING RULES:
 * - spotSymbol: live silver spot price per troy ounce (market reference ONLY)
 * - productSymbol: specific product pricing (product cards + charts ONLY)
 * - Do NOT interchange these symbols
 * 
 * DEPLOYMENT:
 * - main branch is protected
 * - No force-pushes
 * - Vercel auto-deploys from main only
 * 
 * CONTENT:
 * - This site is about British Silver Britannia coins from the Royal Mint
 * - Focus on: .999 fine purity, premiums, liquidity, IRA eligibility,
 *   Royal Mint, obverse/reverse designs, security features
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.britishsilverbritanniacoins.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.britishsilverbritanniacoins.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "British Silver Britannia Coins",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "British Silver Britannia coins",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "silver",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "coins",
  
  /** Size or series identifier */
  sizeOrSeries: "1 oz",

  /** Troy ounce equivalent */
  troyOunces: 1,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * BSB = British Silver Britannia (product pricing)
   */
  productSymbol: "BSB",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * SBSPOT = Silver Spot Index (market reference ONLY)
   */
  spotSymbol: "SBSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "investors seeking Royal Mint silver bullion coins with .999 fine purity, advanced security features, and strong global liquidity",

  /** Array of relevant Monex.com links for citations */
  monexLinks: {
    productPage: "https://www.monex.com/britannia-silver-coins-for-sale/",
    priceCharts: "https://www.monex.com/britannia-silver-coins-price-charts/",
    investingInSilver: "https://www.monex.com/investing-in-silver/",
    silverPrices: "https://www.monex.com/silver-prices/",
    knowledgeBase: "https://www.monex.com/knowledge-base/silver-investing/silver-coins/british-silver-britannia/",
    historyArticle: "https://www.monex.com/knowledge/history-behind-british-britannia-silver-coins/",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
