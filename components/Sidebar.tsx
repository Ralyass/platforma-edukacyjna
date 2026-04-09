"use client";
import React from 'react';
import Link from 'next/link'; // Tego brakowało
import { usePathname } from 'next/navigation';
import { sqlLessons } from '@/app/inf03/sql/content';
import { reactLessons } from '@/app/inf04/react/content';

export default function Sidebar() {
  const pathname = usePathname();

  const getLessons = () => {
    if (pathname.includes('/inf04/react')) return reactLessons;
    if (pathname.includes('/inf03/sql')) return sqlLessons;
    return [];
  };

  const lessons = getLessons();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-gray-950 border-r border-gray-900 z-40 hidden lg:flex flex-col overflow-y-auto">
      <div className="p-6">
        <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-6 px-2">
          Lista lekcji
        </h3>

        <nav className="space-y-1">
          {lessons.map((lesson) => {
            const isDraft = (lesson as any).isDraft;
            const courseBase = pathname.includes('/inf04/react') ? '/inf04/react' : '/inf03/sql';
            const href = isDraft ? '#' : `${courseBase}/${lesson.id}`;
            const isActive = pathname === href;

            return (
              <Link
                key={lesson.id}
                href={href}
                className={`block px-4 py-3 rounded-xl text-sm transition-all relative ${
                  isDraft ? 'opacity-50 cursor-not-allowed' : ''
                } ${isActive ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-gray-500 hover:text-gray-200'}`}
              >
                <div className="flex justify-between items-center">
                  {lesson.title}
                  {isDraft && (
                    <span className="text-[8px] bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded uppercase font-bold">
                      Wkrótce
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}