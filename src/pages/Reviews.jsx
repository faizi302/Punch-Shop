import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ChevronUp, ChevronDown, Send, UserRoundSearch, 
  MessageSquareMore, Star, CheckCircle2 
} from 'lucide-react';
import heroLogo from '../assets/herologo.gif';


const Reviews = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Example Review Data
  const reviewData = [
    { id: 1, user: "Alex M.", date: "2 hours ago", rating: 5, comment: "Instant delivery as always. The Cash App account was fully verified and ready to go. Best service on the market!", verified: true },
    { id: 2, user: "Sarah K.", date: "5 hours ago", rating: 5, comment: "Was a bit skeptical at first but support helped me through the crypto payment. 10/10 would buy again.", verified: true },
    { id: 3, user: "Ghost_Rider", date: "Yesterday", rating: 5, comment: "The PayPal aged accounts are top tier. No issues with holds or verification.", verified: true },
    { id: 4, user: "Mike T.", date: "2 days ago", rating: 4, comment: "Great products, just wish there were more LTC payment options. Everything else is perfect.", verified: true },
    { id: 5, user: "Jason L.", date: "3 days ago", rating: 5, comment: "Bought the bundle pack. Massive savings and all accounts work perfectly.", verified: true },
    { id: 6, user: "CryptoKing", date: "1 week ago", rating: 5, comment: "Clean UI, fast checkout, and the accounts are high quality. Punch Shop is the goat.", verified: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-primary text-white">
      
      {/* 1. HEADER (Identical to Home.jsx) */}
      <header className="bg-[image:var(--color-mixed)] p-6 md:p-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <NavLink to="/">
            <img src={heroLogo}  alt="Banner" className="w-full h-auto rounded shadow-xl cursor-pointer" />
          </NavLink>
        </div>
      </header>

      {/* 2. MAIN REVIEWS CONTENT */}
      <main className="flex-grow bg-white text-gray-800 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          
          {/* Rating Summary Header */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-10 mb-10 gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black text-black tracking-tight mb-2">Customer Reviews</h1>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Feedback from our community</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center border border-gray-100">
                <div className="text-4xl font-black text-black">4.9</div>
                <div className="flex text-yellow-400 my-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">331 Total Reviews</div>
            </div>
          </div>

          {/* Scrollable Review List */}
          <div className="space-y-6">
            {reviewData.map((review) => (
              <div key={review.id} className="p-6 rounded-2xl border border-gray-50 bg-[#fcfdfe] hover:border-primary/20 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-black text-sm uppercase tracking-tighter">{review.user}</span>
                        {review.verified && (
                            <span className="flex items-center gap-1 text-[9px] font-black text-green-500 uppercase bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                <CheckCircle2 size={10} /> Verified
                            </span>
                        )}
                    </div>
                    <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase">{review.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg">
                Load More Reviews
            </button>
          </div>
        </div>
      </main>

      <Footer/>

      {/* 4. FLOATING MENU (Identical to Home.jsx) */}
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

export default Reviews;