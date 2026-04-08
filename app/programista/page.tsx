import React from 'react';
import Link from 'next/link';

export default function ProgramistaPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans p-6 md:p-12 flex justify-center">
      <div className="max-w-5xl w-full">
        
        {/* Przycisk powrotu */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <span className="mr-2">←</span> Powrót do wyboru kierunku
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Technik Programista</h1>
          <p className="text-lg text-gray-400">Wybierz kwalifikację, której chcesz się uczyć.</p>
        </div>

        {/* Siatka kwalifikacji */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* PANEL INF.03 */}
          <Link 
            href="/inf03" 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all group"
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Kwalifikacja INF.03</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych.
            </p>
            <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Tematy w module:</span>
              <span className="text-sm text-blue-300 font-medium">SQL, HTML, CSS, JS, PHP, GIMP</span>
            </div>
          </Link>

          {/* PANEL INF.04 */}
          <Link 
            href="/inf04" 
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:border-emerald-500/50 hover:bg-gray-800 transition-all group"
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Kwalifikacja INF.04</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Projektowanie, programowanie i testowanie aplikacji komputerowych, webowych oraz mobilnych.
            </p>
            <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Tematy w module:</span>
              <span className="text-sm text-emerald-300 font-medium">C#, React, MAUI, WPF, Dokumentacja</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}