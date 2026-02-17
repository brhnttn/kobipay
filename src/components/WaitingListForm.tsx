'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Loader2, CheckCircle, Send, AlertCircle } from 'lucide-react';

export default function WaitingListForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('waiting_list')
        .insert([{ email, source: 'landing_page' }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint hatası kodu
           throw new Error('Bu e-posta adresi zaten listede kayıtlı.');
        }
        throw error;
      }

      setStatus('success');
      setEmail(''); // Formu temizle
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Bir hata oluştu, lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-sm mt-6 p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-3 text-green-700 animate-in zoom-in">
        <CheckCircle className="shrink-0" size={24} />
        <div>
          <p className="font-bold">Harika!</p>
          <p className="text-sm">Bekleme listesine eklendiniz.</p>
        </div>
        <button onClick={() => setStatus('idle')} className="ml-auto text-xs underline hover:text-green-800">Yeni Ekle</button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="E-posta adresiniz"
            className="flex-1 px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <><Send size={18} /> Sıraya Gir</>}
          </button>
        </form>
        
        {/* Hata Mesajı */}
        {status === 'error' && (
            <div className="mt-3 flex items-center gap-2 text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                <AlertCircle size={16}/> {errorMessage}
            </div>
        )}
        
        <p className="text-sm text-slate-500 mt-4 text-center sm:text-left">
          🚀 İlk 1000 kişi arasına girin, ömür boyu komisyon indirimini kapın.
        </p>
    </div>
  );
}