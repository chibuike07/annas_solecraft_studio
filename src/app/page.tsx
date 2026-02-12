import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Anna's Kitchen",
            url: "https://chibuike07.github.io/anns_delicacies",
            logo: "https://chibuike07.github.io/anns_delicacies/logo.png",
            description:
              "Premium curated products with instant WhatsApp checkout",
            sameAs: ["https://wa.me/2348121485310"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-812-148-5310",
              contactType: "Customer Sales",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Anna's Kitchen Delicacies",
            description:
              "Discover authentic Nigerian Igbo delicacies. Fresh soups, swallows, proteins, and more traditional meals.",
            url: "https://chibuike07.github.io/anns_delicacies",
            mainEntity: {
              "@type": "Product",
              name: "Curated Product Collection",
              description:
                "Explore 40+ carefully selected products across multiple categories",
            },
          }),
        }}
      />
      <ProductShowcase />
    </>
  );
}
