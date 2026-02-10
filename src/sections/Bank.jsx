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
    title: "PNC", 
    price: "100.00", 
    stock: 12, 
    image: "src/assets/Bank/pnc.gif" 
  },
  { 
    id: "bnk_02", 
    title: "Chase Bank", 
    price: "150.00", 
    stock: 5, 
    image: "src/assets/Bank/chase.gif" 
  },
  { 
    id: "bnk_03", 
    title: "Bank of America", 
    price: "100.00", 
    stock: 22, 
    image: "src/assets/Bank/bofa.gif" // Assuming image name
  },
  { 
    id: "bnk_04", 
    title: "TD", 
    price: "110.00", 
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
    price: "150.00", 
    stock: 15, 
    image: "src/assets/Bank/citi.gif" 
  },
  { 
    id: "bnk_07", 
    title: "Wells Fargo", 
    price: "200.00", 
    stock: 10, 
    image: "src/assets/Bank/wellsfargo.gif" // Assuming image name
  },
  { 
    id: "bnk_08", 
    title: "Capital One", 
    price: "100.00", 
    stock: 8, 
    image: "src/assets/Bank/capitalone.gif" // Assuming image name
  },
  { 
    id: "bnk_09", 
    title: "HSBC", 
    price: "120.00", 
    stock: 6, 
    image: "src/assets/Bank/hsbc.gif" // Assuming image name
  }
];

const Bank = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      {/* Section Heading centered */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-8">
          Bank
        </h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectionData.map((item) => (
            <ProductCard 
              key={item.id} 
              item={item} 
              onPurchase={openModal} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bank;