"use client";

import { useEffect } from "react";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { QRSidebar } from "./QRSidebar";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// const navItems = [
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    // Prevent body scroll when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-background transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <span className="font-bold">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="space-y-1 px-2 py-4">
          {/* {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={onClose}
              >
                {item.name}
              </Button>
            </Link>
          ))} */}

          {/* Resume Button */}
          <a
            href="/Amshu%20Man%20Maharjan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <Button variant="ghost" className="w-full justify-start">
              CV
            </Button>
          </a>

          {/* QR Code Dropdown (moved to reusable QRSidebar) */}
          <QRSidebar onClose={onClose} />
        </nav>
      </div>
    </>
  );
}
