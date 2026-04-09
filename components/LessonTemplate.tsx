"use client";
import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, ChevronRight } from 'lucide-react'; // npm install lucide-react

interface LessonProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    teoria: string;
    przyklad: string;
    zadanie: string[];
    downloadUrl?: string;
  };
  nextLesson?: { id: string; title: string } | null;
}

export default function LessonTemplate({ lesson, nextLesson }: LessonProps) {
  const [activeTab, setActiveTab] = useState<'teoria' | 'przyklad' | 'zadanie'>('teoria');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(lesson.przyklad);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <header className="mb-10 text-left w-full">
        <h1 className="text-5xl font-black text-white italic tracking-tighter mb-4 text-left leading-tight">
          {lesson.title}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          {lesson.description}
        </p>
      </header>

      {/* ZAKŁADKI */}
      <div className="flex gap-10 border-b border-gray-900 mb-10">
        {(['teoria', 'przyklad', 'zadanie'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${
              activeTab === tab ? 'text-cyan-400' : 'text-gray-500 hover:text-white'
            }`}
          >
            {tab === 'teoria' ? 'Teoria' : tab === 'przyklad' ? 'Przykład' : 'Zadania'}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[300px] text-gray-300">
        {activeTab === 'teoria' && (
          <div className="prose prose-invert max-w-none text-lg leading-relaxed whitespace-pre-wrap">
            {lesson.teoria}
          </div>
        )}

        {activeTab === 'przyklad' && (
          <div className="relative group rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <div className="absolute right-4 top-4 z-10">
              <button 
                onClick={handleCopy}
                className="p-2 bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>
            <SyntaxHighlighter 
              language="javascript" 
              style={atomDark}
              customStyle={{ margin: 0, padding: '2rem', background: '#0a0a0a', fontSize: '0.9rem' }}
            >
              {lesson.przyklad}
            </SyntaxHighlighter>
          </div>
        )}

        {activeTab === 'zadanie' && (
          <TaskCard title="Do wykonania" tasks={lesson.zadanie} downloadUrl={lesson.downloadUrl} />
        )}
      </div>

      {/* 4. NAWIGACJA: NASTĘPNA LEKCJA */}
      {nextLesson && (
        <div className="mt-20 pt-10 border-t border-gray-900">
          <a 
            href={nextLesson.id}
            className="group flex flex-col items-end text-right"
          >
            <span className="text-gray-500 text-xs uppercase tracking-widest mb-2">Następna lekcja</span>
            <div className="flex items-center gap-4 text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
              {nextLesson.title}
              <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
        </div>
      )}
    </div>
  );
}