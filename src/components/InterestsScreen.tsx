import { Coffee, Palette, Dumbbell, ShoppingBag, Music, Utensils, Book, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface InterestsScreenProps {
  selectedInterests: string[];
  onSelect: (interests: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const interests = [
  { id: 'cafes', label: 'Cafes', icon: Coffee },
  { id: 'art', label: 'Art', icon: Palette },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell },
  { id: 'markets', label: 'Markets', icon: ShoppingBag },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'dining', label: 'Dining', icon: Utensils },
  { id: 'books', label: 'Books', icon: Book },
  { id: 'wellness', label: 'Wellness', icon: Heart },
];

export default function InterestsScreen({ selectedInterests, onSelect, onNext, onBack }: InterestsScreenProps) {
  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      onSelect(selectedInterests.filter(i => i !== id));
    } else {
      onSelect([...selectedInterests, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003057] to-[#0066B3] flex flex-col p-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8 mt-12"
      >
        <div className="inline-block bg-[#FFD100] text-[#003057] px-4 py-1 rounded-full mb-4">
          Step 1 of 3
        </div>
        <h2 className="text-white mb-2">What are you into?</h2>
        <p className="text-white/80">Select all that interest you</p>
      </motion.div>

      {/* Interests Grid */}
      <div className="flex-1 max-w-md mx-auto w-full">
        <div className="grid grid-cols-2 gap-4">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const isSelected = selectedInterests.includes(interest.id);
            
            return (
              <motion.button
                key={interest.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleInterest(interest.id)}
                className={`
                  relative p-6 rounded-2xl transition-all duration-300
                  ${isSelected 
                    ? 'bg-[#FFD100] text-[#003057] shadow-lg shadow-[#FFD100]/30' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon className="w-8 h-8" />
                  <span>{interest.label}</span>
                </div>
                
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 bg-[#003057] text-[#FFD100] rounded-full flex items-center justify-center"
                  >
                    ✓
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-3 max-w-md mx-auto w-full mt-8"
      >
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={selectedInterests.length === 0}
          className="flex-1 bg-[#FFD100] text-[#003057] hover:bg-[#FFC000] disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
