"use client";

import { useState } from "react";

const MENSAJES_JARDIN = [
  "¡Has descubierto el secreto del jardín pixelado! ✨",
  "Un rincón mágico de flores amarillas iluminadas por la luna.",
  "Cada flor brilla con luz propia bajo la noche estrellada."
];

const MENSAJES_FLOR = [
  "Lirio Iris Amarillo 🌼: Símbolo de luz y energía.",
  "Jacinto Dorado 🌟: Lleno de pétalos brillantes en espiga.",
  "Vara de Oro Imperial 💛: La flor más alta y radiante del jardín.",
  "Flor Celeste Mágica 💙: Un toque azul único entre el amarillo.",
  "Eringio / Cardo Silvestre 🌾: Protege el jardín con sus espinas brillantes."
];

const FLORES = [
  { id: 1, nombre: "Iris Amarillo", tipo: "iris", altura: "h-64", sombra: "rgba(251, 191, 36, 0.6)" },
  { id: 2, nombre: "Jacinto Dorado", tipo: "jacinto", altura: "h-72", sombra: "rgba(253, 224, 71, 0.7)" },
  { id: 3, nombre: "Vara de Oro", tipo: "vara", altura: "h-80", sombra: "rgba(250, 204, 21, 0.9)" },
  { id: 4, nombre: "Flor Celeste", tipo: "azul", altura: "h-68", sombra: "rgba(56, 189, 248, 0.8)" },
  { id: 5, nombre: "Cardo Silvestre", tipo: "cardo", altura: "h-56", sombra: "rgba(254, 240, 138, 0.5)" },
];

export default function Home() {
  const [mensajeIndex, setMensajeIndex] = useState<number | null>(null);
  const [florSeleccionada, setFlorSeleccionada] = useState<string | null>(null);

  const revelarSecreto = () => {
    setMensajeIndex((prev) => (prev === null ? 0 : (prev + 1) % MENSAJES_JARDIN.length));
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#070b14] font-pixel selection:bg-yellow-500 selection:text-black">
      
      {/* FONDO: Vía Láctea y Estrellas */}
      <div className="absolute inset-0 pointer-events-none pixel-stars opacity-70 z-0" />
      
      {/* Resplandor galáctico */}
      <div 
        className="absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full pointer-events-none opacity-30 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 80%)"
        }}
      />

      {/* Luna creciente */}
      <div className="absolute top-8 right-12 w-16 h-16 pointer-events-none z-10 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-slate-100 shadow-[0_0_25px_rgba(255,255,255,0.9)] relative">
          <div className="absolute -top-1 -left-2 w-10 h-10 rounded-full bg-[#070b14]" />
        </div>
      </div>

      {/* ENCABEZADO */}
      <header className="relative z-20 flex flex-col items-center text-center mt-10 px-4">
        <h1 className="text-5xl md:text-6xl text-yellow-300 tracking-wider text-shadow-pixel mb-2">
          Flores Amarillas
        </h1>
        <p className="text-lg md:text-xl text-slate-300 text-shadow-pixel max-w-md mb-6">
          Un pequeño jardín de ensueño. Pasa el cursor o toca una flor.
        </p>

        {/* Botón "Revelar secreto" estilo UI Minecraft */}
        <button 
          onClick={revelarSecreto}
          className="mc-button hover:scale-105 active:scale-95 transition-transform"
        >
          Revelar secreto
        </button>

        {/* Mensaje Secreto */}
        {mensajeIndex !== null && (
          <div className="mt-4 p-3 bg-slate-900/90 border-2 border-yellow-400 text-yellow-200 text-lg rounded shadow-xl animate-bounce">
            {MENSAJES_JARDIN[mensajeIndex]}
          </div>
        )}
      </header>

      {/* JARDÍN Y FLORES */}
      <div className="relative w-full max-w-5xl flex-1 flex flex-col justify-end items-center z-10 pb-12">
        
        {/* Estela mágica brillante */}
        <div className="magic-trail z-20" />

        {/* Contenedor de flores */}
        <div className="relative z-30 flex items-end justify-center gap-4 md:gap-10 w-full px-4 mb-[-12px]">
          {FLORES.map((flor, index) => (
            <div 
              key={flor.id} 
              className="group relative flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setFlorSeleccionada(MENSAJES_FLOR[index])}
            >
              {/* Tooltip de la flor */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 bg-black/90 text-yellow-300 text-sm px-3 py-1 rounded border border-yellow-500 whitespace-nowrap pointer-events-none z-40 shadow-lg">
                {flor.nombre}
              </div>

              {/* Estructura de la Flor con Detalle estilo Vóxel / Pixel Art */}
              <div className={`relative w-24 md:w-32 ${flor.altura} flex flex-col justify-end items-center`}>
                
                {/* 1. LIRIO IRIS AMARILLO */}
                {flor.tipo === "iris" && (
                  <div className="relative w-28 h-28 flex items-center justify-center drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Pétalos traseros Caídos */}
                      <path d="M 20,50 Q 10,70 30,80 Q 40,65 35,50 Z" fill="#eab308" />
                      <path d="M 80,50 Q 90,70 70,80 Q 60,65 65,50 Z" fill="#eab308" />
                      {/* Pétalos centrales alzados */}
                      <path d="M 35,45 Q 25,15 50,10 Q 75,15 65,45 Q 50,30 35,45 Z" fill="#fde047" />
                      <path d="M 40,45 Q 50,20 60,45 Z" fill="#fef08a" />
                      {/* Pétalo frontal con caída */}
                      <path d="M 32,50 Q 50,90 68,50 Q 50,58 32,50 Z" fill="#ca8a04" />
                      <path d="M 42,52 Q 50,75 58,52 Z" fill="#facc15" />
                    </svg>
                  </div>
                )}

                {/* 2. JACINTO DORADO */}
                {flor.tipo === "jacinto" && (
                  <div className="relative w-24 h-36 flex flex-col items-center drop-shadow-[0_0_15px_rgba(253,224,71,0.7)]">
                    <svg viewBox="0 0 80 120" className="w-full h-full">
                      {/* Racimo denso de flores pequeñas */}
                      {[
                        { cx: 40, cy: 18, r: 10 },
                        { cx: 28, cy: 32, r: 11 }, { cx: 52, cy: 32, r: 11 },
                        { cx: 22, cy: 50, r: 12 }, { cx: 40, cy: 48, r: 12 }, { cx: 58, cy: 50, r: 12 },
                        { cx: 20, cy: 70, r: 12 }, { cx: 40, cy: 68, r: 13 }, { cx: 60, cy: 70, r: 12 },
                        { cx: 25, cy: 90, r: 11 }, { cx: 40, cy: 88, r: 12 }, { cx: 55, cy: 90, r: 11 },
                      ].map((item, i) => (
                        <g key={i}>
                          <circle cx={item.cx} cy={item.cy} r={item.r} fill="#facc15" />
                          <circle cx={item.cx} cy={item.cy} r={item.r - 4} fill="#fef08a" />
                          <circle cx={item.cx} cy={item.cy} r={item.r - 8} fill="#ca8a04" />
                        </g>
                      ))}
                    </svg>
                  </div>
                )}

                {/* 3. VARA DE ORO IMPERIAL */}
                {flor.tipo === "vara" && (
                  <div className="relative w-28 h-44 flex flex-col items-center drop-shadow-[0_0_20px_rgba(250,204,21,0.9)]">
                    <svg viewBox="0 0 100 150" className="w-full h-full">
                      {/* Múltiples ramificaciones con minipétalos en forma de espiga */}
                      <path d="M 50,140 Q 30,100 15,80 Q 35,85 50,110 Q 65,85 85,80 Q 70,100 50,140 Z" fill="#eab308" />
                      <path d="M 50,110 Q 25,70 10,40 Q 35,50 50,80 Q 65,50 90,40 Q 75,70 50,110 Z" fill="#facc15" />
                      <path d="M 50,75 Q 30,35 20,10 Q 40,25 50,45 Q 60,25 80,10 Q 70,35 50,75 Z" fill="#fde047" />
                      <circle cx="50" cy="15" r="8" fill="#fef08a" />
                      <circle cx="50" cy="8" r="4" fill="#ffffff" />
                    </svg>
                  </div>
                )}

                {/* 4. FLOR CELESTE MÁGICA */}
                {flor.tipo === "azul" && (
                  <div className="relative w-28 h-28 flex items-center justify-center drop-shadow-[0_0_18px_rgba(56,189,248,0.8)]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Pétalos anchos azucarados / celestes */}
                      <path d="M 50,15 C 30,15 20,35 35,50 C 20,65 30,85 50,85 C 70,85 80,65 65,50 C 80,35 70,15 50,15 Z" fill="#38bdf8" />
                      <path d="M 50,22 C 37,22 30,37 40,48 C 30,59 37,78 50,78 C 63,78 70,59 60,48 C 70,37 63,22 50,22 Z" fill="#7dd3fc" />
                      {/* Centro amarillo de contraste */}
                      <circle cx="50" cy="50" r="10" fill="#facc15" />
                      <circle cx="50" cy="50" r="5" fill="#fef08a" />
                    </svg>
                  </div>
                )}

                {/* 5. CARDO / ERINGIO SILVESTRE */}
                {flor.tipo === "cardo" && (
                  <div className="relative w-28 h-28 flex items-center justify-center drop-shadow-[0_0_12px_rgba(254,240,138,0.6)]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Corona de picos/espinas en forma de estrella */}
                      <g fill="#fde047">
                        <polygon points="50,5 58,35 88,20 68,42 98,50 68,58 88,80 58,65 50,95 42,65 12,80 32,58 2,50 32,42 12,20 42,35" />
                      </g>
                      {/* Núcleo abombado */}
                      <circle cx="50" cy="50" r="20" fill="#eab308" />
                      <circle cx="50" cy="50" r="14" fill="#facc15" />
                      <circle cx="50" cy="50" r="8" fill="#fef08a" />
                    </svg>
                  </div>
                )}

                {/* TALLO NATURAL CON HOJAS */}
                <div className="w-2 md:w-3 flex-1 bg-emerald-700 border-x border-emerald-900 relative">
                  {/* Hojas con curvas orgánicas */}
                  <div className="absolute top-1/3 -left-4 w-5 h-8 bg-emerald-600 rounded-tl-full -rotate-45 border-l border-emerald-800" />
                  <div className="absolute top-1/2 -right-4 w-5 h-8 bg-emerald-600 rounded-tr-full rotate-45 border-r border-emerald-800" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* SUELO / COLINAS ESTILO MINECRAFT */}
        <div className="w-full h-16 bg-emerald-900 border-t-8 border-emerald-600 relative z-20 flex items-center justify-center shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[radial-gradient(#16a34a_2px,transparent_2px)] [background-size:12px_12px] opacity-40" />
        </div>
      </div>

      {/* POPUP / NOTIFICACIÓN DE FLOR */}
      {florSeleccionada && (
        <div className="fixed bottom-6 z-50 bg-slate-900/95 border-2 border-yellow-400 text-yellow-300 px-6 py-3 rounded-lg text-lg text-shadow-pixel flex items-center gap-4 shadow-2xl backdrop-blur-sm">
          <span>{florSeleccionada}</span>
          <button 
            onClick={() => setFlorSeleccionada(null)}
            className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}