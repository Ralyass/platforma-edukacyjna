"use client";
import React from 'react';
import { useParams } from 'next/navigation'; // Tego brakowało
import { reactLessons } from '../content';    // Tego brakowało
import LessonTemplate from '@/components/LessonTemplate'; // Tego brakowało

export default function LessonPage() {
  const params = useParams();
  
  // Szukamy indeksu lekcji
  const lessonIndex = reactLessons.findIndex(l => l.id === params.lessonId);
  const lesson = reactLessons[lessonIndex];
  
  // Szukamy następnej lekcji dla nawigacji
  const nextLesson = reactLessons[lessonIndex + 1] || null;

  if (!lesson) {
    return <div className="p-10 text-white">Nie znaleziono lekcji.</div>;
  }

  return (
    <div className="w-full text-left flex flex-col items-start">
      <LessonTemplate 
        lesson={{
          ...lesson,
          zadanie: lesson.tasks || [] 
        }} 
        nextLesson={nextLesson} 
      />
    </div>
  );
}