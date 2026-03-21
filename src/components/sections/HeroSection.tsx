// import { Button } from "@/components/ui/button";
'use client';
import { motion } from "motion/react";
import { Code2, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    // <section id="home" className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
    // <section id="home" className="min-h-screen bg-[#030712] text-slate-100 selection:bg-teal-500/30 overflow-hidden font-sans">
    <section id="home" className="bg-[#030712] text-slate-100 selection:bg-teal-500/30 overflow-hidden font-sans">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I am Amshu Man Maharjan
            </h1>
            <h2 className="text-2xl mb-4">
              Web Developer
            </h2>
            <p className="mb-6">
              I create beautiful and functional web applications using modern technologies.
            </p>
          </div> */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Sparkles size={14} /> Available for new projects
              </span>

              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:leading-[1.1]">
                Amshu Man <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
                  Maharjan
                </span>
              </h1>

              {/* <h2 className="mb-6 text-xl font-medium text-slate-300 md:text-2xl">
                Web Developer & <span className="italic text-slate-400 font-serif">UI/UX Enthusiast</span>
              </h2> */}
              <h2 className="mb-6 text-xl font-medium text-slate-300 md:text-2xl">
                Web Developer
              </h2>

              <p className="max-w-xl mb-10 text-lg leading-relaxed text-slate-400 mx-auto lg:mx-0">
                I create beautiful and functional web applications using modern technologies.
                Specializing in building high-performance, accessible, and user-centric digital experiences.
              </p>

              {/* CTA Buttons */}
              {/* <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-2 px-8 py-4 font-bold text-white transition-all rounded-full bg-gradient-to-r from-teal-500 to-blue-600 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
              >
                View Projects
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 font-bold text-slate-200 transition-all border rounded-full border-white/10 bg-white/5 hover:bg-white/10"
              >
                Contact Me
                <Mail size={18} />
              </motion.button>
            </div> */}


            </motion.div>
          </div>
          {/* <div className="relative h-80 w-80 mx-auto">
            <Image
              src="/og-image.png"
              alt="Profile Picture"
              fill
              sizes="full"
              className="rounded-full object-cover"
              priority
            />
          </div> */}
          <div className="relative flex-1 mt-20 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-72 h-72 md:w-96 md:h-96"
            >
              {/* Main Profile Image Container */}
              <div className="relative z-20 w-full h-full overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_50px_rgba(20,184,166,0.2)]">
                <img
                  src="/og-image.png"
                  alt="Amshu Man Maharjan"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Floating Elements (Glassmorphism) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-30 top-0 -right-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/20">
                    <Code2 size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Expertise</p>
                    <p className="text-sm font-bold text-white">React & Next.js</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-30 bottom-10 -left-10 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Rocket size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Experience</p>
                    <p className="text-sm font-bold text-white">2+ Years</p>
                  </div>
                </div>
              </motion.div>

              {/* Background Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full z-0 opacity-50" />

              {/* Rotating Orbit Dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] z-10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_#2dd4bf]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 