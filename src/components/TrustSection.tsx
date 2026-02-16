'use client'; // <--- İŞTE EKSİK OLAN SİHİRLİ SATIR BU!
import React from 'react';
import { FileCheck, ShieldAlert, BadgeCheck, Search, Server, ScanLine } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* SOL TARAF: Görselleştirilmiş Doğrulama Süreci (Fake UI) */}
          <div className="lg:w-1/2 w-full relative">
            {/* Arkaplan Süsü */}
            <div className="absolute inset-0 bg-blue-50 rounded-3xl -rotate-3 transform scale-95 z-0"></div>
            
            {/* Ana Panel Kartı */}
            <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 relative z-10 overflow-hidden">
                
                {/* --- SCANNER EFEKTİ (Bu div yukarı aşağı hareket eder) --- */}
                <div className="absolute top-0 left-0 w-full h-1 bg-green-400 blur-[2px] shadow-[0_0_20px_rgba(74,222,128,0.8)] z-20 animate-[scan_3s_ease-in-out_infinite]"></div>
                {/* ----------------------------------------------------- */}

                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-bold text-slate-600">Sistem Risk Kontrolü</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded animate-pulse">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        Canlı İzleme
                    </div>
                </div>

                {/* Kontrol Listesi */}
                <div className="space-y-4 relative">
                    {/* Adım 1 */}
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg transition-colors hover:bg-blue-50">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Search className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-bold text-slate-800">GİB Fatura Sorgusu</div>
                            <div className="text-xs text-slate-500">ETTN: 48f2-9a1c-3b...</div>
                        </div>
                        <BadgeCheck className="w-5 h-5 text-green-500" />
                    </div>

                    {/* Adım 2 */}
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-blue-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                            <ShieldAlert className="w-4 h-4 text-orange-600" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-bold text-slate-800">8 Gün İptal Süresi Analizi</div>
                            <div className="text-xs text-slate-500">Fatura Tarihi: 14.02.2026 (Güvenli)</div>
                        </div>
                        <BadgeCheck className="w-5 h-5 text-green-500" />
                    </div>

                    {/* Adım 3 */}
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg transition-colors hover:bg-indigo-50">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <FileCheck className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-bold text-slate-800">VKN & IBAN Eşleşmesi</div>
                            <div className="text-xs text-slate-500">Tedarikçi Doğrulandı</div>
                        </div>
                        <BadgeCheck className="w-5 h-5 text-green-500" />
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                    <div className="text-xs text-green-600 font-bold flex items-center justify-center gap-2">
                        <BadgeCheck className="w-4 h-4" />
                        İŞLEM ONAYLANDI: TİCARİ BELGE GEÇERLİDİR
                    </div>
                </div>
            </div>
          </div>

          {/* SAĞ TARAF: Metinler */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                Sıfır Risk Politikası
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Sadece <span className="text-blue-600">Gerçek Ticareti</span> Finanse Ediyoruz
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Platformumuz, hayali işlemleri ve nakit avans (cash-out) girişimlerini engellemek için gelişmiş algoritmalar kullanır. GİB entegrasyonumuz sayesinde, faturası olmayan hiçbir işlem gerçekleşemez.
            </p>

            <ul className="space-y-6">
                <li className="flex items-start gap-4">
                    <div className="mt-1 bg-green-100 p-2 rounded-lg">
                        <Server className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">GİB Entegrasyonlu Anlık Doğrulama</h4>
                        <p className="text-sm text-slate-600 mt-1">
                            Yüklenen her e-fatura, Gelir İdaresi Başkanlığı servisleri üzerinden anlık olarak sorgulanır. Fatura tutarı, alıcı/satıcı VKN'leri ve fatura durumu (iptal/onaylı) kontrol edilir.
                        </p>
                    </div>
                </li>

                <li className="flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-lg">
                        <ShieldAlert className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">8 Günlük İptal Süresi Kontrolü</h4>
                        <p className="text-sm text-slate-600 mt-1">
                            TTK uyarınca e-faturaların 8 gün içinde iptal edilebilme riski sistemimiz tarafından izlenir. Yeni kesilmiş faturalar için ek doğrulama katmanları devreye girer, riskli görülen işlemler engellenir.
                        </p>
                    </div>
                </li>

                <li className="flex items-start gap-4">
                    <div className="mt-1 bg-indigo-100 p-2 rounded-lg">
                        <FileCheck className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Kapalı Devre Ödeme Sistemi</h4>
                        <p className="text-sm text-slate-600 mt-1">
                            Ödeme, kart sahibinin hesabına değil, doğrudan faturada belirtilen tedarikçinin IBAN adresine yapılır. Bu sayede sistem dışına para çıkışı (cash-out) teknik olarak imkansızdır.
                        </p>
                    </div>
                </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Scanner Animasyonu CSS */}
      <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          50% { top: 100%; opacity: 1; }
          90% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}