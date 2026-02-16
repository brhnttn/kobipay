import React from 'react';
import { FileText, ShieldCheck, Lock, Server } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Finansal Güvenlik Önceliğimizdir</h2>
          <p className="text-slate-400">Bankacılık standartlarında güvenlik altyapısı ve yasal uyumluluk ile işlemleriniz güvende.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Kart 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
              <FileText className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">6493 Sayılı Kanun</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tüm işlemler, TCMB lisanslı ve 6493 sayılı kanuna tabi yetkili ödeme kuruluşları aracılığıyla gerçekleştirilir.
            </p>
          </div>

          {/* Kart 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
              <ShieldCheck className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">3D Secure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tüm ödemeler 3D Secure protokolü ile doğrulanarak kart sahibinin onayı alınmadan işlem yapılmaz.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
              <Lock className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Uçtan Uca Şifreleme</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Verileriniz 256-bit SSL sertifikası ve PCI-DSS uyumlu altyapı ile şifrelenerek korunur.
            </p>
          </div>

          {/* Kart 4 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 border border-slate-700">
              <Server className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">KVKK Uyumlu</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kişisel ve ticari verileriniz KVKK kapsamında en üst düzey gizlilik standartlarıyla saklanır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}