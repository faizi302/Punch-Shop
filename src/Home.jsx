// Home.jsx
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Send, UserRoundSearch, MessageSquareMore, Star, X } from 'lucide-react';
import { NavLink, useNavigate, useParams,useLocation } from 'react-router-dom';

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
import Footer from './components/Footer';

import heroLogo from './assets/herologo.gif';
import pineapple from './assets/pine_apple.png';


const Home = () => {
  const location = useLocation();
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
    <div key={location.key} className="min-h-screen flex flex-col font-sans bg-primary text-white">

      {/* 1. HEADER BANNER */}
      <header className="bg-[image:var(--color-mixed)] p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <img src={heroLogo} alt="Banner" className="w-full h-auto rounded-sm shadow-2xl" />
        </div>
      </header>

      {/* 2. MAIN PUNCH CARD */}
      <section className="w-full bg-white pt-16 pb-6 flex justify-center">
        <div className="bg-white  border border-gray-300 rounded-md shadow-sm hover:shadow-[var(--shadow-custom)] p-6 flex flex-col items-center w-full max-w-[350px] text-center transition-shadow duration-300">
          <img src={pineapple} alt="Logo" className="w-[400px] h-auto mb-4" />
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
      <Footer/>


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