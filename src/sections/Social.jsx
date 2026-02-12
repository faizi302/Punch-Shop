// Social.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import snapchatImg from '../assets/social/snapchat.gif';
import yahooMailImg from '../assets/social/yahoo mails.gif';
import onlyFansImg from '../assets/social/only fans login.gif';


const sectionData = [
  { id: "soc_01", title: "Snapchat Accounts", price: "2.00", stock: 99, image: snapchatImg },
  { id: "soc_02", title: "Yahoo Mail Accounts", price: "2.00", stock: 12, image: yahooMailImg },
  { id: "soc_03", title: "OnlyFans Logins", price: "1.00", stock: 4, image: onlyFansImg },
];


const Social = ({ openModal }) => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl font-semibold mb-8">
          Social
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

export default Social;