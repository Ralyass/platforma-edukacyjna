import React from 'react';
import Link from 'next/link';

export default function Inf04Page() {
  const tematyINF04 = [
    { id: 'csharp', nazwa: 'Programowanie C#', symbol: 'C#', colorClass: 'from-purple-600', textClass: 'group-hover:text-purple-400', dotClass: 'bg-purple-500 shadow-[0_0_8px_purple]' },
    { id: 'react', nazwa: 'Framework REACT', symbol: 're', colorClass: 'from-cyan-600', textClass: 'group-hover:text-cyan-400', dotClass: 'bg-cyan-500 shadow-[0_0_8px_cyan]' },
    { id: 'maui', nazwa: 'Aplikacje MAUI', symbol: 'M', colorClass: 'from-violet-600', textClass: 'group-hover:text-violet-400', dotClass: 'bg-violet-500 shadow-[0_0_8px_violet]' },
    { id: 'wpf', nazwa: 'Aplikacje WPF', symbol: 'wpf', colorClass: 'from-blue-600', textClass: 'group-hover:text-blue-400', dotClass: 'bg-blue-500 shadow-[0_0_8px_blue]' },
    { id: 'dokumentacja', nazwa: 'Dokumentacja', symbol: 'doc', colorClass: 'from-gray-600', textClass: 'group-hover:text-gray-300', dotClass: 'bg-gray-400 shadow-[0_0_8px_gray]' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center">
      <div className="max-w-5xl w-full">
        <Link href="/programista" className="text-gray-500 hover:text-white mb-6 inline-block">← Powrót</Link>
        <h1 className="text-4xl font-bold text-white mb-2">Kwalifikacja INF.04</h1>
        <p className="text-gray-400 mb-10">Wybierz moduł nauki:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans not-italic">
          {tematyINF04.map((t) => (
            <Link 
              key={t.id} 
              href={`/inf04/${t.id}`} 
              className="relative group block p-px rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Dynamiczna poświata */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.colorClass} to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

              {/* Wnętrze karty */}
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-[15px] p-8 h-full flex flex-col items-center justify-center transition-all group-hover:border-gray-700 shadow-xl">
                
                {/* Symbol technologii */}
                <div className={`text-3xl font-mono mb-4 text-gray-600 transition-colors duration-300 ${t.textClass}`}>
                  {t.symbol}
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