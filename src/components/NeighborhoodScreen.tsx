import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface NeighborhoodScreenProps {
  selectedNeighborhood: string;
  onSelect: (neighborhood: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const neighborhoods = [
  { id: 'tacoma', label: 'Tacoma', x: 48, y: 60, businesses: 324 },
  { id: 'seattle', label: 'Seattle', x: 50, y: 35, businesses: 892 },
  { id: 'olympia', label: 'Olympia', x: 45, y: 75, businesses: 156 },
  { id: 'bellevue', label: 'Bellevue', x: 60, y: 40, businesses: 421 },
  { id: 'everett', label: 'Everett', x: 52, y: 20, businesses: 198 },
  { id: 'spokane', label: 'Spokane', x: 85, y: 30, businesses: 267 },
];

export default function NeighborhoodScreen({ selectedNeighborhood, onSelect, onNext, onBack }: NeighborhoodScreenProps) {
  console.log('NeighborhoodScreen rendered, selected:', selectedNeighborhood);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003057] to-[#0066B3] flex flex-col p-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8 mt-12"
      >
        <div className="inline-block bg-[#FFD100] text-[#003057] px-4 py-1 rounded-full mb-4">
          Step 3 of 3
        </div>
        <h2 className="text-white mb-2">Where do you spend time?</h2>
        <p className="text-white/80">Select your primary neighborhood</p>
      </motion.div>

      {/* Map Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 max-w-2xl mx-auto w-full relative"
      >
        {/* Washington State Shape Approximation */}
        <div className="relative w-full h-full bg-white/5 rounded-3xl border-2 border-white/20 overflow-hidden min-h-[400px]">
          {/* Decorative Map Background */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-30" viewBox="0 0 400 300">
              <path
                d="M 50 100 Q 100 80, 150 90 T 250 85 Q 300 90, 350 110 L 350 250 Q 300 260, 250 250 T 150 260 Q 100 250, 50 240 Z"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Neighborhood Markers */}
          {neighborhoods.map((neighborhood, index) => {
            const isSelected = selectedNeighborhood === neighborhood.id;
            
            return (
              <motion.button
                key={neighborhood.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelect(neighborhood.id)}
                className="absolute"
                style={{
                  left: `${neighborhood.x}%`,
                  top: `${neighborhood.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Pulsing Ring */}
                {isSelected && (
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 rounded-full bg-[#FFD100]"
                    style={{ width: '48px', height: '48px', left: '-12px', top: '-12px' }}
                  />
                )}

                {/* Marker */}
                <div
                  className={`
                    relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${isSelected 
                      ? 'bg-[#FFD100] text-[#003057] shadow-lg shadow-[#FFD100]/50' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                    }
                  `}
                >
                  <MapPin className="w-6 h-6" />
                </div>

                {/* Label */}
                <div className={`
                  absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap
                  px-3 py-1 rounded-full text-sm transition-all duration-300
                  ${isSelected 
                    ? 'bg-[#FFD100] text-[#003057]' 
                    : 'bg-white/10 text-white'
                  }
                `}>
                  {neighborhood.label}
                  <div className="text-xs opacity-80">
                    {neighborhood.businesses} businesses
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

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
          disabled={!selectedNeighborhood}
          className="flex-1 bg-[#FFD100] text-[#003057] hover:bg-[#FFC000] disabled:opacity-50"
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}