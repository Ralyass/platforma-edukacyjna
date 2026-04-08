import React from 'react';
import TaskCard from '@/components/TaskCard'; // Używamy @ jako skrótu do głównego folderu
import Link from 'next/link';

export default function ReactLesson() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex justify-center text-white">
      <div className="max-w-3xl w-full">
        <Link href="/inf04" className="text-gray-500 hover:text-white mb-6 inline-block">← Powrót do tematów</Link>
        
        <header className="mb-10">
          <span className="text-cyan-400 font-mono text-sm">INF.04 / REACT</span>
          <h1 className="text-4xl font-black mt-2">Wprowadzenie do komponentów</h1>
        </header>

        <section className="prose prose-invert max-w-none mb-10">
          <p className="text-gray-300 text-lg leading-relaxed">
            React to biblioteka, która pozwala budować UI z małych, niezależnych części zwanych <strong>komponentami</strong>.
          </p>
        </section>

        {/* Używamy Twojego komponentu! */}
        <TaskCard 
          title="Twoje pierwsze zadanie z Reacta"
          tasks={[
            "Zainstaluj rozszerzenie ES7+ React Snippets w VS Code",
            "Stwórz komponent Functional Component (rfc)",
            "Wyświetl napis 'Hello World'"
          ]}
          downloadUrl="#"
        />
      </div>
    </div>
  );
}