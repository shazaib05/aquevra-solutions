export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What services does AQUEVRA SOLUTIONS offer?",
    answer:
      "AQUEVRA SOLUTIONS is a full-service technology company offering IT support, networking & infrastructure, CCTV & security systems, web & software development, graphic design, digital marketing, and annual maintenance contracts (AMC). We provide end-to-end technology solutions for businesses of all sizes.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Do you serve both businesses and individuals?",
    answer:
      "Yes! We work with corporate offices, small and medium businesses, retail shops, e-commerce stores, educational institutions, restaurants, warehouses, healthcare facilities, startups, and individual homeowners. No project is too big or too small.",
    category: "General",
  },
  {
    id: "faq-3",
    question: "Do you offer on-site support or only remote assistance?",
    answer:
      "We offer both remote and on-site technical support. For minor issues, our team can resolve problems remotely to save you time. For hardware installations, network setups, CCTV installations, and complex troubleshooting, we dispatch our engineers directly to your location.",
    category: "Support",
  },
  {
    id: "faq-4",
    question: "What is an Annual Maintenance Contract (AMC)?",
    answer:
      "An AMC is a service agreement where AQUEVRA SOLUTIONS provides ongoing maintenance, monitoring, and technical support for your IT systems throughout the year. It covers preventive maintenance, priority support, system health checks, and discounted rates on parts and repairs — giving you peace of mind and predictable costs.",
    category: "Support",
  },
  {
    id: "faq-5",
    question: "How long does a website project take?",
    answer:
      "Project timelines vary based on complexity. A standard business website typically takes 2–4 weeks. Custom web applications or e-commerce platforms may take 6–12 weeks. We provide a detailed project timeline during the proposal phase so you always know what to expect.",
    category: "Web & Software",
  },
  {
    id: "faq-6",
    question: "Can you handle both the design and development of my website?",
    answer:
      "Absolutely. Our team covers the complete workflow — UI/UX design, graphic design, front-end development, back-end development, hosting setup, domain configuration, and post-launch maintenance. You deal with one team for everything.",
    category: "Web & Software",
  },
  {
    id: "faq-7",
    question: "What types of CCTV systems do you install?",
    answer:
      "We install a wide range of surveillance systems including analog CCTV, IP/HD cameras, wireless cameras, PTZ cameras, and NVR/DVR recording systems. We design solutions for homes, offices, retail stores, warehouses, and large commercial facilities — with remote viewing capabilities via mobile or desktop.",
    category: "CCTV & Security",
  },
  {
    id: "faq-8",
    question: "Do you provide network setup for new offices?",
    answer:
      "Yes. We handle complete network infrastructure for new and existing offices — including LAN/WAN setup, Wi-Fi configuration, structured cabling, firewall installation, VPN setup, and switch/router configuration. We design networks that are fast, secure, and scalable.",
    category: "Networking",
  },
  {
    id: "faq-9",
    question: "What digital marketing services do you provide?",
    answer:
      "Our digital marketing services include social media management, search engine optimization (SEO), Google Ads & PPC campaigns, content creation, email marketing, and social media advertising. We create data-driven strategies that grow your online presence and generate leads.",
    category: "Digital Marketing",
  },
  {
    id: "faq-10",
    question: "How do I get started with AQUEVRA SOLUTIONS?",
    answer:
      "Getting started is simple. Reach out to us via phone, WhatsApp, email, or the contact form on our website. We'll schedule a free consultation to understand your requirements, after which we'll provide a detailed proposal and quotation. There's no obligation — just expert advice tailored to your needs.",
    category: "General",
  },
  {
    id: "faq-11",
    question: "Do you offer custom software development?",
    answer:
      "Yes. We develop custom software solutions including business management systems, inventory management, CRM tools, web applications, and mobile-responsive apps. Every solution is built to your exact requirements using modern technology stacks.",
    category: "Web & Software",
  },
  {
    id: "faq-12",
    question: "What areas do you serve?",
    answer:
      "AQUEVRA SOLUTIONS primarily operates in the UAE, serving clients across Dubai, Abu Dhabi, Sharjah, and other emirates. For digital services like web development, SEO, and graphic design, we work with clients globally. Contact us to confirm coverage for your specific location.",
    category: "General",
  },
];
