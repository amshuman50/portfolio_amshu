'use client';
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const skills = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "blue" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "blue" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "orange" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "blue" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "yellow" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "blue" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "blue" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan", rotate: true },
  // { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "slate" },
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            Tech Stack <span className="text-teal-400">&</span> Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A comprehensive toolkit of technologies I use to bring ideas to life.
            From frontend aesthetics to backend logic.
          </motion.p>
        </div>

        <div className="relative min-h-[600px] flex items-center justify-center">
          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            // Random-ish offsets for a scattered look
            const xOffset = (index - skills.length / 2) * 120;
            const yOffset = Math.sin(index) * 100;

            // Scroll-based movement: Finish at 0.5 (center of screen) and stay there
            const initialX = isLeft ? -500 : 500;
            const x = useTransform(smoothProgress, [0, 0.5, 1], [initialX, xOffset, xOffset]);
            const opacity = useTransform(smoothProgress, [0, 0.2, 0.5, 1], [0, 0.5, 1, 1]);
            const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 1]);
            const rotate = useTransform(smoothProgress, [0, 0.5, 1], [isLeft ? -20 : 20, 0, 0]);

            return (
              <motion.div
                key={skill.name}
                style={{
                  x,
                  y: yOffset,
                  opacity,
                  scale,
                  rotate: skill.rotate ? 0 : rotate,
                  position: "absolute",
                }}
                className="group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center gap-4">
                  <motion.div
                    animate={!skill.rotate ? { y: [0, -10, 0] } : {}}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-teal-900/10 border border-slate-200 dark:border-slate-800 p-5 group-hover:border-teal-400/50 transition-colors duration-300"
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      animate={skill.rotate ? { rotate: 360 } : {}}
                      transition={skill.rotate ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  {/* <motion.span
                    className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest 
             opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
             transition-all duration-300"
                  >
                    {skill.name}
                  </motion.span>
                </div>
              </motion.div> */}
                  <motion.span
                    className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest 
           opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                  >
                    {skill.name}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
