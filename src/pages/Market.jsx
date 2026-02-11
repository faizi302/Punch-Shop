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

  // Comprehensive market data array
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
    {
      id: 'prod9',
      title: 'ID Verified Venmo',
      description: 'ID verified with a CC attached. Estimated Balance: $1,400',
      price: '95.00',
      image: 'src/assets/venmo.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
    },
    {
      id: 'prod10',
      title: 'PayPal Business Account',
      description: 'Verified PayPal Business with $5,200 Balance',
      price: '280.00',
      image: 'src/assets/paypal.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod11',
      title: 'Bank of America Login',
      description: 'BOA Login with $6,500 Balance. Includes CC, ID and Login',
      price: '320.00',
      image: 'src/assets/boa.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod12',
      title: 'Chase Bank Login',
      description: 'Chase Bank login with $4,200 Balance. Full access included',
      price: '240.00',
      image: 'src/assets/chase.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/tokyo-avatar.png',
      sellerName: 'TokyoDrift92',
      reviewCount: 4539,
    },
    {
      id: 'prod13',
      title: 'American Express CC',
      description: 'AMEX CC with $3,500 Balance.',
      price: '180.00',
      image: 'src/assets/amex.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/cvv-avatar.png',
      sellerName: 'CVV-KINGZ',
      reviewCount: 1264,
    },
    {
      id: 'prod14',
      title: 'Discover CC',
      description: 'Discover card with $2,800 Balance.',
      price: '140.00',
      image: 'src/assets/discover.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/brians-avatar.png',
      sellerName: 'briansclub',
      reviewCount: 827,
    },
    {
      id: 'prod15',
      title: 'Coinbase Account',
      description: 'Verified Coinbase with $2,100 in crypto assets',
      price: '210.00',
      image: 'src/assets/coinbase.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
    },
    {
      id: 'prod16',
      title: 'MetaMask Wallet',
      description: 'MetaMask with ETH and tokens. Estimated: $1,900',
      price: '190.00',
      image: 'src/assets/metamask.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/tokyo-avatar.png',
      sellerName: 'TokyoDrift92',
      reviewCount: 4539,
    },
    {
      id: 'prod17',
      title: 'Zelle Account',
      description: 'Active Zelle account with $800 Balance',
      price: '85.00',
      image: 'src/assets/zelle.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod18',
      title: 'Apple Pay Account',
      description: 'Apple Pay with linked cards. $1,500 available',
      price: '125.00',
      image: 'src/assets/applepay.png',
      isHot: true,
      isTrusted: true,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
    },
    {
      id: 'prod19',
      title: 'Google Pay Account',
      description: 'Google Pay with $900 Balance and cards',
      price: '95.00',
      image: 'src/assets/googlepay.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/cvv-avatar.png',
      sellerName: 'CVV-KINGZ',
      reviewCount: 1264,
    },
    {
      id: 'prod20',
      title: 'Stripe Account',
      description: 'Business Stripe account with $3,200 Balance',
      price: '260.00',
      image: 'src/assets/stripe.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod21',
      title: 'Chime Bank Login',
      description: 'Chime Bank account with $1,100 Balance',
      price: '110.00',
      image: 'src/assets/chime.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/tokyo-avatar.png',
      sellerName: 'TokyoDrift92',
      reviewCount: 4539,
    },
    {
      id: 'prod22',
      title: 'Ally Bank Login',
      description: 'Ally Bank with $2,800 Balance. Full access',
      price: '175.00',
      image: 'src/assets/ally.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/brians-avatar.png',
      sellerName: 'briansclub',
      reviewCount: 827,
    },
    {
      id: 'prod23',
      title: 'Capital One Login',
      description: 'Capital One account with $3,600 Balance',
      price: '220.00',
      image: 'src/assets/capitalone.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
    },
    {
      id: 'prod24',
      title: 'US Bank Login',
      description: 'US Bank login with $4,900 Balance',
      price: '285.00',
      image: 'src/assets/usbank.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod25',
      title: 'PNC Bank Login',
      description: 'PNC Bank with $2,300 Balance. Includes CC',
      price: '165.00',
      image: 'src/assets/pnc.png',
      isHot: false,
      isTrusted: false,
      sellerAvatar: 'src/assets/tokyo-avatar.png',
      sellerName: 'TokyoDrift92',
      reviewCount: 4539,
    },
    {
      id: 'prod26',
      title: 'TD Bank Login',
      description: 'TD Bank account with $3,100 Balance',
      price: '195.00',
      image: 'src/assets/tdbank.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/cvv-avatar.png',
      sellerName: 'CVV-KINGZ',
      reviewCount: 1264,
    },
    {
      id: 'prod27',
      title: 'Regions Bank Login',
      description: 'Regions Bank with $1,800 Balance',
      price: '130.00',
      image: 'src/assets/regions.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
    },
    {
      id: 'prod28',
      title: 'Fifth Third Bank Login',
      description: 'Fifth Third Bank with $2,600 Balance',
      price: '170.00',
      image: 'src/assets/fifththird.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/brians-avatar.png',
      sellerName: 'briansclub',
      reviewCount: 827,
    },
    {
      id: 'prod29',
      title: 'Navy Federal Login',
      description: 'Navy Federal Credit Union with $5,500 Balance',
      price: '310.00',
      image: 'src/assets/navyfederal.png',
      isHot: false,
      isTrusted: true,
      sellerAvatar: 'src/assets/punch-avatar.png',
      sellerName: 'punch.atshop.io',
      reviewCount: 1331,
    },
    {
      id: 'prod30',
      title: 'USAA Bank Login',
      description: 'USAA Bank account with $4,400 Balance',
      price: '265.00',
      image: 'src/assets/usaa.png',
      isHot: true,
      isTrusted: false,
      sellerAvatar: 'src/assets/epic-avatar.png',
      sellerName: 'EpicByteSeller',
      reviewCount: 2284,
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
        <img src="src/assets/punch-logo.png" alt="Punch" className="h-8" />
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/telegram" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
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
      <footer className="bg-[var(--color-mfooter)] py-4 px-6 text-center text-gray-500 text-sm">
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
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 items-center z-50">
        {showMenu && (
          <>
            <button 
              onClick={() => setShowMenu(false)} 
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronDown size={20}/>
            </button>
            <button className="bg-[#41b1e6] hover:bg-[#3aa0d5] p-3 rounded-full shadow-lg transition-colors">
              <Send size={20}/>
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg transition-colors">
              <UserRoundSearch size={20}/>
            </button>
          </>
        )}
        {!showMenu && (
          <button 
            onClick={() => setShowMenu(true)} 
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full shadow-lg transition-colors"
          >
            <ChevronUp size={20}/>
          </button>
        )}
        <button className="bg-[#2c7cf6] hover:bg-[#1e6ee6] p-4 rounded-full shadow-xl transition-colors">
          <MessageSquareMore size={24}/>
        </button>
      </div>
    </div>
  );
};

export default Market;