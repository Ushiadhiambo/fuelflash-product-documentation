"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}

export default function CollapsibleSection({
  id,
  title,
  isExpanded,
  onToggle,
  children,
}: CollapsibleSectionProps) {
  return (
    <section
      id={id}
      className="bg-gradient-to-br from-[#2a1e36] to-[#3d2a4e] rounded-xl border border-[#d47f43]/20 shadow-lg overflow-hidden transition-all duration-300"
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-6 hover:bg-[#d47f43]/5 transition-colors duration-200"
      >
        <h2 className="text-2xl font-bold text-[#f9c784]">{title}</h2>
        <div className="flex-shrink-0 ml-4">
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-[#d47f43]" />
          ) : (
            <ChevronDown className="w-6 h-6 text-[#d47f43]" />
          )}
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 border-t border-[#d47f43]/10">
          {children}
        </div>
      </div>
    </section>
  );
}
