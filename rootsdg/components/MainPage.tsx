import React, { useState } from 'react';
import { generateFortune } from '../services/geminiService';
import { Sparkles, PlayCircle, Heart } from 'lucide-react';

const MainPage: React.FC = () => {
  const [fortune, setFortune] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleGetFortune = async () => {
    setLoading(true);
    const text = await generateFortune();
    setFortune(text);
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 overflow-hidden relative flex flex-col items-center">
      
      {/* Background decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 -rotate-12 select-none pointer-events-none">🍌</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 rotate-12 select-none pointer-events-none">🐒</div>
      <div className="absolute top-1/2 right-4 text-6xl opacity-20 -rotate-45 select-none pointer-events-none">🎈</div>
      <div className="absolute top-1/3 left-4 text-6xl opacity-20 rotate-12 select-none pointer-events-none">✨</div>

      {/* Header */}
      <header className="text-center mb-10 mt-6 relative z-10 w-full max-w-3xl">
        <div className="inline-block bg-yellow-200 px-6 py-3 border-4 border-black rotate-1 scribble-shadow transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            İyi ki Doğdun Aslıhan!
          </h1>
        </div>
      </header>

      {/* Video Section */}
      <section className="w-full max-w-4xl mb-12 relative z-10 flex flex-col items-center">
        <div className="bg-white p-2 md:p-4 border-4 border-black scribble-shadow transform -rotate-1 w-full relative">
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-red-200/90 rotate-2 shadow-sm z-20 border-l border-r border-white/30"></div>
          
          <div className="aspect-video bg-black w-full relative overflow-hidden group">
            {/* BURAYA VİDEO GELECEK: Aşağıdaki video etiketinin src kısmını kendi video dosyanla değiştir */}
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="https://picsum.photos/seed/video_poster/800/450" 
            >
              <source src="/assets/dogum_gunu_videosu.mp4" type="video/mp4" />
              Tarayıcın video oynatmayı desteklemiyor.
            </video>
            
            {/* Play icon overlay hint (optional, video controls are enough usually) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity">
              <PlayCircle className="w-20 h-20 text-white/50" />
            </div>
          </div>
          
          <p className="text-center mt-4 font-bold text-xl text-gray-700 handwriting">
            doğum günü mesajı
          </p>
        </div>
      </section>

      {/* Fortune Section */}
      <section className="w-full max-w-2xl text-center mb-20 relative z-10">
        <div className="bg-purple-50 border-4 border-black p-6 md:p-10 rounded-2xl scribble-shadow transform rotate-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
            hadi önümüzdeki bir ayda hayatında gerçekleşecek bir şeyi görelim
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 italic">
            falım gibi düşün, %0 güvenilirlik ve %100 ai. totem yapmak için bire bir
          </p>
          
          <div className="min-h-[100px] mb-8 flex items-center justify-center p-4 bg-white/50 border-2 border-black/10 rounded-lg border-dashed">
             {loading ? (
               <div className="text-2xl animate-bounce text-purple-600">sabret... rootlar ve shootlar düşünüyor</div>
             ) : fortune ? (
               <p className="text-2xl md:text-3xl leading-relaxed font-bold text-indigo-700 handwriting">
                 {fortune}
               </p>
             ) : (
               <p className="text-xl text-gray-400 font-bold">
                 buraya basma
               </p>
             )}
          </div>

          <button 
            onClick={handleGetFortune}
            disabled={loading}
            className="bg-green-400 hover:bg-green-300 text-black text-2xl font-bold py-4 px-10 border-4 border-black rounded-full scribble-shadow-hover transition-all flex items-center gap-3 mx-auto active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles className="w-6 h-6" />
            buraya bas
            <Sparkles className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center pb-8 pt-4">
        <div className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 border-2 border-black rounded-lg transform -rotate-2">
          <span className="text-lg font-bold">mutlu yıllar</span>
        </div>
      </footer>

    </div>
  );
};

export default MainPage;
