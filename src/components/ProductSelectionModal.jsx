import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Zap, ShoppingCart } from 'lucide-react';

const ProductSelectionModal = ({ productId, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  // Price mapping based on selection
  const priceMap = { "150": 150, "200": 200, "250": 250 };
  const basePrice = priceMap[selectedOption] || 0;
  const totalPrice = basePrice * quantity;

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Please enter a valid email (e.g. name@example.com)";
    return "";
  };

  const handleCheckoutClick = () => {
    if (step === 1) {
      setStep(2);
    } else {
      const error = validateEmail(email);
      if (!error) {
        // Navigate with all dynamic data
        const title = "CC (VISA)"; // This can be dynamic based on productId
        navigate(`/checkout/${productId}?email=${email}&option=${selectedOption}&qty=${quantity}&total=${totalPrice}&title=${encodeURIComponent(title)}`);
      } else {
        setEmailError(error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-white text-black w-full max-w-[420px] rounded-2xl p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-5 top-5 text-gray-400 hover:text-black transition-colors">
          <X size={22}/>
        </button>
        
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-50 p-3 rounded-full mb-3">
             <ShoppingCart className="text-blue-600" size={24} />
          </div>
          <h2 className="text-xl font-extrabold text-gray-800 uppercase tracking-tight">CC (VISA)</h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-2"></div>
        </div>

        {step === 1 ? (
          <div className="space-y-5 text-center">
            <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-xl flex items-center justify-center gap-2">
              <Zap size={16} className="text-yellow-600 fill-yellow-500"/> 
              <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">Refunds Available!</span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed italic">
              Purchasing this item grants you 24/7 priority support via our Discord and Telegram channels.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="text-left">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Select Plan</label>
                <select 
                  className="w-full mt-1 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">Choose a balance option</option>
                  <option value="150">$3K Balance - $150.00 USD</option>
                  <option value="200">$5K Balance - $200.00 USD</option>
                  <option value="250">$8K Balance - $250.00 USD</option>
                </select>
              </div>

              <div className="text-left">
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Quantity</label>
                <input 
                  type="number"
                  min="1"
                  className="w-full mt-1 border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
            </div>

            <button 
              disabled={!selectedOption}
              onClick={handleCheckoutClick}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${selectedOption ? 'bg-blue-600 hover:bg-blue-700 active:scale-95' : 'bg-blue-200 cursor-not-allowed'}`}
            >
              {selectedOption ? `Check out for $${totalPrice}.00` : 'Select an option to continue'}
            </button>
          </div>
        ) : (
          <div className="space-y-6 py-2 text-center">
            <p className="text-sm font-semibold text-gray-600">Enter your delivery email address</p>
            
            <div className="text-left">
              <input 
                type="email" 
                placeholder="yourname@gmail.com" 
                className={`w-full border-2 p-4 rounded-xl outline-none transition-all ${emailError ? 'border-red-500 bg-red-50' : 'border-blue-500 focus:shadow-lg'}`}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-2 ml-1 font-medium animate-pulse">
                  ⚠️ {emailError}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-400 hover:bg-gray-50 transition-colors">Back</button>
              <button onClick={handleCheckoutClick} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl active:scale-95">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSelectionModal;