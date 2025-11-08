import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-huyf9baeuu';

interface BusinessCategoryScreenProps {
  onNext: (category: string) => void;
  onBack: () => void;
}

const categories = [
  { id: 'food-beverage', emoji: '☕', label: 'Food & Beverage' },
  { id: 'retail', emoji: '🛍️', label: 'Retail' },
  { id: 'fitness-wellness', emoji: '🧘', label: 'Fitness & Wellness' },
  { id: 'services', emoji: '✂️', label: 'Services' },
];

export default function BusinessCategoryScreen({ onNext, onBack }: BusinessCategoryScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('food-beverage');

  const handleContinue = () => {
    if (selectedCategory) {
      onNext(selectedCategory);
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
              <p className="text-sm text-[#003057] text-center">Step 2 of 3</p>
            </div>
          </div>

          <h1 className="text-center text-white mb-1">Join SoundScape</h1>
          <p className="text-sm text-center text-white/80">Reach Sound CU members effortlessly</p>
        </motion.div>

        {/* Category Selection Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-2xl p-4 mb-6 shadow-sm"
        >
          <h3 className="text-white mb-4">Select Your Category</h3>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`h-[100px] rounded-xl p-4 flex flex-col items-start justify-center gap-2 transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[rgba(255,209,0,0.2)] border-2 border-[#FFD100]'
                    : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)]'
                }`}
                aria-pressed={selectedCategory === category.id}
                aria-label={`Select ${category.label}`}
              >
                <span className="text-2xl">{category.emoji}</span>
                <span className="text-sm text-white text-left">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
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
            onClick={handleContinue}
            disabled={!selectedCategory}
            className={`flex-1 h-12 ${
              selectedCategory
                ? 'bg-[#FFD100] text-[#003057] hover:bg-[#FFC000]'
                : 'bg-[#FFD100] text-[#003057] opacity-50 cursor-not-allowed'
            }`}
          >
            Continue
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
