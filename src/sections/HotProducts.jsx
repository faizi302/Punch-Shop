// HotProducts.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

// Import images
import mastercardImg from '../assets/Hot_products/masetcard.webp';
import visaImg from '../assets/Hot_products/visa.gif';
import dollarImg from '../assets/Hot_products/dollar.gif';
import paypalImg from '../assets/Hot_products/paypal.gif';
import venmoImg from '../assets/Hot_products/verified.gif';
import chimeImg from '../assets/Hot_products/chime.gif';
import visa2Img from '../assets/Hot_products/visa2.gif';
import cloningCardImg from '../assets/Hot_products/cloning card.gif';
import trustImg from '../assets/Hot_products/trust.gif';
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
    image: mastercardImg
  },
  { 
    id: "hot_02", 
    title: "CC (VISA)", 
    price: "150.00", 
    stock: 8, 
    image: visaImg
  },
  { 
    id: "hot_03", 
    title: "ID Verified Cash App", 
    price: "100.00", 
    stock: 45, 
    image: dollarImg
  },
  { 
    id: "hot_03", 
    title: "ID Verified PayPal", 
    price: "90.00", 
    stock: 45, 
    image: paypalImg
  },
  { 
    id: "hot_03", 
    title: "ID Verified Venmo", 
    price: "70.00", 
    stock: 45, 
    image: venmoImg
  },
  { 
    id: "hot_03", 
    title: "ID Verified Chime Bank", 
    price: "100.00", 
    stock: 45, 
    image: chimeImg
  },
  { 
    id: "hot_03", 
    title: "High Balance (VISA)", 
    price: "200.00", 
    stock: 45, 
    image: visa2Img
  },
  { 
    id: "hot_03", 
    title: "DUMPS for Cloning Cards", 
    price: "80.00", 
    stock: 45, 
    image: cloningCardImg
  },
  { 
    id: "hot_03", 
    title: "Trust Wallet Accounts", 
    price: "250.00", 
    stock: 45, 
    image: trustImg
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