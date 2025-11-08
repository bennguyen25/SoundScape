import { useState } from 'react';
import { Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-3wo6a9ym9g';

interface LoginScreenProps {
  onLogin: (email: string, password: string, name: string) => void;
  onBack: () => void;
  onSwitchToBusiness: () => void;
}

export default function LoginScreen({ onLogin, onBack, onSwitchToBusiness }: LoginScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    if (name && email && password) {
      onLogin(email, password, name);
    }
  };

  const isFormValid = name.trim() && email.trim() && password.trim();

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#003057] to-[#0066B3] px-6 pt-18 pb-8"
      style={{ backgroundImage: "linear-gradient(rgb(0, 48, 87) 0%, rgb(0, 102, 179) 100%)" }}
    >
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 mt-12"
        >
          <div className="flex justify-center mb-12">
            <div className="bg-[#FFD100] px-6 py-2 rounded-full">
              <p className="text-[#003057] text-center">Step 1 of 3</p>
            </div>
          </div>

          <h1 className="text-2xl text-center text-white mb-2">Connect Your Account</h1>
          <p className="text-center text-white/80">Sign in to Sound Credit Union</p>
        </motion.div>

        {/* Secure Connection Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[rgba(255,209,0,0.1)] border border-[rgba(255,209,0,0.2)] rounded-lg p-4 mb-6 flex gap-3"
        >
          <div className="shrink-0">
            <svg className="w-[13.6px] h-[13.6px]" fill="none" viewBox="0 0 14 14">
              <g clipPath="url(#clip0)">
                <path d={svgPaths.p261bb000} stroke="#FFD100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13337" />
                <path d={svgPaths.p148aaf00} stroke="#FFD100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13337" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect fill="white" height="13.6004" width="13.6004" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p className="text-white/90 mb-1">Secure Connection</p>
            <p className="text-sm text-white/70">Your credentials are encrypted and never stored</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-2xl p-6 mb-8"
        >
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <Label htmlFor="name" className="text-white text-sm mb-2">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-white/50 h-9"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-white text-sm mb-2">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="member@soundcu.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-white/50 h-9"
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-white text-sm mb-2">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white placeholder:text-white/50 h-9"
              />
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-6 space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#FFD100] mt-0.5 shrink-0" />
              <p className="text-sm text-white/70">Bank-level encryption</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#FFD100] mt-0.5 shrink-0" />
              <p className="text-sm text-white/70">NCUA Insured</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#FFD100] mt-0.5 shrink-0" />
              <p className="text-sm text-white/70">Privacy guaranteed</p>
            </div>
          </div>
        </motion.div>

        {/* Business Signup Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <button
            onClick={onSwitchToBusiness}
            className="text-white/80 hover:text-white text-sm underline"
          >
            Business owner? Sign up here
          </button>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1 bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.2)] h-9"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!isFormValid}
            className={`flex-1 h-9 ${
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
