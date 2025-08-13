import React from "react";
import trekLogo from "@/assets/logo.svg";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header
      id="desktop-header"
      className="hidden lg:flex absolute top-0 left-0 right-0 z-50 bg-black backdrop-blur-md"
    >
      <div className="w-full flex h-12 items-center justify-between px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={trekLogo.src} alt="Trek Logo" className="h-3" />
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
