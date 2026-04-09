import React from 'react';
import Link from 'next/link';
import { sqlLessons } from './content';

export default function SqlMenu() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">INF.03</span>
            <span className="text-gray-600">/</span>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">SQL</span>
          </div>
          <h1 className="text-5xl font-black text-white tracking-tighter italic">Bazy Danych</h1>
        </header>

        <div className="grid gap-4">
          {sqlLessons.map((lesson) => (
            <Link 
              key={lesson.id} 
              href={`/inf03/sql/${lesson.id}`}
              className="group bg-gray-900/40 border border-gray-800 p-6 rounded-2xl flex justify-between items-center hover:border-cyan-500/50 hover:bg-gray-800/40 transition-all shadow-xl"
            >
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{lesson.title}</h2>
                <p className="text-gray-400 mt-1">{lesson.description}</p>
              </div>
              <div className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2 text-2xl">→</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}