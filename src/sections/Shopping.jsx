// Shopping.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sectionData = [
  { id: "shp_01", title: "eBay Accounts", price: "80.00", stock: 7, image: "src/assets/shopping/ebay accounts.gif" },
  { id: "shp_02", title: "Amazon Accounts", price: "45.00", stock: 32, image: "src/assets/shopping/amazon.gif" },
  { id: "shp_03", title: "Walmart Accounts", price: "75.00", stock: 15, image: "src/assets/shopping/walmert.gif" },
  { id: "shp_04", title: "StockX Accounts", price: "75.00", stock: 15, image: "src/assets/shopping/stockX Accounts.gif" },
  { id: "shp_05", title: "Turo Accounts", price: "75.00", stock: 15, image: "src/assets/shopping/turo.gif" },
  { id: "shp_06", title: "Airbnb Accounts", price: "75.00", stock: 15, image: "src/assets/shopping/airbnb.gif" },
];

const Shopping = ({ openModal }) => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Shopping
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

export default Shopping;