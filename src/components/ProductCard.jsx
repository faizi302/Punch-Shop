import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Common Product Card Component
 * @param {Object} item - Contains id, title, price, stock, and image
 * @param {Function} onPurchase - (No longer used, using navigation instead)
 */
const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-hidden shadow-lg flex flex-col">
      
      {/* Product Image Area */}
      <div className="w-full aspect-video bg-black flex items-center justify-center relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full max-w-[600px] object-contain z-10 drop-shadow-2xl"
        />
      </div>

      {/* Product Details Area */}
      <div className="p-4 flex flex-col flex-grow p-4">
        {/* Title */}
        <h3 className="text-gray-600 flex justify-baseline font-semibold text-sm md:text-xl mb-1 line-clamp-1">
          {item.title}
        </h3>
        
        {/* Metadata: Price and Stock */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 text-md font-semibold leading-none">
            ${item.price} USD
          </span>
          
          <span className="text-gray-500 text-md font-semibold">
            In stock
          </span>
        </div>
        <div className="w-8 h-[2px] bg-gray-200 mb-3"></div>

        {/* Purchase Button - Now handles navigation to trigger modal */}
        <button 
          onClick={() => navigate(`/product/${item.id}`)}
          className="w-full mt-4 bg-[var(--color-btn)] hover:bg-[var(--color-btnHover)] text-white font-semibold py-2 rounded-sm shadow-md shadow-primary/20 text-md cursor-pointer"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductCard;