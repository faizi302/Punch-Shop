// components/MarketCard.jsx
import React from 'react';
import { Star, Flame, Check } from 'lucide-react';

const MarketCard = ({ item, onPurchase, onReviews }) => {
  return (
    <div className="bg-[var(--color-mcard)] border border-gray-700/50 rounded-xl p-6 flex items-center justify-between gap-6 hover:bg-[var(--color-mcard)]/90 transition-colors w-full">
      
      {/* Left Side - Product Image and Details */}
      <div className="flex items-center gap-4 flex-1">
        <div className="w-24 h-24 bg-black rounded-full p-3 flex items-center justify-center flex-shrink-0">
          <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="flex flex-col gap-1">
          <h3 className="text-[var(--color-mbutton)] font-bold text-xl">{item.title}</h3>
          <p className="text-gray-300 text-sm flex items-center gap-1">
            <span className="text-yellow-400">⚡</span> {item.description}
          </p>
          <p className="text-gray-400 text-xs">(⚡ Instant Delivery)</p>
        </div>
      </div>

      {/* Middle Section - Price, Purchase Button, and Single Tag */}
      <div className="flex flex-col items-start gap-2 flex-shrink-0">
        <p className="text-white font-bold text-2xl whitespace-nowrap">${item.price} USD</p>
        <button 
          onClick={onPurchase}
          className="bg-[var(--color-mbutton)] text-black font-bold py-2 px-8 rounded-lg hover:opacity-90 transition-opacity"
        >
          Purchase
        </button>
        {/* Only ONE tag - priority: isTrusted > isHot */}
        {item.isTrusted ? (
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
            <Check size={12} /> TRUSTED SELLER
          </span>
        ) : item.isHot ? (
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
            <Flame size={12} /> HOT PRODUCT
          </span>
        ) : null}
      </div>

      {/* Right Side - Seller Info (Clickable for Reviews) */}
      <div 
        onClick={onReviews}
        className="flex flex-col items-center cursor-pointer group flex-shrink-0"
      >
        <img 
          src={item.sellerAvatar} 
          alt="Seller" 
          className="w-12 h-12 rounded-full mb-1 group-hover:scale-110 transition-transform" 
        />
        <p className="text-white font-semibold text-sm text-center">{item.sellerName}</p>
        <div className="flex text-yellow-400 items-center mt-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
        </div>
        <span className="text-gray-400 text-xs">({item.reviewCount})</span>
      </div>
    </div>
  );
};

export default MarketCard;