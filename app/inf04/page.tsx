import React from 'react';
import Link from 'next/link';

export default function Inf04Page() {
  const tematy = [
    { id: 'csharp', nazwa: 'Programowanie C#', opis: 'Podstawy języka, klasy, obiekty i logika.', kolor: 'border-purple-500/50' },
    { id: 'react', nazwa: 'Framework REACT', opis: 'Budowanie nowoczesnych interfejsów webowych.', kolor: 'border-cyan-500/50' },
    { id: 'maui', nazwa: 'Aplikacje MAUI', opis: 'Tworzenie aplikacji mobilnych i desktopowych.', kolor: 'border-violet-500/50' },
    { id: 'wpf', nazwa: 'Aplikacje WPF', opis: 'Interfejsy użytkownika w środowisku Windows.', kolor: 'border-blue-500/50' },
    { id: 'dokumentacja', nazwa: 'Dokumentacja', opis: 'Tworzenie specyfikacji i dokumentacji technicznej.', kolor: 'border-gray-500/50' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center">
      <div className="max-w-5xl w-full">
        <Link href="/programista" className="text-gray-500 hover:text-white mb-6 inline-block">← Powrót</Link>
        <h1 className="text-4xl font-bold text-white mb-2">Kwalifikacja INF.04</h1>
        <p className="text-gray-400 mb-10">Wybierz moduł nauki:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tematy.map((t) => (
            <Link key={t.id} href={`/inf04/${t.id}`} className={`bg-gray-900 p-6 rounded-xl border ${t.kolor} hover:bg-gray-800 transition-all group`}>
              <h2 className="text-xl font-bold text-white group-hover:text-white transition-colors">{t.nazwa}</h2>
              <p className="text-gray-400 text-sm mt-2">{t.opis}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}