"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {Button} from "@/components/ui/button";
import {Hexagon, Menu, X} from "lucide-react";
import {useState, useEffect} from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Stop button bounce after 5 seconds
    const bounceTimer = setTimeout(() => {
      setIsBouncing(false);
    }, 5000);

    // Cleanup timer on component unmount
    return () => {
      clearTimeout(bounceTimer);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-background px-6 py-6 lg:px-12">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 bg-primary rounded-sm flex items-center justify-center">
              <Hexagon className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground leading-tight">
                TECHXAGON
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                ACADEMY
              </span>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                The Team
              </Link>
            </li>
          </ul>

          {/* Desktop Continue Button */}
          <Button
            asChild
            size="sm"
            className={`hidden md:flex bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors ${isBouncing ? "animate-bounce" : ""}`}>
            <Link href="/login">
              Continue →
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-black/95 border-b border-border shadow-lg animate-fade-in z-[1001]">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/');
                }}
                className="text-sm font-black text-white bg-orange-500 hover:bg-orange-600 transition-colors block drop-shadow-sm text-left w-full rounded py-3">
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/about');
                }}
                className="text-sm font-black text-white bg-orange-500 hover:bg-orange-600 transition-colors block drop-shadow-sm text-left w-full rounded py-3">
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/contact');
                }}
                className="text-sm font-black text-white bg-orange-500 hover:bg-orange-600 transition-colors block drop-shadow-sm text-left w-full rounded py-3">
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/team');
                }}
                className="text-sm font-black text-white bg-orange-500 hover:bg-orange-600 transition-colors block drop-shadow-sm text-left w-full rounded py-3">
                The Team
              </button>
            </li>
            <li>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/login');
                }}>
                Continue →
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
