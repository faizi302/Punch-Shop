// ProductCard.jsx
import React from 'react';

/**
 * Common Product Card Component
 * @param {Object} item - Contains id, title, price, stock, and image
 * @param {Function} onPurchase - Function to handle the modal opening
 */
const ProductCard = ({ item, onPurchase }) => {
  return (
    <div className="bg-white border border-white/5 rounded-xl overflow-hidden shadow-lg flex flex-col">
      
      {/* Product Image Area */}
      <div className="w-full aspect-video bg-black flex items-center justify-center p-6 relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="max-w-full max-h-full object-contain z-10 drop-shadow-2xl"
        />
      </div>

      {/* Product Details Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-black font-bold text-sm md:text-base mb-1 line-clamp-1">
          {item.title}
        </h3>
        
        {/* Metadata: Price and Stock */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-black font-extrabold text-xl leading-none">
            ${item.price} USD
          </span>
          
          <span className="text-gray-600 text-sm">
            In stock
          </span>
        </div>

        {/* Purchase Button */}
        <button 
          onClick={() => onPurchase(item)}
          className="w-full mt-4 bg-primary text-white font-bold py-2.5 rounded-lg shadow-md shadow-primary/20 text-sm"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductCard;