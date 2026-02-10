// HotProducts.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
/**
 * Hot Products Section
 * This section features the most popular items across all categories.
 */
const sectionData = [
  { 
    id: "hot_01", 
    title: "CC (Mastercard)", 
    price: "80.00", 
    stock: 12, 
    image: "src/assets/mastercard.png" 
  },
  { 
    id: "hot_02", 
    title: "CC (VISA)", 
    price: "150.00", 
    stock: 8, 
    image: "src/assets/visa.png" 
  },
  { 
    id: "hot_03", 
    title: "ID Verified Cash App", 
    price: "100.00", 
    stock: 45, 
    image: "src/assets/cashapp.png" 
  }
];

const HotProducts = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-8">
          Hot Products
        </h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectionData.map((product) => (
            <ProductCard 
              key={product.id} 
              item={product} 
              onPurchase={openModal} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotProducts;