import React from 'react';
import ProductCard from '../components/ProductCard';
const sectionData = [
  { id: "bst_01", title: "Premium VPN 1 Year", price: "30.00", stock: 150, image: "src/assets/vpn.png" },
  { id: "bst_02", title: "Netflix UHD 6 Months", price: "18.00", stock: 42, image: "src/assets/netflix.png" },
];

const BestSellers = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary/10">
      <h2 className="text-white text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectionData.map((item) => (
          <ProductCard key={item.id} item={item} onPurchase={openModal} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;