import React, { useState } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  Send, 
  UserRoundSearch, 
  MessageSquareMore,
  Star
} from 'lucide-react';

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f5f5]">
      
      {/* HEADER SECTION */}
      <header className="bg-primary p-6 md:p-10 flex justify-center">
        <div className="w-full max-w-4xl">
          <img 
            src="src/assets/herologo.gif" 
            alt="Punch Shop Banner" 
            className="w-full h-auto rounded-sm shadow-2xl"
          />
        </div>
      </header>

      {/* MAIN CONTENT / CARD SECTION */}
      <main className="flex-grow flex flex-col items-center">
        {/* Punch Card - Height Reduced */}
        <section className="w-full bg-white py-12 flex justify-center">
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col items-center w-full max-w-[350px] text-center">
            <div className="mb-4">
               <img 
                src="src/assets/pine_apple.png" 
                alt="Punch Logo" 
                className="w-78 h-full object-cover"
              />
            </div>

            {/* Subtle Divider */}
            <div className="w-8 h-[1px] bg-gray-200 mb-6"></div>

            <button className="bg-[#209cee] hover:bg-blue-500 text-white text-sm font-semibold py-2.5 px-5 rounded-md transition-all flex items-center gap-2 shadow-sm">
              Click to Visit Marketplace (→)
            </button>
          </div>
        </section>

        {/* HOT PRODUCTS SECTION (Placeholder based on your screenshot) */}
        <section className="w-full bg-primary py-12 px-4">
          <h2 className="text-white text-center text-xl font-bold mb-8">Hot Products</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Replace these with your actual Product Images */}
            <div className="bg-black aspect-video rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                <img src="https://placehold.co/400x225/black/white?text=Mastercard" alt="Product" className="w-full h-full object-cover"/>
            </div>
            <div className="bg-black aspect-video rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                <img src="https://placehold.co/400x225/black/white?text=Visa" alt="Product" className="w-full h-full object-cover"/>
            </div>
            <div className="bg-black aspect-video rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                <img src="https://placehold.co/400x225/black/white?text=CashApp" alt="Product" className="w-full h-full object-cover"/>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-100 py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          © Punch 2026
        </div>
        
        <div className="flex items-center gap-4 text-xs">
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
          <span className="text-gray-300">•</span>
          <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <span className="text-gray-400 ml-1">(331)</span>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-3 items-center z-50">
        {showMenu && (
          <>
            <button 
              onClick={() => setShowMenu(false)}
              className="bg-gray-500/80 hover:bg-gray-600 p-2.5 rounded-full text-white shadow-lg transition-all"
            >
              <ChevronDown size={22} />
            </button>
            <button className="bg-[#41b1e6] hover:bg-blue-500 p-3 rounded-full text-white shadow-lg transition-transform hover:scale-110">
              <Send size={20} fill="white" />
            </button>
            <button className="bg-primary hover:bg-primary-dark p-3 rounded-full text-white shadow-lg transition-transform hover:scale-110">
              <UserRoundSearch size={20} />
            </button>
          </>
        )}
        
        {!showMenu && (
             <button 
             onClick={() => setShowMenu(true)}
             className="bg-gray-500/80 hover:bg-gray-600 p-2.5 rounded-full text-white shadow-lg transition-all"
           >
             <ChevronUp size={22} />
           </button>
        )}

        <button className="bg-[#2c7cf6] hover:bg-blue-700 p-4 rounded-full text-white shadow-xl transition-transform hover:scale-110">
          <MessageSquareMore size={24} fill="white" />
        </button>
      </div>
    </div>
  );
};

export default Home;