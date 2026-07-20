export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface ProjectImpact {
  label: string;
  value: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  demoVideo?: string;
}

export interface ProjectCTA {
  label: string;
  href: string;
}

export interface Project {
  // Identity
  slug: string;
  title: string;
  executiveSummary?: string;

  // Positioning
  industry: string;
  category: string;
  systemType: string;

  // Lifecycle & Meta
  status: 'Concept' | 'Building' | 'Testing' | 'Launched' | 'Archived';
  engagementType: 'Client' | 'Internal Product' | 'Studio Experiment';
  featured: boolean;
  published: boolean;
  priority: number;
  year: number;

  // Media
  coverImage?: string;
  gallery?: string[];

  // Technical & Strategic Focus
  stack: string[];
  focus: string[];

  // Business Narrative
  problem: string;
  whyFailed?: string;
  approach?: string;
  solution: string;
  outcome: string;

  // Business Impact
  impact: ProjectImpact[];

  // Capabilities
  features: ProjectFeature[];

  // Delivery Metadata
  role?: string;
  duration?: string;
  client?: string;

  // External Resources
  links?: ProjectLinks;

  // Call-to-Action
  cta?: ProjectCTA;
}