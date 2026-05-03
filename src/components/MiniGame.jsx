import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Code, Zap, Trophy, RotateCcw, Play } from "lucide-react";

export const MiniGame = () => {
  const [gameState, setGameState] = useState('idle'); // idle, playing, won, lost
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [highScore, setHighScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [particles, setParticles] = useState([]);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('miniGameHighScore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Game timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame();
    }
  }, [timeLeft, gameState]);

  // Move target randomly
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
    setParticles([]);
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
    const points = Math.floor(10 * (1 + combo * 0.1));
    setScore(prev => prev + points);
    setCombo(prev => prev + 1);
    
    // Create particle effect
    const newParticle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      points: points
    };
    setParticles(prev => [...prev, newParticle]);
    
    // Remove particle after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
    
    // Move target immediately
    setTargetPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20
    });
  }, [gameState, combo]);

  const missClick = useCallback(() => {
    if (gameState !== 'playing') return;
    setCombo(0);
  }, [gameState]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Code className="text-blue-600" />
            Interactive Challenge
            <Zap className="text-purple-600" />
          </h2>
          <p className="text-xl text-gray-600">Test your reflexes with this mini-game!</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Game Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-blue-600">{score}</div>
              <div className="text-sm text-gray-600">Score</div>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-purple-600">{highScore}</div>
              <div className="text-sm text-gray-600">High Score</div>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-green-600">{timeLeft}s</div>
              <div className="text-sm text-gray-600">Time Left</div>
            </motion.div>
            <motion.div
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-orange-600">x{combo}</div>
              <div className="text-sm text-gray-600">Combo</div>
            </motion.div>
          </div>

          {/* Game Area */}
          <div 
            className="relative bg-white rounded-2xl shadow-lg border-2 border-gray-200 h-96 overflow-hidden cursor-crosshair"
            onClick={missClick}
          >
            {gameState === 'idle' && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Code Hunter</h3>
                    <p className="text-gray-600 mb-4">Click the targets as fast as you can!</p>
                    <p className="text-sm text-gray-500">Score 50+ points to win!</p>
                  </div>
                  <motion.button
                    onClick={startGame}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={20} />
                    Start Game
                  </motion.button>
                </motion.div>
              </div>
            )}

            {gameState === 'playing' && (
              <>
                <motion.div
                  className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full cursor-pointer shadow-lg"
                  style={{
                    left: `${targetPosition.x}%`,
                    top: `${targetPosition.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={hitTarget}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    🎯
                  </div>
                </motion.div>

                {/* Combo indicator */}
                {combo > 2 && (
                  <motion.div
                    className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    🔥 {combo}x Combo!
                  </motion.div>
                )}
              </>
            )}

            {gameState === 'won' && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">You Won!</h3>
                  <p className="text-xl text-gray-600 mb-4">Final Score: {score}</p>
                  {score === highScore && (
                    <p className="text-lg text-green-600 font-semibold mb-4">🎉 New High Score!</p>
                  )}
                  <motion.button
                    onClick={startGame}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw size={20} />
                    Play Again
                  </motion.button>
                </motion.div>
              </div>
            )}

            {gameState === 'lost' && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">😢</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Game Over</h3>
                  <p className="text-xl text-gray-600 mb-4">Final Score: {score}</p>
                  <p className="text-lg text-gray-500 mb-4">Try again to beat 50 points!</p>
                  <motion.button
                    onClick={startGame}
                    className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCcw size={20} />
                    Try Again
                  </motion.button>
                </motion.div>
              </div>
            )}

            {/* Particle effects */}
            <AnimatePresence>
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute pointer-events-none"
                  style={{
                    left: particle.x,
                    top: particle.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{ 
                    opacity: 0, 
                    y: -50, 
                    scale: 1.5 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="text-2xl font-bold text-yellow-500">
                    +{particle.points}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">🎮 How to play: Click the moving targets to score points!</p>
            <p className="text-sm">Build combos for bonus points • Score 50+ to win • Beat your high score!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
