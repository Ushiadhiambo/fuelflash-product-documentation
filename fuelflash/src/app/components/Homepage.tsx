"use client";
import { useState } from "react";

interface HomepageProps {
  onViewDocs: () => void; 
}

export default function Homepage({ onViewDocs }: HomepageProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewDocsClick = () => {
    setIsLoading(true);
    if (onViewDocs) onViewDocs(); 
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a1e36] via-[#1a1423] to-[#0f0a15] text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d47f43]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f9c784]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-[#f9c784] to-[#d47f43] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                RW
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#f9c784] via-[#d47f43] to-[#f9c784] bg-clip-text text-transparent leading-tight">
            Welcome to Fuel<span className="text-[#d47f43]">Flash</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#d47f43] font-medium leading-relaxed">
            Your gateway to instant SMS fuel price alerts across Rwanda!
          </p>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how FuelFlash empowers Rwandan consumers and businesses with
            real-time fuel price updates. Click below to explore the full
            documentation and learn more about our features, system, and usage.
          </p>

          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/50 to-[#d47f43]/20 rounded-2xl border-2 border-[#d47f43]/30 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-bold text-[#f9c784] tracking-wider">
              Dial *384*33121#
            </p>
            <p className="text-sm text-[#d47f43]/70 mt-2">
              On any phone - No internet needed
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleViewDocsClick}
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-[#f9c784] to-[#d47f43] text-[#2a1e36] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Explore Documentation"}
            </button>
          </div>

          
          <div className="mt-16 pt-12 border-t border-[#d47f43]/20">
            <p className="text-[#d47f43]/60">
              Made with love for Rwanda |{" "}
              <span className="text-[#f9c784]">support@fuelflash.rw</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}