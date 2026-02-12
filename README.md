# Anna's Kitchen - Nigerian Delicacies

Responsive landing page built with Next.js, TypeScript, and styled-components. It showcases premium curated products by category and enables instant checkout via WhatsApp integration.

## Quick Start

1. Install dependencies:
   - `npm install`
2. Run the dev server:
   - `npm run dev`
3. Build static output:
   - `npm run build`

## GitHub Pages Deployment

This project is configured for static export. For GitHub Pages:

1. Set `NEXT_PUBLIC_BASE_PATH` to your repository name (for example: `anns_delicacies`).
2. Run `npm run build`.
3. Deploy the `out` folder using your preferred GitHub Pages workflow.

## Customize

- Update the WhatsApp number in `WHATSAPP_NUMBER` constant inside `src/lib/utils/dummyData.ts` (currently: 2348121485310).
- Replace placeholder product images inside `public/products` with real product images.
- Update product data inside `src/lib/utils/dummyData.ts` (products array and categories).
