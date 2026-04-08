export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
}