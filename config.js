// All site content lives here. Edit this file to update the site — no other
// file needs to change. Set `draft: false` once the sample data is replaced.
window.SITE = {
  draft: true,

  name: "Aditya",
  handle: "adi.vibe",
  tagline: "Mood in Motion",
  bio: "Short intro about you and what your page is about. Replace this in config.js.",
  location: "Your city",
  instagram: "https://www.instagram.com/adi.vibe/",
  email: "you@example.com",

  // ---- For Brands -------------------------------------------------------
  stats: [
    { label: "Followers", value: "12.4K" },
    { label: "Avg. reach / post", value: "8.1K" },
    { label: "Engagement rate", value: "6.2%" },
    { label: "Avg. story views", value: "2.3K" },
  ],
  statsUpdated: "November 2026",

  audience: {
    age: [
      { label: "13–17", pct: 6 },
      { label: "18–24", pct: 44 },
      { label: "25–34", pct: 35 },
      { label: "35+", pct: 15 },
    ],
    locations: [
      { label: "City one", pct: 32 },
      { label: "City two", pct: 18 },
      { label: "City three", pct: 11 },
    ],
    split: [
      { label: "Women", pct: 54 },
      { label: "Men", pct: 46 },
    ],
  },

  pillars: [
    { title: "Mood reels", text: "Short cinematic edits that set a feeling." },
    { title: "Travel & places", text: "Spots worth the trip, shot in motion." },
    { title: "Everyday style", text: "What I wear and use, honestly." },
  ],

  packages: [
    { name: "Story set", price: "From $—", includes: ["3 story frames", "Link sticker", "24h live"] },
    { name: "Reel", price: "From $—", includes: ["1 reel, 15–45s", "Concept + edit by me", "Usage rights 30 days"], featured: true },
    { name: "Campaign", price: "Let's talk", includes: ["Reel + stories + post", "Multi-week plan", "Performance report"] },
  ],

  collaborations: [
    { brand: "Example Brand", summary: "Reel campaign — 40K views, 1.2K saves.", url: "" },
    { brand: "Another Brand", summary: "Story series for a product launch.", url: "" },
  ],

  testimonials: [
    { quote: "A quote from a brand you worked with goes here.", by: "Name, Company" },
  ],

  // ---- For the community -------------------------------------------------
  links: [
    { label: "Latest reel", note: "Watch on Instagram", url: "https://www.instagram.com/adi.vibe/" },
    { label: "My music playlist", note: "What I edit to", url: "" },
    { label: "Gear I shoot with", note: "Camera, phone, apps", url: "" },
  ],

  featured: [
    { title: "Post title", caption: "One line about this post.", url: "https://www.instagram.com/adi.vibe/" },
    { title: "Post title", caption: "One line about this post.", url: "https://www.instagram.com/adi.vibe/" },
    { title: "Post title", caption: "One line about this post.", url: "https://www.instagram.com/adi.vibe/" },
  ],

  favorites: [
    { name: "Editing app", category: "Apps", note: "What I use for colour.", url: "" },
    { name: "A place", category: "Places", note: "Best at golden hour.", url: "" },
    { name: "A song", category: "Music", note: "On repeat this month.", url: "" },
  ],

  faq: [
    { q: "What do you edit with?", a: "Answer here." },
    { q: "Can I use your audio / presets?", a: "Answer here." },
    { q: "How do I get featured?", a: "Tag @adi.vibe in your post and story." },
  ],
};
