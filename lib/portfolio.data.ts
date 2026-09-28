// ============================================================
// AQUEVRA SOLUTIONS — PORTFOLIO DATA (PLACEHOLDER)
// Replace with real project data when available
// ============================================================

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  tags: string[];
  image: string; // Path to image or placeholder
  isPlaceholder: boolean;
  link?: string;
}

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "it-technical", label: "IT & Technical" },
  { id: "networking", label: "Networking" },
  { id: "cctv", label: "CCTV Installations" },
  { id: "web-software", label: "Websites & Software" },
  { id: "branding-design", label: "Branding & Design" },
  { id: "social-media", label: "Social Media" },
  { id: "digital-marketing", label: "Digital Marketing" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
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
    id: "p2",
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
    id: "p3",
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
    id: "p4",
    title: "Business Website Development",
    category: "Websites & Software",
    categoryId: "web-software",
    description:
      "[PLACEHOLDER] Custom business website design and development with CMS integration.",
    tags: ["Website", "Web Development", "CMS", "Business"],
    image: "/images/portfolio/placeholder-web.jpg",
    isPlaceholder: true,
  },
  {
    id: "p5",
    title: "E-Commerce Platform",
    category: "Websites & Software",
    categoryId: "web-software",
    description:
      "[PLACEHOLDER] Full-featured e-commerce platform with payment integration and inventory management.",
    tags: ["E-Commerce", "Online Store", "Web App", "Payment Gateway"],
    image: "/images/portfolio/placeholder-ecom.jpg",
    isPlaceholder: true,
  },
  {
    id: "p6",
    title: "Brand Identity Design",
    category: "Branding & Design",
    categoryId: "branding-design",
    description:
      "[PLACEHOLDER] Complete brand identity package including logo, business cards, and stationery.",
    tags: ["Logo Design", "Branding", "Identity", "Print Design"],
    image: "/images/portfolio/placeholder-brand.jpg",
    isPlaceholder: true,
  },
  {
    id: "p7",
    title: "Social Media Creative Campaign",
    category: "Social Media",
    categoryId: "social-media",
    description:
      "[PLACEHOLDER] Monthly social media post design series for Facebook and Instagram.",
    tags: ["Social Media", "Graphic Design", "Facebook", "Instagram"],
    image: "/images/portfolio/placeholder-social.jpg",
    isPlaceholder: true,
  },
  {
    id: "p8",
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    description:
      "[PLACEHOLDER] Integrated digital marketing campaign including social ads and SEO.",
    tags: ["Digital Marketing", "SEO", "Ads", "Lead Generation"],
    image: "/images/portfolio/placeholder-marketing.jpg",
    isPlaceholder: true,
  },
  {
    id: "p9",
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
