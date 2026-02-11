// Home.jsx
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Send, UserRoundSearch, MessageSquareMore, Star, X } from 'lucide-react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

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
import ProductSelectionModal from './components/ProductSelectionModal';


const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const closeProductModal = () => navigate('/');

  const { id } = useParams();
  const navigate = useNavigate();

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-primary text-white">

      {/* 1. HEADER BANNER */}
      <header className="bg-[image:var(--color-mixed)] p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <img src="src/assets/herologo.gif" alt="Banner" className="w-full h-auto rounded-sm shadow-2xl" />
        </div>
      </header>

      {/* 2. MAIN PUNCH CARD */}
      <section className="w-full bg-white pt-16 pb-6 flex justify-center">
        <div className="bg-white  border border-gray-300 rounded-md shadow-sm hover:shadow-[var(--shadow-custom)] p-6 flex flex-col items-center w-full max-w-[350px] text-center transition-shadow duration-300">
          <img src="src/assets/pine_apple.png" alt="Logo" className="w-[400px] h-auto mb-4" />
          <div className="w-8 h-[1px] bg-gray-200 mb-3"></div>
          <button className="bg-[#1e90ff] text-white text-md font-semibold
           py-3.5 px-5 rounded-md shadow-sm cursor-pointer" onClick={() => navigate('/market')}>
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

      {id && <ProductSelectionModal productId={id} onClose={closeProductModal} />}

      {/* 5. FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-10 px-12 text-black flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-md">© PUNCH 2026</div>
        <div className="flex items-center gap-2 text-yellow-400">
          <ul className='flex gap-4 text-[#7958db] text-sm font-light mr-3'>
            <li><a href="/" className='hover:text-[#6144b9]'>Privacy Policy</a></li>
            <li><a href="/" className='hover:text-[#6144b9]'>Terms of Services</a></li>
          </ul>
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          <span className="text-gray-400 ml-2 font-medium">(331)</span>
        </div>
      </footer>

      {/* 6. PURCHASE MODAL */}
      {/* {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-[#030712b3]/90 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
          <div className="bg-white text-black border border-white/10 w-full max-w-md rounded-md p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 cursor-pointer">
              <X size={24} />
            </button>
            <div className="flex justify-center flex-col items-center gap-1">
              <h2 className="text-xl font-bold mb-1">{selectedProduct.title}</h2>
              <p className="text-xs text-gray-500 mb-6 font-mono">ID: {selectedProduct.id}</p>
            </div>

            <div className="flex justify-center">
              <div className="w-full h-[2px] bg-gray-200 mb-3 justify-center"></div>
            </div>

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

            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-8 hover:opacity-90 transition-opacity">
              Confirm & Pay
            </button>
          </div>
        </div>
      )}  */}

      {/* 7. FLOATING MENU */}
            <div className="fixed right-7 bottom-20 flex flex-col gap-3 items-center z-50">
              {showMenu && (
                <>
                  <button onClick={() => setShowMenu(false)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-14 rounded-full shadow-lg"><ChevronDown size={20} /></button>
                  <button className="bg-[#41b1e6] hover:bg-white hover:text-[#41b1e6] cursor-pointer p-3 rounded-full flex items-center justify-center size-14 shadow-lg"><Send size={20} /></button>
                  <button className="bg-primary hover:bg-white hover:text-primary p-3 cursor-pointer rounded-full flex items-center justify-center size-14 shadow-lg"><UserRoundSearch size={20} /></button>
                </>
              )}
              {!showMenu && (
                <button onClick={() => setShowMenu(true)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-14 rounded-full shadow-lg"><ChevronUp size={20} /></button>
              )}
            </div>
            <div className="fixed right-4 bottom-3 flex flex-col gap-3 items-center z-50">
              <button className="bg-[#2c7cf6] p-5 cursor-pointer rounded-full shadow-xl"><MessageSquareMore size={16} /></button>
            </div>

    </div>
  );
};

export default Home;