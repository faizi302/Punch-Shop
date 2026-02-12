import React from 'react';
import ProductCard from '../components/ProductCard';
import cashAppImg from '../assets/best sellers/id verified.avif';
import dumpsImg from '../assets/best sellers/dumps.avif';
import visaImg from '../assets/best sellers/visa.avif';


const sectionData = [
  { id: "bst_01", title: "ID Verified Cash App", price: "30.00", stock: 150, image: cashAppImg },
  { id: "bst_02", title: "DUMPS for Cloning Cards", price: "18.00", stock: 42, image: dumpsImg },
  { id: "bst_03", title: "High Balance (VISA)", price: "18.00", stock: 42, image: visaImg }
];


const BestSellers = ({ openModal }) => {
  return (
    <section className="pb-14 pt-20 px-4 md:px-16 bg-primary-dark">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Best Sellers
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

export default BestSellers;