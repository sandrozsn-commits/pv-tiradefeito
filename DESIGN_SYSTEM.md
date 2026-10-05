# TiraDefeito Expert — Design system

## Foundation

Two font families, centralized in `src/styles.css`: Oswald (bold condensed headings) and Inter (body). H1: 44–72px; H2: 34–48px; H3: 22–26px; body: 16–18px; labels: 11–13px. One H1. H2 exclusively for section titles, one per section. Impact sentences use `.highlight`.

One accent: orange `--primary`. Neutral ink, off-white, white and gray surfaces. The existing institutional logo keeps its original colors. All CSS color tokens use oklch. CTA contrast: dark ink on orange. Section spacing: 80px desktop / 56px mobile. Container: 1200px. Prose: maximum 720px.

## Components

`src/components/sales/primitives.tsx`: Section, SectionHeading, CheckList, ActionLink, FeatureCard, Brand. Reuse these components for page sections; no per-section typography styles. Existing shadcn Button, Card and Accordion remain the underlying primitives. Lucide outline icons only. Benefits and audiences use card grids; plans use CheckList; process uses numbered steps.

`src/components/sales/product-preview.tsx`: illustrative product mockup grounded in the app's occurrence, investigation and report screens. Clearly labeled as an illustration; never present sample figures as customer results. Accessible tabs show the three learning stages, without revealing paid case content.

`src/components/sales/sales-page.tsx`: complete sales composition. `src/lib/sales-config.ts`: approved prices, durations and real checkout destinations. Empty checkout URL renders an explicit unavailable sale state, never a fictitious payment link. No countdown, fake scarcity, fabricated reviews, unverified occurrence counts, or invented refund guarantee.

## Responsive and accessibility

Mobile first. Grids collapse to one column below 768px; hero below 1000px. No horizontal overflow at 360px. Focus-visible outlines, accessible tab controls, decorative icons hidden from assistive technology, reduced-motion support. Sticky mobile CTA links to the offer, never covers footer content.

## Verification

Build, TypeScript and routing tests. Inspect desktop and mobile rendering, CTA destinations, FAQ, preview tabs, single H1 and the no-checkout state before syncing main. Preserve routes, error reporting, legal data and any future tracking.

## Reference alignment

Reference: `sandromarvel34-png/site-dimensionador`, source inspected on 2026-10-05. Match the light first fold, sticky white header with the real Academia do Eletricista logo, navy text, amber CTA, browser/device product mockup, light/gray card sections and clear offer. Adapt copy and functionality exclusively to TiraDefeito Expert. Keep the condensed heading requirement and one accent from the requested design system. No reused Dimensionador screenshots, figures, manufacturer claims or video.
