// ============================================================
// AQUEVRA SOLUTIONS — BLOG DATA (SAMPLE ARTICLES)
// ============================================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryId: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  isPlaceholder: boolean;
  tags: string[];
}

export const blogCategories = [
  { id: "all", label: "All Articles" },
  { id: "web-software", label: "Website & Software" },
  { id: "graphic-design", label: "Graphic Design & Branding" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "corporate-printing", label: "Corporate Gifting & Printing" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "high-converting-custom-websites-for-business",
    title: "The Power of High-Converting Custom Websites for Modern Brands",
    excerpt:
      "A fast, responsive website is your most valuable digital asset. Learn how custom architecture, mobile UX, and modern engineering convert casual visitors into qualified customers.",
    category: "Website & Software",
    categoryId: "web-software",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/images/blog/placeholder-blog-1.jpg",
    isPlaceholder: true,
    tags: ["Website", "Web Design", "Conversion"],
  },
  {
    id: "b2",
    slug: "corporate-gifting-guide-for-business-growth",
    title: "How Executive Corporate Gifting Strengthens Business Relationships",
    excerpt:
      "Strategic corporate gifting elevates brand perception and creates lasting client loyalty. Discover what makes an executive gift box truly memorable.",
    category: "Corporate Gifting & Printing",
    categoryId: "corporate-printing",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-01-22",
    readTime: "4 min read",
    image: "/images/blog/placeholder-blog-2.jpg",
    isPlaceholder: true,
    tags: ["Corporate Gifting", "Executive Gifts", "Branding"],
  },
  {
    id: "b3",
    slug: "why-your-business-needs-a-professional-brand-identity",
    title: "Why Your Business Needs a Professional Brand Identity",
    excerpt:
      "Your logo, typography, and stationery are the visual voice of your company. Learn why consistent branding builds unmatched consumer trust and pricing power.",
    category: "Graphic Design & Branding",
    categoryId: "graphic-design",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-02-05",
    readTime: "5 min read",
    image: "/images/blog/placeholder-blog-3.jpg",
    isPlaceholder: true,
    tags: ["Brand Identity", "Logo Design", "Graphic Design"],
  },
  {
    id: "b4",
    slug: "digital-printing-vs-offset-printing-guide",
    title: "Digital Printing vs. Offset Printing: Which Is Right for Your Run?",
    excerpt:
      "Understanding print technologies helps you save budget and maximize color fidelity. Here is when to choose digital, offset, or large-format flex printing.",
    category: "Corporate Gifting & Printing",
    categoryId: "corporate-printing",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-02-12",
    readTime: "6 min read",
    image: "/images/blog/placeholder-blog-4.jpg",
    isPlaceholder: true,
    tags: ["Printing", "Digital Printing", "Offset Printing"],
  },
  {
    id: "b5",
    slug: "social-media-marketing-tips-for-local-businesses",
    title: "Targeted Paid Ads & Social Media Strategies for Growing Businesses",
    excerpt:
      "Practical social media advertising and SEO strategies for businesses looking to accelerate reach, generate qualified leads, and outperform competitors.",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-02-20",
    readTime: "5 min read",
    image: "/images/blog/placeholder-blog-5.jpg",
    isPlaceholder: true,
    tags: ["Digital Marketing", "Meta Ads", "SEO"],
  },
  {
    id: "b6",
    slug: "storefront-signage-and-flex-banners-guide",
    title: "Storefront Signage & Flex Banners: How to Attract Foot Traffic",
    excerpt:
      "3D acrylic lettering, LED backlit signage, and vibrant flex banners create immediate brand presence. Discover key signage tips for retail and commercial premises.",
    category: "Corporate Gifting & Printing",
    categoryId: "corporate-printing",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-03-01",
    readTime: "4 min read",
    image: "/images/blog/placeholder-blog-6.jpg",
    isPlaceholder: true,
    tags: ["Shop Signage", "Flex Printing", "Outdoor Ads"],
  },
];
