import { useState } from 'react';
import { ArrowLeft, Users, Heart, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-9m7fxwmdh4';

interface BusinessGoalScreenProps {
  onComplete: (goal: string) => void;
  onBack: () => void;
}

const goals = [
  { 
    id: 'foot-traffic', 
    emoji: '👥', 
    label: 'Increase foot traffic',
    icon: Users 
  },
  { 
    id: 'loyalty', 
    emoji: '❤️', 
    label: 'Reward loyal customers',
    icon: Heart 
  },
  { 
    id: 'off-peak', 
    emoji: '📈', 
    label: 'Boost off-peak sales',
    icon: TrendingUp 
  },
];

export default function BusinessGoalScreen({ onComplete, onBack }: BusinessGoalScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleComplete = () => {
    if (selectedGoal) {
      onComplete(selectedGoal);
    }
  };

  return (
    <div 
      className="min-h-screen px-4 pt-12 pb-8"
      style={{ backgroundImage: "linear-gradient(rgb(0, 48, 87) 0%, rgb(0, 102, 179) 100%)" }}
    >
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#FFD100] px-6 py-1 rounded-full">
              <p className="text-sm text-[#003057] text-center">Step 3 of 3</p>
            </div>
          </div>

          <h1 className="text-center text-white mb-1">Join SoundScape</h1>
          <p className="text-sm text-center text-white/80">Reach Sound CU members effortlessly</p>
        </motion.div>

        {/* Campaign Goal Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-2xl p-4 mb-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FFD100] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <g clipPath="url(#clip0_goal)">
                  <path d={svgPaths.p3b941270} stroke="#003057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
                  <path d={svgPaths.pd859d00} stroke="#003057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
                  <path d={svgPaths.p3df763f2} stroke="#003057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
                </g>
                <defs>
                  <clipPath id="clip0_goal">
                    <rect fill="white" height="19.9933" width="19.9933" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-white">Choose Your Campaign Goal</h3>
          </div>

          <div className="space-y-3">
            {goals.map((goal, index) => (
              <motion.button
                key={goal.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedGoal(goal.id)}
                className={`w-full h-[67px] rounded-xl p-4 flex items-center gap-3 transition-all ${
                  selectedGoal === goal.id
                    ? 'bg-[rgba(255,209,0,0.2)] border-2 border-[#FFD100]'
                    : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)]'
                }`}
                aria-pressed={selectedGoal === goal.id}
                aria-label={`Select ${goal.label}`}
              >
                <span className="text-2xl">{goal.emoji}</span>
                <span className="text-white">{goal.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2"
        >
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1 bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.2)] h-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleComplete}
            disabled={!selectedGoal}
            className={`flex-1 h-12 ${
              selectedGoal
                ? 'bg-[#FFD100] text-[#003057] hover:bg-[#FFC000]'
                : 'bg-[#FFD100] text-[#003057] opacity-50 cursor-not-allowed'
            }`}
          >
            Complete
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
