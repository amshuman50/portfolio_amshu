'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
// import { Github, Linkedin } from "lucide-react";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { motion } from 'framer-motion';

type SocialClicks = {
  github: string;
  linkedin: string;
  instagram: string;
};

export function Footer() {
  const [visitors, setVisitors] = useState<string>("-");
  const [socialClicks, setSocialClicks] = useState<SocialClicks>({
    github: "-",
    linkedin: "-",
    instagram: "-",
  });

  useEffect(() => {
    // Track visitor on page load (only once per session)
    const trackVisitor = async () => {
      try {
        await fetch('/api/visit', {
          method: 'POST',
        });
      } catch (error) {
        console.error('Failed to track visitor:', error);
      }
    };

    // Fetch the current stats
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          setVisitors(data.visitors || 0);
          setSocialClicks({
            github: data.github_clicks || 0,
            linkedin: data.linkedin_clicks || 0,
            instagram: data.instagram_clicks || 0,
          });
        } else {
          console.error('/api/stats returned', response.status);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    trackVisitor();
    fetchStats();
  }, []);

  const handleSocialClick = async (platform: 'github' | 'linkedin' | 'instagram') => {
    try {
      const response = await fetch(`/api/click?type=${platform}`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setSocialClicks((prev) => ({
          ...prev,
          [platform]: data.clicks,
        }));
      }
    } catch (error) {
      console.error(`Failed to track ${platform} click:`, error);
    }
  };

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center gap-4 py-8">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
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
                onClick={() => handleSocialClick('github')}
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <span className="text-xs text-muted-foreground/60 mt-1">
              {socialClicks.github}
            </span>
          </div>

          <div className="flex flex-col items-center">
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
                onClick={() => handleSocialClick('linkedin')}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <span className="text-xs text-muted-foreground/60 mt-1">
              {socialClicks.linkedin}
            </span>
          </div>

          <div className="flex flex-col items-center">
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
                onClick={() => handleSocialClick('instagram')}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <span className="text-xs text-muted-foreground/60 mt-1">
              {socialClicks.instagram}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amshu Man Maharjan. All rights reserved.
        </p>

          <div className="flex items-center gap-2  text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              {/* <Heart size={12} className="fill-red-500 text-red-500" /> */}
              ❤️
            </motion.div>
            <span>using Next.js & Tailwind</span>
          </div>
        <p className="text-xs text-muted-foreground/70">
          ✨ Visitors: {visitors}
        </p>
      </div>
    </footer>
  );
} 