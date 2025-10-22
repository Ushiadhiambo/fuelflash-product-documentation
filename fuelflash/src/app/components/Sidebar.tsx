"use client"
import { FileText } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
}

export default function Sidebar({ sections, activeSectionId }: SidebarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <nav className="sticky top-24 bg-gradient-to-br from-[#2a1e36] to-[#3d2a4e] rounded-xl border border-[#d47f43]/20 shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#d47f43]/20">
          <FileText className="w-5 h-5 text-[#d47f43]" />
          <h3 className="font-semibold text-[#f9c784]">Contents</h3>
        </div>
        
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSectionId === section.id
                    ? 'bg-gradient-to-r from-[#d47f43] to-[#f9c784] text-[#2a1e36] font-medium shadow-md'
                    : 'text-foreground/70 hover:text-[#f9c784] hover:bg-[#d47f43]/10'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
