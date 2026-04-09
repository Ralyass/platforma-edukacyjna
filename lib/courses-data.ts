import { reactLessons } from '@/app/inf04/react/content';
// Tu będziesz importować kolejne:
// import { sqlLessons } from '@/app/inf03/sql/content';
// import { csharpLessons } from '@/app/inf04/csharp/content';

export const allCourses: Record<string, any> = {
  'react': { title: 'Kurs React', lessons: reactLessons },
  'sql': { title: 'Bazy Danych SQL', lessons: [] }, // Tu wstawisz swoje dane później
  'csharp': { title: 'Programowanie C#', lessons: [] },
};