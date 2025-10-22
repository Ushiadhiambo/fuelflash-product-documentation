"use client"
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#2a1e36] via-[#3d2a4e] to-[#2a1e36] border-b border-[#d47f43]/20 shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          {/* <img src="/images/logo.png" alt="FuelFlash Logo" className="w-12 h-12" /> */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f9c784] via-[#d47f43] to-[#f9c784] bg-clip-text text-transparent">
            FuelFlash
          </h1>
        </div>
        <p className="text-center text-lg md:text-xl text-[#d47f43] font-medium">
          Product Requirement Documentation
        </p>
      </div>
    </header>
  );
}

