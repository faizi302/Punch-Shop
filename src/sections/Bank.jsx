// Bank.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
/**
 * Bank Section Component
 * Displays a grid of banking-related products using the common ProductCard
 */
const sectionData = [
  { 
    id: "bnk_01", 
    title: "PNC Bank", 
    price: "80.00", 
    stock: 12, 
    image: "src/assets/Bank/pnc.gif" 
  },
  { 
    id: "bnk_02", 
    title: "Chase Bank", 
    price: "200.00", 
    stock: 5, 
    image: "src/assets/Bank/chase.gif" 
  },
  { 
    id: "bnk_03", 
    title: "BofA Bank", 
    price: "160.00", 
    stock: 22, 
    image: "src/assets/Bank/bofa bank.gif" // Assuming image name
  },
  { 
    id: "bnk_04", 
    title: "TD", 
    price: "80.00", 
    stock: 2, 
    image: "src/assets/Bank/tdbank.gif" 
  },
  { 
    id: "bnk_05", 
    title: "SoFi", 
    price: "100.00", 
    stock: 15, 
    image: "src/assets/Bank/sofi.gif" 
  },
  { 
    id: "bnk_06", 
    title: "Citi", 
    price: "90.00", 
    stock: 15, 
    image: "src/assets/Bank/citi.gif" 
  },
  { 
    id: "bnk_07", 
    title: "Wells Fargo Bank", 
    price: "100.00", 
    stock: 10, 
    image: "src/assets/Bank/wells fargo.gif" // Assuming image name
  },
  { 
    id: "bnk_08", 
    title: "Capital One Bank", 
    price: "120.00", 
    stock: 8, 
    image: "src/assets/Bank/capital bank.gif" // Assuming image name
  },
  { 
    id: "bnk_09", 
    title: "BMO Bank", 
    price: "140.00", 
    stock: 6, 
    image: "src/assets/Bank/bmo.gif" // Assuming image name
  }
];

const Bank = ({ openModal }) => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Bank
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

export default Bank;