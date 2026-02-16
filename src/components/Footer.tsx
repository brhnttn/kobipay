import React from 'react';
import { MapPin, Phone, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 text-slate-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg font-bold text-lg">KP</div>
              <span className="text-xl font-bold text-slate-900">KobiPay</span>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
                KobiPay, 6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun kapsamında faaliyet gösteren, TCMB lisanslı yetkili ödeme kuruluşlarının çözüm ortağıdır. Tüm ödeme işlemleri, anlaşmalı olduğumuz lisanslı ödeme kuruluşlarının altyapıları üzerinden güvenli bir şekilde gerçekleştirilmektedir.
            </p>
            <div className="flex flex-col gap-3 text-sm">
               <div className="flex items-start gap-3"><Building2 className="w-5 h-5 text-slate-400 shrink-0" /><span>Finylabs Teknoloji Anonim Şirketi</span></div>
               <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-slate-400 shrink-0" /><span>Barbaros Mah. Lale Sk. Ağaoğlu My Office No:2 İç Kapı No:13 Ataşehir / İstanbul</span></div>
               <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-slate-400 shrink-0" /><span>0216 687 25 11</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Kurumsal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-600">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-blue-600">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Yasal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-600">Kullanıcı Sözleşmesi</a></li>
              <li><a href="#" className="hover:text-blue-600">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-blue-600">İptal ve İade Koşulları</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Finylabs Teknoloji A.Ş. Tüm hakları saklıdır.</p>
          <p>Vergi Dairesi: Ataşehir | VKN: 3881977000</p>
        </div>
      </div>
    </footer>
  );
}