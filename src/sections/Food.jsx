// Food.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "fod_01", title: "Uber Eats Accounts", price: "2.00", stock: 50, image: "src/assets/food/uber eats.gif" },
  { id: "fod_02", title: "DoorDash Accounts", price: "2.00", stock: 8, image: "src/assets/food/doordash.gif" },
  { id: "fod_03", title: "Instacart Accounts", price: "1.00", stock: 15, image: "src/assets/food/instacart.gif" },
];

const Food = ({ openModal }) => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Food
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

export default Food;