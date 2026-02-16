import React from 'react';
import { Check, X, Star } from 'lucide-react';

export default function ComparisonSection() {
  const features = [
    { label: 'İşlem Hızı', bank: '3-5 İş Günü', kobipay: 'Saniyeler İçinde' },
    { label: 'Maliyet Tipi', bank: 'Faiz + Dosya Masrafı', kobipay: 'Sabit ve Düşük Komisyon' },
    { label: 'Bürokrasi', bank: 'Evrak, İmza, Kefil', kobipay: 'Sadece Kredi Kartı' },
    { label: 'Limit Esnekliği', bank: 'Banka İnisiyatifinde', kobipay: 'Kart Limiti Kadar Özgür' },
    { label: 'Erişilebilirlik', bank: 'Sadece Mesai Saatleri', kobipay: '7/24 Anında Ödeme' },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Arkaplan Süsü */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Neden Geleneksel Yöntemlere Mahkum Değilsiniz?</h2>
          <p className="text-slate-600 text-lg">Kredi süreçleriyle zaman kaybetmek yerine, KobiPay ile kontrolü elinize alın.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          {/* Tablo Başlıkları */}
          <div className="grid grid-cols-3 gap-0 mb-4 px-6">
            <div className="col-span-1"></div>
            <div className="text-center font-bold text-slate-500 text-lg">Banka Kredisi</div>
            <div className="text-center"></div> {/* KobiPay başlığı karta taşındı */}
          </div>

          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl p-6 md:p-10 z-10">
            
            {/* KobiPay Öne Çıkan Sütun (Absolute ile tablonun üzerine oturtuldu) */}
            <div className="hidden md:block absolute top-[-40px] bottom-[-20px] right-[4%] w-[30%] bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl shadow-2xl shadow-blue-900/40 z-20 border-4 border-white pointer-events-none transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Star className="w-3 h-3 fill-current" /> En Akıllı Çözüm
                </div>
                <div className="text-center text-white font-bold text-2xl mt-8 mb-2">KobiPay</div>
            </div>

            {/* Tablo Satırları */}
            <div className="divide-y divide-slate-100">
              {features.map((item, index) => (
                <div key={index} className="grid grid-cols-3 items-center py-5 relative group">
                  
                  {/* Özellik Adı */}
                  <div className="font-bold text-slate-700 md:text-lg pl-2">
                    {item.label}
                  </div>
                  
                  {/* Banka Sütunu */}
                  <div className="flex items-center justify-center gap-2 text-slate-500 pr-4 md:pr-12">
                    <X className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-sm md:text-base text-center">{item.bank}</span>
                  </div>
                  
                  {/* KobiPay Sütunu (Masaüstünde mavi kartın içine denk gelir, mobilde normal görünür) */}
                  <div className="flex items-center justify-center gap-2 text-blue-700 md:text-white relative z-30 md:pl-8">
                    <Check className="w-5 h-5 text-blue-600 md:text-emerald-400 shrink-0" />
                    <span className="font-bold text-sm md:text-base text-center">{item.kobipay}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}