// ============================================================
// AQUEVRA SOLUTIONS — BLOG DATA (PLACEHOLDER ARTICLES)
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
  { id: "it-tips", label: "IT Tips" },
  { id: "networking", label: "Networking Guides" },
  { id: "cctv-security", label: "CCTV & Security" },
  { id: "web-software", label: "Website & Software" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "business-tech", label: "Business Technology" },
  { id: "maintenance", label: "Maintenance & Troubleshooting" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "why-your-business-needs-a-proper-network-setup",
    title: "Why Your Business Needs a Proper Network Setup",
    excerpt:
      "[SAMPLE CONTENT] A reliable network is the backbone of any modern business. Learn why proper network infrastructure matters and what to consider when planning your office network.",
    category: "Networking Guides",
    categoryId: "networking",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/images/blog/placeholder-blog-1.jpg",
    isPlaceholder: true,
    tags: ["Networking", "Office IT", "Infrastructure"],
  },
  {
    id: "b2",
    slug: "cctv-guide-for-small-businesses",
    title: "CCTV Guide for Small Businesses",
    excerpt:
      "[SAMPLE CONTENT] A practical guide to choosing and installing CCTV systems for small businesses, retail shops, and offices. What to look for and what to avoid.",
    category: "CCTV & Security",
    categoryId: "cctv-security",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-01-22",
    readTime: "6 min read",
    image: "/images/blog/placeholder-blog-2.jpg",
    isPlaceholder: true,
    tags: ["CCTV", "Security", "Small Business"],
  },
  {
    id: "b3",
    slug: "why-your-business-needs-a-professional-website",
    title: "Why Your Business Needs a Professional Website in 2024",
    excerpt:
      "[SAMPLE CONTENT] A professional website is one of the most important investments for any business. Here is why a well-designed website matters and what it should include.",
    category: "Website & Software",
    categoryId: "web-software",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-02-05",
    readTime: "4 min read",
    image: "/images/blog/placeholder-blog-3.jpg",
    isPlaceholder: true,
    tags: ["Website", "Business", "Digital Presence"],
  },
  {
    id: "b4",
    slug: "common-it-problems-and-how-to-fix-them",
    title: "Common IT Problems and How to Fix Them",
    excerpt:
      "[SAMPLE CONTENT] From slow computers to printer issues — a guide to common IT problems businesses face and practical advice on resolving them.",
    category: "IT Tips",
    categoryId: "it-tips",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-02-12",
    readTime: "7 min read",
    image: "/images/blog/placeholder-blog-4.jpg",
    isPlaceholder: true,
    tags: ["IT Support", "Troubleshooting", "Technology"],
  },
  {
    id: "b5",
    slug: "social-media-marketing-tips-for-local-businesses",
    title: "Social Media Marketing Tips for Local Businesses",
    excerpt:
      "[SAMPLE CONTENT] Practical social media marketing strategies for local businesses looking to increase visibility, engage customers, and generate leads.",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-02-20",
    readTime: "5 min read",
    image: "/images/blog/placeholder-blog-5.jpg",
    isPlaceholder: true,
    tags: ["Social Media", "Marketing", "Local Business"],
  },
  {
    id: "b6",
    slug: "the-importance-of-regular-computer-maintenance",
    title: "The Importance of Regular Computer Maintenance",
    excerpt:
      "[SAMPLE CONTENT] Regular maintenance keeps your computers running efficiently and helps prevent costly breakdowns. Learn what a proper maintenance routine should include.",
    category: "Maintenance & Troubleshooting",
    categoryId: "maintenance",
    author: "AQUEVRA SOLUTIONS Team",
    date: "2024-03-01",
    readTime: "4 min read",
    image: "/images/blog/placeholder-blog-6.jpg",
    isPlaceholder: true,
    tags: ["Maintenance", "IT", "Computers"],
  },
];
