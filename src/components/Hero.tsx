'use client'; // İnteraktif olduğu için şart
import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Building2, Loader2, RefreshCcw } from 'lucide-react';

export default function Hero() {
  // Animasyon durumlarını yönetmek için state
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handlePaymentDemo = () => {
    if (paymentStatus !== 'idle') return;

    // 1. İşlem Başlıyor
    setPaymentStatus('processing');

    // 2. 1.5 saniye sonra Başarılı ekranı
    setTimeout(() => {
      setPaymentStatus('success');
      
      // 3. 3 saniye sonra başa dön (Reset)
      setTimeout(() => {
        setPaymentStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* SOL TARAF: Metin Alanı (Aynı Kaldı) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Finylabs Teknoloji Güvencesiyle
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Şirket Ödemelerini <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Kredi Kartıyla Yönet
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tedarikçi faturalarını kredi kartınla öde, vaden <strong>40 güne kadar</strong> uzasın. 
              Tedarikçin ödemeyi nakit (havale) olarak alsın.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
               <div className="flex-1 max-w-md bg-white p-1.5 rounded-full shadow-xl shadow-blue-900/5 border border-slate-200 flex items-center">
                  <input 
                    type="email" 
                    placeholder="E-posta adresiniz..." 
                    className="pl-6 pr-2 py-3 outline-none w-full rounded-full text-slate-600 placeholder:text-slate-400 bg-transparent"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition whitespace-nowrap shadow-md">
                    Haber Ver
                  </button>
               </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>BDDK Lisanslı Altyapı</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div>%100 Güvenli Ödeme</div>
            </div>
          </div>

          {/* SAĞ TARAF: İnteraktif Fake UI */}
          <div className="lg:w-1/2 w-full relative perspective-1000">
            {/* Arkaplan Efekti */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-3xl rounded-full -z-10"></div>
            
            {/* Kartın Kendisi */}
            <div className={`bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 relative z-10 transition-all duration-500 ${paymentStatus === 'success' ? 'border-green-200 shadow-green-100' : ''}`}>
                
                {/* --- DURUM 1: NORMAL FORM --- */}
                {paymentStatus !== 'success' && (
                  <div className="animate-fade-in">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">ABC Plastik A.Ş.</div>
                                <div className="text-xs text-slate-500">TR12 0006 ... 5542</div>
                            </div>
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                            Tedarikçi Doğrulandı
                        </div>
                    </div>

                    {/* Tutar */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                        <div className="text-xs text-slate-500 mb-1">Ödenecek Tutar</div>
                        <div className="text-3xl font-bold text-slate-900">₺ 125.000,00</div>
                        <div className="text-xs text-blue-600 font-medium mt-1">+1.250 Bonus Puan Kazanımı</div>
                    </div>

                    {/* Kart Seçimi */}
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between p-3 border border-blue-500 bg-blue-50 rounded-xl cursor-pointer shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-5 bg-slate-800 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                                <div className="text-sm font-semibold text-slate-700">.... 4242</div>
                            </div>
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>

                    {/* Buton (Loading Durumlu) */}
                    <button 
                      onClick={handlePaymentDemo}
                      disabled={paymentStatus === 'processing'}
                      className={`w-full font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300
                        ${paymentStatus === 'processing' 
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'}`}
                    >
                        {paymentStatus === 'processing' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            İşlem Yapılıyor...
                          </>
                        ) : (
                          <>
                            Ödemeyi Tamamla
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                    </button>
                  </div>
                )}

                {/* --- DURUM 2: BAŞARILI EKRANI (Success State) --- */}
                {paymentStatus === 'success' && (
                  <div className="flex flex-col items-center justify-center py-10 animate-scale-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-short">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Ödeme Başarılı!</h3>
                    <p className="text-slate-500 text-center mb-6 max-w-[200px]">
                      125.000,00 TL tedarikçi hesabına aktarılıyor.
                    </p>
                    <div className="w-full bg-slate-50 p-3 rounded-lg flex items-center justify-between text-xs text-slate-500 mb-4">
                      <span>İşlem No:</span>
                      <span className="font-mono font-bold text-slate-700">KP-882910</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-600 animate-pulse">
                      <RefreshCcw className="w-3 h-3" />
                      <span>Ekran yenileniyor...</span>
                    </div>
                  </div>
                )}
            </div>

            {/* Yan Bildirim Kartı (Sadece Idle durumda göster) */}
            {paymentStatus === 'idle' && (
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 hidden md:flex animate-fade-in-up">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                      <div className="font-bold text-slate-900 text-sm">Denemek İçin Tıkla</div>
                      <div className="text-xs text-slate-500">Ödeme hızını test et 👆</div>
                  </div>
              </div>
            )}

          </div>
        </div>
      </div>
      
      {/* Grid Arkaplan */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-20"></div>
    </section>
  );
}