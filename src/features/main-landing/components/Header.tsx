"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HeaderLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo_agendamento.svg"
              alt="AgendeFácil"
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#funcionalidades"
              className="text-neutral-700 hover:text-brand-main transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#sobre"
              className="text-neutral-700 hover:text-brand-main transition-colors"
            >
              Sobre
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="#funcionalidades"
                className="block text-neutral-700 hover:text-brand-main transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a
                href="#sobre"
                className="block text-neutral-700 hover:text-brand-main transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
