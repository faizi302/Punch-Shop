// Home.jsx
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Send, UserRoundSearch, MessageSquareMore, Star, X } from 'lucide-react';
import { NavLink, useNavigate ,useParams } from 'react-router-dom';

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

    const {id} = useParams();
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
           py-3.5 px-5 rounded-md shadow-sm cursor-pointer" onClick={()=>navigate('/market')}>
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

      {id && <ProductSelectionModal productId={id} onClose={closeProductModal} />  }

      {/* 5. FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-14 px-12 text-black flex flex-col md:flex-row justify-between items-center gap-4">
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



      {/* 7. FLOATING MENU */}
      <div className="fixed right-8 bottom-6 flex flex-col gap-3 items-center z-50">
        {showMenu && (
          <>
            <button onClick={() => setShowMenu(false)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-16 rounded-full shadow-lg"><ChevronDown size={30} /></button>
            <button className="bg-[#41b1e6] hover:bg-white hover:text-[#41b1e6] cursor-pointer p-3 rounded-full flex items-center justify-center size-16 shadow-lg"><Send size={30} /></button>
            <button className="bg-primary hover:bg-white hover:text-primary p-3 cursor-pointer rounded-full flex items-center justify-center size-16 shadow-lg"><UserRoundSearch size={30} /></button>
          </>
        )}
        {!showMenu && (
          <button onClick={() => setShowMenu(true)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-16 rounded-full shadow-lg"><ChevronUp size={30} /></button>
        )}
        <button className="bg-[#2c7cf6] p-5 cursor-pointer rounded-full shadow-xl"><MessageSquareMore size={24} /></button>
      </div>

    </div>
  );
};

export default Home;