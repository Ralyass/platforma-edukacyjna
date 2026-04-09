import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full bg-gray-950 text-gray-100 font-sans flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      
      {/* DEKORACYJNE TŁA (BLUR) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      {/* GŁÓWNY KONTENER TREŚCI */}
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        {/* NAGŁÓWEK */}
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            Wybierz swój kierunek
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Materiały, teoria i zadania praktyczne przygotowujące do egzaminów zawodowych.
          </p>
        </header>

        {/* SIATKA KART */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl px-4">
          
          {/* KARTA 1: TECHNIK INFORMATYK */}
          <Link 
            href="/informatyk" 
            className="relative group block p-px rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.3)]"
          >
            {/* Neonowy Glow pod spodem */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-600 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

            {/* Wnętrze karty */}
            <div className="relative bg-gray-900 border border-gray-800 rounded-[23px] p-8 md:p-12 flex flex-col items-center text-center h-full z-10 transition-colors group-hover:border-blue-500/50">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                Technikum
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-none group-hover:text-blue-300 transition-colors">
                Technik Informatyk
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Kwalifikacje: <span className="text-gray-200 font-medium">INF.02</span> oraz <span className="text-gray-200 font-medium">INF.03</span>
              </p>
              <div className="mt-8 text-blue-500 text-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </div>
            </div>
          </Link>

          {/* KARTA 2: TECHNIK PROGRAMISTA */}
          <Link 
            href="/programista" 
            className="relative group block p-px rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.3)]"
          >
            {/* Neonowy Glow pod spodem */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-600 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

            {/* Wnętrze karty */}
            <div className="relative bg-gray-900 border border-gray-800 rounded-[23px] p-8 md:p-12 flex flex-col items-center text-center h-full z-10 transition-colors group-hover:border-emerald-500/50">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                Technikum
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-none group-hover:text-emerald-300 transition-colors">
                Technik Programista
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Kwalifikacje: <span className="text-gray-200 font-medium">INF.03</span> oraz <span className="text-gray-200 font-medium">INF.04</span>
              </p>
              <div className="mt-8 text-emerald-500 text-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}