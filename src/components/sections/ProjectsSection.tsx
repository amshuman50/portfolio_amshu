'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';

type ProjectsSectionProps = {
  projects: Project[];
};

//  Tech Badge
function TechBadge({ label, index }: { label: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
    >
      {label}
    </motion.span>
  );
}

//  Project Card
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const featured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-2xl ${
        featured
          ? 'md:col-span-2 md:row-span-2 border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5'
          : 'border border-primary/20 bg-white/5'
      }`}
    >

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-48'}`}>
        <Image
          src={project.image || '/fallback.png'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 p-6 ${featured ? 'p-8' : ''}`}>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">
          {project.title}
        </h3>

        <p
          className={`text-muted-foreground mb-6 ${
            featured ? 'text-lg' : 'text-sm'
          }`}
        >
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <TechBadge key={tech} label={tech} index={i} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/20 hover:border-primary/50"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

//  Main Section
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects?.length) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p>No projects available.</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative py-20 px-4 overflow-hidden bg-gray-100 dark:bg-black"
    >

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my best work showcasing modern full-stack
            development and UI/UX design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}