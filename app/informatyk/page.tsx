import React from 'react';
import Link from 'next/link';

export default function InformatykPage() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center text-white italic">
      <div className="max-w-5xl w-full">
        <Link href="/" className="text-gray-500 hover:text-white mb-8 inline-block transition-colors">← Powrót</Link>
        
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Technik Informatyk
        </h1>
        <p className="text-gray-400 text-xl mb-12 uppercase tracking-widest">Wybierz kwalifikację</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* INF.02 - Na razie olewamy zgodnie z Twoim planem, ale kafelek zostawiamy */}
          <div className="bg-gray-900/30 border border-gray-800 p-8 rounded-3xl opacity-50 grayscale cursor-not-allowed">
            <h2 className="text-2xl font-bold mb-2 text-gray-500 text-center">INF.02</h2>
            <p className="text-gray-600 italic text-center">Materiały w przygotowaniu...</p>
          </div>

          {/* INF.03 - Linkujemy do wspólnego folderu */}
          <Link href="/inf03" className="bg-gray-900 border border-gray-800 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-gray-800/50 transition-all group shadow-xl">
            <h2 className="text-3xl font-black mb-4 group-hover:text-blue-400">INF.03</h2>
            <p className="text-gray-400 mb-6 font-sans not-italic leading-relaxed">
              Tworzenie stron internetowych, bazy danych, GIMP, PHP i JS.
            </p>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl mt-10">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
                Tematy w module:
            </h4>
            
            <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'PHP', 'GIMP', 'SQL'].map((temat) => (
                <span 
                    key={temat} 
                    className="px-4 py-2 text-sm font-semibold rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all cursor-default"
                >
                    {temat}
                </span>
                ))}
            </div>
        </div>
          </Link>

        </div>
      </div>
    </div>
  );
}