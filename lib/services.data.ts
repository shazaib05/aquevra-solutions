// ============================================================
// AQUEVRA SOLUTIONS — COMPLETE SERVICES CATALOGUE
// ============================================================

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  cta: string;
  ctaLink: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind accent color class
}

export const services: Service[] = [
  {
    id: "it-technical",
    title: "IT & Technical Services",
    description:
      "Keep your computers, software, and business technology running smoothly with professional IT support, installation, troubleshooting, and optimization.",
    items: [
      "Windows Installation & Configuration",
      "Licensed Software Installation & Configuration",
      "Computer & Laptop Troubleshooting",
      "Hardware Installation & Upgrades",
      "Computer Formatting & System Optimization",
      "Driver Installation & Updates",
      "Printer Installation & Configuration",
      "Printer Troubleshooting & Maintenance",
      "Data Backup & Recovery",
      "IT Support & Technical Assistance",
      "Office IT Setup & Maintenance",
      "Remote IT Support",
      "Annual IT Maintenance Contracts (AMC)",
    ],
    cta: "Request IT Support",
    ctaLink: "/support",
    icon: "Monitor",
    color: "cyan",
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    description:
      "Build a stable, secure, and reliable network infrastructure for your home, office, or business.",
    items: [
      "LAN/WAN Network Installation",
      "Office Network Setup",
      "Router & Switch Configuration",
      "Wi-Fi Network Installation",
      "Network Cabling",
      "Structured Cabling",
      "Internet & Network Troubleshooting",
      "Network Device Configuration",
      "Server Setup & Basic Administration",
      "Network Maintenance & Support",
    ],
    cta: "Plan My Network",
    ctaLink: "/quote",
    icon: "Network",
    color: "blue",
  },
  {
    id: "cctv-security",
    title: "CCTV & Security Solutions",
    description:
      "Improve visibility, monitoring, and protection for homes, offices, shops, warehouses, and commercial locations with professional CCTV solutions.",
    items: [
      "CCTV Camera Installation",
      "CCTV Camera Configuration",
      "IP Camera Installation",
      "DVR/NVR Installation & Configuration",
      "CCTV Cabling",
      "HDD Installation & Replacement",
      "Mobile/Remote CCTV Viewing Setup",
      "CCTV Troubleshooting & Repair",
      "Camera Replacement & Upgrades",
      "Wi-Fi Camera Installation",
      "CCTV System Maintenance",
      "Office & Commercial CCTV Solutions",
      "Home CCTV Solutions",
      "Warehouse CCTV Solutions",
      "CCTV Annual Maintenance Contracts (AMC)",
    ],
    cta: "Request CCTV Consultation",
    ctaLink: "/quote",
    icon: "Camera",
    color: "purple",
  },
  {
    id: "web-software",
    title: "Website & Software Solutions",
    description:
      "Create powerful digital experiences and custom technology solutions that support your business operations and online growth.",
    items: [
      "Website Development",
      "Business Websites",
      "E-Commerce Websites",
      "Custom Web Applications",
      "Website Redesign",
      "Website Maintenance",
      "Domain Registration",
      "Web Hosting",
      "Business Email Setup",
      "Website Security & Backup",
      "Website Performance Optimization",
      "Custom Software Solutions",
      "Database Solutions",
      "Software Maintenance & Support",
    ],
    cta: "Start My Digital Project",
    ctaLink: "/quote",
    icon: "Globe",
    color: "green",
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Creative Services",
    description:
      "Build a memorable brand identity and communicate your business through professional visual design and creative content.",
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Business Card Design",
      "Letterhead & Stationery Design",
      "Social Media Post Design",
      "Facebook & Instagram Creative Design",
      "Banners & Posters",
      "Brochures",
      "Flyers",
      "Company Profiles",
      "Product Catalogues",
      "Presentation / PowerPoint Design",
      "Standee & Signage Design",
      "Advertisement Creatives",
      "Video Editing",
      "Motion Graphics / Basic Animation",
    ],
    cta: "Start My Design Project",
    ctaLink: "/quote",
    icon: "Palette",
    color: "pink",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strengthen your online presence, reach your target audience, and promote your business through strategic digital marketing services.",
    items: [
      "Social Media Management",
      "Facebook Marketing",
      "Instagram Marketing",
      "Google Ads",
      "Social Media Advertising",
      "Search Engine Optimization (SEO)",
      "Content Creation",
      "Social Media Content Planning",
      "Digital Advertising Campaigns",
      "Brand Promotion",
      "Lead Generation",
      "Online Business Promotion",
      "Social Media Page Setup & Optimization",
    ],
    cta: "Grow My Business Online",
    ctaLink: "/quote",
    icon: "TrendingUp",
    color: "orange",
  },
  {
    id: "corporate-services",
    title: "Corporate Gifting & Printing",
    description:
      "Providing high-quality digital printing, flex printing, banner printing, offset printing, signage solutions, corporate gifting, and customized branding services. We specialize in delivering premium print quality, creative designs, and fast turnaround times for businesses of all sizes. From business cards, brochures, and promotional materials to shop signage, banners, and complete branding solutions, we help businesses create a strong visual presence. Our commitment to quality, reliability, and customer satisfaction makes us a dependable choice for professional printing and gifting services.",
    items: [
      "Corporate Gifting & Executive Gifts",
      "Digital Printing",
      "Offset Printing",
      "Flex Printing & Banners",
      "Signage Solutions & Shop Signage",
      "Customized Branding Services",
      "Business Cards & Stationery",
      "Letterheads & Envelopes",
      "Brochures & Catalogues",
      "Company Profiles",
      "Promotional Materials & Merchandise",
      "ID Cards & Certificates",
      "Packaging & Custom Labels",
    ],
    cta: "Request Gifting & Printing Quote",
    ctaLink: "/quote",
    icon: "Briefcase",
    color: "indigo",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Keep your technology, infrastructure, websites, and security systems operating reliably with ongoing maintenance and technical support.",
    items: [
      "IT Maintenance Contracts",
      "CCTV Maintenance Contracts",
      "Website Maintenance",
      "Computer & Laptop Maintenance",
      "Network Maintenance",
      "Remote Technical Support",
      "On-Site Technical Support",
      "System Monitoring",
      "Regular Backup & Maintenance",
    ],
    cta: "Get a Maintenance Plan",
    ctaLink: "/quote",
    icon: "Wrench",
    color: "yellow",
  },
];

export const serviceCategories = services.map((s) => ({
  id: s.id,
  title: s.title,
  icon: s.icon,
}));
