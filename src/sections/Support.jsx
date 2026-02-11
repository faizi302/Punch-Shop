// sections/Support.jsx
import React from 'react';
import { Smartphone } from 'lucide-react';

const Support = () => {
  return (
    <section className="pb-14 pt-18 px-4 md:px-16 bg-[var(--color-support-bg)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Support</h2>

        <div className="bg-white rounded-md p-8 max-w-8xl mx-auto text-gray-800">
          <div className="flex justify-center -mt-16 mb-6">
            <div className="mt-10 flex items-center justify-center">
              <Smartphone size={40} className="text-[var(--color-primary)]" strokeWidth={2} />
            </div>
          </div>

          <h3 className="text-2xl md:text-1xl text-gray-700 mb-2">
            24/7 Support
          </h3>
          <div className="flex justify-center">
            <div className="w-10 h-[2px] bg-gray-200 mb-3 justify-center"></div>
          </div>

          <div className="space-y-3 text-gray-700 text-lg leading-relaxed font-semibold">
            <p>
              Telegram:{' '}
              <a
                href="https://t.me/mvpwins"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                https://t.me/mvpwins
              </a>
            </p>

            <p>
              Live Chat: <span className="text-gray-800 font-light"> Click the chat icon on bottom right of your screen.</span>
            </p>

            <p>
              Visit Marketplace:{' '}
              <a
                href="https://punchatshop.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
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