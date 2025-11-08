import { useState } from 'react';
import { Store, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-izw5bwkppm';

interface BusinessSignupScreenProps {
  onSignup: (businessName: string, location: string) => void;
  onBack: () => void;
  onSwitchToMember: () => void;
}

export default function BusinessSignupScreen({ onSignup, onBack, onSwitchToMember }: BusinessSignupScreenProps) {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');

  const handleContinue = () => {
    if (businessName && location) {
      onSignup(businessName, location);
    }
  };

  const isFormValid = businessName.trim() && location.trim();

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#003057] to-[#0066B3] px-4 pt-12 pb-8"
      style={{ backgroundImage: "linear-gradient(rgb(0, 48, 87) 0%, rgb(0, 102, 179) 100%)" }}
    >
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <div className="flex justify-center mb-10">
            <div className="bg-[#FFD100] px-6 py-1.5 rounded-full">
              <p className="text-sm text-[#003057] text-center">Step 1 of 3</p>
            </div>
          </div>

          <h1 className="text-2xl text-center text-white mb-2">Join SoundScape</h1>
          <p className="text-sm text-center text-white/80">Reach Sound CU members effortlessly</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-2xl p-4 mb-6 shadow-sm"
        >
          {/* Business Information Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#FFD100] rounded-full p-2.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <g clipPath="url(#clip0_business)">
                  <path d={svgPaths.p1ec5cf40} stroke="#003057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
                  <path d={svgPaths.p11e00b80} stroke="#003057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
                  <path d={svgPaths.p2f48f400} stroke="#003057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66611" />
                </g>
                <defs>
                  <clipPath id="clip0_business">
                    <rect fill="white" height="19.9933" width="19.9933" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-white">Business Information</h3>
          </div>

          <div className="space-y-4">
            {/* Business Name */}
            <div>
              <Label htmlFor="businessName" className="text-white/90 text-sm mb-2">Business Name</Label>
              <Input
                id="businessName"
                type="text"
                placeholder="e.g., Olympia Coffee Roasters"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-white/50 h-12"
              />
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location" className="text-white/90 text-sm mb-2">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <Input
                  id="location"
                  type="text"
                  placeholder="Enter your address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-white/50 h-12 pl-10"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Member Login Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <button
            onClick={onSwitchToMember}
            className="text-white/80 hover:text-white text-sm underline"
          >
            Already a member? Sign in here
          </button>
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
            onClick={handleContinue}
            disabled={!isFormValid}
            className={`flex-1 h-12 ${
              isFormValid
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
