// Social.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "soc_01", title: "Instagram 10k Followers", price: "25.00", stock: 99, image: "src/assets/instagram.png" },
  { id: "soc_02", title: "X (Twitter) Blue Badge", price: "40.00", stock: 12, image: "src/assets/x.png" },
  { id: "soc_03", title: "Facebook Business Manager", price: "65.00", stock: 4, image: "src/assets/facebook.png" },
];

const Social = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Social Media
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

export default Social;