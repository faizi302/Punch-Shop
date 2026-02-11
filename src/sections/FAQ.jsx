// sections/FAQ.jsx
import React from 'react';
import { HelpCircle, CheckCircle } from 'lucide-react';

const faqItems = [
  {
    question: "How do I receive my order?",
    answer:
      "Delivery is instant. As soon as you complete the purchase, you'll get immediate access to the full instructions and any additional resources included in your order.",
    icon: HelpCircle,
  },
  {
    question: "Can you explain what I'm buying?",
    answer:
      "All product details are listed on each item — just click Purchase to view the full information. Once you complete your purchase, you will also receive full step-by-step instructions with your item.",
    icon: HelpCircle,
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If you're not satisfied for any reason, we offer a full refund. Just contact us with your details, and we'll process your refund as soon as possible.",
    icon: HelpCircle,
  },
  {
    question: "Are your items available to purchase in every country?",
    answer:
      "Yes, items are available to purchase globally. No matter where you live, you can access and buy our products.",
    icon: HelpCircle,
  },
  {
    question: "How Can I Buy on the Site?",
    answer: (
      <>
        We make it simple to purchase using crypto. Here are a few quick tutorials to help you get started:
        <br /><br />
        <strong>Coinbase Tutorial:</strong>
        <br />
        <a
          href="https://www.youtube.com/watch?v=VHspj-KHYWs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          https://www.youtube.com/watch?v=VHspj-KHYWs
        </a>
        <br /><br />
        <strong>Cash App Tutorial:</strong>
        <br />
        <a
          href="https://www.youtube.com/watch?v=FDH_WAYI"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          https://www.youtube.com/watch?v=FDH_WAYI
        </a>
        <br /><br />
        Or Find a Bitcoin ATM near you:
        <br />
        <a
          href="https://coinatmradar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          https://coinatmradar.com/
        </a>
        <br /><br />
        You're also welcome to use any crypto wallet you prefer.
      </>
    ),
    icon: HelpCircle,
  },
  {
    question: "How do I contact support?",
    answer: (
      <>
        Telegram:{' '}
        <a
          href="https://t.me/mvpwins"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          https://t.me/mvpwins
        </a>
        <br /><br />
        Live Chat: Click the chat icon on bottom right of your screen.
        <br /><br />
        Visit Marketplace:{' '}
        <a
          href="https://punchatshop.io"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          https://punchatshop.io
        </a>
      </>
    ),
    icon: CheckCircle,
  },
];

const FAQ = () => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-[var(--color-support-bg)] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center">FAQ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg p-6 flex flex-col items-center text-center h-fit"
            >
              <div className="-mt-10 mb-6">
                <div className="w-16 h-16 bg-[var(--color-primary)] mt-10 rounded-full flex items-center justify-center shadow-md">
                  <item.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-xl md:text-1xl text-gray-700 mb-2 font-semibold">
                {item.question}
              </h3>
              <div className="flex justify-center">
            <div className="w-10 h-[2px] bg-gray-200 mb-3 justify-center"></div>
          </div>

              <div className="text-gray-700 text-base leading-relaxed">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;