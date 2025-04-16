import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <Card key={project}>
              <CardHeader>
                <CardTitle>Project {project}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Description of project {project} goes here.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 