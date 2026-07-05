// src/types/project.ts

export type ProjectCategory = 
  | "Commerce System" 
  | "Automation Tool" 
  | "Learning Hub" 
  | "Creator Tool" 
  | "Internal Tool"
  | "Operational System";

export type ProjectStatus = 
  | "LAUNCHED" 
  | "IN PRODUCTION" 
  | "EXPERIMENTING" 
  | "ARCHIVED";

export interface Project {
  // Core Identity
  id?: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  technologies: string[];

  // Case Study Narrative (The "Business Context")
  challenge?: string;
  approach?: string;
  features?: string[];
  lessons?: string;

  // Media & External Links
  image?: string;
  gallery?: string[];
  github?: string;
  liveUrl?: string | null;
  figmaUrl?: string;

  // Studio Metadata
  featured: boolean;
  priority: number;
  published: boolean;
  year: number;
  
}