// Food.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "fod_01", title: "UberEats Promo $30", price: "12.00", stock: 50, image: "src/assets/ubereats.png" },
  { id: "fod_02", title: "Doordash Account High Bal", price: "35.00", stock: 8, image: "src/assets/doordash.png" },
  { id: "fod_03", title: "Starbucks Gold Account", price: "20.00", stock: 15, image: "src/assets/starbucks.png" },
];

const Food = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Food & Delivery
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

export default Food;