import { useState } from 'react';
import { Coffee, ShoppingBag, Utensils, Heart, MapPin, Filter, Camera, Star, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Slider } from './ui/slider';

interface SoundMapProps {
  neighborhood: string;
}

const businesses = [
  { id: 1, name: "Pike's Coffee House", category: 'Cafes', x: 45, y: 35, icon: Coffee, color: '#8B4513', deals: 2, distance: 0.3, rating: 4.8, reviews: 127 },
  { id: 2, name: 'Green Market Co-op', category: 'Markets', x: 65, y: 50, icon: ShoppingBag, color: '#059669', deals: 1, distance: 0.7, rating: 4.6, reviews: 89 },
  { id: 3, name: 'Serenity Yoga', category: 'Wellness', x: 30, y: 60, icon: Heart, color: '#DB2777', deals: 1, distance: 1.2, rating: 4.9, reviews: 203 },
  { id: 4, name: 'Harbor Grill', category: 'Dining', x: 55, y: 70, icon: Utensils, color: '#DC2626', deals: 3, distance: 0.5, rating: 4.7, reviews: 156 },
  { id: 5, name: 'Bean & Leaf Café', category: 'Cafes', x: 70, y: 30, icon: Coffee, color: '#8B4513', deals: 1, distance: 0.9, rating: 4.5, reviews: 98 },
  { id: 6, name: 'Pacific Wellness', category: 'Wellness', x: 40, y: 45, icon: Heart, color: '#DB2777', deals: 2, distance: 0.8, rating: 4.8, reviews: 145 },
  { id: 7, name: 'Local Eats Kitchen', category: 'Dining', x: 60, y: 55, icon: Utensils, color: '#DC2626', deals: 1, distance: 0.6, rating: 4.6, reviews: 112 },
  { id: 8, name: 'Farmers Market', category: 'Markets', x: 50, y: 40, icon: ShoppingBag, color: '#059669', deals: 4, distance: 0.4, rating: 4.9, reviews: 234 },
];

const mockReviews = [
  { id: 1, user: 'Sarah M.', rating: 5, comment: 'Love supporting local! Great rewards too.', date: '2 days ago', verified: true },
  { id: 2, user: 'Mike T.', rating: 4, comment: 'Excellent service and the cashback is awesome.', date: '1 week ago', verified: true },
  { id: 3, user: 'Jessica L.', rating: 5, comment: 'My go-to spot! Community feel is amazing.', date: '2 weeks ago', verified: true },
];

export default function SoundMap({ neighborhood }: SoundMapProps) {
  const [selectedBusiness, setSelectedBusiness] = useState<number | null>(null);
  const [hoveredBusiness, setHoveredBusiness] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [maxDistance, setMaxDistance] = useState([5]);
  const [showARView, setShowARView] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const filteredBusinesses = businesses.filter(business => {
    if (categoryFilter !== 'all' && business.category !== categoryFilter) return false;
    if (business.distance > maxDistance[0]) return false;
    return true;
  });

  const selected = businesses.find(b => b.id === selectedBusiness);

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Filters Bar */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Button
            variant={showFilters ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-[#003057]" : ""}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowARView(!showARView)}
            className={showARView ? "border-[#003057] text-[#003057]" : ""}
          >
            <Camera className="w-4 h-4 mr-2" />
            AR View
          </Button>
          <div className="ml-auto text-sm text-gray-600">
            {filteredBusinesses.length} places
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4 overflow-hidden"
            >
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Cafes">Cafes</SelectItem>
                    <SelectItem value="Markets">Markets</SelectItem>
                    <SelectItem value="Wellness">Wellness</SelectItem>
                    <SelectItem value="Dining">Dining</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Max Distance: {maxDistance[0]} mi
                </label>
                <Slider
                  value={maxDistance}
                  onValueChange={setMaxDistance}
                  min={0.5}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* AR View Mode */}
      {showARView && (
        <Card className="p-6 bg-gradient-to-br from-[#003057] to-[#0066B3] text-white">
          <div className="text-center">
            <Camera className="w-12 h-12 mx-auto mb-3 text-[#FFD100]" />
            <h4 className="mb-2">AR View Mode</h4>
            <p className="text-white/80 text-sm mb-4">
              Point your camera to see nearby businesses with real-time deals
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <div className="relative h-40 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-[#FFD100] border-dashed rounded-lg animate-pulse" />
                <p className="text-sm text-white/60">Camera view would appear here</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => setShowARView(false)}
            >
              Exit AR Mode
            </Button>
          </div>
        </Card>
      )}

      {/* Map Container */}
      {!showARView && (
        <Card className="p-4 bg-gradient-to-br from-[#003057] to-[#0066B3] border-none">
          <div className="relative h-[350px] bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
            {/* Map Grid Background */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {filteredBusinesses.map((business, index) => {
                const nextBusiness = filteredBusinesses[(index + 1) % filteredBusinesses.length];
                if (!nextBusiness) return null;
                return (
                  <motion.line
                    key={`line-${business.id}`}
                    x1={`${business.x}%`}
                    y1={`${business.y}%`}
                    x2={`${nextBusiness.x}%`}
                    y2={`${nextBusiness.y}%`}
                    stroke="#FFD100"
                    strokeWidth="2"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Business Nodes */}
            {filteredBusinesses.map((business, index) => {
              const Icon = business.icon;
              const isSelected = selectedBusiness === business.id;
              const isHovered = hoveredBusiness === business.id;

              return (
                <motion.button
                  key={business.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBusiness(business.id)}
                  onMouseEnter={() => setHoveredBusiness(business.id)}
                  onMouseLeave={() => setHoveredBusiness(null)}
                  className="absolute"
                  style={{
                    left: `${business.x}%`,
                    top: `${business.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Pulsing Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: index * 0.2
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      backgroundColor: '#FFD100',
                      width: '40px', 
                      height: '40px', 
                      left: '-10px', 
                      top: '-10px' 
                    }}
                  />

                  {/* Node */}
                  <div
                    className={`
                      relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${isSelected 
                        ? 'bg-[#FFD100] shadow-lg shadow-[#FFD100]/50' 
                        : 'bg-white/20 backdrop-blur-sm'
                      }
                    `}
                    style={{
                      borderWidth: isHovered ? '3px' : '2px',
                      borderColor: isSelected || isHovered ? '#FFD100' : 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Icon 
                      className="w-5 h-5" 
                      style={{ 
                        color: isSelected ? '#003057' : '#FFD100'
                      }} 
                    />
                  </div>

                  {/* Deal Count Badge */}
                  {business.deals > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-20"
                    >
                      {business.deals}
                    </motion.div>
                  )}

                  {/* Hover Label */}
                  {isHovered && !isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-[#003057] px-3 py-1 rounded-lg shadow-lg text-sm z-30"
                    >
                      {business.name}
                    </motion.div>
                  )}
                </motion.button>
              );
            })}

            {/* Location Indicator */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 text-white text-sm"
            >
              <MapPin className="w-4 h-4 text-[#FFD100]" />
              <span>{neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1)}</span>
            </motion.div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              { icon: Coffee, label: 'Cafes', color: '#8B4513' },
              { icon: ShoppingBag, label: 'Markets', color: '#059669' },
              { icon: Heart, label: 'Wellness', color: '#DB2777' },
              { icon: Utensils, label: 'Dining', color: '#DC2626' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Selected Business Details */}
      {selected && !showARView && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="mb-1">{selected.name}</h4>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">{selected.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{selected.rating}</span>
                    <span className="text-sm">({selected.reviews})</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-[#FFD100] text-[#003057] hover:bg-[#FFD100]">
                {selected.deals} {selected.deals === 1 ? 'Deal' : 'Deals'}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{selected.distance} mi away</span>
              </div>

              <div className="bg-[#FFD100]/10 rounded-lg p-4">
                <p className="text-sm text-[#003057]">
                  <span>Today's Special:</span> $2 cashback + 10 community points on all purchases
                </p>
              </div>

              {/* Reviews Toggle */}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowReviews(!showReviews)}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {showReviews ? 'Hide' : 'View'} Community Reviews
              </Button>

              <AnimatePresence>
                {showReviews && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-3 overflow-hidden"
                  >
                    {mockReviews.map((review) => (
                      <div key={review.id} className="border-t pt-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-[#003057] rounded-full flex items-center justify-center text-white text-sm">
                            {review.user.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{review.user}</span>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">Verified</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                              <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-[#003057] hover:bg-[#004B87]">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
