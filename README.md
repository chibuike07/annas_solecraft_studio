# Onyiye Product Showcase

Responsive landing page built with Next.js, TypeScript, and styled-components. It showcases products by category and sends buyers to WhatsApp with product details.

## Quick Start

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Build static output:
   - `npm run build`

## GitHub Pages Deployment

This project is configured for static export. For GitHub Pages:

1. Set `NEXT_PUBLIC_BASE_PATH` to your repository name (for example: `onyiye_product_site`).
2. Run `npm run build`.
3. Deploy the `out` folder using your preferred GitHub Pages workflow.

## Customize

- Update the WhatsApp number in `WHATSAPP_NUMBER` inside `src/components/ProductShowcase/ProductShowcase.tsx`.
- Replace placeholder product images inside `public/products` with real product images.
- Update product data inside `ProductShowcase.tsx`.
