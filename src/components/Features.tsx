import React from 'react';
import { Clock, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Features() {
  return (
    <section id="nasil-calisir" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Neden KobiPay?</h2>
          <p className="text-slate-600">İşletmenizin nakit akışını bozmadan ödeme yapmanın en akıllı yolu.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 p-4 rounded-xl mb-6"><Clock className="w-8 h-8 text-blue-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">40 Gün Vade Avantajı</h3>
            <p className="text-slate-600">Ödemenizi bugün yapın, bankanıza kredi kartı ekstrenizin son ödeme tarihinde, yani ortalama <strong>40 gün sonra</strong> ödeyin.</p>
          </div>

          <div className="flex flex-col items-start p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition duration-300">
            <div className="bg-green-100 p-4 rounded-xl mb-6"><TrendingUp className="w-8 h-8 text-green-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nakit Yönetimi</h3>
            <p className="text-slate-600">Kasanızdaki nakit size kalır. Bu nakiti mevduatta değerlendirerek veya mal alarak <strong>ekstra kar</strong> elde edersiniz.</p>
          </div>

          <div className="flex flex-col items-start p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition duration-300">
            <div className="bg-indigo-100 p-4 rounded-xl mb-6"><ShieldCheck className="w-8 h-8 text-indigo-600" /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Güvenli Altyapı</h3>
            <p className="text-slate-600">Ödemeleriniz, BDDK lisanslı kuruluşlar ve <strong>3D Secure</strong> altyapısı ile %100 güvence altındadır.</p>
          </div>
        </div>
      </div>
    </section>
  );
}