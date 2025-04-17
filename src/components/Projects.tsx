import { ProjectsSection } from "./sections/ProjectsSection";
import { projects } from "@/data/projects";

export const Projects = () => {
  console.log("Projects component rendered");
  console.log("Projects data type:", typeof projects);
  console.log("Is projects an array?", Array.isArray(projects));
  console.log("Projects data:", projects);
  
  if (!projects || !Array.isArray(projects)) {
    console.error("Projects data is not available or not an array");
    return null;
  }
  
  return <ProjectsSection projects={projects} />;
}; 