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
    image: "src/assets/Hot_products/masetcard.webp" 
  },
  { 
    id: "hot_02", 
    title: "CC (VISA)", 
    price: "150.00", 
    stock: 8, 
    image: "src/assets/Hot_products/visa.gif" 
  },
  { 
    id: "hot_03", 
    title: "ID Verified Cash App", 
    price: "100.00", 
    stock: 45, 
    image: "src/assets/Hot_products/dollar.gif" 
  },
  { 
    id: "hot_03", 
    title: "ID Verified PayPal", 
    price: "90.00", 
    stock: 45, 
    image: "src/assets/Hot_products/paypal.gif" 
  },
  { 
    id: "hot_03", 
    title: "ID Verified Venmo", 
    price: "70.00", 
    stock: 45, 
    image: "src/assets/Hot_products/verified.gif" 
  },
  { 
    id: "hot_03", 
    title: "ID Verified Chime Bank", 
    price: "100.00", 
    stock: 45, 
    image: "src/assets/Hot_products/chime.gif" 
  },
  { 
    id: "hot_03", 
    title: "High Balance (VISA)", 
    price: "200.00", 
    stock: 45, 
    image: "src/assets/Hot_products/visa2.gif" 
  },
  { 
    id: "hot_03", 
    title: "DUMPS for Cloning Cards", 
    price: "80.00", 
    stock: 45, 
    image: "src/assets/Hot_products/cloning card.gif" 
  },
  { 
    id: "hot_03", 
    title: "Trust Wallet Accounts", 
    price: "250.00", 
    stock: 45, 
    image: "src/assets/Hot_products/trust.gif" 
  }
];

const HotProducts = ({ openModal }) => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Hot Products
        </h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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