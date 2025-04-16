import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get In Touch
        </h2>
        <div className="max-w-md mx-auto">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
} 