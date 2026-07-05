import { projectData } from "../data/projects";
import type { Project, ProjectCategory } from "../types/project";

export const ProjectQuery = {
  all(): Project[] {
    return projectData
      .filter((p) => p.published)
      .sort((a, b) => a.priority - b.priority);
  },

  featured(): Project[] {
    return this.all().filter((p) => p.featured);
  },

  bySlug(slug: string): Project | undefined {
    return this.all().find((p) => p.slug === slug);
  },

  byCategory(category: ProjectCategory): Project[] {
    return this.all().filter((p) => p.category === category);
  },

  launched(): Project[] {
    return this.all().filter((p) => p.status === "LAUNCHED");
  },

  production(): Project[] {
    return this.all().filter((p) => p.status === "IN PRODUCTION");
  }
};