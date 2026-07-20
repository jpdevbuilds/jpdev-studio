import { projectData } from "../data/projects";
import type { Project } from "../types/project";

export const ProjectQuery = {
  all(): Project[] {
    return projectData
      .filter((project) => project.published)
      .sort((a, b) => a.priority - b.priority);
  },

  featured(): Project[] {
    return this.all().filter((project) => project.featured);
  },

  bySlug(slug: string): Project | undefined {
    return this.all().find((project) => project.slug === slug);
  },

  byCategory(category: string): Project[] {
    return this.all().filter(
      (project) => project.category === category
    );
  },

  byIndustry(industry: string): Project[] {
    return this.all().filter(
      (project) => project.industry === industry
    );
  },

  bySystemType(systemType: string): Project[] {
    return this.all().filter(
      (project) => project.systemType === systemType
    );
  },

  launched(): Project[] {
    return this.all().filter(
      (project) => project.status === "Launched"
    );
  },

  building(): Project[] {
    return this.all().filter(
      (project) => project.status === "Building"
    );
  },

  testing(): Project[] {
    return this.all().filter(
      (project) => project.status === "Testing"
    );
  },

  concept(): Project[] {
    return this.all().filter(
      (project) => project.status === "Concept"
    );
  },

  archived(): Project[] {
    return this.all().filter(
      (project) => project.status === "Archived"
    );
  },
};