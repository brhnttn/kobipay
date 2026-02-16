'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  // Sayıcılar için State'ler
  const [posRate, setPosRate] = useState(0);
  const [days, setDays] = useState(0);

  // Basit Sayıcı Animasyonu (Bileşen yüklendiğinde tetiklenir)
  useEffect(() => {
    let start = 0;
    const endPos = 65;
    const endDays = 45;
    const duration = 2000; // 2 saniye
    const incrementTime = 30;

    const timer = setInterval(() => {
      start += 1;
      if (start <= endPos) setPosRate(start);
      if (start <= endDays) setDays(start);
      
      if (start >= endPos) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Metin */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Tedarik Zincirinde <br/> <span className="text-blue-600">Nakit Tıkanıklığına</span> Son
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Türkiye'de KOBİ'ler işletme sermayelerini yönetmekte zorlanıyor. 
              Fatura vadeleri ile tahsilat süreleri arasındaki uyumsuzluk, büyümeyi engelliyor.
            </p>
            
            <div className="bg-orange-50/80 border-l-4 border-orange-500 p-6 rounded-r-2xl shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="text-orange-600 w-6 h-6" />
                <h4 className="font-bold text-orange-800">Sektörel Gerçeklik</h4>
              </div>
              <p className="text-orange-800/80 text-sm leading-relaxed">
                Kredi kartı limitleriniz hazır bekliyor ancak hammadde aldığınız tedarikçiniz POS cihazı kullanmıyorsa, bu finansman gücünden yararlanamıyorsunuz. Paranız banka hesapları arasında sıkışıyor.
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-slate-700 font-medium">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Çözüm KobiPay: Siz kartla ödeyin, tedarikçinize nakit gitsin.</span>
            </div>
          </div>

          {/* Sağ İstatistik Kartı (Animasyonlu) */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl overflow-hidden relative group">
              
              {/* Dönen Parlama Efekti (Çok şık durur) */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 blur-xl"></div>
              
              <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 relative z-10 border border-slate-700/50">
                  <div className="text-center mb-12">
                    <p className="text-slate-400 text-sm font-semibold tracking-widest mb-4 uppercase">Aylık B2B Fatura Hacmi</p>
                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                      5 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Trilyon ₺</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center transform hover:-translate-y-1 transition">
                      <div className="text-4xl font-black text-white mb-2">%{posRate}<span className="text-blue-500">+</span></div>
                      <div className="text-xs text-slate-400 font-medium leading-tight">POS Kullanmayan<br/>Tedarikçi Oranı</div>
                    </div>
                    
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center transform hover:-translate-y-1 transition">
                      <div className="text-4xl font-black text-white mb-2">{days} <span className="text-2xl text-slate-400">Gün</span></div>
                      <div className="text-xs text-slate-400 font-medium leading-tight">Geleneksel Yöntemle<br/>Ortalama Vade Kaybı</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}