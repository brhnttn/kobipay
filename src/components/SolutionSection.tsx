'use client';
import React from 'react';
import { Layers, Zap, Landmark, Store } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Arkaplan Efektleri */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Tedarikçiniz <span className="text-blue-400">POS Kullanmıyor mu?</span> <br/>
            Bizim İçin Hiç Sorun Değil.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Piyasadaki en büyük engel kalktı. Tedarikçiniz kredi kartı kabul etmese bile, siz kartla ödeyin, biz ona nakit havale yapalım. Üstelik tedarikçinizin üye olmasına gerek yok.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* SOL: Kartlar (Özellikler) */}
          <div className="space-y-6">
            {/* Kart 1: No POS */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-xl shrink-0 group-hover:scale-110 transition duration-300">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tedarikçi İkna Derdi Yok</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    "POS cihazım yok", "Komisyonu kim ödeyecek?" tartışmalarına son. Tedarikçiniz IBAN'ına gelen paraya bakar, ödemenin kartla yapıldığını bile anlamaz.
                  </p>
                </div>
              </div>
            </div>

            {/* Kart 2: Bulk Payment */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="flex items-start gap-5">
                <div className="bg-indigo-600 p-3 rounded-xl shrink-0 group-hover:scale-110 transition duration-300">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Toplu Ödeme Sihiri</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Kira, elektrik, hammadde... 10 farklı faturayı seçin, tek seferde ödeyin. Ekstrede tek çekim görünür, biz hepsini ilgili yerlere dağıtırız.
                  </p>
                </div>
              </div>
            </div>

            {/* Kart 3: Rewards */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="flex items-start gap-5">
                <div className="bg-emerald-600 p-3 rounded-xl shrink-0 group-hover:scale-110 transition duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mil ve Puan Fabrikası</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Yüksek tutarlı şirket giderlerinizi karta yıkarak, kişisel harcamalarla toplayamayacağınız kadar mil ve puan kazanın.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Görselleştirme (Dönüşüm Şeması) */}
          <div className="relative">
             <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative z-10">
                {/* Adım 1: Kullanıcı */}
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg">SİZ</div>
                      <div className="text-left">
                         <div className="text-white font-bold">Kredi Kartı</div>
                         <div className="text-slate-400 text-xs">Vade: 40 Gün</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-white font-mono font-bold">- 100.000 TL</div>
                   </div>
                </div>

                {/* Bağlantı Çizgisi ve KobiPay */}
                <div className="relative py-4">
                   <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-600"></div>
                   <div className="relative z-10 bg-slate-900 border border-slate-600 rounded-xl p-3 flex items-center gap-3 w-max">
                      <div className="bg-blue-600 p-1.5 rounded text-white font-bold text-xs">KP</div>
                      <div className="text-xs text-slate-300">KobiPay Dönüştürücü</div>
                   </div>
                </div>

                {/* Adım 2: Tedarikçi */}
                <div className="flex items-center justify-between mt-8">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                         <Landmark className="w-6 h-6 text-emerald-700" />
                      </div>
                      <div className="text-left">
                         <div className="text-white font-bold">Tedarikçi</div>
                         <div className="text-slate-400 text-xs">Banka Hesabı (IBAN)</div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-emerald-400 font-mono font-bold">+ 100.000 TL</div>
                      <div className="text-xs text-slate-500 mt-1">Nakit/Havale</div>
                   </div>
                </div>
             </div>
             
             {/* Süsleme Kartı (Arka planda) */}
             <div className="absolute -right-4 -bottom-4 w-full h-full bg-slate-700/30 rounded-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}