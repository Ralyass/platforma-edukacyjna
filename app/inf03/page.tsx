import React from 'react';
import Link from 'next/link';

export default function Inf03Menu() {
const tematy = [
  { id: 'sql', nazwa: 'Bazy Danych (SQL)', colorClass: 'from-cyan-600', textClass: 'group-hover:text-cyan-400', dotClass: 'bg-cyan-500 shadow-[0_0_8px_cyan]' },
  { id: 'html-css', nazwa: 'HTML & CSS', colorClass: 'from-orange-600', textClass: 'group-hover:text-orange-400', dotClass: 'bg-orange-500 shadow-[0_0_8px_orange]' },
  { id: 'js', nazwa: 'JavaScript', colorClass: 'from-yellow-500', textClass: 'group-hover:text-yellow-400', dotClass: 'bg-yellow-400 shadow-[0_0_8px_yellow]' },
  { id: 'php', nazwa: 'Programowanie PHP', colorClass: 'from-indigo-600', textClass: 'group-hover:text-indigo-400', dotClass: 'bg-indigo-500 shadow-[0_0_8px_indigo]' },
  { id: 'gimp', nazwa: 'Grafika (GIMP)', colorClass: 'from-emerald-600', textClass: 'group-hover:text-emerald-400', dotClass: 'bg-emerald-500 shadow-[0_0_8px_emerald]' },
];

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center text-white italic">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-black mb-10 text-center uppercase tracking-tighter">Kwalifikacja INF.03 - Tematy</h1>
        
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans not-italic">
        {tematy.map((t) => (
            <Link 
            key={t.id} 
            href={`/inf03/${t.id}`} 
            className="relative group block p-px rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
            {/* Dynamiczna poświata - TERAZ DZIAŁA */}
            <div className={`absolute inset-0 bg-gradient-to-br ${t.colorClass} to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

            {/* Wnętrze karty */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-[15px] p-8 h-full flex flex-col items-center justify-center transition-all group-hover:border-gray-700 shadow-xl">
                
                <div className={`text-4xl mb-4 text-gray-600 transition-colors duration-300 ${t.textClass}`}>
                {t.id === 'sql' && 'db'}
                {t.id === 'html-css' && '</>'}
                {t.id === 'js' && 'js'}
                {t.id === 'php' && 'php'}
                {t.id === 'gimp' && 'px'}
                </div>

                <h2 className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors tracking-tight text-center">
                {t.nazwa}
                </h2>
                
                {/* Kropka statusu */}
                <div className={`mt-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${t.dotClass}`}></div>
            </div>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
}