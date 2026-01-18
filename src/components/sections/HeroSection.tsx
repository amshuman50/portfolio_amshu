import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I am Amshu Man Maharjan
            </h1>
            <h2 className="text-2xl mb-4">
              Web Developer
            </h2>
            <p className="mb-6">
              I create beautiful and functional web applications using modern technologies.
            </p>
            <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-100">
              View My Work
            </Button>
          </div>
          <div className="relative h-80 w-80 mx-auto">
            <Image
              src="/og-image.png"
              alt="Profile Picture"
              fill
              sizes="full"
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 