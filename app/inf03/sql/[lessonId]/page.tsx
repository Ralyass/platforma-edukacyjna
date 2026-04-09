import { sqlLessons } from '../content';
import LessonTemplate from '@/components/LessonTemplate';

export default function Page({ params }: { params: { lessonId: string } }) {
  const lesson = sqlLessons.find(l => l.id === params.lessonId);
  if (!lesson) return <div className="p-20 text-center">Lekcja nie istnieje</div>;

  return <LessonTemplate lesson={lesson} />;
}