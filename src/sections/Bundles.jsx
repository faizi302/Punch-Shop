// Bundles.jsx (Created as placeholder similar to other sections)
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "bun_01", title: "PREMIUM CC BUNDLE", price: "200.00", stock: 5, image: "src/assets/top_selling_bundles/premium cc.avif" },
  { id: "bun_02", title: "ULTIMATE CC BUNDLE", price: "300.00", stock: 3, image: "src/assets/top_selling_bundles/ultimate_cc.avif" }
];

const Bundles = ({ openModal }) => {
  return (
    <section className="pb-14 pt-20 px-4 md:px-16 bg-primary-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Top Selling Bundles
        </h2>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-8">
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

export default Bundles;