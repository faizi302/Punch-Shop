import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import {
    Star, MessageSquareMore, ChevronUp, ChevronDown,
    ChevronRight, X, ShieldCheck, Clock, Send, UserRoundSearch, Search, Copy
} from 'lucide-react';
import QRCode from "react-qr-code";
import heroLogo from '../assets/herologo.gif';



const CheckoutDetails = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Dynamic Data
    const title = searchParams.get('title') || "ID Verified Cash App";
    const totalAmount = searchParams.get('total') || "100.00";
    const email = searchParams.get('email') || "user@email.com";

    // States
    const [modalStep, setModalStep] = useState(null); // 'currency' or 'qr'
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600);
    const walletAddress = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";
    const [copied, setCopied] = useState(false);



    const copyAddress = async () => {
        try {
            await navigator.clipboard.writeText(walletAddress);
            setCopied(true);

            // reset after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy address:", err);
        }
    };


    // Timer Logic
    useEffect(() => {
        let timer;
        if (modalStep === 'qr' && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [modalStep, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const cryptoOptions = [
        { name: 'Bitcoin', symbol: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
        { name: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
        { name: 'Solana', symbol: 'SOL', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
        { name: 'Litecoin', symbol: 'LTC', icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-primary font-sans text-white overflow-x-hidden relative">

            {/* 1. HEADER */}
            <header className="p-6 md:p-10 flex justify-center w-full bg-[image:var(--color-mixed)]">
                <div className="w-full max-w-4xl">
                    <img src={heroLogo} alt="Banner" className="w-full h-auto rounded-lg shadow-2xl" />
                </div>
            </header>

            {/* 2. MAIN CHECKOUT PAGE */}
            <main className="flex justify-center flex-grow items-start px-4 py-10 bg-white">
                <div className="bg-white rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full max-w-4xl flex flex-col md:flex-row overflow-hidden  text-black border border-gray-100">

                    {/* Blue Section: Your Order */}
                    <div className="bg-[image:var(--color-mixed)] text-white p-10 md:w-[300px] flex flex-col">
                        <h3 className="text-[10px] font-bold opacity-70 uppercase tracking-[0.2em] mb-3">Your Order</h3>
                        <div className="flex-grow space-y-4">
                            <div>
                                <h2 className="text-xl font-bold leading-tight mb-1">{title}</h2>
                                <p className="text-sm opacity-80 truncate">{email}</p>
                            </div>

                            <div>
                                <p className="text-[10px] opacity-60 uppercase font-semibold mb-1 tracking-widest">Amount</p>
                                <p className="text-xl font-bold leading-tight">${totalAmount} USD</p>
                            </div>

                            <div>
                                <p className="text-sm opacity-60 uppercase font-semibold mb-1 tracking-widest">Order ID</p>
                                <p className="text-sm font-mono opacity-90">{id || 'EsctzynWagcStzJRb'}</p>
                            </div>

                            <div>
                                <p className="text-sm opacity-60 uppercase font-semibold mb-1 tracking-widest">Date</p>
                                <p className="text-sm font-medium">Today at 11:34 AM</p>
                            </div>
                        </div>
                        <button className="mt-12 w-full border border-white/30 py-3 rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                            Contact Support
                        </button>
                    </div>

                    {/* White Section: Payment Selection */}
                    <div className="flex-grow p-10 md:pt-12 flex justify-between flex-col bg-[#f5f5f5]">
                        <div className="">
                            <h2 className="text-2xl font-bold text-gray-600 mb-8 text-center">Select payment method</h2>
                            <div className="w-full border-2 border-primary p-6 rounded-xl flex items-center gap-5 shadow-sm">
                                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                </div>
                                <div>
                                    <p className="font-extrabold text-gray-800 text-sm uppercase tracking-tight">Crypto Currencies (⚡ Fastest)</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase opacity-60">Powered by Custom fulfillment</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-20 pt-8 border-t border-gray-100">
                            <button onClick={() => navigate('/')} className="px-8 py-3 bg-white rounded-md text-[11px] font-black text-gray-500 uppercase border-grey-900  hover:bg-gray-200">
                                Back to shop
                            </button>
                            <button onClick={() => setModalStep('currency')} className="px-8 py-3 bg-[#635bff] text-white rounded-md text-[11px] font-black uppercase flex items-center gap-2 hover:opacity-90 transition-all">
                                Continue Payment <ChevronRight size={16} />
                            </button>
                        </div>

                    </div>
                </div>
            </main >

            {/* 3. LAYERED MODALS */}
            {
                modalStep && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={() => setModalStep(null)}></div>

                        <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative z-[110] overflow-hidden animate-in zoom-in-95 duration-200 text-black">
                            <button onClick={() => setModalStep(null)} className="absolute right-6 top-6 text-gray-300 hover:text-black z-10"><X size={24} /></button>

                            {/* Currency Selection with Icons */}
                            {modalStep === 'currency' && (
                                <div className="p-10">
                                    <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase text-center">Select Currency</h3>
                                    <div className="space-y-3">
                                        {cryptoOptions.map((coin) => (
                                            <button
                                                key={coin.name}
                                                onClick={() => { setSelectedCoin(coin); setModalStep('qr'); }}
                                                className="w-full flex items-center justify-between p-4 border-2 border-gray-50 rounded-2xl hover:border-[#635bff] hover:bg-blue-50/50 transition-all group"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <img src={coin.icon} alt={coin.name} className="w-8 h-8 object-contain" />
                                                    <span className="font-bold text-sm uppercase tracking-widest text-gray-700">{coin.name}</span>
                                                </div>
                                                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#635bff]" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* QR Code Modal (No Floating Buttons Here) */}
                            {modalStep === 'qr' && (
                                <div className="flex flex-col">
                                    <div className="p-10 text-center">
                                        <div className="flex items-center justify-center gap-3 mb-1">
                                            <img src={selectedCoin.icon} alt="coin" className="w-6 h-6" />
                                            <h3 className="text-xl font-black tracking-tighter uppercase text-gray-800">Pay with {selectedCoin.name}</h3>
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-8">Send exactly ${totalAmount} USD</p>

                                        <div className="bg-white p-5 rounded-3xl inline-block mb-8 shadow-xl border border-gray-100">
                                            <QRCode value={`crypto-address-placeholder`} size={180} />
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200 group relative">
                                            <p className="text-[9px] text-gray-400 font-black uppercase mb-1 tracking-widest">Wallet Address</p>
                                            <div className="flex items-center justify-center gap-2">
                                                <p className="text-[11px] font-mono font-bold break-all text-gray-600">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                                                <button
                                                    onClick={copyAddress}
                                                    className="flex items-center gap-1"
                                                >
                                                    <Copy
                                                        size={14}
                                                        className={`cursor-pointer transition-colors ${copied ? 'text-green-500' : 'text-gray-400 hover:text-primary'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#f8f9fa] p-5 flex items-center justify-center gap-3 border-t border-gray-100">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.15em]">
                                            Expires in: <span className="text-red-500">{formatTime(timeLeft)}</span>
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }

            {/* 4. FLOATING MENU (Only Message Icon when closed, No Menu on QR step) */}

            {/* 7. FLOATING MENU */}
            <div className="fixed right-7 bottom-20 flex flex-col gap-3 items-center z-50">
                {showMenu && (
                    <>
                        <button onClick={() => setShowMenu(false)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-14 rounded-full shadow-lg"><ChevronDown size={20} /></button>
                        <button className="bg-[#41b1e6] hover:bg-white hover:text-[#41b1e6] cursor-pointer p-3 rounded-full flex items-center justify-center size-14 shadow-lg"><Send size={20} /></button>
                        <button className="bg-primary hover:bg-white hover:text-primary p-3 cursor-pointer rounded-full flex items-center justify-center size-14 shadow-lg"><UserRoundSearch size={20} /></button>
                    </>
                )}
                {!showMenu && (
                    <button onClick={() => setShowMenu(true)} className="bg-gray-500/50 hover:bg-white cursor-pointer hover:text-black p-3 flex items-center justify-center size-14 rounded-full shadow-lg"><ChevronUp size={20} /></button>
                )}
            </div>
            <div className="fixed right-4 bottom-3 flex flex-col gap-3 items-center z-50">
                <button className="bg-[#2c7cf6] p-5 cursor-pointer rounded-full shadow-xl"><MessageSquareMore size={16} /></button>
            </div>

            {/* 5. FOOTER */}
            <footer className="bg-white border-t border-gray-100 py-10 px-12 text-black flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-md">© PUNCH 2026</div>
                <div className="flex items-center gap-2 text-yellow-400">
                    <ul className='flex gap-4 text-[#7958db] text-sm font-light mr-3'>
                        <li><a href="/" className='hover:text-[#6144b9]'>Privacy Policy</a></li>
                        <li><a href="/" className='hover:text-[#6144b9]'>Terms of Services</a></li>
                    </ul>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    <span className="text-gray-400 ml-2 font-medium">(331)</span>
                </div>
            </footer>
        </div >
    );
};

export default CheckoutDetails;