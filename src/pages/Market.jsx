// pages/Market.jsx
import React, { useState, useEffect } from 'react';
import MarketCard from '../components/MarketCard';
import { Send, Headphones, LogIn, Star, X, MessageSquareMore, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Market = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  // Modal states for checkout flow
  const [step, setStep] = useState(0); // 0: closed, 1: email, 2: payment, 3: tutorial, 4: qr
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [copied, setCopied] = useState(false);
  const [timer, setTimer] = useState(59 * 60 + 52);

  // Timer effect
  useEffect(() => {
    if (step === 4 && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
    setStep(1); // Start with email step
  };

  const openReviewsModal = (product) => {
    setSelectedProduct(product);
    setShowReviewsModal(true);
  };

  const handleEmailSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setEmailError("");
    setStep(2); // Move to payment selection
  };

  const handlePaymentSelect = (paymentType) => {
    setSelectedPayment(paymentType);
    setStep(4); // Move to QR code
  };

  const copyAddress = () => {
    navigator.clipboard.writeText('bc1qu7dfs19kp3u4nr9ssgcngp1ah3laseu7pfm');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closeAllModals = () => {
    setShowPurchaseModal(false);
    setShowReviewsModal(false);
    setStep(0);
    setEmail("");
    setEmailError("");
    setSelectedProduct(null);
    setSelectedPayment(null);
    setCopied(false);
    setTimer(59 * 60 + 52);
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

      {/* STEP 1: Email Modal (Original Purchase Modal + Email Input) */}
      {showPurchaseModal && step === 1 && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-mheader)] rounded-2xl p-6 w-full max-w-md relative border border-[var(--color-mbutton)]/50">
            <button 
              onClick={closeAllModals} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-[var(--color-mbutton)] font-bold text-2xl mb-4">Complete Your Purchase</h2>
            <p className="text-white mb-2">Product: {selectedProduct.title}</p>
            <p className="text-white mb-2">Price: ${selectedProduct.price} USD</p>
            <p className="text-white mb-4">Date: 2/11/2026</p>
            <p className="text-white mb-4">Order ID: o8RJesCs6wK6XOxz</p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded-lg mb-2 border border-gray-700 focus:border-[var(--color-mbutton)] focus:outline-none"
            />
            {emailError && <p className="text-red-400 text-sm mb-4">{emailError}</p>}
            <div className="flex gap-4">
              <button 
                onClick={handleEmailSubmit}
                className="bg-[var(--color-mbutton)] text-black font-bold py-3 px-6 rounded-lg flex-1 hover:opacity-90 transition-opacity"
              >
                Checkout
              </button>
              <button 
                onClick={closeAllModals}
                className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex-1 hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Payment Selection Modal */}
      {(step === 2 || step === 3) && (
        <div className={`fixed inset-0 bg-gray-100 flex items-center justify-center z-50 p-4 ${step === 3 ? 'blur-sm' : ''}`}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            <h2 className="text-gray-900 font-bold text-2xl mb-6 text-center">Select a Payment Option</h2>
            <div className="space-y-3 mb-6">
              <button 
                onClick={() => handlePaymentSelect('bitcoin')}
                className="w-full bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">₿</div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Bitcoin</p>
                    <p className="text-sm text-gray-500">Completes in 3 minutes</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => handlePaymentSelect('ethereum')}
                className="w-full bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">◆</div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Ethereum</p>
                    <p className="text-sm text-gray-500">Completes in 1 minute</p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => handlePaymentSelect('solana')}
                className="w-full bg-white border border-gray-200 rounded-lg p-4 hover:border-green-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">◎</div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Solana</p>
                    <p className="text-sm text-gray-500">Completes in a few seconds</p>
                  </div>
                </div>
              </button>
            </div>
            <button 
              onClick={() => setStep(3)}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              How to Pay with Crypto
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Secure checkout powered by Crypto Payments.
            </p>
          </div>
        </div>
      )}

      {/* STEP 3: Tutorial Modal */}
      {step === 3 && (
        <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-2xl">
            <button 
              onClick={() => setStep(2)}
              className="absolute top-4 right-4 text-gray-900 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h2 className="text-gray-900 font-bold text-xl mb-6">Choose a Tutorial</h2>
            <div className="space-y-2">
              <button className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 text-left hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">$</div>
                  <span className="text-blue-600 font-medium">Cash App</span>
                </div>
              </button>
              <button className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 text-left hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">C</div>
                  <span className="text-blue-600 font-medium">Coinbase</span>
                </div>
              </button>
              <button className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 text-left hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center text-white font-bold">E</div>
                  <span className="text-blue-600 font-medium">Exodus</span>
                </div>
              </button>
              <button className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 text-left hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">T</div>
                  <span className="text-blue-600 font-medium">Trust Wallet</span>
                </div>
              </button>
              <button className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 text-left hover:bg-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-md flex items-center justify-center text-white text-lg">🏧</div>
                  <span className="text-blue-600 font-medium">Find Crypto ATM Near You</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: QR Modal */}
      {step === 4 && (
        <div className="fixed inset-0 bg-gray-100 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md fixed shadow-2xl max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setStep(2)}
              className="absolute top-6 left-6 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Go Back
            </button>
            
            <div className="text-center mt-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                ₿
              </div>
              <h2 className="text-gray-900 font-bold text-xl mb-6">Send Bitcoin Payment</h2>
              
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='white' width='100' height='100'/%3E%3Cpath fill='black' d='M10,10h5v5h-5zM20,10h5v5h-5zM25,10h5v5h-5zM30,10h5v5h-5zM40,10h5v5h-5zM60,10h5v5h-5zM70,10h5v5h-5zM75,10h5v5h-5zM80,10h5v5h-5zM85,10h5v5h-5zM10,15h5v5h-5zM40,15h5v5h-5zM50,15h5v5h-5zM60,15h5v5h-5zM85,15h5v5h-5zM10,20h5v5h-5zM20,20h5v5h-5zM25,20h5v5h-5zM30,20h5v5h-5zM40,20h5v5h-5zM50,20h5v5h-5zM60,20h5v5h-5zM70,20h5v5h-5zM75,20h5v5h-5zM80,20h5v5h-5zM85,20h5v5h-5zM10,25h5v5h-5zM20,25h5v5h-5zM25,25h5v5h-5zM30,25h5v5h-5zM40,25h5v5h-5zM60,25h5v5h-5zM70,25h5v5h-5zM75,25h5v5h-5zM80,25h5v5h-5zM85,25h5v5h-5zM10,30h5v5h-5zM20,30h5v5h-5zM25,30h5v5h-5zM30,30h5v5h-5zM40,30h5v5h-5zM60,30h5v5h-5zM70,30h5v5h-5zM75,30h5v5h-5zM80,30h5v5h-5zM85,30h5v5h-5zM10,35h5v5h-5zM40,35h5v5h-5zM60,35h5v5h-5zM85,35h5v5h-5zM10,40h5v5h-5zM20,40h5v5h-5zM25,40h5v5h-5zM30,40h5v5h-5zM40,40h5v5h-5zM60,40h5v5h-5zM70,40h5v5h-5zM75,40h5v5h-5zM80,40h5v5h-5zM85,40h5v5h-5zM50,45h5v5h-5zM55,45h5v5h-5zM10,50h5v5h-5zM20,50h5v5h-5zM35,50h5v5h-5zM40,50h5v5h-5zM45,50h5v5h-5zM55,50h5v5h-5zM65,50h5v5h-5zM75,50h5v5h-5zM85,50h5v5h-5zM10,55h5v5h-5zM40,55h5v5h-5zM45,55h5v5h-5zM50,55h5v5h-5zM70,55h5v5h-5zM75,55h5v5h-5zM80,55h5v5h-5zM10,60h5v5h-5zM20,60h5v5h-5zM25,60h5v5h-5zM30,60h5v5h-5zM40,60h5v5h-5zM50,60h5v5h-5zM55,60h5v5h-5zM60,60h5v5h-5zM70,60h5v5h-5zM80,60h5v5h-5zM85,60h5v5h-5zM10,65h5v5h-5zM30,65h5v5h-5zM40,65h5v5h-5zM50,65h5v5h-5zM55,65h5v5h-5zM65,65h5v5h-5zM70,65h5v5h-5zM75,65h5v5h-5zM85,65h5v5h-5zM10,70h5v5h-5zM20,70h5v5h-5zM25,70h5v5h-5zM30,70h5v5h-5zM40,70h5v5h-5zM60,70h5v5h-5zM70,70h5v5h-5zM75,70h5v5h-5zM80,70h5v5h-5zM85,70h5v5h-5zM10,75h5v5h-5zM40,75h5v5h-5zM50,75h5v5h-5zM60,75h5v5h-5zM70,75h5v5h-5zM85,75h5v5h-5zM10,80h5v5h-5zM20,80h5v5h-5zM25,80h5v5h-5zM30,80h5v5h-5zM40,80h5v5h-5zM50,80h5v5h-5zM60,80h5v5h-5zM70,80h5v5h-5zM75,80h5v5h-5zM80,80h5v5h-5zM85,80h5v5h-5zM10,85h5v5h-5zM85,85h5v5h-5z'/%3E%3C/svg%3E"
                  alt="QR Code"
                  className="w-48 h-48"
                />
              </div>
              
              <p className="text-gray-600 text-sm mb-3">Scan the QR code or copy the address to pay:</p>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-4 flex items-center justify-between">
                <span className="text-gray-800 text-sm font-mono">bc1qu7dfs19kp3u4nr9ssgcngp1ah3laseu7pfm</span>
                <button
                  onClick={copyAddress}
                  className="ml-2 text-orange-500 hover:text-orange-600"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 flex items-start gap-2">
                <span className="text-yellow-600 text-lg">⚠️</span>
                <p className="text-yellow-800 text-xs text-left">
                  Please ensure you send the exact amount to avoid delays or issues.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm mb-2">We're watching the network for your transaction.</p>
                <p className="text-orange-600 font-bold text-3xl">{formatTime(timer)}</p>
              </div>
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