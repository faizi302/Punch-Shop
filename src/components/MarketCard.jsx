// components/MarketCard.jsx
import React from 'react';
import { Star, Flame, Check } from 'lucide-react';

const MarketCard = ({ item, onPurchase, onReviews }) => {
  return (
    <div 
      className="
        bg-[var(--color-mcard)] 
        border border-gray-700/50 
        rounded-xl 
        p-4 sm:p-6 
        flex flex-col sm:flex-row 
        items-start sm:items-center 
        justify-between 
        gap-5 sm:gap-6 
        hover:translate-y-[-6px] 
        hover:bg-[var(--color-mcard)]/90 
        transition-all duration-300 
        w-full 
        hover:shadow-[0_0px_50px_rgba(137,94,218,0.14)]
      "
    >

      {/* Left Side - Product Image + Details */}
      <div className="flex flex-row sm:flex-row gap-4 w-full sm:flex-1">

        {/* Image container */}
        <div className="
          w-32 sm:w-40 md:w-48 lg:w-52 
          h-auto 
          bg-black 
          rounded-sm 
          p-2 sm:p-3 
          flex items-center justify-center 
          flex-shrink-0
        ">
          <img 
            src={item.image} 
            alt={item.title} 
            className="max-w-full max-h-[140px] sm:max-h-[160px] object-contain"
          />
        </div>

        {/* Title + Description + Price & Button */}
        <div className="flex flex-col gap-2 sm:gap-3 flex-1 min-w-0">

          <div className="flex flex-col gap-1">
            <h3 className="
              text-[var(--color-mbutton)] 
              font-bold 
              text-lg sm:text-xl md:text-2xl
            ">
              {item.title}
            </h3>

            <div className="py-1 sm:py-2">
              <p className="text-gray-300 text-sm sm:text-base flex items-center gap-1.5">
                <span className="text-yellow-400">⚡</span> 
                {item.description}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                (⚡ Instant Delivery)
              </p>
            </div>
          </div>

          {/* Price / Button / Tag row */}
          <div className="
            flex flex-wrap 
            items-center 
            gap-3 sm:gap-4 
            mt-1 sm:mt-2
          ">
            <button
              onClick={onPurchase}
              className="
                bg-[var(--color-mbutton)] 
                hover:shadow-[0_0_18px_rgba(255,202,79,0.5)] 
                text-black 
                font-bold 
                py-2.5 px-6 sm:px-8 
                rounded-lg 
                text-sm sm:text-base
                transition-shadow duration-300
                whitespace-nowrap
              "
            >
              Purchase
            </button>

            <div className="flex gap-2 flex-wrap">
              {item.isTrusted && (
                <span className="
                  [background:var(--button-gradientS)] 
                  text-white 
                  text-xs sm:text-sm 
                  px-3 py-1 
                  rounded-md 
                  flex items-center gap-1 
                  font-semibold
                ">
                  <Check size={14} /> TRUSTED SELLER
                </span>
              )}
              {item.isHot && !item.isTrusted && (
                <span className="
                  [background:var(--button-gradient)] 
                  text-white 
                  text-xs sm:text-sm 
                  px-3 py-1 
                  rounded-md 
                  flex items-center gap-1 
                  font-semibold
                ">
                  <Flame size={14} /> HOT PRODUCT
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Right Side - Seller Info (clickable) */}
      <div
        onClick={onReviews}
        className="
          flex flex-col 
          items-center sm:items-end 
          cursor-pointer 
          group 
          flex-shrink-0 
          mt-4 sm:mt-0
          w-full sm:w-auto
          text-center sm:text-right
        "
      >
        <img
          src={item.sellerAvatar}
          alt="Seller"
          className="
            w-14 h-14 sm:w-16 sm:h-16 
            rounded-full 
            mb-1.5 
            group-hover:scale-110 
            transition-transform 
            duration-300 
            object-cover
          "
        />
        <p className="text-white font-semibold text-sm sm:text-base">
          {item.sellerName}
        </p>
        <div className="flex items-center gap-2 mt-1 justify-center sm:justify-end">
          <div className="flex text-yellow-400 items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-400 text-sm sm:text-md">
            ({item.reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;