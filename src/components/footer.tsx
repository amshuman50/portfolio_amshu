'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Instagram, Heart, Eye } from "lucide-react";
import { Github, Linkedin, Instagram, Eye } from "lucide-react";
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
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 text-center md:text-left">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amshu Man Maharjan. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
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
        </div>

        {/* MIDDLE (VISITORS) */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
          <Eye size={18} />
          <span>{visitors} Visitors</span>
        </div>

        {/* RIGHT SECTION (SOCIALS) */}
        <div className="flex items-center gap-6">
          {[
            {
              icon: Github,
              link: "https://github.com/amshuman50",
              key: "github",
              count: socialClicks.github,
            },
            {
              icon: Linkedin,
              link: "https://www.linkedin.com/in/amshu-maharjan-0857032a8/",
              key: "linkedin",
              count: socialClicks.linkedin,
            },
            {
              icon: Instagram,
              link: "https://www.instagram.com/amshumaharjan/",
              key: "instagram",
              count: socialClicks.instagram,
            },
          ].map(({ icon: Icon, link, key, count }) => (
            <div key={key} className="flex flex-col items-center">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                  onClick={() => handleSocialClick(key as any)}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
              <span className="text-xs text-muted-foreground/60 mt-1">
                {count}
              </span>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
} 