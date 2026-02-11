// components/MarketCard.jsx
import React from 'react';
import { Star, Flame, Check } from 'lucide-react';

const MarketCard = ({ item, onPurchase, onReviews }) => {
  return (
    <div className="bg-[var(--color-mcard)] border border-gray-700/50 rounded-xl p-6 flex  items-center justify-between gap-6 hover:translate-y-[-6px] hover:bg-[var(--color-mcard)]/90 transition-colors w-full hover:shadow-[0_0px_50px_rgba(137,94,218,0.14)]">

      {/* Left Side - Product Image and Details */}
      <div className="flex gap-4 flex-1">
        <div className="w-50 h-auto bg-black rounded-sm p-3 flex items-center justify-center flex-shrink-0">
          <img src={item.image} alt={item.title} className="w-3xl" />
        </div>

        <div className="">
          <div className="flex flex-col gap-1">
            <h3 className="text-[var(--color-mbutton)] font-bold text-xl">{item.title}</h3>
            <div className="py-2">
              <p className="text-gray-300 text-sm flex items-center gap-1">
                <span className="text-yellow-400">⚡</span> {item.description}
              </p>
              <p className="text-gray-400 text-xs">(⚡ Instant Delivery)</p>
            </div>
          </div>
          {/* Middle Section - Price, Purchase Button, and Single Tag */}
          <div className="flex gap-2 items-center">
            <button
              onClick={onPurchase}
              className="bg-[var(--color-mbutton)] hover:shadow-[0_0_18px_rgba(255,202,79,0.5)] text-black font-bold py-2 px-8 rounded-lg transition-shadow"
            >
              Purchase
            </button>

            <div className="flex gap-2">
              {item.isTrusted && (
                <span className="[background:var(--button-gradientS)] text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-semibold self-start">
                  <Check size={12} /> TRUSTED SELLER
                </span>
              )}
              {item.isHot && !item.isTrusted && (
                <span className="[background:var(--button-gradient)] text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-semibold self-start">
                  <Flame size={12} /> HOT PRODUCT
                </span>
              )}
            </div>
          </div>


        </div>

      </div>



      {/* Right Side - Seller Info (Clickable for Reviews) */}
      <div
        onClick={onReviews}
        className="flex flex-col items-end cursor-pointer group flex-shrink-0"
      >
        <img
          src={item.sellerAvatar}
          alt="Seller"
          className="w-14 h-14 rounded-full mb-1 group-hover:scale-110 transition-transform bg-cover"
        />
        <p className="text-white font-semibold text-sm text-center">{item.sellerName}</p>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 items-center mt-1 gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <span className="text-gray-400 text-md">({item.reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;