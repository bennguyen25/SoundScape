import { ArrowLeft, Trophy, Users, Building, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';

interface CommunityImpactProps {
  onBack: () => void;
}

const neighborhoodData = [
  { 
    rank: 1, 
    name: 'Tacoma', 
    icon: '🌊', 
    amount: '$34,200', 
    growth: '+12%', 
    members: 342,
    isTop: true 
  },
  { 
    rank: 2, 
    name: 'Bellingham', 
    icon: '🌲', 
    amount: '$28,600', 
    growth: '+8%', 
    members: 286 
  },
  { 
    rank: 3, 
    name: 'Seattle', 
    icon: '🏙️', 
    amount: '$41,400', 
    growth: '+15%', 
    members: 414 
  },
  { 
    rank: 4, 
    name: 'Spokane', 
    icon: '✨', 
    amount: '$19,800', 
    growth: '+6%', 
    members: 198 
  },
];

export default function CommunityImpact({ onBack }: CommunityImpactProps) {
  const totalReinvested = 104000;
  const quarterGoal = 150000;
  const percentComplete = (totalReinvested / quarterGoal) * 100;
  const remaining = quarterGoal - totalReinvested;
  const growthPercent = 18;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#003057] to-[#0066B3] text-white px-6 pt-6 pb-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-2 h-auto"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl">Community Impact</h1>
          </div>
          <p className="text-white/80 text-sm">See how Washington thrives together</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 pb-8">
        {/* SoundScore Circle */}
        <Card className="bg-white mt-6 p-6 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-[#003057] mb-6">SoundScore</h3>
          </div>

          {/* Circular Progress */}
          <div className="relative w-64 h-64 mx-auto mb-6">
            {/* Background circles */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              {/* Background ring */}
              <circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="16"
              />
              {/* Progress ring */}
              <motion.circle
                cx="128"
                cy="128"
                r="110"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={691.15}
                initial={{ strokeDashoffset: 691.15 }}
                animate={{ strokeDashoffset: 691.15 - (691.15 * 0.69) }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD100" />
                  <stop offset="100%" stopColor="#FFC000" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl text-[#003057] mb-2">
                  ${(totalReinvested / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-[#4a5565] mb-2">reinvested locally</div>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full">
                  <span className="text-xs text-[#008236]">
                    +{growthPercent}% this quarter
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#4a5565] text-center text-sm">
            Together, Sound CU members and local partners have reinvested{' '}
            <span className="font-medium text-[#003057]">
              ${totalReinvested.toLocaleString()}
            </span>{' '}
            into Washington businesses this quarter.
          </p>
        </Card>

        {/* Quarterly Goal */}
        <Card className="bg-white mt-6 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#003057]">Quarterly Goal</h3>
            <div className="text-sm text-[#4a5565]">
              ${totalReinvested.toLocaleString()} / ${quarterGoal.toLocaleString()}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-100 h-4 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FFD100] to-[#FFC000] relative"
              initial={{ width: 0 }}
              animate={{ width: `${percentComplete}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
          </div>

          <p className="text-xs text-[#6a7282]">
            ${remaining.toLocaleString()} to go!
          </p>
        </Card>

        {/* Neighborhood Leaderboard */}
        <Card className="bg-white mt-6 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-b from-[#003057] to-[#0066B3] px-5 py-5">
            <div className="flex items-center gap-2 text-white">
              <Trophy className="w-5 h-5" />
              <h3 className="text-lg">Neighborhood Leaderboard</h3>
            </div>
          </div>

          {/* Leaderboard Items */}
          <div className="p-5 space-y-3">
            {neighborhoodData.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex items-center gap-4 p-4 rounded-xl border-2 transition-all
                  ${neighborhood.isTop 
                    ? 'bg-gradient-to-r from-[#FFD100]/10 to-[#FFC000]/10 border-[#FFD100]' 
                    : 'bg-gray-50 border-transparent'
                  }
                `}
              >
                {/* Rank or Trophy */}
                <div className="flex-shrink-0">
                  {neighborhood.isTop ? (
                    <div className="w-10 h-10 bg-[#FFD100] rounded-full flex items-center justify-center text-lg">
                      🏆
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center text-[#4a5565]">
                      #{neighborhood.rank}
                    </div>
                  )}
                </div>

                {/* Neighborhood Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{neighborhood.icon}</span>
                    <span className="text-[#003057]">{neighborhood.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#4a5565]">{neighborhood.amount}</span>
                    <span className="text-xs text-[#00a63e]">{neighborhood.growth}</span>
                  </div>
                </div>

                {/* Members */}
                <div className="flex items-center gap-1 text-[#6a7282]">
                  <Users className="w-4 h-4" />
                  <div className="text-right">
                    <div className="text-sm">{neighborhood.members}</div>
                    <div className="text-xs">members</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card className="bg-white p-6 text-center shadow-sm">
            <TrendingUp className="w-8 h-8 text-[#0066B3] mx-auto mb-3" />
            <div className="text-3xl text-[#003057] mb-1">892</div>
            <div className="text-sm text-[#4a5565]">Active Businesses</div>
          </Card>

          <Card className="bg-white p-6 text-center shadow-sm">
            <Users className="w-8 h-8 text-[#0066B3] mx-auto mb-3" />
            <div className="text-3xl text-[#003057] mb-1">12.4K</div>
            <div className="text-sm text-[#4a5565]">Active Members</div>
          </Card>
        </div>
      </div>
    </div>
  );
}