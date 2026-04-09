import React from 'react';
import Link from 'next/link';
import { reactLessons } from './content';

export default function ReactMenuPage() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center">
      <div className="max-w-4xl w-full">
        
        {/* Nawigacja okruszkowa (Breadcrumbs) */}
        <div className="flex gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">
          <Link href="/" className="hover:text-white transition-colors">Główna</Link>
          <span>/</span>
          <Link href="/programista" className="hover:text-white transition-colors">Programista</Link>
          <span>/</span>
          <Link href="/inf04" className="hover:text-white transition-colors">INF.04</Link>
        </div>

        <header className="mb-12">
          <h1 className="text-5xl font-black text-white mb-4">Kurs Frameworka React</h1>
          <p className="text-gray-400 text-xl">Wybierz lekcję, aby rozpocząć naukę.</p>
        </header>

        {/* Lista lekcji wyciągnięta z content.ts */}
        <div className="grid gap-4">
          {reactLessons.map((lesson) => (
            <Link 
              key={lesson.id} 
              href={`/inf04/react/${lesson.id}`}
              className="group bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex justify-between items-center hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all shadow-lg shadow-black/20"
            >
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {lesson.title}
                </h2>
                <p className="text-gray-400 mt-1">{lesson.description}</p>
              </div>
              <div className="bg-gray-950 h-10 w-10 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-cyan-500/50 transition-all text-cyan-500">
                →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}