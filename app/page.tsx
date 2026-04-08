import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans p-6 md:p-12 flex justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-10 mb-4">
          Wybierz swój kierunek
        </h1>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl">
          Materiały, teoria i zadania praktyczne przygotowujące do egzaminów zawodowych.
        </p>

        {/* Siatka z dwoma głównymi przyciskami */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* KARTA 1: Technik Informatyk */}
          <Link 
            href="/informatyk" 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center group"
          >
            <span className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-3">Technikum</span>
            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Technik Informatyk</h2>
            <p className="text-gray-400">Kwalifikacje: INF.02 oraz INF.03</p>
          </Link>

          {/* KARTA 2: Technik Programista */}
          <Link 
            href="/programista" 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center group"
          >
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-3">Technikum</span>
            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Technik Programista</h2>
            <p className="text-gray-400">Kwalifikacje: INF.03 oraz INF.04</p>
          </Link>

        </div>
      </div>
    </div>
  );
}