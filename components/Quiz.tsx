import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

interface QuizProps {
  onUnlock: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onUnlock }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [errorShake, setErrorShake] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    if (answer === currentQuestion.correctAnswer) {
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        onUnlock();
      }
    } else {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Main Quiz Box */}
      <div className={`max-w-md w-full bg-white border-4 border-black p-8 rounded-lg scribble-shadow relative z-10 ${errorShake ? 'animate-bounce' : ''}`}>
        
        {/* Tape effect on Quiz Box */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-200 opacity-80 rotate-2 border-l border-r border-white/50 shadow-sm"></div>

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 rotate-1">
          selam aslıhan
        </h1>
        
        <p className="text-xl text-center mb-8 border-b-2 border-black/20 pb-4 font-bold text-red-600">
          tek başınayken gir dedim ama bazen de güvenilmez olabiliyorsun, o yüzden siteye sadece senin eriştiğine emin olmak için biraz güvenlik soruları
        </p>

        <div className="mb-6">
          <p className="text-2xl mb-6 font-bold text-center">
             <span className="text-blue-500 text-3xl mr-2">#{currentQuestion.id}</span>
             {currentQuestion.text}
          </p>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-xl py-3 px-4 bg-white border-2 border-black rounded hover:bg-yellow-100 transition-colors scribble-shadow-hover text-left flex items-center group"
              >
                <span className="w-6 h-6 border-2 border-black rounded-full mr-3 group-hover:bg-black transition-colors"></span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-500 text-lg">
          {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
        </div>
      </div>
    </div>
  );
};

export default Quiz;