import { NextResponse } from "next/server";

const llmsTxt = `# BritishSilverBritanniaCoins.com - LLMs.txt

> An independent educational resource about British Silver Britannia coins from the Royal Mint

## Site Overview

BritishSilverBritanniaCoins.com provides educational content about British Silver Britannia coins, minted by the Royal Mint with .999 fine silver purity and advanced security features.

## What This Site Is

- Independent educational resource
- Information about British Silver Britannia coins
- Live silver pricing data from Monex API
- Educational articles about Silver Britannia investing

## What This Site Is NOT

- Not a dealer (we do not sell precious metals)
- Not affiliated with Monex, the Royal Mint, or any dealers
- Not financial advisors (no investment advice)
- No endorsements of dealers or services

## Key Topics Covered

- Silver Britannia specifications (.999 fine, 1 oz, 38.61mm diameter)
- Royal Mint security features (surface animation, micro-text, radial sunburst, latent image)
- How Britannias compare to other major government-minted silver coins
- Premium and pricing dynamics (typically 3-5% over spot)
- IRA eligibility for Silver Britannias
- Storage and authentication
- Market dynamics affecting silver prices

## Product Focus

British Silver Britannia coins are:
- .999 fine silver purity
- 1 troy ounce of pure silver
- £2 British legal tender
- Produced by the Royal Mint
- Feature advanced security technology
- IRA-eligible
- Recognized worldwide for liquidity

## Pricing Data

- Product pricing uses Monex API symbol: BSB (British Silver Britannia)
- Spot pricing uses Monex API symbol: SBSPOT (Silver Spot)
- Prices fetched fresh on page load only
- No real-time updates or polling

## Navigation

- Home: /
- Silver Prices: /live-silver-prices
- Coin Specs: /coin-specs
- Design & History: /design-history
- Where to Buy: /where-to-buy
- Resources: /resources
- About: /about

## Contact

Website: https://www.britishsilverbritanniacoins.com

## Disclaimer

All content is for educational purposes only. Silver investments carry risks. This site does not provide financial advice. Consult qualified professionals before making investment decisions.
`;

export async function GET() {
  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
