import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PortfolioProvider } from './contexts/PortfolioContext';
import { AuthPage } from './components/auth/AuthPage';
import { Dashboard } from './components/dashboard/Dashboard';
import { PortfolioEditor } from './components/editor/PortfolioEditor';
import { useAuth } from './contexts/AuthContext';
import { usePortfolio } from './contexts/PortfolioContext';

const AppContent: React.FC = () => {
  const { currentUser } = useAuth();
  const { currentPortfolio } = usePortfolio();

  if (!currentUser) {
    return <AuthPage />;
  }

  if (currentPortfolio) {
    return <PortfolioEditor />;
  }

  return <Dashboard />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <PortfolioProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<AppContent />} />
            </Routes>
          </div>
        </PortfolioProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;