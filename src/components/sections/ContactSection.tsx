import { ContactForm } from "@/components/ContactForm";
import { Toaster } from "react-hot-toast";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get In Touch
        </h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
} 