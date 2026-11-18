import { createContext, use } from "react";

export const ProjectsFilterContext = createContext(null);

export function useProjectsFilter() {
  const context = use(ProjectsFilterContext);
  if (!context) {
    throw new Error("useProjectsFilter debe usarse dentro de ProjectsSection");
  }
  return context;
}
