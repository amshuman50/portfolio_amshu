import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Skills, Programming Languages and Frameworks
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: "C", icon: "/c.png" },
            { name: "C++", icon: "/cp.png" },
            { name: "Html", icon: "/html.svg" },
            { name: "CSS", icon: "/css.svg" },
            { name: "JavaScript", icon: "/javascript.svg" },
            { name: "TypeScript", icon: "/typescript.svg" }, 
            { name: "SQL", icon: "/mysql.svg" },
            { name: "React", icon: "/react.png", className: "rotate" },
            { name: "Next.js", icon: "/next.png" },
          ].map((skill) => (
            <Card key={skill.name}>
              <CardContent className="p-4">
                <div className="flex flex-col items-center gap-2">
                  <Image 
                    src={skill.icon}
                    alt={skill.name}
                    width={150}
                    height={150}
                    className={skill.className || ""}
                  />
                  <p className="text-center">{skill.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 