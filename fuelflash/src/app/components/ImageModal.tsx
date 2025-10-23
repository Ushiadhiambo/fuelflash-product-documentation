"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

export default function ImageModal({ imageSrc, onClose }: ImageModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  useEffect(() => {
    setImgError(false); // Reset error state on new imageSrc
  }, [imageSrc]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-[#2a1e36] hover:bg-[#d47f43] text-white rounded-full transition-colors duration-200 shadow-lg"
        aria-label="Close image modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {!imgError && imageSrc ? (
          <img
            src={imageSrc}
            alt="Enlarged diagram"
            className="object-contain max-w-full max-h-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <p className="text-white text-center">Image not found</p>
        )}
      </div>
    </div>
  );
}
