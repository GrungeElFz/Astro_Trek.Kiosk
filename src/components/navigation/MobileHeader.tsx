import React from "react";

interface MobileHeaderProps {
  title: string;
}

export function MobileHeader({ title }: MobileHeaderProps) {
  return (
    <header
      id="mobile-header"
      className="lg:hidden absolute top-0 left-0 right-0 z-50 bg-black backdrop-blur-xl"
    >
      <div className="w-full flex h-12 items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="src/assets/logo.svg" alt="Trek Logo" className="h-3" />
        </a>

        {/* Page Title */}
        <div className="flex items-center">
          <h1 className="text-sm font-bold uppercase tracking-wider text-white">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
