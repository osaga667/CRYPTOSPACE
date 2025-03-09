
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { Key } from 'lucide-react';

const Login = () => {
  const [activationKey, setActivationKey] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // List of valid keys (in a real app, this would be verified on a server)
  const validKeys = [
    "osfdfdhfhkjö", "BADER", "MOUNSEFF62864", "dfsd",
    "kskskhgjfjöh", "Yordi", "Mfdsfsd", "cryptogirjögjkufdöjfl",
    "Kacper", "fdfsd", "smnanfdsfsd", "Lukasfkhjdkhd", "mounseff727"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if the entered key is valid
    if (validKeys.includes(activationKey)) {
      try {
        // Show success message
        toast.success("Login successful! Redirecting...");
        
        // In a production app, we would call an API endpoint here
        // to validate the key server-side and get a session token
        
        // Redirect to main app page after successful login
        setTimeout(() => navigate('/app'), 1500);
      } catch (error) {
        console.error('Error:', error);
        toast.error("Error while logging in. Please try again.");
      }
    } else {
      // Show error for invalid key
      setActivationKey(''); // Clear input field
      setError(true); // Show error message
      toast.error("Invalid activation key");
    }
  };

  return (
    <div className="min-h-screen antialiased overflow-x-hidden relative bg-gradient-to-b from-[#0a1128] via-[#1a1b4b] to-[#3c1053] flex flex-col justify-between items-center px-4 py-6">
      {/* Stars background from Index page will be inherited */}
      
      {/* Header */}
      <div className="flex items-center text-xl self-start text-white">
        <span className="font-orbitron font-bold">Space Crypto</span>
        <span className="text-sm text-gray-400 ml-2 font-exo">V.2.6.1</span>
      </div>
      
      {/* Logo */}
      <div className="my-auto">
        <div className="w-60 h-60 rounded-full overflow-hidden bg-gradient-to-r from-space-purple to-space-cyan p-1">
          <div className="w-full h-full rounded-full bg-black/30 backdrop-blur-sm p-2">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-space-purple/30 to-space-cyan/30 flex items-center justify-center">
              <Key className="w-20 h-20 text-space-cyan animate-pulse-subtle" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md self-start">
        <div className="text-xl font-orbitron font-bold text-white mb-2">Log in</div>
        <div className="text-base font-exo text-gray-300 mb-4">Enter the activation key</div>
        
        <input 
          type="password" 
          value={activationKey}
          onChange={(e) => {
            setActivationKey(e.target.value);
            setError(false);
          }}
          placeholder="Enter your key" 
          className="w-full py-4 px-5 bg-black/20 border border-space-purple/30 text-white rounded-xl font-exo focus:outline-none focus:border-space-cyan/70 backdrop-blur-sm mb-4"
          required
        />
        
        <button 
          type="submit" 
          className="w-full py-4 bg-gradient-to-r from-space-purple to-space-cyan text-white rounded-xl font-exo font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Continue
        </button>
        
        {error && (
          <div className="text-red-400 text-sm text-center mt-4 font-exo">
            Invalid key! Please try again.
          </div>
        )}
      </form>
      
      {/* Buy Link */}
      <div className="text-center text-sm text-gray-400 mt-8 font-exo">
        Don't have an activation key?{" "}
        <a 
          href="https://t.me/CryptoAppApplication" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-space-cyan font-bold hover:underline"
        >
          Buy ↗
        </a>
      </div>
    </div>
  );
};

export default Login;
