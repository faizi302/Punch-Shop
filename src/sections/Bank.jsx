// Bank.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import pncImg from '../assets/Bank/pnc.gif';
import chaseImg from '../assets/Bank/chase.gif';
import bofaImg from '../assets/Bank/bofa bank.gif';
import tdImg from '../assets/Bank/tdbank.gif';
import sofiImg from '../assets/Bank/sofi.gif';
import citiImg from '../assets/Bank/citi.gif';
import wellsFargoImg from '../assets/Bank/wells fargo.gif';
import capitalOneImg from '../assets/Bank/capital bank.gif';
import bmoImg from '../assets/Bank/bmo.gif';

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
    image: pncImg
  },
  { 
    id: "bnk_02", 
    title: "Chase Bank", 
    price: "200.00", 
    stock: 5, 
    image: chaseImg
  },
  { 
    id: "bnk_03", 
    title: "BofA Bank", 
    price: "160.00", 
    stock: 22, 
    image: bofaImg
  },
  { 
    id: "bnk_04", 
    title: "TD", 
    price: "80.00", 
    stock: 2, 
    image: tdImg
  },
  { 
    id: "bnk_05", 
    title: "SoFi", 
    price: "100.00", 
    stock: 15, 
    image: sofiImg
  },
  { 
    id: "bnk_06", 
    title: "Citi", 
    price: "90.00", 
    stock: 15, 
    image: citiImg
  },
  { 
    id: "bnk_07", 
    title: "Wells Fargo Bank", 
    price: "100.00", 
    stock: 10, 
    image: wellsFargoImg
  },
  { 
    id: "bnk_08", 
    title: "Capital One Bank", 
    price: "120.00", 
    stock: 8, 
    image: capitalOneImg
  },
  { 
    id: "bnk_09", 
    title: "BMO Bank", 
    price: "140.00", 
    stock: 6, 
    image: bmoImg
  }
];
``


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