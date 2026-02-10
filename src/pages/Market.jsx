// pages/Market.jsx
import React, { useState } from 'react';
import MarketCard from '../components/MarketCard';
import { Send, Headphones, LogIn, Star, X, ChevronUp, ChevronDown, UserRoundSearch, MessageSquareMore } from 'lucide-react';
import { Link } from 'react-router-dom';

const Market = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  // Random data array with varying sellers and reviews
  const marketData = [
    {
      id: 'prod1',
      title: 'Trust Wallet Login',
      description: 'Comes with instructions. Estimated Balance: $3,800',
      price: '400.00',
      image: 'src/assets/trustwallet.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod2',
      title: 'VISA CC',
      description: 'CC with $8,000 Balance.',
      price: '150.00',
      image: 'src/assets/visa.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod3',
      title: 'Citi Bank Login',
      description: 'Citi Bank login with $8,000 Balance. Includes CC, ID, and Login',
      price: '350.00',
      image: 'src/assets/citi.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod4',
      title: 'Wells Fargo Bank Login',
      description: 'WF Bank Login with $2,100 balance. Includes CC, ID and Login',
      price: '190.00',
      image: 'src/assets/wellsfargo.png',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod5',
      title: 'SoFi Bank Login',
      description: 'SoFi Bank Login with $1,650 Balance. Includes CC, ID and Login',
      price: '80.00',
      image: 'src/assets/sofi.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/tokyo-avatar.png',
      sellerName: 'TokyoDrift92',
      reviewCount: 4539,
    },
    {
      id: 'prod6',
      title: 'MasterCard CC',
      description: 'CC with $1,200 Balance.',
      price: '65.00',
      image: 'src/assets/mastercard.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/brians-avatar.png',
      sellerName: 'briansclub',
      reviewCount: 827,
    },
    {
      id: 'prod7',
      title: 'VISA CC',
      description: 'CC with $2,000 Balance.',
      price: '100.00',
      image: 'src/assets/visa.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/cvv-avatar.png',
      sellerName: 'CVV-KINGZ',
      reviewCount: 1264,
    },
    {
      id: 'prod8',
      title: 'ID Verified Cash App',
      description: 'Verified Cash App with $500 Balance.',
      price: '75.00',
      image: 'src/assets/cashapp.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
    },
    // Add more to reach 30
    ...Array(22).fill().map((_, i) => ({
      id: `prod${i+9}`,
      title: `Product ${i+9}`,
      description: 'Description here.',
      price: `${50 + i*10}.00`,
      image: 'src/assets/placeholder.png',
      isHot: i % 2 === 0,
      isTrusted: i % 3 === 0,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: Math.floor(Math.random() * 5000) + 100,
    })),
  ];

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, marketData.length));
  };

  const openPurchaseModal = (product) => {
    setSelectedProduct(product);
    setShowPurchaseModal(true);
  };

  const openReviewsModal = (product) => {
    setSelectedProduct(product);
    setShowReviewsModal(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-market)] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[var(--color-mheader)] py-4 px-6 flex justify-between items-center">
        <img src="src/assets/punch-logo.png" alt="Punch" className="h-8" />
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/telegram" className="flex items-center gap-2 hover:text-gray-300">
            <Send size={16} /> Telegram
          </Link>
          <Link to="/support" className="flex items-center gap-2 hover:text-gray-300">
            <Headphones size={16} /> Support
          </Link>
          <Link to="/login" className="flex items-center gap-2 hover:text-gray-300">
            <LogIn size={16} /> Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="space-y-6">
          {marketData.slice(0, visibleCount).map((item) => (
            <MarketCard 
              key={item.id} 
              item={item} 
              onPurchase={() => openPurchaseModal(item)}
              onReviews={() => openReviewsModal(item)}
            />
          ))}
        </div>
      </main>

      {/* Show More Button */}
      {visibleCount < marketData.length && (
        <div className="py-6 text-center">
          <button 
            onClick={handleShowMore}
            className="bg-[var(--color-mbutton)] text-black font-bold py-3 px-8 rounded-full shadow-md"
          >
            Show More Products
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[var(--color-mfooter)] py-4 px-6 text-center text-gray-500 text-sm">
        © The punchs.io website is operated by GWD Processing FZC00.
      </footer>

      {/* Purchase Modal */}
      {showPurchaseModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[var(--color-mheader)] rounded-2xl p-6 w-96 relative border border-primary/50">
            <button onClick={() => setShowPurchaseModal(false)} className="absolute top-4 right-4 text-gray-400">
              <X size={24} />
            </button>
            <h2 className="text-[var(--color-mbutton)] font-bold text-xl mb-4">Complete Your Purchase</h2>
            <p className="text-white mb-2">Product: {selectedProduct.title}</p>
            <p className="text-white mb-2">Price: ${selectedProduct.price} USD</p>
            <p className="text-white mb-4">Date: 2/10/2026</p>
            <p className="text-white mb-4">Order ID: sUQvrIRJX4SzVbaY</p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4 border border-gray-700"
            />
            <div className="flex gap-4">
              <button className="bg-[var(--color-mbutton)] text-black font-bold py-3 px-6 rounded-lg flex-1">
                Checkout
              </button>
              <button 
                onClick={() => setShowPurchaseModal(false)}
                className="bg-primary text-white font-bold py-3 px-6 rounded-lg flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Modal */}
      {showReviewsModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 max-h-[500px] overflow-y-auto relative text-black shadow-xl">
            <button onClick={() => setShowReviewsModal(false)} className="absolute top-4 right-4 text-gray-400">
              <X size={24} />
            </button>
            <h2 className="font-bold text-lg mb-4">{selectedProduct.sellerName}'s Reviews</h2>
            <div className="space-y-4">
              {Array(6).fill().map((_, i) => (
                <div key={i}>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p>Anonymous</p>
                </div>
              ))}
              <p className="text-gray-500 text-sm">Recent reviews ended. (Past 3 months above.)</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Menu */}
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

export default Market;