import { CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ConfirmationScreenProps {
  onComplete: () => void;
}

export default function ConfirmationScreen({ onComplete }: ConfirmationScreenProps) {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003057] to-[#0066B3] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[#FFD100] opacity-10 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD100] to-transparent opacity-30 blur-xl"
            />
            <CheckCircle className="w-24 h-24 text-[#FFD100] relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-white mb-4">You're all set!</h2>
          <p className="text-white/80 mb-2">
            Welcome to your personalized SoundScape
          </p>
        </motion.div>

        {/* SoundMap Preview */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: showMap ? 1 : 0.8, opacity: showMap ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="my-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-[#FFD100]">
            <Sparkles className="w-5 h-5" />
            <span>Here's your SoundMap</span>
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Animated Map Preview */}
          <div className="relative h-40 bg-[#003057]/50 rounded-xl overflow-hidden">
            {/* Glowing nodes animation */}
            <svg className="w-full h-full" viewBox="0 0 300 150">
              {/* Connection lines */}
              <motion.line
                x1="60" y1="75" x2="150" y2="50"
                stroke="#FFD100"
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1="150" y1="50" x2="240" y2="75"
                stroke="#FFD100"
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.line
                x1="60" y1="75" x2="150" y2="110"
                stroke="#FFD100"
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />

              {/* Glowing nodes */}
              {[
                { cx: 60, cy: 75, delay: 1 },
                { cx: 150, cy: 50, delay: 1.2 },
                { cx: 240, cy: 75, delay: 1.4 },
                { cx: 150, cy: 110, delay: 1.6 },
              ].map((node, index) => (
                <g key={index}>
                  {/* Pulsing glow */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="8"
                    fill="#FFD100"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 0.5, 0],
                      scale: [0, 2, 3],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: node.delay
                    }}
                  />
                  {/* Node core */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="6"
                    fill="#FFD100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      delay: node.delay,
                      duration: 0.5
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#FFD100] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <p className="text-white/70 text-sm mt-3">
            Discover local businesses and community impact
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Button
            onClick={onComplete}
            size="lg"
            className="bg-[#FFD100] text-[#003057] hover:bg-[#FFC000] shadow-lg w-full"
          >
            Explore My Community
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
