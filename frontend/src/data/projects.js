export const projects = [
  {
    id: "signmap",
    project: "SignMap Data Visualization Platform",
    year: "2025",
    description:
      "A full-stack geospatial data visualization platform for mapping and clustering CSV data.",
    languages: [
      "React",
      "Node.js",
      "Firebase",
      "Google Maps API"
    ],
    field: "Full-Stack Data Application",

    image: "../src/assets/project_images/default_background.jpg",

    moreInfo: `
• Mapping platform to visualize and cluster geospatial CSV data
• Integrated Firebase for data storage and ingestion
• Implemented clustering and interactive visualization with Google Maps API
• Developed CRUD APIs and Google OAuth authentication
    `,

    demo: "https://sign-map.onrender.com/",
    github: "" 
  },

  {
    id: "pizzaday",
    project: "PizzaDay Web Application",
    year: "2025",
    description:
      "A full-stack pizza ordering application with payments, animations, and order management.",
    languages: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe"
    ],
    field: "Full-Stack Web Application",

    image: "../src/assets/project_images/default_background.jpg",

    moreInfo: `
• Full-stack pizza ordering app with customer UI and order management
• React frontend with animations and 3D components
• Implemented backend APIs, authentication, and order processing
• Integrated Stripe payments and automated email notifications
    `,

    demo: "https://pizzaday.onrender.com/",
    github: ""
  },
  {
    id: "gesture-system",
    project: "Real-Time Gesture-Based Screen Interaction System",
    year: "2025",
    description:
      "A real-time computer vision system enabling gesture-based interaction using embedded hardware.",
    languages: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "ESP32"
    ],
    field: "Computer Vision + Embedded Systems",

    image: "../src/assets/project_images/default_background.jpg",

    moreInfo: `
• Real-time system for image detection and gesture interaction using ESP32
• Implemented CV pipeline (Canny, Hough, Harris) for robust localization
• Enabled gesture control (swipe, pinch) using MediaPipe
• Calibrated camera and processed data to improve pose estimation accuracy
    `,

    demo: "",   // leave empty if no demo
    github: "https://github.com/fspencer-edu/CV-Final-Project"
  }
];

 