import React from 'react';

interface TaskCardProps {
  title: string;
  tasks: string[];
  downloadUrl: string;
}

function TaskCard({ title, tasks, downloadUrl }: TaskCardProps) {
  return (
    // GŁÓWNY KONTENER: Szklany efekt, gradientowa krawędź, cień
    <section className="relative p-px rounded-3xl overflow-hidden bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 shadow-2xl shadow-gray-950/50 mt-10 group hover:border-gray-600 transition-all duration-300">
      
      {/* Dynamiczny gradient pod spodem, widoczny tylko na hoverze */}
      <div className="absolute inset-0 -translate-z-10 bg-gradient-to-br from-cyan-500 via-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>

      {/* WEWNĘTRZNA ZAWARTOŚĆ: Ciemne tło z lekkim prześwitem */}
      <div className="relative bg-gray-950/80 p-8 rounded-[23px] z-10">
        
        {/* NAGŁÓWEK: Wielki, gruby, z gradientem text-fill */}
        <h2 className="text-3xl font-extrabold tracking-tighter mb-8 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 bg-clip-text text-transparent">
          {title}
        </h2>

        {/* LISTA ZADAŃ: Stylizowana */}
        <ul className="space-y-5 text-gray-200 mb-10">
          {tasks.map((taskItem, index) => (
            <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:bg-gray-800/50 transition-colors">
              
              {/* STYLIZOWANY CHECKBOX: Ukrywamy stary, robimy nowy zdiva */}
              <div className="relative flex items-center justify-center mt-1">
                <input type="checkbox" className="peer h-6 w-6 opacity-0 absolute cursor-pointer z-10" />
                <div className="h-6 w-6 rounded-md border-2 border-gray-600 bg-gray-900 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-950 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* TEKST ZADANIA: Skreślany po zaznaczeniu (peer-checked) */}
              <span className="text-base leading-relaxed peer-checked:text-gray-500 peer-checked:line-through transition-all cursor-pointer">
                {taskItem}
              </span>
            </li>
          ))}
        </ul>

        {/* PRZYCISK POBIERANIA: Duży, neonowy gradient */}
        <a 
          href={downloadUrl} 
          className="relative inline-flex w-full items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white rounded-xl overflow-hidden group/btn transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Tło przycisku z gradientem */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-violet-700 to-fuchsia-600 transition-all duration-300 group-hover/btn:from-cyan-500 group-hover/btn:via-violet-600 group-hover/btn:to-fuchsia-500"></div>
          
          {/* Neonowy blask pod przyciskiem */}
          <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-600 via-violet-700 to-fuchsia-600 opacity-50 group-hover/btn:opacity-80 transition-opacity"></div>
          
          <span className="relative z-10 flex items-center gap-3">
            Pobierz paczkę plików (.zip)
          </span>
        </a>

      </div>
    </section>
  );
}

export default TaskCard;