import { Waves, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003057] via-[#004B87] to-[#0066B3] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="#FFD100"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        {/* Logo */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 inline-block"
        >
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <Waves className="w-16 h-16 text-[#003057]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white mb-4"
        >
          SoundScape
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#FFD100] mb-12 max-w-md mx-auto"
        >
          Banking That Feels Like Belonging
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-white/90 mb-8 max-w-sm mx-auto">
            Connect with local businesses, earn rewards, and make an impact in your Washington community
          </p>

          <Button
            onClick={onNext}
            size="lg"
            className="bg-[#FFD100] text-[#003057] hover:bg-[#FFC000] shadow-lg shadow-[#FFD100]/30 group"
          >
            Connect Your Account
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-white/60 text-sm mt-4">
            Sound Credit Union Member
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[#FFD100] rounded-full opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-32 h-32 bg-[#FFD100] rounded-full opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
}
