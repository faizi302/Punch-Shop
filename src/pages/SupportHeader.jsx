// pages/Support.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquareMore } from 'lucide-react';

const SupportHeader = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'How do I receive my order?',
      answer: 'Delivery is instant. As soon as you complete the purchase, you\'ll get immediate access to the full instructions and any additional resources included in your order.',
    },
    {
      id: 2,
      question: 'Can you explain what I\'m buying?',
      answer: 'All product details are listed on each item — just click Purchase to view the full information. Once you complete your purchase, you\'ll also receive step-by-step instructions with your item.',
    },
    {
      id: 3,
      question: 'Is there a refund policy?',
      answer: 'Due to the digital nature of our products, all sales are final. However, if you experience any issues with your purchase, please contact our support team and we\'ll work to resolve it.',
    },
    {
      id: 4,
      question: 'Are your items available globally?',
      answer: 'Yes, our digital products are available worldwide. Access is instant upon purchase regardless of your location.',
    },
    {
      id: 5,
      question: 'How can I buy on the site?',
      answer: 'Simply browse our marketplace, click the Purchase button on any item you\'re interested in, enter your email, and proceed to checkout. Payment is processed securely and delivery is instant.',
    },
    {
      id: 6,
      question: 'How do I contact support?',
      answer: 'You can reach us via Telegram at the link provided at the top of this page, or click the Message Support button below to get in touch with our 24/7 support team.',
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[var(--color-market)] text-white flex flex-col">
      {/* Header with Go Back button */}
      <header className="py-6 px-6 flex justify-between items-center bg-[#1b143d] mb-3">
        <img src="src/assets/pine_apple.png" alt="Punch" className="h-10" />
        <Link
          to="/market"
          className="text-white hover:text-[var(--color-mbutton)] transition-colors text-sm "
        >
          Go Back to Marketplace
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 max-w-4xl w-full mx-auto">
        <h1 className="text-white font-bold text-4xl text-center mb-8">24/7 Support</h1>

        {/* Telegram Contact Box */}
        <div className="bg-[#2a2172] border border-[#2a2172] rounded-2xl p-6 mb-8 text-center">
          <p className="text-white mb-2">
            <span className="font-semibold">Telegram:</span>{' '}
            <a
              href="https://t.me/fnvpwins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-mbutton)] hover:underline"
            >
              https://t.me/fnvpwins
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            Contact us on Telegram for any help on your order using our Live Chat.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-white font-bold text-2xl mb-4">FAQ</h2>
          <div className="space-y-3">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#2a2172] border border-[#2a2172] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 font-semibold text-white hover:bg-[#352a86] transition-colors"
                >
                  {faq.question}
                </button>
                {openFaq === faq.id && (
                  <div className="px-4 mt-2 pb-4 text-gray-300 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Support Button */}
        <div className="text-center">
          <p className="text-gray-300 mb-4">Need more help?</p>
          <button className="bg-[var(--color-mbutton)] text-black font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-lg">
            Message Support
          </button>
        </div>
      </main>

      <footer className="py-4 px-6 bg-[#1b143d] text-amber-300 mt-2 text-sm font-bold">
        ©2025 Punch Marketplace. All rights reserved.
      </footer>

      {/* Floating Support Button */}
      <div className="fixed right-8 bottom-24 flex flex-col gap-3 items-center z-50">
        <button className="bg-[#601db2] hover:bg-[#601db2] p-4 rounded-full shadow-xl transition-colors">
          <img src='src/assets/float-img.png' className="w-7 h-7" />
        </button>
      </div>

      <div className="fixed right-6 bottom-6 z-50">
        <button className="bg-[#2c7cf6] hover:bg-[#1e6ee6] p-4 rounded-full shadow-xl transition-colors">
          <MessageSquareMore size={24} />
        </button>
      </div>
    </div>
  );
};

export default SupportHeader;