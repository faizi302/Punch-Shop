// Shopping.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "shp_01", title: "Amazon Aged Account", price: "45.00", stock: 32, image: "src/assets/amazon.png" },
  { id: "shp_02", title: "eBay Seller Account", price: "80.00", stock: 7, image: "src/assets/ebay.png" },
  { id: "shp_03", title: "Walmart Gift Card $100", price: "75.00", stock: 15, image: "src/assets/walmart.png" },
];

const Shopping = ({ openModal }) => {
  return (
    <section className="py-10 px-4 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Shopping & Retail
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

export default Shopping;