import React from 'react';

export default function LogoCloud() {
  return (
    <section className="py-10 border-b border-slate-100 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            Güçlü İş Ortakları ve Altyapı
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Metin Tabanlı Logolar (Resim yüklemeye gerek kalmadan) */}
            <span className="text-2xl font-black text-slate-800 italic">VISA</span>
            <div className="flex items-center gap-1 font-bold text-xl text-slate-800">
                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80 -mr-3"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80"></div>
                <span>Mastercard</span>
            </div>
            <span className="text-xl font-bold text-blue-900 tracking-tight">TROY</span>
            <div className="flex items-center gap-1 font-bold text-xl text-slate-700">
                <span className="text-green-600">Garanti</span>
                <span>BBVA</span>
            </div>
            <span className="text-xl font-bold text-slate-800">QNB</span>
            
        </div>
      </div>
    </section>
  );
}