// sections/Support.jsx
import React from 'react';
import { Smartphone } from 'lucide-react';

const Support = () => {
  return (
    <section className="py-12 px-4 md:px-10 bg-[var(--color-support-bg)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Support</h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-2xl mx-auto text-gray-800">
          <div className="flex justify-center -mt-16 mb-6">
            <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full mt-10 flex items-center justify-center shadow-xl">
              <Smartphone size={40} className="text-white" strokeWidth={2} />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            24/7 Support
          </h3>

          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Telegram:{' '}
              <a
                href="https://t.me/mvpwins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                https://t.me/mvpwins
              </a>
            </p>

            <p>
              Live Chat: Click the chat icon on bottom right of your screen.
            </p>

            <p>
              Visit Marketplace:{' '}
              <a
                href="https://punchatshop.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                https://punchatshop.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;