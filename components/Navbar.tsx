"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 italic">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          <span className="text-xl font-black text-white tracking-tighter">EDUKACJA<span className="text-cyan-400">.PRO</span></span>
        </Link>

        {/* PRZYCISK BURGER (widoczny tylko na mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* LINKI DESKTOP */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/informatyk" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Informatyk</Link>
          <Link href="/programista" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Programista</Link>
        </div>
      </div>

      {/* MENU MOBILNE (rozwijane) */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 border-b border-gray-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <Link href="/informatyk" onClick={() => setIsOpen(false)} className="text-gray-300 font-bold">Technik Informatyk</Link>
          <Link href="/programista" onClick={() => setIsOpen(false)} className="text-gray-300 font-bold">Technik Programista</Link>
        </div>
      )}
    </nav>
  );
}