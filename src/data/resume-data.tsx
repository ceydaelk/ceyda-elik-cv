import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ceyda Elik",
  initials: "CE",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about: "Mobile app developer focused on building seamless React Native experiences.",
  summary: (
    <>
      Passionate mobile developer with hands-on experience in building React Native apps using
      TypeScript and JavaScript. Committed to writing clean, scalable code and continuously learning
      new technologies. Currently exploring opportunities to grow in full-stack mobile development.
    </>
  ),
  avatarUrl: "https://i.imgur.com/9IChMpE.jpeg",
  personalWebsiteUrl: "",
  contact: {
    email: "ceydaelk@gmail.com",
    tel: "+905318361014",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ceydaelk",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ceyda-elik/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Nişantaşı University",
      degree: "Associate Degree in Computer Programming",
      start: "2019",
      end: "2021",
    },
    {
      school: "Budapest University of Technology and Economics",
      degree: "Preparatory Program in Engineering (Accepted)",
      start: "2025",
      end: null,
    },
  ],
  work: [
    {
      company: "INTERKOD / BIM",
      link: "",
      badges: ["Internship", "On Site"],
      title: "Software Development Intern",
      start: "2020",
      end: "2020",
      description:
        "Completed an internship focused on software development tasks and business software systems. Gained hands-on experience with coding, debugging, and team collaboration.",
    },
  ],
  skills: [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Firestore",
    "AsyncStorage",
    "Mobile UI Design",
    "Git & GitHub",
  ],
  projects: [
    {
      title: "Hotel Reservation App",
      techStack: ["React Native", "TypeScript", "Firebase", "Firestore"],
      description:
        "A mobile app for browsing and booking hotels. Users can add hotels to favorites, make reservations, and view their bookings. Includes Firebase Authentication and Firestore database integration.",
      link: {
        label: "GitHub",
        href: "https://github.com/ceydaelk",
      },
    },
    {
      title: "Zikirmatik",
      techStack: ["React Native", "JavaScript", "AsyncStorage"],
      description:
        "A simple digital tasbih counter mobile app that allows users to count dhikr with vibration feedback and save progress locally.",
      link: {
        label: "GitHub",
        href: "https://github.com/ceydaelk",
      },
    },
    {
      title: "Recipe App",
      techStack: ["React Native", "TypeScript", "API Integration"],
      description:
        "A recipe browsing app with category filtering, detailed recipe pages, and favorite functionality. Built with real-world API integration and clean UI design.",
      link: {
        label: "GitHub",
        href: "https://github.com/ceydaelk",
      },
    },
  ],
} as const;
