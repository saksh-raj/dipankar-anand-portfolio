// ─── EXPERIENCE ─── Sourced from the LinkedIn profile. Most recent first.
//
// A company can hold either a single role (with achievements/tech) or,
// where one employer spans several titles (Info Edge), a `roles` array.
// Info Edge's LinkedIn bullets actually describe work that ran across all
// three titles, so they're distributed across the roles by theme rather
// than duplicated — foundational platform work under the earliest title,
// the search/application platform and FirstNaukri migration under the
// senior title, and the design/ownership framing under the lead title.

export const experience = [
  {
    company: "Flyra",
    role: "Founding Engineer",
    period: "Nov 2025 — Present",
    location: "Remote",
    current: true,
    summary:
      "Building the backend foundations of an early-stage product as a founding engineer — owning services, data models and infrastructure end to end.",
    achievements: [
      "Shaping the core backend architecture and APIs from the ground up, with an emphasis on reliability and speed of iteration.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Systems Design"],
  },
  {
    company: "Dream11",
    role: "SDE-2",
    period: "Nov 2024 — Nov 2025",
    location: "On-site · 1 yr 1 mo",
    current: false,
    summary:
      "Backend engineer on India's largest fantasy sports platform, building high-throughput services that stay responsive under heavy, spiky load.",
    achievements: [
      "Designed and maintained backend services in Java and Vert.x, focused on low-latency, high-concurrency request handling.",
      "Worked across the data and messaging layers to keep services fast and reliable at scale.",
    ],
    tech: ["Java", "Vert.x", "Microservices", "Kafka"],
  },
  {
    company: "Info Edge India Ltd",
    location: "Noida, Uttar Pradesh · Hybrid · 3 yrs 5 mos",
    current: false,
    // A single employer, three progressive titles. Bullets are grouped by
    // theme across the tenure rather than repeated per title.
    roles: [
      {
        role: "Lead Engineer",
        period: "May 2024 — Oct 2024",
        summary:
          "Led backend design and delivery across the Naukri search and application platforms, driving technical decisions in a multi-team environment.",
        achievements: [
          "Drove design discussions and finalised project contracts, collaborating effectively across multiple teams.",
          "Owned the reliability and evolution of the resume-search and job-search platforms end to end.",
        ],
      },
      {
        role: "Senior Software Engineer",
        period: "May 2022 — May 2024",
        summary:
          "Rebuilt core search and application flows on Naukri, and led the FirstNaukri → Naukri profile migration.",
        achievements: [
          "Revamped the legacy Resume Search Platform (Resdex), overhauling the search experience across 3M+ records and building full, incremental and on-demand indexing.",
          "Optimised search queries and moved search onto Elasticsearch, cutting response time by ~40%.",
          "Migrated legacy PHP and Perl flows to Java, improving uptime and maintainability and mitigating legacy workflow issues.",
          "Integrated the FN job-search platform with Naukri and applied SEO strategies that lifted job-search rankings from 14 to 7.",
          "Revamped the application flow with a config-driven apply-wizard system, driving a ~40% increase in traffic.",
          "Oversaw migration of ~2M active FirstNaukri user records into Naukri India, building an adapter for assembly/disassembly of FN–NI contracts and a reverse-mapped, flow-driven system for dependent modules.",
        ],
      },
      {
        role: "Software Engineer",
        period: "Jun 2021 — May 2022",
        summary:
          "Built and maintained backend services across Naukri's search and job-application stack.",
        achievements: [
          "Delivered backend features across search, relevance and campus-drive management, and streamlined the end-to-end job-application process.",
        ],
      },
    ],
    tech: ["Java", "Elasticsearch", "MySQL", "Systems Design"],
  },
  {
    company: "GoBudgo",
    role: "Software Engineer Intern",
    period: "Dec 2020 — May 2021",
    location: "Remote · 6 mos",
    current: false,
    summary:
      "Backend intern building APIs and real-time features for a learning platform.",
    achievements: [
      "Built APIs in Flask (Python) backed by Redis and ArangoDB, powering search, goals, classes and feedback features.",
      "Improved WebSocket functionality to support multiple concurrent user instances, and added backend tests and unit test scripts.",
    ],
    tech: ["Python", "Flask", "Redis", "ArangoDB"],
  },
  {
    company: "Coding Ninjas",
    role: "Teaching Assistant",
    period: "Nov 2020 — Mar 2021",
    location: "Remote · 5 mos",
    current: false,
    summary:
      "Teaching Assistant for Data Structures and Algorithms in C++.",
    achievements: [
      "Mentored students through DSA problem-solving in C++, reviewing solutions and clarifying core concepts.",
    ],
    tech: ["C++", "Data Structures", "Algorithms"],
  },
  {
    company: "Indian Institute of Technology, Kharagpur",
    role: "Research Intern",
    period: "Dec 2019",
    location: "Kharagpur, West Bengal",
    current: false,
    summary:
      "Research internship on blockchain-backed sensor infrastructure.",
    achievements: [
      "Designed a blockchain-enabled Sensor-Cloud system for provisioning Sensors-as-a-Service.",
    ],
    tech: ["Blockchain", "Systems Design"],
  },
];
