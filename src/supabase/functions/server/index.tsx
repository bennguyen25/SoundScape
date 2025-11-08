import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Get user profile
app.get('/make-server-224cbd01/profile/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const profile = await kv.get(`user:${userId}:profile`);
    
    if (!profile) {
      return c.json({ error: 'Profile not found' }, 404);
    }
    
    return c.json(profile);
  } catch (error) {
    console.log('Error fetching profile:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
});

// Update user profile
app.post('/make-server-224cbd01/profile/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const body = await c.req.json();
    
    await kv.set(`user:${userId}:profile`, body);
    
    return c.json({ success: true });
  } catch (error) {
    console.log('Error updating profile:', error);
    return c.json({ error: 'Failed to update profile' }, 500);
  }
});

// Get deals near location
app.get('/make-server-224cbd01/deals/:neighborhood', async (c) => {
  try {
    const neighborhood = c.req.param('neighborhood');
    const category = c.req.query('category');
    const maxDistance = c.req.query('maxDistance');
    
    const deals = await kv.getByPrefix(`deal:${neighborhood}`);
    
    let filteredDeals = deals;
    
    if (category && category !== 'all') {
      filteredDeals = deals.filter((deal: any) => deal.category.toLowerCase() === category.toLowerCase());
    }
    
    if (maxDistance) {
      const max = parseFloat(maxDistance);
      filteredDeals = filteredDeals.filter((deal: any) => deal.distance <= max);
    }
    
    return c.json(filteredDeals);
  } catch (error) {
    console.log('Error fetching deals:', error);
    return c.json({ error: 'Failed to fetch deals' }, 500);
  }
});

// Get business analytics
app.get('/make-server-224cbd01/business/:businessId/analytics', async (c) => {
  try {
    const businessId = c.req.param('businessId');
    const period = c.req.query('period') || 'week';
    
    const analytics = await kv.get(`business:${businessId}:analytics:${period}`);
    
    if (!analytics) {
      // Return default analytics if none exist
      return c.json({
        visits: [],
        revenue: [],
        redemptions: [],
        trafficPatterns: []
      });
    }
    
    return c.json(analytics);
  } catch (error) {
    console.log('Error fetching business analytics:', error);
    return c.json({ error: 'Failed to fetch analytics' }, 500);
  }
});

// Get AI insights for business
app.get('/make-server-224cbd01/business/:businessId/insights', async (c) => {
  try {
    const businessId = c.req.param('businessId');
    const timeOfDay = c.req.query('timeOfDay') || 'morning';
    
    const insights = await kv.get(`business:${businessId}:insights:${timeOfDay}`);
    
    if (!insights) {
      // Return default insights
      return c.json([
        {
          id: 1,
          title: 'Morning Traffic Opportunity',
          description: 'Your morning hours show potential for growth',
          suggestion: 'Launch an early bird special targeting local commuters',
          impact: '+25% projected increase',
          icon: 'Clock',
          timeRelevant: 'morning'
        }
      ]);
    }
    
    return c.json(insights);
  } catch (error) {
    console.log('Error fetching AI insights:', error);
    return c.json({ error: 'Failed to fetch insights' }, 500);
  }
});

// Schedule promotion
app.post('/make-server-224cbd01/business/:businessId/promotion', async (c) => {
  try {
    const businessId = c.req.param('businessId');
    const body = await c.req.json();
    
    const promotionId = `promo-${Date.now()}`;
    const promotion = {
      id: promotionId,
      businessId,
      ...body,
      createdAt: new Date().toISOString(),
      status: 'scheduled'
    };
    
    await kv.set(`promotion:${promotionId}`, promotion);
    await kv.set(`business:${businessId}:promotion:active`, promotion);
    
    return c.json({ success: true, promotion });
  } catch (error) {
    console.log('Error scheduling promotion:', error);
    return c.json({ error: 'Failed to schedule promotion' }, 500);
  }
});

// Get community impact
app.get('/make-server-224cbd01/community/:neighborhood/impact', async (c) => {
  try {
    const neighborhood = c.req.param('neighborhood');
    
    const impact = await kv.get(`community:${neighborhood}:impact`);
    
    if (!impact) {
      return c.json({
        totalSpent: 5432,
        activeMembers: 342,
        businessesSupported: 47
      });
    }
    
    return c.json(impact);
  } catch (error) {
    console.log('Error fetching community impact:', error);
    return c.json({ error: 'Failed to fetch community impact' }, 500);
  }
});

// Get reviews for business
app.get('/make-server-224cbd01/business/:businessId/reviews', async (c) => {
  try {
    const businessId = c.req.param('businessId');
    
    const reviews = await kv.getByPrefix(`review:${businessId}`);
    
    return c.json(reviews);
  } catch (error) {
    console.log('Error fetching reviews:', error);
    return c.json({ error: 'Failed to fetch reviews' }, 500);
  }
});

// Submit review
app.post('/make-server-224cbd01/business/:businessId/review', async (c) => {
  try {
    const businessId = c.req.param('businessId');
    const body = await c.req.json();
    
    const reviewId = `review-${Date.now()}`;
    const review = {
      id: reviewId,
      businessId,
      ...body,
      createdAt: new Date().toISOString()
    };
    
    await kv.set(`review:${businessId}:${reviewId}`, review);
    
    return c.json({ success: true, review });
  } catch (error) {
    console.log('Error submitting review:', error);
    return c.json({ error: 'Failed to submit review' }, 500);
  }
});

// Initialize sample data
app.post('/make-server-224cbd01/init-data', async (c) => {
  try {
    // Sample deals for Tacoma
    const tacomaDeals = [
      {
        id: 1,
        business: "Pike's Coffee House",
        category: 'Cafes',
        deal: '$2 cashback',
        points: 10,
        distance: 0.3,
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400',
        icon: 'Coffee',
        description: 'Cozy neighborhood café with artisanal coffee'
      },
      {
        id: 2,
        business: 'Green Market Co-op',
        category: 'Markets',
        deal: '5% off groceries',
        points: 15,
        distance: 0.7,
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400',
        icon: 'ShoppingBag',
        description: 'Local organic produce and sustainable goods'
      },
      {
        id: 3,
        business: 'Serenity Yoga Studio',
        category: 'Wellness',
        deal: 'Free first class',
        points: 20,
        distance: 1.2,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
        icon: 'Heart',
        description: 'Mind-body wellness for all experience levels'
      },
    ];
    
    for (const deal of tacomaDeals) {
      await kv.set(`deal:tacoma:${deal.id}`, deal);
    }
    
    // Sample business analytics
    const businessAnalytics = {
      visits: [
        { day: 'Mon', count: 45 },
        { day: 'Tue', count: 52 },
        { day: 'Wed', count: 48 },
        { day: 'Thu', count: 31 },
        { day: 'Fri', count: 67 },
        { day: 'Sat', count: 89 },
        { day: 'Sun', count: 76 }
      ],
      revenue: [
        { day: 'Mon', amount: 1240 },
        { day: 'Tue', amount: 1450 },
        { day: 'Wed', amount: 1320 },
        { day: 'Thu', amount: 890 },
        { day: 'Fri', amount: 2100 },
        { day: 'Sat', amount: 2800 },
        { day: 'Sun', amount: 2400 }
      ],
      trafficPatterns: [
        { hour: '6AM', traffic: 12 },
        { hour: '8AM', traffic: 45 },
        { hour: '10AM', traffic: 32 },
        { hour: '12PM', traffic: 78 },
        { hour: '2PM', traffic: 56 },
        { hour: '4PM', traffic: 43 },
        { hour: '6PM', traffic: 67 },
        { hour: '8PM', traffic: 34 }
      ]
    };
    
    await kv.set('business:jins-cafe:analytics:week', businessAnalytics);
    
    // Community impact
    await kv.set('community:tacoma:impact', {
      totalSpent: 5432,
      activeMembers: 342,
      businessesSupported: 47
    });
    
    return c.json({ success: true, message: 'Sample data initialized' });
  } catch (error) {
    console.log('Error initializing data:', error);
    return c.json({ error: 'Failed to initialize data' }, 500);
  }
});

Deno.serve(app.fetch);
