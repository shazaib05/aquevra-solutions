// ============================================================
// AQUEVRA SOLUTIONS — PORTFOLIO DATA
// ============================================================

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  tags: string[];
  image: string;
  isPlaceholder: boolean;
  link?: string;
}

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "web-software", label: "Websites & Software" },
  { id: "branding-design", label: "Branding & Design" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "corporate-services", label: "Corporate Gifting & Printing" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Enterprise Web Application & Portal",
    category: "Websites & Software",
    categoryId: "web-software",
    description:
      "[SAMPLE CASE] Scalable web portal with real-time analytics, automated invoicing, customer self-service, and responsive UI built on modern frameworks.",
    tags: ["Web App", "Custom Software", "Next.js", "Cloud Database"],
    image: "/images/portfolio/placeholder-web.jpg",
    isPlaceholder: true,
  },
  {
    id: "p2",
    title: "High-Converting E-Commerce Platform",
    category: "Websites & Software",
    categoryId: "web-software",
    description:
      "[SAMPLE CASE] Full-featured digital storefront with multi-currency checkout, dynamic product filtering, inventory synchronization, and fast page speeds.",
    tags: ["E-Commerce", "Payment Gateway", "Product Catalog", "SEO"],
    image: "/images/portfolio/placeholder-ecom.jpg",
    isPlaceholder: true,
  },
  {
    id: "p3",
    title: "Luxury Brand Identity & Design System",
    category: "Branding & Design",
    categoryId: "branding-design",
    description:
      "[SAMPLE CASE] Comprehensive corporate brand system including logo marks, typography hierarchy, premium business stationery, and vector brand book.",
    tags: ["Logo Design", "Brand Identity", "Vector Graphics", "Stationery"],
    image: "/images/portfolio/placeholder-brand.jpg",
    isPlaceholder: true,
  },
  {
    id: "p4",
    title: "Social Media Creative & Brand Campaign",
    category: "Branding & Design",
    categoryId: "branding-design",
    description:
      "[SAMPLE CASE] High-impact visual creative suite for Instagram and LinkedIn, featuring carousel decks, animated promotional posts, and branded templates.",
    tags: ["Creative Design", "Social Graphics", "Ad Creatives", "Typography"],
    image: "/images/portfolio/placeholder-social.jpg",
    isPlaceholder: true,
  },
  {
    id: "p5",
    title: "Integrated Performance Marketing & SEO",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    description:
      "[SAMPLE CASE] Multi-channel digital marketing execution combining high-intent Google Search ads, Meta targeted campaigns, and on-page search engine optimization.",
    tags: ["Digital Marketing", "SEO", "Google Ads", "Lead Generation"],
    image: "/images/portfolio/placeholder-marketing.jpg",
    isPlaceholder: true,
  },
  {
    id: "p6",
    title: "Executive Corporate Gift Sets & Packaging",
    category: "Corporate Gifting & Printing",
    categoryId: "corporate-services",
    description:
      "[SAMPLE CASE] Custom branded executive gift hampers, embossed leather organizers, metallic pens, smart mugs, and luxury magnetic packaging boxes.",
    tags: ["Corporate Gifting", "Custom Packaging", "Merchandise", "Executive Gifts"],
    image: "/images/portfolio/placeholder-gifting.jpg",
    isPlaceholder: true,
  },
  {
    id: "p7",
    title: "Commercial Flex Printing & Shop Signage",
    category: "Corporate Gifting & Printing",
    categoryId: "corporate-services",
    description:
      "[SAMPLE CASE] High-definition front-lit & back-lit flex banners, 3D acrylic LED channel letters, and architectural outdoor signage solutions.",
    tags: ["Flex Printing", "Shop Signage", "3D Acrylic Letters", "Banners"],
    image: "/images/portfolio/placeholder-signage.jpg",
    isPlaceholder: true,
  },
  {
    id: "p8",
    title: "Offset Corporate Stationery & Print Materials",
    category: "Corporate Gifting & Printing",
    categoryId: "corporate-services",
    description:
      "[SAMPLE CASE] Premium offset printing for multi-page corporate profiles, tri-fold brochures, spot UV business cards, and branded presentation folders.",
    tags: ["Offset Printing", "Brochures", "Business Cards", "Spot UV"],
    image: "/images/portfolio/placeholder-offset.jpg",
    isPlaceholder: true,
  },
];

// Preserved for future reactivation when IT, Networking, and CCTV services are re-enabled
export const savedFuturePortfolioItems: PortfolioItem[] = [
  {
    id: "p-future-it",
    title: "Office IT Infrastructure Setup",
    category: "IT & Technical",
    categoryId: "it-technical",
    description:
      "[PLACEHOLDER] Complete IT infrastructure setup for a corporate office including workstations, software installation, and technical configuration.",
    tags: ["IT Setup", "Office Technology", "Hardware", "Software"],
    image: "/images/portfolio/placeholder-it.jpg",
    isPlaceholder: true,
  },
  {
    id: "p-future-net",
    title: "Structured Network Cabling Project",
    category: "Networking",
    categoryId: "networking",
    description:
      "[PLACEHOLDER] End-to-end structured cabling and network installation project for a commercial building.",
    tags: ["Networking", "Cabling", "LAN", "Infrastructure"],
    image: "/images/portfolio/placeholder-network.jpg",
    isPlaceholder: true,
  },
  {
    id: "p-future-cctv",
    title: "Warehouse CCTV Installation",
    category: "CCTV Installations",
    categoryId: "cctv",
    description:
      "[PLACEHOLDER] Multi-camera CCTV installation with remote viewing for a warehouse facility.",
    tags: ["CCTV", "Security", "IP Cameras", "Remote Monitoring"],
    image: "/images/portfolio/placeholder-cctv.jpg",
    isPlaceholder: true,
  },
  {
    id: "p-future-retail",
    title: "Retail Shop CCTV & Networking",
    category: "CCTV Installations",
    categoryId: "cctv",
    description:
      "[PLACEHOLDER] Combined CCTV and networking solution for a retail shop.",
    tags: ["CCTV", "Networking", "Retail", "Security"],
    image: "/images/portfolio/placeholder-retail.jpg",
    isPlaceholder: true,
  },
];
