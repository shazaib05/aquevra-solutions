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
      "AQUEVRA SOLUTIONS is a premier technology and creative agency specializing in Website & Software Solutions, Graphic Design & Creative Services, Digital Marketing, and Corporate Gifting & Printing. We provide comprehensive digital, creative, and production solutions under one roof.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Do you serve both startups and established enterprises?",
    answer:
      "Yes! We work with corporate enterprises, small and medium businesses, retail brands, e-commerce stores, educational institutions, restaurants, startups, and commercial organizations. Every project is tailored to your business scale.",
    category: "General",
  },
  {
    id: "faq-3",
    question: "How long does a website or software project take?",
    answer:
      "Timelines depend on project scope. A standard corporate or business website typically takes 2–4 weeks. Custom web applications, portals, or e-commerce platforms may take 6–10 weeks. We provide a milestone-based timeline in your quotation.",
    category: "Web & Software",
  },
  {
    id: "faq-4",
    question: "Can you handle both the design and technical development of my website?",
    answer:
      "Absolutely. Our team manages the complete lifecycle — UI/UX wireframing, high-fidelity visual design, front-end & back-end development, responsive mobile optimization, speed optimization, and ongoing maintenance.",
    category: "Web & Software",
  },
  {
    id: "faq-5",
    question: "Do you offer custom software and web application development?",
    answer:
      "Yes. We engineer bespoke software solutions including web portals, inventory management systems, customer dashboards, CRM integrations, and database architecture tailored to your operational workflows.",
    category: "Web & Software",
  },
  {
    id: "faq-6",
    question: "What printing and signage solutions do you provide?",
    answer:
      "We provide high-quality digital printing, offset printing, large-format flex printing, vinyl banners, 3D acrylic LED shop signage, display stands, business cards, letterheads, brochures, catalogues, and custom product packaging.",
    category: "Gifting & Printing",
  },
  {
    id: "faq-7",
    question: "What corporate gifting services do you offer?",
    answer:
      "We curate and manufacture custom branded corporate gifts, executive welcome kits, embossed leather diaries, premium metal pens, custom tech merchandise, and bespoke packaging for corporate events and client appreciation.",
    category: "Gifting & Printing",
  },
  {
    id: "faq-8",
    question: "What graphic design and branding services do you deliver?",
    answer:
      "Our creative team crafts complete brand identities (logos, brand guidelines, color palettes, typography), social media creatives, marketing collateral, company profiles, presentation decks, packaging designs, and video editing.",
    category: "Graphic Design",
  },
  {
    id: "faq-9",
    question: "What digital marketing and growth services do you provide?",
    answer:
      "Our digital marketing solutions encompass social media management (Meta, LinkedIn, Instagram), targeted paid ad campaigns (Google Ads, Meta Ads), search engine optimization (SEO), content planning, and measurable lead generation strategies.",
    category: "Digital Marketing",
  },
  {
    id: "faq-10",
    question: "How do I get started with AQUEVRA SOLUTIONS?",
    answer:
      "Getting started is simple. Reach out via our online quote calculator, WhatsApp, phone, or contact form. We will schedule a consultation to assess your project goals and provide an itemized proposal with clear pricing.",
    category: "General",
  },
  {
    id: "faq-11",
    question: "Where is AQUEVRA SOLUTIONS located?",
    answer:
      "AQUEVRA SOLUTIONS is headquartered in Karachi, Pakistan, serving businesses nationwide with on-ground delivery for printing and gifting, and collaborating with digital clients worldwide for web, software, design, and marketing services.",
    category: "General",
  },
];
