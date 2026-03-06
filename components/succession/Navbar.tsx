"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PublicNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-parchment-dark bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-walnut tracking-tight">Succession</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-secondary-foreground hover:text-walnut transition-colors">About</Link>
          <Link href="/pricing" className="text-sm font-medium text-secondary-foreground hover:text-walnut transition-colors">Pricing</Link>
          <Link href="/login" className="text-sm font-medium text-walnut hover:underline">Sign In</Link>
          <Button asChild className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold px-6 py-3">
            <Link href="/signup">Get Started →</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden text-walnut"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-parchment-dark px-8 py-6 flex flex-col gap-4">
          <Link href="/about" className="text-sm font-medium text-secondary-foreground" onClick={() => setOpen(false)}>About</Link>
          <Link href="/pricing" className="text-sm font-medium text-secondary-foreground" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/login" className="text-sm font-medium text-walnut" onClick={() => setOpen(false)}>Sign In</Link>
          <Button asChild className="bg-walnut hover:bg-walnut-hover text-cream uppercase tracking-wide text-xs font-semibold w-full">
            <Link href="/signup" onClick={() => setOpen(false)}>Get Started →</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

export function AppNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-parchment-dark bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-walnut tracking-tight">Succession</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/dashboard" className="text-sm font-medium text-secondary-foreground hover:text-walnut transition-colors">Dashboard</Link>
          <Link href="/session/new" className="text-sm font-medium text-secondary-foreground hover:text-walnut transition-colors">Sessions</Link>
          <Link href="/document" className="text-sm font-medium text-secondary-foreground hover:text-walnut transition-colors">Document</Link>
          <div className="relative group">
            <button className="text-sm font-medium text-secondary-foreground hover:text-walnut transition-colors flex items-center gap-1">
              Account ▾
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-parchment-dark rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-secondary-foreground hover:bg-surface-warm">Profile</Link>
                <Link href="/pricing" className="block px-4 py-2 text-sm text-secondary-foreground hover:bg-surface-warm">Billing</Link>
                <Link href="/login" className="block px-4 py-2 text-sm text-secondary-foreground hover:bg-surface-warm">Sign out</Link>
              </div>
            </div>
          </div>
        </div>

        <button className="md:hidden text-walnut" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-parchment-dark px-8 py-4 flex flex-col gap-4">
          <Link href="/dashboard" className="text-sm font-medium" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link href="/session/new" className="text-sm font-medium" onClick={() => setOpen(false)}>Sessions</Link>
          <Link href="/document" className="text-sm font-medium" onClick={() => setOpen(false)}>Document</Link>
          <Link href="/login" className="text-sm font-medium text-walnut" onClick={() => setOpen(false)}>Sign out</Link>
        </div>
      )}
    </nav>
  );
}
