// Crypto.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "cry_01", title: "Coinbase FA", price: "150.00", stock: 14, image: "src/assets/coinbase.png" },
  { id: "cry_02", title: "Metamask", price: "100.00", stock: 9, image: "src/assets/metamask.png" }, // Assuming image
  { id: "cry_03", title: "Trust Wallet", price: "100.00", stock: 21, image: "src/assets/trustwallet.png" }, // Assuming image
];

const Crypto = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Crypto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectionData.map((item) => (
            <ProductCard key={item.id} item={item} onPurchase={openModal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crypto;