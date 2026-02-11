import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronUp, ChevronDown, Send, UserRoundSearch, MessageSquareMore, Star } from 'lucide-react';
import Footer from '../components/Footer';

const Privacy = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-primary text-white">
      
      {/* 1. HEADER (Same as Home.jsx) */}
      <header className="bg-[image:var(--color-mixed)] p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <NavLink to="/">
            <img src="/src/assets/herologo.gif" alt="Banner" className="w-full h-auto rounded shadow-xl cursor-pointer" />
          </NavLink>
        </div>
      </header>

      {/* 2. CONTENT SECTION */}
      <main className="flex-grow bg-white text-gray-800 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-4xl font-black mb-8 text-black tracking-tight border-b pb-4">Privacy Policy</h1>
          
          <div className="space-y-8 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl font-bold text-black mb-3 uppercase tracking-wider">Visitors</h2>
              <p>When you access and use ATShop, or any shops provided by our customers ("Shop Owners" or "Merchants"), we automatically log information such as user agents and IP addresses to help us mitigate denial of service attacks and track down network issues.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 uppercase tracking-wider">Identifiable Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#635bff]">As a merchant:</h3>
                  <p>If you sign up to become a Shop Owner, we will ask you to provide us with an email address, as well as optionally, company information. This information will naturally be stored in our database for later use. Such as notifying you by email if your shop has run out of stock. Or for appending your company information to customer invoices.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#635bff]">As a customer or visitor:</h3>
                  <p>As a customer of a user owned shop, you may be prompted to provide information such as an email address for issuing your purchased goods to. This information will be stored in our database for tracking your order and for reference should you have any inquires about your order. Additionally, if the Shop Owner uses <b>Crisp</b> for customer support, your email address and past orders will be sent over to Crisp. A profile of you and your basic information is then build up by Crisp so that Merchants can more easily assist you.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 uppercase tracking-wider">Cookies</h2>
              <p>We use cookies and your browser's local storage to keep track of your login session as well as preferences. Some third parties we work with such as Google and MaxMind also implement cookies on our site to anonymously track impressions, usage and activity.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 uppercase tracking-wider">Third Parties</h2>
              <p className="mb-4 text-gray-500 italic">Some third parties we use may collect personally identifiable information. Below is a list of the third party services we use:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Crisp", desc: "Opt-In customer support feature for Shop Owners." },
                  { name: "Google Analytics", desc: "User and visitor usage of our website is tracked." },
                  { name: "Intercom", desc: "Customer support software for assistance." },
                  { name: "PayPal / CoinPayments", desc: "Payment processing and fraud prevention." },
                  { name: "Coinbase Commerce", desc: "Accepting payments in crypto currency." },
                  { name: "MaxMind", desc: "Fraud prevention and device tracking." },
                  { name: "Sentry / Datadog", desc: "Error tracking and usage logs (max 30 days)." }
                ].map((item, idx) => (
                  <li key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="font-bold block text-black">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-2 uppercase tracking-wider">Contact Us</h2>
              <p className="text-blue-800">Should you have any further questions or concerns about our policy, feel free to contact us at <a href="mailto:Privacy@ATShop.io" className="font-bold underline">Privacy@ATShop.io</a>.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer/>

      {/* 4. FLOATING MENU (Same as Home.jsx) */}
      <div className="fixed right-8 bottom-6 flex flex-col gap-3 items-center z-50 text-white">
        {showMenu && (
          <>
            <button onClick={() => setShowMenu(false)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-16 rounded-full shadow-lg"><ChevronDown size={30} /></button>
            <button className="bg-[#41b1e6] hover:bg-white hover:text-[#41b1e6] cursor-pointer p-3 rounded-full flex items-center justify-center size-16 shadow-lg"><Send size={30} /></button>
            <button className="bg-primary hover:bg-white hover:text-primary p-3 cursor-pointer rounded-full flex items-center justify-center size-16 shadow-lg"><UserRoundSearch size={30} /></button>
          </>
        )}
        {!showMenu && (
          <button onClick={() => setShowMenu(true)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-16 rounded-full shadow-lg"><ChevronUp size={30} /></button>
        )}
        <button className="bg-blue-600 p-5 rounded-full shadow-2xl flex items-center justify-center size-20"><MessageSquareMore size={35} /></button>
      </div>
    </div>
  );
};

export default Privacy;