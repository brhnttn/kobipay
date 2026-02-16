import React from 'react';
import { UploadCloud, CreditCard, Landmark } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nasıl Çalışır?</h2>
          <p className="text-slate-600">Karmaşık banka prosedürleri yok. Sadece 3 basit adımda ödemenizi tamamlayın.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Çizgi Dekorasyonu (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

          {/* Adım 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition duration-300">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-blue-200 shadow-xl">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Faturanı Yükle</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ödemek istediğiniz faturayı sisteme yükleyin. Dijital KYB altyapımız ile faturanız ve tedarikçi bilgileriniz anında doğrulanır.
            </p>
          </div>

          {/* Adım 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition duration-300">
            <div className="bg-indigo-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-indigo-200 shadow-xl">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Kartınla Öde</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ticari veya bireysel kredi kartınızı kullanarak ödemeyi yapın. İster tek çekim, ister 12 taksit avantajından yararlanın.
            </p>
          </div>

          {/* Adım 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition duration-300">
            <div className="bg-emerald-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-emerald-200 shadow-xl">
              <Landmark className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Biz Havale Yapalım</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Biz ödemeyi kartınızdan alalım, lisanslı ödeme kuruluşları güvencesiyle tedarikçinizin IBAN adresine havale olarak gönderelim.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                ⚡ Tedarikçinin sisteme üye olmasına gerek yoktur.
            </div>
        </div>
      </div>
    </section>
  );
}