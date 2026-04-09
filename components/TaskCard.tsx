"use client"; // To jest ważne, bo używamy useState i useEffect

import React, { useState, useEffect } from 'react';

interface TaskCardProps {
  title: string;
  tasks: string[];
  downloadUrl?: string;
}

function TaskCard({ title, tasks, downloadUrl }: TaskCardProps) {
  // Stan przechowujący zaznaczone zadania
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Wczytaj postęp przy starcie
  useEffect(() => {
    const saved = localStorage.getItem(`progress-${title}`);
    if (saved) setCheckedItems(JSON.parse(saved));
  }, [title]);

  // Zapisz postęp przy każdej zmianie
  const handleToggle = (index: number) => {
    const newState = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(newState);
    localStorage.setItem(`progress-${title}`, JSON.stringify(newState));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section className="relative p-px rounded-3xl overflow-hidden bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 shadow-2xl mt-10 group transition-all duration-300">
      <div className="relative bg-gray-950/80 p-8 rounded-[23px] z-10">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
            {title}
          </h2>
          {/* PASEK PROGRESU */}
          <div className="text-right">
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">{completedCount} / {tasks.length} Ukończono</span>
            <div className="w-32 h-1.5 bg-gray-800 rounded-full mt-1 overflow-hidden">
               <div 
                 className="h-full bg-cyan-500 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                 style={{ width: `${(completedCount / tasks.length) * 100}%` }}
               ></div>
            </div>
          </div>
        </div>

        <ul className="space-y-5 text-gray-200 mb-10">
          {tasks.map((taskItem, index) => (
            <li 
              key={index} 
              onClick={() => handleToggle(index)}
              className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${checkedItems[index] ? 'bg-cyan-500/5 border-cyan-500/20' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
            >
              <div className="relative flex items-center justify-center mt-1">
                <div className={`h-6 w-6 rounded-md border-2 transition-all flex items-center justify-center ${checkedItems[index] ? 'bg-cyan-500 border-cyan-500 scale-110' : 'border-gray-600 bg-gray-900'}`}>
                  {checkedItems[index] && (
                    <svg className="w-4 h-4 text-gray-950 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className={`text-base leading-relaxed transition-all ${checkedItems[index] ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                {taskItem}
              </span>
            </li>
          ))}
        </ul>
        
        {/* Przycisk pobierania zostaje bez zmian */}
        <a href={downloadUrl} className="..."> ... </a>
      </div>
    </section>
  );
}
export default TaskCard;