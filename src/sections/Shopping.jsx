// Shopping.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import ebayImg from '../assets/shopping/ebay accounts.gif';
import amazonImg from '../assets/shopping/amazon.gif';
import walmartImg from '../assets/shopping/walmert.gif';
import stockXImg from '../assets/shopping/stockX Accounts.gif';
import turoImg from '../assets/shopping/turo.gif';
import airbnbImg from '../assets/shopping/airbnb.gif';


const sectionData = [
  { id: "shp_01", title: "eBay Accounts", price: "80.00", stock: 7, image: ebayImg },
  { id: "shp_02", title: "Amazon Accounts", price: "45.00", stock: 32, image: amazonImg },
  { id: "shp_03", title: "Walmart Accounts", price: "75.00", stock: 15, image: walmartImg },
  { id: "shp_04", title: "StockX Accounts", price: "75.00", stock: 15, image: stockXImg },
  { id: "shp_05", title: "Turo Accounts", price: "75.00", stock: 15, image: turoImg },
  { id: "shp_06", title: "Airbnb Accounts", price: "75.00", stock: 15, image: airbnbImg },
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