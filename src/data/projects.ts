export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Simple Chat System",
    description: "A simple chat system You can join by using your name in different browser tab.[Open your browser tabs side by side]",
    technologies: ["React", "Next.js", "Socket.io", "TailwindCSS"],
    githubUrl: "https://github.com/amshuman50/Simple_chat",
    liveUrl: "https://simple-chat-one-sigma.vercel.app/"
  },
  {
    id: 2,
    title: "Text Utilities",
    description: "A text utility website for text manipulation.",
    technologies: ["TypeScript", "Next.js", "Bootstrap"],
    githubUrl: "https://github.com/amshuman50/text_utilities",
    liveUrl: "https://amshuman50.github.io/text_utilities/"
  },
  {
    id: 3,
    title: "Data Collection Form",
    description: "Data Collection Form for a survey.",
    technologies: ["React", "Next.js", "tailwind css"],
    githubUrl: "https://github.com/amshuman50/farmer_form",
    liveUrl: "https://farmer-form.vercel.app/"
  }
]; 