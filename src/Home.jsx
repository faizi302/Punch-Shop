// Home.jsx
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Send, UserRoundSearch, MessageSquareMore, Star, X } from 'lucide-react';

// Import all your sections
import HotProducts from './sections/HotProducts';
import Bank from './sections/Bank';
import Crypto from './sections/Crypto';
import BestSellers from './sections/BestSellers';
import Shopping from './sections/Shopping'; // Uncomment if needed, but matching screenshot arrangement
import Food from './sections/Food';
import Social from './sections/Social';
import Bundles from './sections/Bundles';
import Support from './sections/Support';
import FAQ from './sections/FAQ'; 

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-primary text-white">
      
      {/* 1. HEADER BANNER */}
      <header className="bg-[image:var(--color-mixed)] p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <img src="src/assets/herologo.gif" alt="Banner" className="w-full h-auto rounded-sm shadow-2xl"/>
        </div>
      </header>

      {/* 2. MAIN PUNCH CARD */}
      <section className="w-full bg-white pt-16 pb-6 flex justify-center">
        <div className="bg-white  border border-gray-300 rounded-md shadow-sm hover:shadow-[var(--shadow-custom)] p-6 flex flex-col items-center w-full max-w-[350px] text-center transition-shadow duration-300">
          <img src="src/assets/pine_apple.png" alt="Logo" className="w-[400px] h-auto mb-4"/>
          <div className="w-8 h-[1px] bg-gray-200 mb-3"></div>
          <button className="bg-[#1e90ff] text-white text-md font-semibold py-3.5 px-5 rounded-md shadow-sm">
            Click to Visit Marketplace (→)
          </button>
        </div>
      </section>

      {/* 3. PRODUCT SECTIONS */}
      <HotProducts openModal={openModal} />
      <Bank openModal={openModal} />
      <Crypto openModal={openModal} />
      <BestSellers openModal={openModal} />
      <Shopping openModal={openModal} /> 
      <Food openModal={openModal} />
      <Social openModal={openModal} />
      <Bundles openModal={openModal} />
      
      {/* 4. INFO SECTIONS */}
      <Support />
      <FAQ />

      {/* 5. FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 text-black flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm font-bold">© PUNCH SHOP 2026</div>
        <div className="flex items-center gap-2 text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          <span className="text-gray-400 ml-2 font-medium">Excellent (331 reviews)</span>
        </div>
      </footer>

      {/* 6. PURCHASE MODAL */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] border border-white/10 w-full max-w-md rounded-2xl p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-1">{selectedProduct.title}</h2>
            <p className="text-xs text-gray-500 mb-6 font-mono">ID: {selectedProduct.id}</p>
            
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Price</span>
                <span className="text-green-400 font-bold">${selectedProduct.price} USD</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Availability</span>
                <span className="text-white">{selectedProduct.stock} items left</span>
              </div>
            </div>

            <button className="w-full bg-primary py-4 rounded-xl font-bold mt-8 hover:opacity-90 transition-opacity">
              Confirm & Pay
            </button>
          </div>
        </div>
      )}

      {/* 7. FLOATING MENU */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 items-center z-50">
        {showMenu && (
          <>
            <button onClick={() => setShowMenu(false)} className="bg-gray-700 p-3 rounded-full shadow-lg"><ChevronDown size={20}/></button>
            <button className="bg-[#41b1e6] p-3 rounded-full shadow-lg"><Send size={20}/></button>
            <button className="bg-primary p-3 rounded-full shadow-lg"><UserRoundSearch size={20}/></button>
          </>
        )}
        {!showMenu && (
          <button onClick={() => setShowMenu(true)} className="bg-gray-700 p-3 rounded-full shadow-lg"><ChevronUp size={20}/></button>
        )}
        <button className="bg-[#2c7cf6] p-4 rounded-full shadow-xl"><MessageSquareMore size={24}/></button>
      </div>

    </div>
  );
};

export default Home;