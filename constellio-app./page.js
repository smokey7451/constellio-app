"use client";
import React, { useState } from 'react';

export default function ConstellioApp() {
  const [universe, setUniverse] = useState('family'); 

  // PASTE YOUR STRIPE LINK BETWEEN THE QUOTES BELOW
  const STRIPE_LINK = "https://buy.stripe.com/6oEg1..."; 

  return (
    <div className={`min-h-screen transition-all duration-1000 ${universe === 'family' ? 'bg-slate-950' : 'bg-purple-950'} text-white font-sans`}>
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-2xl font-black tracking-tighter">CONSTELLIO<span className="text-orange-500">.</span></h1>
        <button 
          onClick={() => window.location.href = STRIPE_LINK} 
          className="bg-orange-500 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-500/20"
        >
          Upgrade to Premium
        </button>
      </nav>

      {/* UNIVERSE TOGGLE */}
      <div className="flex justify-center mt-12">
        <div className="bg-black/40 p-1 rounded-2xl border border-white/10 flex">
          <button 
            onClick={() => setUniverse('family')} 
            className={`px-8 py-3 rounded-xl font-bold transition-all ${universe === 'family' ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'text-gray-400'}`}
          >
            Family Vault
          </button>
          <button 
            onClick={() => setUniverse('soulmate')} 
            className={`px-8 py-3 rounded-xl font-bold transition-all ${universe === 'soulmate' ? 'bg-purple-600 shadow-lg shadow-purple-500/20' : 'text-gray-400'}`}
          >
            Soulmate Portal
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <main className="max-w-4xl mx-auto p-10 text-center">
        {universe === 'family' ? (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-5xl font-black mb-4">Preserve Your Legacy.</h2>
            <p className="text-gray-400 text-xl mb-10">Deep-zoom storage for your family's most precious history.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square bg-white/5 rounded-[2rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center hover:border-blue-500 transition-colors cursor-pointer group">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">📸</span>
                <span className="text-gray-500">Upload High-Res Photo</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-[2rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center hover:border-blue-500 transition-colors cursor-pointer group">
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">🎥</span>
                <span className="text-gray-500">Upload Family Video</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-5xl font-black mb-4">Find Your Soulmate.</h2>
            <p className="text-gray-400 text-xl mb-10">Face-to-face discovery in the Constellio Portal.</p>
            <div className="bg-gradient-to-tr from-purple-900 via-purple-600 to-pink-600 aspect-video rounded-[3rem] flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
              <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-110 transition-transform z-10">
                ENTER THE PORTAL
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}