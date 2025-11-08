import { useState } from 'react';
import { TrendingUp, MapPin, Sparkles, ArrowLeftRight, Map, Grid3x3, LogOut, DollarSign, Users, ShoppingBag, Coffee, Utensils } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import SoundMap from './SoundMap';

interface MemberDashboardProps {
  interests: string[];
  neighborhood: string;
  onToggleAccount: () => void;
  onLogout?: () => void;
}

const mockDeals = [
  {
    id: 1,
    business: "Ballard Coffee Works",
    category: "Coffee",
    deal: "15% off",
    points: 25,
    distance: "0.3 mi",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    business: "Pike Place Market",
    category: "Shopping",
    deal: "10% cashback",
    points: 50,
    distance: "0.5 mi",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    business: "Seafood Grill",
    category: "Dining",
    deal: "20% off dinner",
    points: 75,
    distance: "0.8 mi",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop"
  }
];

export default function MemberDashboard({ interests, neighborhood, onToggleAccount, onLogout }: MemberDashboardProps) {
  const [activeView, setActiveView] = useState<'deals' | 'map'>('deals');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [distanceFilter, setDistanceFilter] = useState(5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003057] to-[#0066B3] text-white p-6 pb-24">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="mb-1">Hi, Emma!</h1>
              <p className="text-white/80">Sound CU Member</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={onToggleAccount}
                size="sm"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Business
              </Button>
              {onLogout && (
                <Button
                  onClick={onLogout}
                  size="sm"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-[#FFD100]" />
                <span className="text-sm text-white/80">Cashback</span>
              </div>
              <div>
                <span className="text-sm">$</span>47.50
              </div>
              <p className="text-xs text-white/60 mt-1">This month</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#FFD100]" />
                <span className="text-sm text-white/80">Points</span>
              </div>
              <div>1,245</div>
              <p className="text-xs text-white/60 mt-1">+85 this week</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Impact Banner */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 mb-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-[#FFD100] to-[#FFC000] rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="bg-[#003057] rounded-full p-3">
              <TrendingUp className="w-6 h-6 text-[#FFD100]" />
            </div>
            <div className="flex-1">
              <div className="mb-1">Community Impact</div>
              <p className="text-[#003057]/80 text-sm">
                {neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1)} neighborhood: <span>+$5,432 this month!</span>
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-[#003057]/70">
                <Users className="w-4 h-4" />
                <span>342 members contributing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* View Toggle */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setActiveView('deals')}
            className={`flex-1 py-2 px-4 rounded-md transition-all ${
              activeView === 'deals'
                ? 'bg-[#003057] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShoppingBag className="w-4 h-4 inline mr-2" />
            Local Deals
          </button>
          <button
            onClick={() => setActiveView('map')}
            className={`flex-1 py-2 px-4 rounded-md transition-all ${
              activeView === 'map'
                ? 'bg-[#003057] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            SoundMap
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        {activeView === 'deals' ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3>Deals Near You</h3>
                <p className="text-gray-600">Based on your interests</p>
              </div>
            </div>

            <div className="space-y-4">
              {mockDeals.map((deal, index) => {
                const Icon = deal.icon;
                return (
                  <motion.div
                    key={deal.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex gap-4 p-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                          <img
                            src={deal.image}
                            alt={deal.business}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <h4 className="mb-1">{deal.business}</h4>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Icon className="w-4 h-4" />
                                <span className="text-sm">{deal.category}</span>
                                <span className="text-sm">• {deal.distance}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge className="bg-[#FFD100] text-[#003057] hover:bg-[#FFC000]">
                              {deal.deal}
                            </Badge>
                            <Badge variant="outline" className="border-[#003057] text-[#003057]">
                              +{deal.points} pts
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <h3>Your SoundMap</h3>
              <p className="text-gray-600">Explore partnered businesses in your area</p>
            </div>
            <SoundMap neighborhood={neighborhood} />
          </div>
        )}
      </div>
    </div>
  );
}