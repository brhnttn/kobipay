'use client';
import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';

export default function Calculator() {
  // Hesaplama için ham sayı değeri (örn: 100000)
  const [amount, setAmount] = useState<number>(100000);
  // Ekranda göstermek için formatlı metin değeri (örn: "100.000")
  const [displayValue, setDisplayValue] = useState<string>("100.000");
  const [gain, setGain] = useState<number>(0);

  useEffect(() => {
    // Formül: (Tutar * 0.45 Faiz * 40 Gün) / 365
    const result = (amount * 0.45 * 40) / 365;
    setGain(result);
  }, [amount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Kullanıcının girdiği değerden rakam olmayan her şeyi (nokta, virgül, harf) temizle
    const rawValue = e.target.value.replace(/\D/g, '');

    // 2. Eğer kutu tamamen silindiyse
    if (rawValue === '') {
      setAmount(0);
      setDisplayValue('');
      return;
    }

    // 3. Metni sayıya çevir
    const numberValue = parseInt(rawValue, 10);

    // 4. Hesaplama için ham sayıyı state'e at
    setAmount(numberValue);

    // 5. Ekranda gözükmesi için binlik ayraçlı (noktalı) formata çevir
    // Intl.NumberFormat tarayıcının yerel ayarlarını kullanır, Türkçe'de nokta koyar.
    const formatted = new Intl.NumberFormat('tr-TR').format(numberValue);
    setDisplayValue(formatted);
  };

  return (
    <section id="hesaplama" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Sol Açıklama */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Paranızın Değerini Hesaplayın</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Fatura tutarını girin, 40 günlük vade avantajının size ne kadar kazandıracağını görün.
            </p>
          </div>
          
          {/* Sağ Hesap Makinesi */}
          <div className="lg:w-1/2 w-full bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-slate-800">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <CalcIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl">Kazanç Simülatörü</h3>
            </div>

            <label className="block text-sm font-semibold text-slate-600 mb-2">Fatura Tutarı (TL)</label>
            
            {/* GÜNCELLENEN INPUT ALANI */}
            <input 
              type="text" 
              inputMode="numeric" // Mobilde sayı klavyesi açar
              value={displayValue}
              onChange={handleAmountChange}
              placeholder="0"
              className="w-full text-3xl font-bold border-2 border-slate-200 rounded-xl px-4 py-4 mb-6 focus:border-blue-500 outline-none transition text-slate-900 placeholder:text-slate-300"
            />

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Vade Avantajı:</span>
                    <span className="font-bold text-slate-900">40 Gün</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Değerlendirme Yöntemi:</span>
                    <span className="font-bold text-slate-900">Mevduat (%45)</span>
                </div>
                
                <div className="border-t border-slate-200 my-2"></div>

                <div className="flex flex-col gap-1">
                    <span className="text-slate-500 text-sm font-medium">Potansiyel Kazanç:</span>
                    <span className="text-4xl font-extrabold text-green-600 tracking-tight">
                        {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(gain)}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-2">
                        *Tahmini yıllık mevduat faizi getirisi baz alınmıştır.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}