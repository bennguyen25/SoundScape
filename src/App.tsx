import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InterestsScreen from './components/InterestsScreen';
import NeighborhoodScreen from './components/NeighborhoodScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import MemberDashboard from './components/MemberDashboard';
import BusinessDashboard from './components/BusinessDashboard';
import LoginScreen from './components/LoginScreen';
import BusinessSignupScreen from './components/BusinessSignupScreen';
import BusinessCategoryScreen from './components/BusinessCategoryScreen';
import BusinessGoalScreen from './components/BusinessGoalScreen';
import { api } from './utils/api';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [accountType, setAccountType] = useState<'member' | 'business'>('member');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [dataInitialized, setDataInitialized] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [businessCategory, setBusinessCategory] = useState('');
  const [businessGoal, setBusinessGoal] = useState('');

  useEffect(() => {
    // Initialize sample data on mount
    const initData = async () => {
      try {
        await api.initializeData();
        setDataInitialized(true);
        console.log('Sample data initialized successfully');
      } catch (error) {
        console.error('Error initializing data:', error);
      }
    };
    
    if (!dataInitialized) {
      initData();
    }
  }, []);

  const handleLogin = (email: string, password: string, name: string) => {
    setUserEmail(email);
    setUserName(name);
    setAccountType('member');
    setCurrentScreen('interests');
  };

  const handleBusinessSignup = (business: string, location: string) => {
    setBusinessName(business);
    setBusinessLocation(location);
    setAccountType('business');
    setCurrentScreen('business-category');
  };

  const handleBusinessCategory = (category: string) => {
    setBusinessCategory(category);
    setCurrentScreen('business-goal');
  };

  const handleBusinessGoal = (goal: string) => {
    setBusinessGoal(goal);
    setCurrentScreen('dashboard');
  };

  const handleComplete = () => {
    setCurrentScreen('dashboard');
  };

  const toggleAccountType = () => {
    setAccountType(prev => prev === 'member' ? 'business' : 'member');
  };

  const handleLogout = () => {
    // Reset to welcome screen
    setCurrentScreen('welcome');
    setSelectedInterests([]);
    setSelectedNeighborhood('');
    setAccountType('member');
    setUserEmail('');
    setUserName('');
    setBusinessName('');
    setBusinessLocation('');
    setBusinessCategory('');
    setBusinessGoal('');
  };

  // Onboarding flow
  if (currentScreen === 'welcome') {
    return <WelcomeScreen onNext={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'login') {
    return (
      <LoginScreen
        onLogin={handleLogin}
        onBack={() => setCurrentScreen('welcome')}
        onSwitchToBusiness={() => setCurrentScreen('business-signup')}
      />
    );
  }

  if (currentScreen === 'business-signup') {
    return (
      <BusinessSignupScreen
        onSignup={handleBusinessSignup}
        onBack={() => setCurrentScreen('welcome')}
        onSwitchToMember={() => setCurrentScreen('login')}
      />
    );
  }

  if (currentScreen === 'business-category') {
    return (
      <BusinessCategoryScreen
        onNext={handleBusinessCategory}
        onBack={() => setCurrentScreen('business-signup')}
      />
    );
  }

  if (currentScreen === 'business-goal') {
    return (
      <BusinessGoalScreen
        onComplete={handleBusinessGoal}
        onBack={() => setCurrentScreen('business-category')}
      />
    );
  }

  if (currentScreen === 'interests') {
    return (
      <InterestsScreen
        selectedInterests={selectedInterests}
        onSelect={setSelectedInterests}
        onNext={() => setCurrentScreen('neighborhood')}
        onBack={() => setCurrentScreen('login')}
      />
    );
  }

  if (currentScreen === 'neighborhood') {
    return (
      <NeighborhoodScreen
        selectedNeighborhood={selectedNeighborhood}
        onSelect={setSelectedNeighborhood}
        onNext={() => setCurrentScreen('confirmation')}
        onBack={() => setCurrentScreen('interests')}
      />
    );
  }

  if (currentScreen === 'confirmation') {
    return (
      <ConfirmationScreen
        onComplete={handleComplete}
      />
    );
  }

  // Main app
  return (
    <div className="min-h-screen bg-gray-50">
      {accountType === 'member' ? (
        <MemberDashboard
          interests={selectedInterests}
          neighborhood={selectedNeighborhood}
          onToggleAccount={toggleAccountType}
          onLogout={handleLogout}
        />
      ) : (
        <BusinessDashboard
          onToggleAccount={toggleAccountType}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}