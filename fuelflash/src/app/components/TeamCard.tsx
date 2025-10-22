"use client"
interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#2a1e36] to-[#3d2a4e] rounded-xl overflow-hidden border border-[#d47f43]/20 shadow-lg hover:shadow-2xl hover:shadow-[#d47f43]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d47f43]/0 to-[#f9c784]/0 group-hover:from-[#d47f43]/10 group-hover:to-[#f9c784]/10 transition-all duration-300" />
      
      <div className="relative p-6">
        <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#d47f43]/10 to-[#f9c784]/10 border border-[#d47f43]/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#f9c784] mb-1">{name}</h3>
          <p className="text-[#d47f43] text-sm font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}
