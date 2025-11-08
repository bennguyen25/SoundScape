import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InterestsScreen from './components/InterestsScreen';
import NeighborhoodScreen from './components/NeighborhoodScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import MemberDashboard from './components/MemberDashboard';
import BusinessDashboard from './components/BusinessDashboard';
import { api } from './utils/api';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [accountType, setAccountType] = useState<'member' | 'business'>('member');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [dataInitialized, setDataInitialized] = useState(false);

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
  };

  // Onboarding flow
  if (currentScreen === 'welcome') {
    return <WelcomeScreen onNext={() => setCurrentScreen('interests')} />;
  }

  if (currentScreen === 'interests') {
    return (
      <InterestsScreen
        selectedInterests={selectedInterests}
        onSelect={setSelectedInterests}
        onNext={() => setCurrentScreen('neighborhood')}
        onBack={() => setCurrentScreen('welcome')}
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