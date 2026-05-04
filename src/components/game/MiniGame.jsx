import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Code, Zap, Trophy, RotateCcw, Play } from "lucide-react";
import { useTheme } from '../../contexts/ThemeContext';

export const MiniGame = () => {
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('miniGameHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame();
    }
  }, [timeLeft, gameState]);

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        setTargetPosition({
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
    setCombo(0);
  };

  const endGame = () => {
    setGameState(score > 50 ? 'won' : 'lost');
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('miniGameHighScore', score.toString());
    }
  };

  const hitTarget = useCallback((e) => {
    if (gameState !== 'playing') return;
    e.stopPropagation();
    const points = Math.floor(10 * (1 + 0));
    setScore(prev => prev + points);
    setCombo(prev => prev + 1);
    setTargetPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20
    });
  }, [gameState]);

  const missClick = useCallback(() => {
    if (gameState !== 'playing') return;
    setCombo(0);
  }, [gameState]);

  return (
    <section id="game" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Interactive Challenge</h2>
          <p className="text-xl mb-4">Test your reflexes with this mini-game!</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {gameState === 'idle' && (
            <div className="text-center py-12">
              <div className="mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Code Hunter</h3>
                <p className="text-gray-600 mb-4">Click targets as fast as you can!</p>
                <p className="text-sm text-gray-500">Score 50+ points to win!</p>
              </div>
              <button
                onClick={startGame}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mx-auto"
              >
                <Play size={20} />
                Start Game
              </button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-gray-600">Score</div>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-purple-600">{highScore}</div>
                <div className="text-sm text-gray-600">High Score</div>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-green-600">{timeLeft}s</div>
                <div className="text-sm text-gray-600">Time Left</div>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl font-bold text-orange-600">x{0}</div>
                <div className="text-sm text-gray-600">Combo</div>
              </div>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="relative bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 h-96 overflow-hidden cursor-crosshair">
              <div
                className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full cursor-pointer"
                style={{
                  left: `${targetPosition.x}%`,
                  top: `${targetPosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={hitTarget}
              />
            </div>
          )}

          {gameState === 'won' && (
            <div className="absolute inset-0 flex items-center justify-center bg-green-50">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-green-800 mb-2">You Won!</h3>
                <p className="text-xl text-green-600 mb-4">Final Score: {score}</p>
                {score === highScore && (
                  <p className="text-lg text-green-600 font-semibold mb-4">🎉 New High Score!</p>
                )}
                <button
                  onClick={startGame}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors mx-auto"
                >
                  <RotateCcw size={20} />
                  Play Again
                </button>
              </div>
            </div>
          )}

          {gameState === 'lost' && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50">
              <div className="text-center">
                <div className="text-6xl mb-4">😢</div>
                <h3 className="text-3xl font-bold text-red-800 mb-2">Game Over</h3>
                <p className="text-xl text-red-600 mb-4">Final Score: {score}</p>
                <p className="text-lg text-red-500 mb-4">Try again to beat 50 points!</p>
                <button
                  onClick={startGame}
                  className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors mx-auto"
                >
                  <RotateCcw size={20} />
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">🎮 How to play: Click moving targets to score points!</p>
          <p className="text-sm">Build combos for bonus points • Score 50+ to win • Beat your high score!</p>
        </div>
      </div>
    </section>
  );
};
