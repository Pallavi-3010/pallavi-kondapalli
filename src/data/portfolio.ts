import {
  siC,
  siCplusplus,
  siDocker,
  siGit,
  siGithub,
  siGnubash,
  siHtml5,
  siJenkins,
  siKubernetes,
  siLinux,
  siPython,
  siRabbitmq,
  siTensorflow,
  siTerraform,
  siMysql,
} from "simple-icons";

export type TechIcon = { path: string; title: string } | null;

export const profile = {
  name: "Pallavi Kondapalli",
  headline: ["Software Developer", "Computer Science Engineer", "Technology Enthusiast"],
  intro:
    "I am a Computer Science Engineering graduate with a strong interest in software development, automation, and emerging technologies. Currently working at Midh Technologies Pvt. Ltd., Hyderabad, I continue to strengthen my technical expertise and gain industry exposure. I enjoy building practical solutions, exploring new technologies, and continuously improving my programming and problem-solving abilities.",
  github: "https://github.com/Pallavi-3010",
  linkedin: "https://www.linkedin.com/in/pallavi-kondapalli-825152295/",
  /** Set to a real address to show it on the site and enable the contact form. */
  email: "pallavikondapalli30@gmail.com" as string | null,
  /** Set to a PDF path (e.g. "/resume.pdf") once a resume is added to show the download button. */
  resumeUrl: null as string | null,
};

export const about = [
  "I am a Computer Science Engineering graduate with a foundation in programming, software development, and technology-driven problem solving. My technical interests include Java development, Python programming, Linux, containerization, messaging systems, and automation.",
  "Currently, I am working at Midh Technologies Pvt. Ltd., Hyderabad, where I am gaining industry exposure and strengthening my understanding of technologies used in modern IT environments.",
  "I believe in continuous learning, practical implementation, and staying updated with evolving technologies. My goal is to grow as a skilled software professional and contribute to building efficient and scalable applications.",
];

export const aboutHighlights = [
  { label: "Based in", value: "Hyderabad, Telangana" },
  { label: "Currently", value: "Midh Technologies" },
  { label: "Education", value: "B.Tech, CSE" },
  { label: "Focus", value: "Java · Python · DevOps" },
];

export type Skill = { name: string; icon: TechIcon };
export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: siC },
      { name: "C++", icon: siCplusplus },
      { name: "Java", icon: null },
      { name: "Python", icon: siPython },
    ],
  },
  { title: "Operating Systems", skills: [{ name: "Linux", icon: siLinux }] },
  { title: "DevOps & Containerization", skills: [{ name: "Docker", icon: siDocker }] },
  { title: "Messaging Systems", skills: [{ name: "RabbitMQ", icon: siRabbitmq }] },
  { title: "AI & Automation", skills: [{ name: "AutoML", icon: null }] },
];

export const experience = {
  company: "Midh Technologies Pvt. Ltd.",
  location: "Hyderabad, Telangana",
  designation: "Junior Software Developer",
  status: "Currently Working",
  description:
    "Currently associated with Midh Technologies Pvt. Ltd., Hyderabad, gaining industry exposure and strengthening technical knowledge through structured technical training and practical technology-oriented learning.",
  tools: [
    { name: "Linux", icon: siLinux },
    { name: "Git", icon: siGit },
    { name: "GitHub", icon: siGithub },
    { name: "Docker", icon: siDocker },
    { name: "AWS", icon: null },
    { name: "Kubernetes", icon: siKubernetes },
    { name: "Terraform", icon: siTerraform },
    { name: "Jenkins", icon: siJenkins },
    { name: "Shell Scripting", icon: siGnubash },
  ] satisfies Skill[],
};

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  stack: string[];
  icon: TechIcon;
  /** Only set when a real repository URL exists. */
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "WebScour",
    subtitle: "Distributed Web Crawler & Search Engine",
    description:
      "A distributed web crawling and search system built on a producer-consumer architecture. RabbitMQ distributes crawl tasks, BeautifulSoup handles scraping, and TF-IDF powers ranking — served through a Flask search backend with a Streamlit interface.",
    stack: ["Python", "RabbitMQ", "BeautifulSoup", "Flask", "TF-IDF", "Streamlit"],
    icon: siRabbitmq,
    repoUrl: "https://github.com/Pallavi-3010/Webscour_Distributed-Web-Crawler",
  },
  {
    title: "BigFeat",
    subtitle: "AutoML Platform",
    description:
      "An AutoML-focused project that simplifies machine learning workflows by automating model development and evaluation.",
    stack: ["Python", "Machine Learning", "AutoML"],
    icon: siPython,
    repoUrl: "https://github.com/Pallavi-3010/Feature_engineering_using_automl",
  },
  {
    title: "Brain Tumor Detection",
    subtitle: "Deep Learning Image Classification",
    description:
      "An image classification application using deep learning to identify brain tumor patterns from MRI images.",
    stack: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
    icon: siTensorflow,
    repoUrl: "https://github.com/Pallavi-3010/brain-tumor-detection",
  },
  {
    title: "Employee Management System",
    description:
      "An application to organize employee information and perform create, read, update and delete operations on a relational database.",
    stack: ["Python", "SQL"],
    icon: siMysql,
    repoUrl: "https://github.com/Pallavi-3010/Use-case-1",
  },
  {
    title: "Gaming Hub",
    description:
      "An interactive gaming-themed website with a structured interface and responsive web elements.",
    stack: ["HTML", "CSS", "JavaScript"],
    icon: siHtml5,
  },
];

export const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Geethanjali Institute of Science and Technology",
    score: "83%",
  },
  { degree: "Intermediate", institution: "Narayana Junior College", score: "92%" },
  { degree: "SSC", institution: "Ravindra Bharathi School", score: "97%" },
];

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export type NavPath = (typeof navLinks)[number]["to"];
