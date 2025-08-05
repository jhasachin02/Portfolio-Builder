import { db } from '../config/firebase';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Portfolio, PortfolioComponent } from '../contexts/PortfolioContext';

const getDefaultComponents = (): PortfolioComponent[] => {
  const baseComponents = [
    {
      id: uuidv4(),
      type: 'hero' as const,
      data: {
        name: 'Your Name',
        title: 'Professional Title',
        description: 'Brief description about yourself',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      order: 0
    },
    {
      id: uuidv4(),
      type: 'about' as const,
      data: {
        title: 'About Me',
        content: 'Tell your story here...',
        image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      order: 1
    },
    {
      id: uuidv4(),
      type: 'projects' as const,
      data: {
        title: 'Projects',
        projects: [
          {
            id: uuidv4(),
            title: 'Project 1',
            description: 'Project description',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '#'
          }
        ]
      },
      order: 2
    },
    {
      id: uuidv4(),
      type: 'contact' as const,
      data: {
        title: 'Contact Me',
        email: 'your.email@example.com',
        phone: '+1 (555) 123-4567',
        social: {
          linkedin: '',
          github: '',
          twitter: ''
        }
      },
      order: 3
    }
  ];

  return baseComponents;
};

export const portfolioService = {
  async createPortfolio(userId: string, title: string, template: string): Promise<Portfolio> {
    const portfolioData = {
      title,
      template,
      components: getDefaultComponents(),
      theme: {
        primaryColor: '#6366F1',
        secondaryColor: '#8B5CF6',
        font: 'Inter'
      },
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = await addDoc(collection(db, 'portfolios'), portfolioData);
    return { ...portfolioData, id: docRef.id } as Portfolio;
  },

  async updatePortfolio(portfolio: Portfolio): Promise<Portfolio> {
    const portfolioRef = doc(db, 'portfolios', portfolio.id);
    const updateData = {
      ...portfolio,
      updatedAt: new Date(),
    };
    
    await updateDoc(portfolioRef, updateData);
    return updateData;
  },

  async deletePortfolio(portfolioId: string): Promise<void> {
    await deleteDoc(doc(db, 'portfolios', portfolioId));
  },

  async getUserPortfolios(userId: string): Promise<Portfolio[]> {
    const q = query(
      collection(db, 'portfolios'),
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Portfolio[];
  },
};