import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Star, X, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  // Mock data for the modal
  const reviewData = [
    { id: 1, user: "Alex M.", date: "2 hours ago", rating: 5, comment: "Instant delivery as always. The Cash App account was fully verified and ready to go.", verified: true },
    { id: 2, user: "Sarah K.", date: "5 hours ago", rating: 5, comment: "Was a bit skeptical at first but support helped me through. 10/10.", verified: true },
    { id: 3, user: "Ghost_Rider", date: "Yesterday", rating: 5, comment: "The PayPal aged accounts are top tier. No issues.", verified: true },
    { id: 4, user: "Mike T.", date: "2 days ago", rating: 4, comment: "Great products, everything works perfect.", verified: true },
  ];

  return (
    <>
      <footer className="bg-white border-t border-gray-100 py-14 px-12 text-black flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
        <div className="text-gray-400 text-md">© PUNCH 2026</div>
        <div className="flex items-center gap-2">
          <ul className='flex gap-4 text-[#7958db] text-sm font-light mr-3'>
            <NavLink to="/privacy" className="hover:text-black cursor-pointer">Privacy Policy</NavLink>
            <NavLink to="/terms" className="hover:text-black cursor-pointer">Terms of Services</NavLink>
            
            {/* Clickable Stars */}
            <div 
              onClick={() => setIsReviewsOpen(true)} 
              className="flex items-center gap-1 text-yellow-400 cursor-pointer hover:scale-105 transition-transform ml-2"
            >
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              <span className="text-gray-400 ml-2 font-medium">(331)</span>
            </div>
          </ul>
        </div>
      </footer>

      {/* REVIEWS MODAL OVERLAY */}
      {isReviewsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setIsReviewsOpen(false)}
          ></div>
          
          <div className="relative z-[110] w-full max-w-4xl max-h-[85vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
              <div className="p-8 md:p-12 pb-0 flex justify-between items-start border-b border-gray-50">
                <div>
                  <h2 className="text-4xl font-black text-black tracking-tight mb-1">Reviews</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">What people say about Punch</p>
                </div>
                <button 
                  onClick={() => setIsReviewsOpen(false)}
                  className="bg-gray-100 p-3 rounded-full text-gray-400 hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto p-8 md:p-12 space-y-6 flex-grow bg-white scrollbar-hide">
                  {reviewData.map((review) => (
                    <div key={review.id} className="p-6 rounded-2xl border border-gray-100 bg-[#fcfdfe] text-black">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                              <span className="font-black text-sm uppercase tracking-tighter">{review.user}</span>
                              {review.verified && (
                                  <span className="text-[9px] font-black text-green-500 uppercase bg-green-50 px-2 py-0.5 rounded-full border border-green-100 flex items-center gap-1">
                                      <CheckCircle2 size={10}/> Verified
                                  </span>
                              )}
                          </div>
                          <div className="flex text-yellow-400">
                              {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-gray-300 uppercase">{review.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed italic">"{review.comment}"</p>
                    </div>
                  ))}
              </div>

              <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-center items-center gap-4">
                  <div className="text-2xl font-black text-black">4.9/5.0</div>
                  <div className="h-4 w-[1px] bg-gray-300"></div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Based on 331 global ratings</div>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;