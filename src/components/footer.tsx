import { Button } from "@/components/ui/button";
// import { Github, Linkedin } from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center gap-4 py-8">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/amshuman50"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/amshu-maharjan-0857032a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href="https://www.instagram.com/amshumaharjan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amshu Man Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 