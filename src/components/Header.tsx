'use client'; // İnteraktif olduğu için şart
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // İkonları ekledik

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl group-hover:bg-blue-700 transition">
            KP
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">KobiPay</span>
        </Link>
        
        {/* MASAÜSTÜ MENÜ (Mobilde Gizli) */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link href="#nasil-calisir" className="hover:text-blue-600 transition">Nasıl Çalışır?</Link>
          <Link href="#hesaplama" className="hover:text-blue-600 transition">Kazanç Hesapla</Link>
          <Link href="#iletisim" className="hover:text-blue-600 transition">İletişim</Link>
        </nav>

        {/* AKSİYON BUTONU (Masaüstü) */}
        <div className="hidden md:block">
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">
                Çok Yakında
            </button>
        </div>

        {/* MOBİL MENÜ BUTONU (Hamburger) */}
        <button 
            className="md:hidden z-50 p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBİL AÇILIR MENÜ */}
        {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in z-40">
                <nav className="flex flex-col items-center gap-6 text-xl font-medium text-slate-800">
                    <Link href="#nasil-calisir" onClick={() => setIsMenuOpen(false)}>Nasıl Çalışır?</Link>
                    <Link href="#hesaplama" onClick={() => setIsMenuOpen(false)}>Kazanç Hesapla</Link>
                    <Link href="#iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
                </nav>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-xl">
                    Çok Yakında
                </button>
            </div>
        )}
      </div>
    </header>
  );
}