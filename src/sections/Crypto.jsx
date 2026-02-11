// Crypto.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import coinbaseImg from '../assets/Crypto/coinbase.gif';
import metamaskImg from '../assets/Crypto/metamask.gif';
import trustWalletImg from '../assets/Crypto/trust wollet.gif';
import binanceImg from '../assets/Crypto/binance.png';
import krakenImg from '../assets/Crypto/kraken.png';
import geminiImg from '../assets/Crypto/gemini.png';


const sectionData = [
  { id: "cry_01", title: "Coinbase Accounts", price: "150.00", stock: 14, image: coinbaseImg },
  { id: "cry_02", title: "Metamask Accounts", price: "90.00", stock: 9, image: metamaskImg },
  { id: "cry_04", title: "Trust Wallet ACcounts", price: "250.00", stock: 21, image: trustWalletImg },
  { id: "cry_05", title: "Binance Accounts", price: "300.00", stock: 21, image: binanceImg },
  { id: "cry_06", title: "Kraken Accounts", price: "180.00", stock: 21, image: krakenImg },
  { id: "cry_07", title: "Gemini Accounts", price: "160.00", stock: 21, image: geminiImg }
];


const Crypto = ({ openModal }) => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Crypto
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

export default Crypto;