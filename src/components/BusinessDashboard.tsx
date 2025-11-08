import { useState, useEffect } from 'react';
import { ArrowLeftRight, TrendingUp, Users, Calendar, Sparkles, Clock, Target, DollarSign, BarChart3, X, LogOut, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import CommunityImpact from './CommunityImpact';

interface BusinessDashboardProps {
  onToggleAccount: () => void;
  onLogout?: () => void;
}

const trafficData = [
  { hour: '6AM', traffic: 12 },
  { hour: '8AM', traffic: 45 },
  { hour: '10AM', traffic: 32 },
  { hour: '12PM', traffic: 78 },
  { hour: '2PM', traffic: 56 },
  { hour: '4PM', traffic: 43 },
  { hour: '6PM', traffic: 67 },
  { hour: '8PM', traffic: 34 }
];

const revenueData = [
  { day: 'Mon', amount: 1240 },
  { day: 'Tue', amount: 1450 },
  { day: 'Wed', amount: 1320 },
  { day: 'Thu', amount: 890 },
  { day: 'Fri', amount: 2100 },
  { day: 'Sat', amount: 2800 },
  { day: 'Sun', amount: 2400 }
];

const insightsByTime = {
  morning: [
    {
      id: 1,
      title: 'Early Bird Opportunity',
      description: 'Your 6-9 AM slot shows 45% lower foot traffic than competitors',
      suggestion: 'Launch "Sunrise Special" - 15% off for Sound CU cardholders before 9 AM',
      impact: '+55% projected morning increase',
      icon: Clock,
    },
    {
      id: 2,
      title: 'Commuter Target',
      description: 'Nearby office workers commute through your area 7-8:30 AM',
      suggestion: 'Quick grab-and-go breakfast combo with 20% off',
      impact: '89 potential new customers',
      icon: Users,
    }
  ],
  afternoon: [
    {
      id: 1,
      title: 'Lunch Rush Optimization',
      description: 'Your 12-2 PM capacity is only at 60%, peak opportunity window',
      suggestion: 'Launch "Lunch Club" - loyalty card for repeat visitors with $2 cashback',
      impact: '+40% projected lunch traffic',
      icon: Target,
    },
    {
      id: 2,
      title: 'Student Demographic',
      description: 'University students are most active 12-2 PM on weekdays',
      suggestion: 'Create "Study Break Special" with 10% student discount',
      impact: '128 potential customers nearby',
      icon: Users,
    }
  ],
  evening: [
    {
      id: 1,
      title: 'Dinner Time Slowdown',
      description: 'Your Thursday 5-8 PM slot shows 35% lower foot traffic',
      suggestion: 'Launch "Weeknight Wind-Down" - 2-for-1 appetizers for Sound CU members',
      impact: '+45% projected evening increase',
      icon: Clock,
    },
    {
      id: 2,
      title: 'Date Night Opportunity',
      description: 'Friday & Saturday evenings see 60% couples in nearby restaurants',
      suggestion: 'Special couples menu with complimentary dessert',
      impact: 'Estimated +$1,200/weekend',
      icon: DollarSign,
    }
  ]
};

export default function BusinessDashboard({ onToggleAccount, onLogout }: BusinessDashboardProps) {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening'>('afternoon');
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showPromotionDialog, setShowPromotionDialog] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);
  const [showCommunityImpact, setShowCommunityImpact] = useState(false);
  const [promotionForm, setPromotionForm] = useState({
    title: '',
    discount: '',
    startTime: '',
    endTime: '',
    days: []
  });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 17) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }

    // Rotate insights every 30 seconds for demo
    const interval = setInterval(() => {
      setTimeOfDay(prev => {
        if (prev === 'morning') return 'afternoon';
        if (prev === 'afternoon') return 'evening';
        return 'morning';
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const currentInsights = insightsByTime[timeOfDay];

  const handleLaunchPromotion = (insight: any) => {
    setSelectedInsight(insight);
    setPromotionForm({
      title: insight.suggestion,
      discount: '10',
      startTime: '08:00',
      endTime: '11:00',
      days: []
    });
    setShowPromotionDialog(true);
  };

  const handleSchedulePromotion = () => {
    console.log('Scheduling promotion:', promotionForm);
    // Here we would call the backend API
    setShowPromotionDialog(false);
    // Show success message
  };

  // Show Community Impact page
  if (showCommunityImpact) {
    return <CommunityImpact onBack={() => setShowCommunityImpact(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#003057] to-[#0066B3] text-white p-6 pb-24">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="mb-1">Jin's Café</h1>
              <p className="text-white/80">Business Owner</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={onToggleAccount}
                size="sm"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Member
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
          <div className="grid grid-cols-3 gap-3">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-3">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-[#FFD100]" />
                <span className="text-xs text-white/80">Visits</span>
              </div>
              <div className="text-lg">342</div>
              <p className="text-xs text-white/60">This month</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-3">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-[#FFD100]" />
                <span className="text-xs text-white/80">Revenue</span>
              </div>
              <div className="text-lg">
                <span className="text-sm">$</span>12.4k
              </div>
              <p className="text-xs text-white/60">+23%</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-3">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#FFD100]" />
                <span className="text-xs text-white/80">Credits</span>
              </div>
              <div className="text-lg">850</div>
              <p className="text-xs text-white/60">pts earned</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Active Promotion */}
      <div className="max-w-md mx-auto px-6 -mt-16 mb-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-4 shadow-lg border-2 border-[#FFD100]"
        >
          <div className="flex items-start gap-3">
            <div className="bg-[#FFD100] rounded-full p-2">
              <TrendingUp className="w-5 h-5 text-[#003057]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm">Active Promotion</h4>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">Live</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                "Coffee Karma Thursdays" - 10% off, 8-11 AM
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                  <Users className="w-3 h-3 text-[#003057]" />
                  <span>47 redemptions</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span>+92% traffic</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Analytics Button */}
      <div className="max-w-md mx-auto px-6 mb-4">
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => setShowAnalytics(!showAnalytics)}
            variant="outline"
            className="w-full"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            {showAnalytics ? 'Hide' : 'View'} Analytics
          </Button>
          <Button
            onClick={() => setShowCommunityImpact(true)}
            variant="outline"
            className="w-full"
          >
            <Heart className="w-4 h-4 mr-2" />
            Impact
          </Button>
        </div>
      </div>

      {/* Analytics Charts */}
      <AnimatePresence>
        {showAnalytics && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-w-md mx-auto px-6 mb-6 space-y-4 overflow-hidden"
          >
            <Card className="p-4">
              <h4 className="mb-3">Traffic Patterns</h4>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" style={{ fontSize: '12px' }} />
                  <YAxis style={{ fontSize: '12px' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="traffic" stroke="#003057" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-4">
              <h4 className="mb-3">Weekly Revenue</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" style={{ fontSize: '12px' }} />
                  <YAxis style={{ fontSize: '12px' }} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#FFD100" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Insights */}
      <div className="max-w-md mx-auto px-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#003057]" />
            <h3>AI Insights</h3>
          </div>
          <Badge variant="outline" className="text-xs">
            {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
          </Badge>
        </div>

        <div className="space-y-4">
          {currentInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={`${timeOfDay}-${insight.id}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex gap-3">
                    <div className="bg-[#003057]/10 rounded-lg p-2 h-fit">
                      <Icon className="w-5 h-5 text-[#003057]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 text-sm">{insight.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                      
                      <div className="bg-[#FFD100]/10 border border-[#FFD100]/30 rounded-lg p-3 mb-3">
                        <div className="flex items-start gap-2 mb-1">
                          <Sparkles className="w-3 h-3 text-[#003057] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[#003057]">{insight.suggestion}</p>
                        </div>
                        <p className="text-xs text-gray-600 ml-5">
                          Impact: {insight.impact}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-[#003057] hover:bg-[#004B87] text-xs"
                          onClick={() => handleLaunchPromotion(insight)}
                        >
                          Launch Promotion
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Loyalty Program Info */}
        <Card className="mt-6 p-4 bg-gradient-to-r from-[#003057] to-[#0066B3] text-white">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#FFD100] flex-shrink-0 mt-1" />
            <div className="flex-1 min-w-0">
              <h4 className="mb-2 text-sm">Processing Fee Credit</h4>
              <p className="text-xs text-white/80 mb-3">
                Your loyalty points can offset next quarter's processing fees
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-[#FFD100]">850 points</span>
                  <span className="text-white/60">/ 1000 needed</span>
                </div>
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div className="bg-[#FFD100] h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Promotion Scheduling Dialog */}
      <Dialog open={showPromotionDialog} onOpenChange={setShowPromotionDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule Promotion</DialogTitle>
            <DialogDescription>
              Set up a new promotion to boost your business.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Promotion Title</Label>
              <Input
                value={promotionForm.title}
                onChange={(e) => setPromotionForm({ ...promotionForm, title: e.target.value })}
                placeholder="e.g., Coffee Karma Thursdays"
              />
            </div>
            
            <div>
              <Label>Discount Percentage</Label>
              <Input
                type="number"
                value={promotionForm.discount}
                onChange={(e) => setPromotionForm({ ...promotionForm, discount: e.target.value })}
                placeholder="10"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Start Time</Label>
                <Input
                  type="time"
                  value={promotionForm.startTime}
                  onChange={(e) => setPromotionForm({ ...promotionForm, startTime: e.target.value })}
                />
              </div>
              <div>
                <Label>End Time</Label>
                <Input
                  type="time"
                  value={promotionForm.endTime}
                  onChange={(e) => setPromotionForm({ ...promotionForm, endTime: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label>Target Days</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekdays">Weekdays</SelectItem>
                  <SelectItem value="weekends">Weekends</SelectItem>
                  <SelectItem value="all">All Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-[#FFD100]/10 rounded-lg p-3">
              <p className="text-sm text-[#003057]">
                <span>Estimated Impact:</span> {selectedInsight?.impact}
              </p>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSchedulePromotion} className="flex-1 bg-[#003057]">
                Schedule Promotion
              </Button>
              <Button variant="outline" onClick={() => setShowPromotionDialog(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}