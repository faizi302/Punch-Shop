// Bundles.jsx (Created as placeholder similar to other sections)
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "bun_01", title: "Bundle Kit 1", price: "200.00", stock: 5, image: "src/assets/bundle1.png" },
  { id: "bun_02", title: "Bundle Kit 2", price: "300.00", stock: 3, image: "src/assets/bundle2.png" },
  { id: "bun_03", title: "Bundle Kit 3", price: "250.00", stock: 7, image: "src/assets/bundle3.png" },
];

const Bundles = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Bundles
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

export default Bundles;