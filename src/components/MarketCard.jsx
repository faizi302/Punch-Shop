// components/MarketCard.jsx
import React from 'react';
import { Star, Flame, Check } from 'lucide-react';

const MarketCard = ({ item, onPurchase, onReviews }) => {
  return (
    <div className="bg-[var(--color-mcard)] border border-gray-700/50 rounded-xl p-4 flex items-center justify-between gap-6 hover:bg-[var(--color-mcard)]/80 transition-colors">
      
      {/* Image and Details */}
      <div className="flex items-center gap-4 flex-1">
        <div className="w-20 h-20 bg-black rounded-full p-2 flex items-center justify-center">
          <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-bold text-lg">{item.title}</h3>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            <span className="text-yellow-400">⚡</span> {item.description}
          </p>
          <p className="text-gray-400 text-sm">(⚡ Instant Delivery)</p>
        </div>
      </div>

      {/* Price */}
      <div className="text-right min-w-[120px]">
        <p className="text-white font-bold text-xl">${item.price} USD</p>
      </div>

      {/* Purchase Button with Tags */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onPurchase}
          className="bg-[var(--color-mbutton)] text-black font-bold py-2 px-6 rounded-lg"
        >
          Purchase
        </button>
        {item.isHot && (
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Flame size={12} /> HOT PRODUCT
          </span>
        )}
        {item.isTrusted && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Check size={12} /> TRUSTED SELLER
          </span>
        )}
      </div>

      {/* Seller Info (Clickable for Reviews) */}
      <div 
        onClick={onReviews}
        className="flex flex-col items-center cursor-pointer group"
      >
        <img src={item.sellerAvatar} alt="Seller" className="w-10 h-10 rounded-full mb-1 group-hover:scale-110 transition-transform" />
        <p className="text-white font-semibold text-sm">{item.sellerName}</p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          <span className="text-gray-400 text-xs ml-1">({item.reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;