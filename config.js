// All site content lives here. Edit this file to update the site — no other
// file needs to change. Any list left empty ([]) hides its section; leave
// `email` empty to send brands to Instagram DMs instead of the email form.
window.SITE = {
  draft: false,

  name: "Aditya",
  handle: "adi.vibe",
  tagline: "Mood in Motion",
  bio: "Welcome to the adi.vibe universe.",
  location: "",
  instagram: "https://www.instagram.com/adi.vibe/",
  email: "",

  // ---- For Brands -------------------------------------------------------
  // e.g. { label: "Followers", value: "12.4K" }
  stats: [],
  statsUpdated: "",

  // e.g. age: [{ label: "18–24", pct: 44 }, ...]
  audience: { age: [], locations: [], split: [] },

  // e.g. { title: "Mood reels", text: "Short cinematic edits that set a feeling." }
  pillars: [],

  packages: [
    { name: "Story set", price: "Rates on request", includes: ["Story frames", "Link sticker"] },
    { name: "Reel", price: "Rates on request", includes: ["Concept, shoot and edit", "Posted to @adi.vibe"] },
    { name: "Campaign", price: "Let's talk", includes: ["Reels + stories", "Multi-week plan"] },
  ],

  // e.g. { brand: "Brand", summary: "Reel campaign — 40K views.", url: "" }
  collaborations: [],
  // e.g. { quote: "...", by: "Name, Company" }
  testimonials: [],

  // ---- For the community -------------------------------------------------
  links: [
    { label: "Latest posts", note: "On Instagram", url: "https://www.instagram.com/adi.vibe/" },
    { label: "Say hi", note: "Send a DM", url: "https://ig.me/m/adi.vibe" },
  ],

  // e.g. { title: "Post title", caption: "One line.", url: "https://www.instagram.com/p/..." }
  featured: [],

  // e.g. { name: "Editing app", category: "Apps", note: "What I use for colour.", url: "" }
  favorites: [],

  // e.g. { q: "What do you edit with?", a: "..." }
  faq: [],
};
