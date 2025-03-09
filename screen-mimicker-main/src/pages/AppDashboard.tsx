
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AppDashboard = () => {
  return (
    <div className="min-h-screen antialiased overflow-x-hidden relative bg-gradient-to-b from-[#0a1128] via-[#1a1b4b] to-[#3c1053]">
      {/* Stars background will be inherited from the parent */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Welcome to Space Crypto
              </span>
            </h1>
            
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-500/10 mb-12">
              <h2 className="text-2xl font-orbitron text-white mb-6 text-center">Your Crypto Dashboard</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-space-cyan/20 hover:border-space-cyan/40 transition-all duration-300">
                  <h3 className="text-xl font-orbitron text-white mb-4">Crypto Market</h3>
                  <p className="text-gray-300 font-exo">
                    View the latest market data and trends for major cryptocurrencies.
                  </p>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-space-purple/20 hover:border-space-purple/40 transition-all duration-300">
                  <h3 className="text-xl font-orbitron text-white mb-4">Portfolio</h3>
                  <p className="text-gray-300 font-exo">
                    Track your assets and monitor your cryptocurrency portfolio performance.
                  </p>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-space-cyan/20 hover:border-space-cyan/40 transition-all duration-300">
                  <h3 className="text-xl font-orbitron text-white mb-4">Transactions</h3>
                  <p className="text-gray-300 font-exo">
                    View your transaction history and pending orders.
                  </p>
                </div>
                
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-space-purple/20 hover:border-space-purple/40 transition-all duration-300">
                  <h3 className="text-xl font-orbitron text-white mb-4">Settings</h3>
                  <p className="text-gray-300 font-exo">
                    Configure your account settings and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AppDashboard;
