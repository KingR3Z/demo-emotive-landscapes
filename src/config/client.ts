export const client = {
  // Business Details
  name: "Emotive Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Cheltenham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01242 863861",
  email: "",
  website: "",

  // Location
  address: "Cheltenham",
  city: "Cheltenham",
  county: "",
  postcode: "",
  basedIn: "Cheltenham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Sam", rating: 5, text: "We had Emotive Landscapes design and work on our garden in the summer, and they were a real pleasure to deal with every step of the way. …  ", date: "2 years ago" },
    { name: "Rachel Tuffy", rating: 5, text: "We have used Emotive a number of times now and are always so pleased with the outcome of their work. Guy and the team are always friendly and polite and a pleasure to work with. Would highly recommend ", date: "6 months ago" },
    { name: "Sue Baker", rating: 5, text: "We would highly recommend Guy and his team for their excellent work. They completed our small project promptly and efficiently, with a transformational result. ", date: "6 months ago" },
    { name: "Amy Hough", rating: 5, text: "Emotive landscapes were an absolute pleasure to work with from start to finish.  Guy took the time to understand our wants and needs and came up with a concept …  ", date: "3 years ago" },
    { name: "Andrew Kay", rating: 5, text: "Guy Jones and the team from Emotive Landscapes have recently completed garden landscaping works at our house here in Somerford Keynes. We needed a great deal of help in creating a special garden from an unusual footprint of approx two …    Response", date: "3 years ago" },
    { name: "Jenny Hopkins", rating: 5, text: "We recruited Emotive Landscapes to undertake the landscaping and planting that went with a new design of our garden. By the end of the twelve or so weeks that Guy and his team were with us, we could not have been more pleased with our …  ", date: "6 years ago" },
    { name: "RRA Architects", rating: 5, text: "Originally recommended to us by one of our own clients, we have since worked with Emotive on several projects and they are now our 'go to' landscape company. Guy and his team are knowledgeable, professional and efficient. Also, they are …  ", date: "5 years ago" },
    { name: "JayBee Plant Sales", rating: 5, text: "We've worked with Guy and Emotive Landscapes Ltd for a number of years now. Always a pleasure, very friendly and professional. All the best with your new machine! ", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Emotive Landscapes | Landscaper in Cheltenham",
    description: "Professional landscaper in Cheltenham. 5.0-star rated on Google. Call for a free quote.",
  },
};
