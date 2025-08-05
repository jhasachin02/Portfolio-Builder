import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { portfolioService } from '../services/portfolioService';

export interface PortfolioComponent {
  id: string;
  type: 'hero' | 'about' | 'projects' | 'contact' | 'skills' | 'experience';
  data: unknown;
  order: number;
}

export interface Portfolio {
  id: string;
  title: string;
  template: string;
  components: PortfolioComponent[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    font: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface PortfolioState {
  portfolios: Portfolio[];
  currentPortfolio: Portfolio | null;
  loading: boolean;
  error: string | null;
}

type PortfolioAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_PORTFOLIOS'; payload: Portfolio[] }
  | { type: 'SET_CURRENT_PORTFOLIO'; payload: Portfolio | null }
  | { type: 'ADD_PORTFOLIO'; payload: Portfolio }
  | { type: 'UPDATE_PORTFOLIO'; payload: Portfolio }
  | { type: 'DELETE_PORTFOLIO'; payload: string };

const initialState: PortfolioState = {
  portfolios: [],
  currentPortfolio: null,
  loading: false,
  error: null,
};

const portfolioReducer = (state: PortfolioState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_PORTFOLIOS':
      return { ...state, portfolios: action.payload };
    case 'SET_CURRENT_PORTFOLIO':
      return { ...state, currentPortfolio: action.payload };
    case 'ADD_PORTFOLIO':
      return { ...state, portfolios: [...state.portfolios, action.payload] };
    case 'UPDATE_PORTFOLIO':
      return {
        ...state,
        portfolios: state.portfolios.map(p => p.id === action.payload.id ? action.payload : p),
        currentPortfolio: state.currentPortfolio?.id === action.payload.id ? action.payload : state.currentPortfolio
      };
    case 'DELETE_PORTFOLIO':
      return {
        ...state,
        portfolios: state.portfolios.filter(p => p.id !== action.payload),
        currentPortfolio: state.currentPortfolio?.id === action.payload ? null : state.currentPortfolio
      };
    default:
      return state;
  }
};

interface PortfolioContextType extends PortfolioState {
  createPortfolio: (title: string, template: string) => Promise<void>;
  updatePortfolio: (portfolio: Portfolio) => Promise<void>;
  deletePortfolio: (id: string) => Promise<void>;
  loadPortfolios: () => Promise<void>;
  setCurrentPortfolio: (portfolio: Portfolio | null) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);
  const { currentUser } = useAuth();

  const createPortfolio = async (title: string, template: string) => {
    if (!currentUser) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const portfolio = await portfolioService.createPortfolio(currentUser.uid, title, template);
      dispatch({ type: 'ADD_PORTFOLIO', payload: portfolio });
    } catch {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to create portfolio' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updatePortfolio = async (portfolio: Portfolio) => {
    if (!currentUser) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const updated = await portfolioService.updatePortfolio(portfolio);
      dispatch({ type: 'UPDATE_PORTFOLIO', payload: updated });
    } catch {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update portfolio' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const deletePortfolio = async (id: string) => {
    if (!currentUser) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await portfolioService.deletePortfolio(id);
      dispatch({ type: 'DELETE_PORTFOLIO', payload: id });
    } catch {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to delete portfolio' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const loadPortfolios = async () => {
    if (!currentUser) {
      console.log('No currentUser in loadPortfolios');
      return;
    }
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const portfolios = await portfolioService.getUserPortfolios(currentUser.uid);
      console.log('Loaded portfolios:', portfolios);
      dispatch({ type: 'SET_PORTFOLIOS', payload: portfolios });
    } catch (e) {
      console.error('Error loading portfolios:', e);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load portfolios' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
      console.log('Finished loadPortfolios');
    }
  };

  const setCurrentPortfolio = (portfolio: Portfolio | null) => {
    dispatch({ type: 'SET_CURRENT_PORTFOLIO', payload: portfolio });
  };

  useEffect(() => {
    if (currentUser) {
      loadPortfolios();
    }
  }, [currentUser, loadPortfolios]);

  const value = {
    ...state,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    loadPortfolios,
    setCurrentPortfolio,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};