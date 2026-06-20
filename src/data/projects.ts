export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Text Utilities',
    description: 'A text utility website for text manipulation.',
    technologies: ['TypeScript', 'Next.js', 'Bootstrap'],
    githubUrl: 'https://github.com/amshuman50/text_utilities',
    liveUrl: 'https://amshuman50.github.io/text_utilities/',
    image: '/projects/text_utils.png',
  },
  {
    id: 3,
    title: 'React Reminder App',
    description: 'A Reminder app for adding upcomming events and check its status.',
    technologies: ['React', 'Zustand','React-Router-DOM', 'Tailwind CSS'],
    githubUrl: 'https://github.com/amshuman50/react-reminder',
    liveUrl: 'https://amshuman50.github.io/react-reminder/',
    image: '/projects/react_reminder.png',
  },
  {
    id: 3,
    title: 'Data Collection Form',
    description: 'Data Collection Form for a survey.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/amshuman50/farmer_form',
    liveUrl: 'https://farmer-form.vercel.app/',
    image: '/projects/data_collection.png',
  },
];