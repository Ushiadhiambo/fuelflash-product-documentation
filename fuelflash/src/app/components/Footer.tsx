"use client"
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2a1e36] via-[#3d2a4e] to-[#2a1e36] border-t border-[#d47f43]/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} FuelFlash. All rights reserved.
          </p>
          
          <a
            href="https://fuelflash.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#d47f43] hover:text-[#f9c784] transition-colors duration-200 group"
          >
            <span className="text-sm font-medium">Visit FuelFlash</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}
