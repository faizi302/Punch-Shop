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
  // const [showMenu, setShowMenu] = useState(true);

  // Comprehensive market data array
  const marketData = [
    {
      id: 'prod1',
      title: 'Mastercard CC',
      description: 'CC with $8,000 Balance.',
      price: '150.00',
      image: 'src/assets/Hot_products/masetcard.webp',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img.jpg',
      sellerName: 'Brainsclub',
      reviewCount: 1331,
    },
    {
      id: 'prod2',
      title: 'Mastercard CC',
      description: 'CC with $8,000 Balance.',
      price: '150.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img2.jpg',
      sellerName: 'Brainsclub',
      reviewCount: 1331,
    },
    {
      id: 'prod3',
      title: 'Visa CC',
      description: 'Comes with instructions. Estimated Balance: $3,800',
      price: '400.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img3.avif',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod4',
      title: 'Mastercard CC',
      description: 'CC with $8,000 Balance.',
      price: '150.00',
      image: 'src/assets/Hot_products/chime.gif',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img.jpg',
      sellerName: 'Brainsclub',
      reviewCount: 1331,
    },
    {
      id: 'prod5',
      title: 'Visa CC',
      description: 'Comes with instructions. Estimated Balance: $3,800',
      price: '400.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img2.jpg',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod6',
      title: 'Visa CC',
      description: 'Comes with instructions. Estimated Balance: $3,800',
      price: '400.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img3.avif',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod7',
      title: 'Visa CC',
      description: 'Comes with instructions. Estimated Balance: $3,800',
      price: '400.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img.jpg',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod8',
      title: 'Visa CC',
      description: 'Comes with instructions. Estimated Balance: $3,800',
      price: '400.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/reviews/rev-img2.jpg',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod9',
      title: 'Wells Fargo Bank Login',
      description: 'WF Bank Login with $2,100 balance. Includes CC, ID and Login',
      price: '190.00',
      image: 'src/assets/Hot_products/masetcard.webp',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/reviews/rev-img3.avif',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod10',
      title: 'Wells Fargo Bank Login',
      description: 'WF Bank Login with $2,100 balance. Includes CC, ID and Login',
      price: '190.00',
      image: 'src/assets/Hot_products/masetcard.webp',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/reviews/rev-img.jpg',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod11',
      title: 'Wells Fargo Bank Login',
      description: 'WF Bank Login with $2,100 balance. Includes CC, ID and Login',
      price: '190.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/reviews/rev-img2.jpg',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod12',
      title: 'Wells Fargo Bank Login',
      description: 'WF Bank Login with $2,100 balance. Includes CC, ID and Login',
      price: '190.00',
      image: 'src/assets/Hot_products/chime.gif',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/reviews/rev-img3.avif',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod13',
      title: 'Wells Fargo Bank Login',
      description: 'WF Bank Login with $2,100 balance. Includes CC, ID and Login',
      price: '190.00',
      image: 'src/assets/Hot_products/visa.gif',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/reviews/rev-img.jpg',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
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
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[var(--color-mheader)] py-4 px-6 flex justify-between items-center">
        <img src="src/assets/pine_apple.png" alt="Punch" className="h-10" />
        <div className="flex gap-6 text-sm font-medium">
          <Link to="https://t.me/mvpwins" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Send size={16} /> Telegram
          </Link>
          <Link to="/support" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Headphones size={16} /> Support
          </Link>
          <Link to="/login" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <LogIn size={16} /> Login
          </Link>
        </div>
      </header>


      {/* Main Content with proper padding */}
      <main className="flex-1 px-4 py-6">
        <div className="space-y-4">
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
        <div className="py-8 text-center">
          <button 
            onClick={handleShowMore}
            className="bg-[var(--color-mbutton)] text-black font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Show More Products
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[var(--color-mfooter)] py-4 px-6 text-md text-center text-gray-400 text-sm">
        © The punchs.io website is operated by GWD Processing FZC00.
      </footer>

      {/* Purchase Modal */}
      {showPurchaseModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-mheader)] rounded-2xl p-6 w-full max-w-md relative border border-[var(--color-mbutton)]/50">
            <button 
              onClick={() => setShowPurchaseModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-[var(--color-mbutton)] font-bold text-2xl mb-4">Complete Your Purchase</h2>
            <p className="text-white mb-2">Product: {selectedProduct.title}</p>
            <p className="text-white mb-2">Price: ${selectedProduct.price} USD</p>
            <p className="text-white mb-4">Date: 2/10/2026</p>
            <p className="text-white mb-4">Order ID: sUQvrIRJX4SzVbaY</p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-4 border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none"
            />
            <div className="flex gap-4">
              <button className="bg-[var(--color-mbutton)] text-black font-bold py-3 px-6 rounded-lg flex-1 hover:opacity-90 transition-opacity">
                Checkout
              </button>
              <button 
                onClick={() => setShowPurchaseModal(false)}
                className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex-1 hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Modal */}
      {showReviewsModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[600px] overflow-y-auto relative text-black shadow-2xl">
            <button 
              onClick={() => setShowReviewsModal(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="font-bold text-xl mb-4">{selectedProduct.sellerName}'s Reviews</h2>
            <div className="space-y-4">
              {Array(6).fill().map((_, i) => (
                <div key={i} className="border-b border-gray-200 pb-3">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-semibold">Anonymous</p>
                  <p className="text-gray-600 text-sm mt-1">Great seller! Fast delivery and exactly as described.</p>
                </div>
              ))}
              <p className="text-gray-500 text-sm italic">Recent reviews ended. (Past 3 months above.)</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Menu */}
      <div className="fixed right-8 bottom-20 flex flex-col gap-3 items-center z-50">
        <button className="bg-[#601db2] hover:bg-[#601db2] p-4 rounded-full shadow-xl transition-colors">
          <img src='src/assets/float-img.png' className="w-8 h-8" />
        </button>
      </div>
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 items-center size-10 z-50">
        <button className="bg-[#2c7cf6] hover:bg-[#1e6ee6] p-4 rounded-full shadow-xl transition-colors">
          <MessageSquareMore size={24}/>
        </button>
      </div>
    </div>
  );
};

export default Market;