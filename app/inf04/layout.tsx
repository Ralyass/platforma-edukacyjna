import Sidebar from "@/components/Sidebar";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100 relative">
      
      {/* SIDEBAR - stały, przyklejony do lewej */}
      <Sidebar />
      
      {/* GŁÓWNA TREŚĆ */}
      <main className="flex-1 lg:ml-64 w-full min-w-0">
        {/* Usuwamy mx-auto (centrowanie).
            Ustawiamy pl-8 (mały odstęp od sidebaru).
            max-w-none pozwala treści rosnąć, ale 
            możesz zostawić max-w-5xl jeśli nie chcesz zbyt długich linii tekstu.
        */}
        <div className="p-6 md:p-10 lg:pl-10 max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
}