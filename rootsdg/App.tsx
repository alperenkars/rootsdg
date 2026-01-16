import React, { useState } from 'react';
import Quiz from './components/Quiz';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="min-h-screen text-gray-900 selection:bg-yellow-200">
      {unlocked ? (
        <MainPage />
      ) : (
        <Quiz onUnlock={() => setUnlocked(true)} />
      )}
    </div>
  );
};

export default App;
