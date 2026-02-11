import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronUp, ChevronDown, Send, UserRoundSearch, MessageSquareMore, Star } from 'lucide-react';
import Footer from '../components/Footer';

const TermsOfServices = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-primary text-white">
      
      {/* 1. HEADER (Consistent with Home.jsx) */}
      <header className="bg-[image:var(--color-mixed)] p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <NavLink to="/">
            <img src="/src/assets/herologo.gif" alt="Banner" className="w-full h-auto rounded shadow-xl cursor-pointer" />
          </NavLink>
        </div>
      </header>

      {/* 2. MAIN CONTENT (Paragraph and Heading Style) */}
      <main className="flex-grow bg-white text-gray-700 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-4xl font-black mb-2 text-black tracking-tight">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-8 font-bold uppercase tracking-widest">Last updated: August 9th 2018</p>
          
          <div className="space-y-6 leading-relaxed text-sm md:text-base text-justify">
            
            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">Overview</h2>
            <p>
              This website is operated by <strong>Punch</strong>, which will be referred to as just "The Merchant" in the following terms. Throughout the site, the terms “we”, “us” and “our” refer to The Merchant. The Merchant offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">General Terms</h2>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction. A breach or violation of any of the Terms will result in an immediate termination of your Services.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">General Conditions</h2>
            <p>
              We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, share, copy, sell, resell or exploit any portion of the Service without express written permission by us.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">Modifications to the service and prices</h2>
            <p>
              Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">Products and services</h2>
            <p>
              Our products and services may be available exclusively online through the website. These products or services are subject to refund, return or exchange only according to our Refund Policy. We reserve the right to limit the sales of our products or Services to any person, geographic region or jurisdiction. We do not warrant that the quality of any products, services, or information purchased by you will meet your expectations.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">Accuracy of billing and account information</h2>
            <p>
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">Prohibited Uses</h2>
            <p>
              In addition to other prohibitions, you are prohibited from using the site: (a) for any unlawful purpose; (b) to solicit others to perform unlawful acts; (c) to infringe upon or violate our intellectual property rights; (d) to harass, abuse, or harm based on gender, religion, race, etc; (e) to submit false information; (f) to upload viruses; (g) to spam, phish, crawl or scrape; (h) use any software, macro, bot or similar tools to use our website.
            </p>

            <h2 className="text-xl font-black text-black mt-8 uppercase tracking-tighter">Governing law</h2>
            <p>
              These Terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of <strong>Romania</strong>.
            </p>

            <p className="pt-8 border-t border-gray-100 text-xs text-gray-400 italic">
              Questions about the Terms of Service should be sent to us through our support channels.
            </p>
          </div>
        </div>
      </main>

      <Footer/>

      {/* 4. FLOATING MENU */}
      <div className="fixed right-8 bottom-6 flex flex-col gap-3 items-center z-50 text-white">
        {showMenu && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-5">
            <button onClick={() => setShowMenu(false)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-16 rounded-full shadow-lg"><ChevronDown size={30} /></button>
            <button className="bg-[#41b1e6] hover:bg-white hover:text-[#41b1e6] cursor-pointer p-3 rounded-full flex items-center justify-center size-16 shadow-lg"><Send size={30} /></button>
            <button className="bg-primary hover:bg-white hover:text-primary p-3 cursor-pointer rounded-full flex items-center justify-center size-16 shadow-lg"><UserRoundSearch size={30} /></button>
          </div>
        )}
        {!showMenu && (
          <button onClick={() => setShowMenu(true)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-16 rounded-full shadow-lg"><ChevronUp size={30} /></button>
        )}
        <button className="bg-blue-600 p-5 rounded-full shadow-2xl flex items-center justify-center size-20"><MessageSquareMore size={35} /></button>
      </div>
    </div>
  );
};

export default TermsOfServices;