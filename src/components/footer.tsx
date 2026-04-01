'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Eye, LucideIcon } from "lucide-react";
import { motion } from 'framer-motion';

/* ================= TYPES ================= */

type Platform = 'github' | 'linkedin' | 'instagram';

type SocialClicks = {
  github: number;
  linkedin: number;
  instagram: number;
};

type SocialItem = {
  icon: LucideIcon;
  link: string;
  key: Platform;
};

/* ================= DATA ================= */

const socialItems: SocialItem[] = [
  {
    icon: Github,
    link: "https://github.com/amshuman50",
    key: "github",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/amshu-maharjan-0857032a8/",
    key: "linkedin",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/amshumaharjan/",
    key: "instagram",
  },
];

/* ================= COMPONENT ================= */

export function Footer() {
  const [visitors, setVisitors] = useState<number>(0);
  const [socialClicks, setSocialClicks] = useState<SocialClicks>({
    github: 0,
    linkedin: 0,
    instagram: 0,
  });

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch('/api/visit', { method: 'POST' });
      } catch (error) {
        console.error('Failed to track visitor:', error);
      }
    };

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

  const handleSocialClick = async (platform: Platform) => {
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

        {/* LEFT */}
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
              ❤️
            </motion.div>

            <span>using Next.js & Tailwind</span>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
          <Eye size={18} />
          <span>{visitors} Visitors</span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          {socialItems.map(({ icon: Icon, link, key }) => (
            <div key={key} className="flex flex-col items-center">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition"
                  onClick={() => handleSocialClick(key)}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>

              <span className="text-xs text-muted-foreground/60 mt-1">
                {socialClicks[key]}
              </span>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}