// ============================================================
// AQUEVRA SOLUTIONS — CENTRALIZED SITE CONFIGURATION
// Edit this file to update all contact info, hours, and links
// ============================================================

export const siteConfig = {
  // ── Company ───────────────────────────────────────────────
  name: "AQUEVRA SOLUTIONS",
  tagline: "Technology. Digital. Beyond.",
  shortTagline: "Technology. Innovation. Solutions.",
  description:
    "AQUEVRA SOLUTIONS provides website development, custom software solutions, graphic design & creative branding, digital marketing, corporate gifting, and professional printing services in Karachi, Pakistan.",
  url: "https://aquevrasolutions.com", // Update when live
  locale: "en_PK",

  // ── Contact ───────────────────────────────────────────────
  contact: {
    phone: "+92-XXX-XXXXXXX", // Replace with official phone number
    whatsapp: "+92-XXX-XXXXXXX", // Replace with official WhatsApp number
    email: "info@aquevrasolutions.com", // Replace with official email
    salesEmail: "sales@aquevrasolutions.com",
    supportEmail: "support@aquevrasolutions.com",
    address: {
      street: "[Street Address]", // Replace with official address
      area: "[Area / Sector]",
      city: "Karachi",
      province: "Sindh",
      country: "Pakistan",
      postalCode: "[Postal Code]",
    },
    // Google Maps embed URL — replace src value with official location embed
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231111.68983079565!2d66.99392065!3d24.860732049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890",
  },

  // ── Business Hours ────────────────────────────────────────
  businessHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    weekend: "Sunday: By Appointment",
    note: "Contact us for inquiries and project consultations.",
  },

  // ── Social Media ──────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/aquevrasolutions", // Replace with official URL
    instagram: "https://instagram.com/aquevrasolutions",
    linkedin: "https://linkedin.com/company/aquevrasolutions",
    twitter: "",
    youtube: "",
  },

  // ── SEO Defaults ──────────────────────────────────────────
  seo: {
    defaultTitle: "AQUEVRA SOLUTIONS | Web, Software, Design, Marketing & Corporate Printing",
    titleTemplate: "%s | AQUEVRA SOLUTIONS",
    defaultDescription:
      "AQUEVRA SOLUTIONS provides website development, custom software solutions, graphic design & creative branding, digital marketing, corporate gifting, and professional printing services in Karachi, Pakistan.",
    keywords: [
      "Website Development Karachi",
      "Custom Software Solutions Karachi",
      "Graphic Design Karachi",
      "Digital Marketing Agency Karachi",
      "Corporate Gifting Karachi",
      "Corporate Printing Karachi",
      "Flex & Signage Solutions Karachi",
      "Business Branding Pakistan",
      "AQUEVRA SOLUTIONS",
    ],
  },

  // ── Forms ─────────────────────────────────────────────────
  forms: {
    // Web3Forms access key — set via environment variable
    // Get your free key at https://web3forms.com
    web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
    // Redirect after successful form submission (optional)
    successRedirect: "",
  },

  // ── Admin ─────────────────────────────────────────────────
  admin: {
    // These are set via environment variables — never hardcode in this file
    // NEXTAUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
  },
};

export type SiteConfig = typeof siteConfig;
