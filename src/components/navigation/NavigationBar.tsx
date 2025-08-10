import React from "react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

export function NavigationBar() {
  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  return (
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between rounded-full bg-black/30 backdrop-blur-md shadow-lg overflow-hidden">
        {/* Button: Back */}
        <button
          onClick={handleBack}
          className="flex flex-col items-center justify-center gap-1 p-4 text-gray-300 transition-colors hover:text-white min-w-[80px]"
          aria-label="Go to previous page"
        >
          <ChevronLeft className="ChevronRight-6 w-6" />
          <span className="text-xs font-bold uppercase">Back</span>
        </button>

        <div className="h-6 w-0.5 bg-gray-400/50" />

        {/* Button: Home */}
        <a
          href="/"
          className="flex flex-col items-center justify-center gap-1 p-4 text-gray-300 transition-colors hover:text-white min-w-[80px]"
          aria-label="Go to homepage"
        >
          <Home className="h-6 w-6" />
          <span className="text-xs font-bold uppercase">Home</span>
        </a>

        <div className="h-6 w-0.5 bg-gray-400/50" />

        {/* Button: Forward */}
        <button
          onClick={handleForward}
          className="flex flex-col items-center justify-center gap-1 p-4 text-gray-300 transition-colors hover:text-white min-w-[80px]"
          aria-label="Go to next page"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="text-xs font-bold uppercase">Forward</span>
        </button>
      </div>
    </footer>
  );
}
