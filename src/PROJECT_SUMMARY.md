# SoundScape - AI-Powered Community Finance Platform

## Overview
SoundScape is a mobile-first web application connecting Sound Credit Union members with local Washington businesses through personalized rewards, AI-driven insights, and an interactive community map.

## Key Features

### 🎯 Member Experience
- **Onboarding Flow**: 4-screen guided setup (Welcome → Interests → Neighborhood → Confirmation)
- **Personalized Deals**: Local business offers based on member interests and location
- **Community Impact Tracking**: Real-time neighborhood spending metrics
- **Cashback & Points System**: Earn rewards on every transaction
- **Interactive SoundMap**: Visual map showing partnered businesses with:
  - Category filters (Cafes, Markets, Wellness, Dining)
  - Distance slider (0.5 - 5 miles)
  - AR View mode for camera-based discovery
  - Community reviews and ratings
  - Deal notifications

### 💼 Business Owner Experience
- **AI-Powered Insights**: Time-based recommendations that rotate:
  - Morning insights (6 AM - 12 PM)
  - Afternoon insights (12 PM - 5 PM)
  - Evening insights (5 PM - midnight)
- **Detailed Analytics**: Interactive charts showing:
  - Traffic patterns by hour
  - Weekly revenue trends
  - Customer demographics
- **Promotion Scheduling**: Direct creation of targeted offers from AI suggestions
- **Loyalty Credits**: Points system to offset processing fees

### 🔄 Seamless Account Switching
- Toggle between Member and Business views with one click
- Maintains context and preferences across account types

## Technical Architecture

### Frontend
- **React** with TypeScript
- **Motion (Framer Motion)** for animations
- **Tailwind CSS** for styling (Sound CU theme: Blue #003057/#0066B3, Yellow #FFD100)
- **Recharts** for data visualization
- **shadcn/ui** component library

### Backend (Supabase)
- **Edge Functions** (Hono web server)
- **Key-Value Store** for data persistence
- **REST API** endpoints:
  - `/profile/:userId` - User profile management
  - `/deals/:neighborhood` - Location-based deals with filters
  - `/business/:businessId/analytics` - Business metrics
  - `/business/:businessId/insights` - AI recommendations
  - `/business/:businessId/promotion` - Promotion scheduling
  - `/community/:neighborhood/impact` - Community statistics
  - `/business/:businessId/reviews` - Review management

### Mobile-First Design
- Optimized for mobile web experience
- Max-width containers for optimal viewing
- Touch-friendly interactions
- Responsive layouts

## Color Palette
- **Primary Blue**: `#003057`
- **Secondary Blue**: `#0066B3`
- **Accent Yellow**: `#FFD100`
- **Hover Yellow**: `#FFC000`

## Data Flow
1. App initializes sample data on first load
2. Member selects interests and neighborhood during onboarding
3. Dashboard displays personalized deals based on preferences
4. Business owners receive time-sensitive AI insights
5. All interactions tracked for community impact metrics

## Key Components

### Member Components
- `WelcomeScreen.tsx` - Animated welcome with brand colors
- `InterestsScreen.tsx` - Multi-select interest picker
- `NeighborhoodScreen.tsx` - Interactive Washington map
- `ConfirmationScreen.tsx` - Animated completion with SoundMap preview
- `MemberDashboard.tsx` - Main member interface
- `SoundMap.tsx` - Interactive business map with filters and reviews

### Business Components
- `BusinessDashboard.tsx` - Analytics and AI insights interface

### Utilities
- `api.ts` - Supabase backend integration
- `/supabase/functions/server/index.tsx` - Edge function routes

## Future Enhancements
- Real-time push notifications for nearby deals
- Social sharing of community impact
- Gamification with achievement badges
- Integration with Sound CU banking data
- Machine learning for smarter recommendations
- Actual AR implementation using device camera
