import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { usePortfolio } from '../../contexts/PortfolioContext';
import type { Portfolio } from '../../contexts/PortfolioContext';
import { Plus, LogOut, Edit, Trash2, ExternalLink } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { portfolios, createPortfolio, deletePortfolio, setCurrentPortfolio, loading } = usePortfolio();

  const handleCreatePortfolio = async () => {
    await createPortfolio('My Portfolio', 'modern');
  };

  const handleEditPortfolio = (portfolio: Portfolio) => {
    setCurrentPortfolio(portfolio);
  };

  const handleDeletePortfolio = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this portfolio?')) {
      await deletePortfolio(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">My Portfolios</h1>
            <p className="text-gray-300">Welcome back, {currentUser?.email}</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <button
              onClick={handleCreatePortfolio}
              className="group bg-white/10 backdrop-blur-lg border-2 border-dashed border-white/30 rounded-xl p-8 hover:border-indigo-400 hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]"
            >
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create New Portfolio</h3>
              <p className="text-gray-300 text-center">Start building your professional portfolio</p>
            </button>

            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white truncate">{portfolio.title}</h3>
                    <p className="text-indigo-200 text-sm capitalize">{portfolio.template} template</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">
                      {portfolio.components.length} components
                    </span>
                    <span className="text-gray-400 text-sm">
                      Updated {new Date(portfolio.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditPortfolio(portfolio)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors" title="View Portfolio">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePortfolio(portfolio.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                      title="Delete Portfolio"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};