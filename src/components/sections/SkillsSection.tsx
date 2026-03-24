'use client';
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { MotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type Skill = {
  name: string;
  icon: string;
  color: string;
  rotate?: boolean;
};

type SkillItemProps = {
  skill: Skill;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
};

const skills: Skill[] = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "blue" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "blue" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "orange" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "blue" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "yellow" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "blue" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "blue" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan", rotate: true },
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
    restDelta: 0.001,
  });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white"
          >
            Tech Stack <span className="text-teal-400">&</span> Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit of technologies I use to bring ideas to life.
          </motion.p>
        </div>

        {/*  MOBILE GRID */}
        <div className="grid grid-cols-3 gap-6 md:hidden">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl shadow border p-3">
                <Image src={skill.icon} alt={skill.name} className="w-full h-full object-contain" fill/>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/*  DESKTOP ANIMATION */}
        <div className="hidden md:flex relative min-h-[600px] items-center justify-center">
          {skills.map((skill, index) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              index={index}
              total={skills.length}
              smoothProgress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill, index, smoothProgress, total }: SkillItemProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const isLeft = index % 2 === 0;

  //  Responsive values
  const spread = isMobile ? 60 : 120;
  const vertical = isMobile ? 40 : 100;
  const startX = isMobile ? 150 : 500;

  const xOffset = (index - total / 2) * spread;
  const yOffset = Math.sin(index) * vertical;
  const initialX = isLeft ? -startX : startX;

  const x = useTransform(smoothProgress, [0, 0.5, 1], [initialX, xOffset, xOffset]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5, 1], [0, 0.5, 1, 1]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1, 1]);
  const rotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [isLeft ? -20 : 20, 0, 0]
  );

  return (
    <motion.div
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
      {/* Glow */}
      <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative flex flex-col items-center gap-3">
        <motion.div
          animate={!skill.rotate ? { y: [0, -10, 0] } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
          className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl border p-4"
        >
          <motion.img
            src={skill.icon}
            alt={skill.name}
            animate={skill.rotate ? { rotate: 360 } : {}}
            transition={
              skill.rotate
                ? { duration: 10, repeat: Infinity, ease: "linear" }
                : {}
            }
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition duration-500"
          />
        </motion.div>

        <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}