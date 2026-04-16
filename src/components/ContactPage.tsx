import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  activeTheme: Theme;
}

export default function ContactPage({ activeTheme }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mjgjygwn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <section className={`relative py-32 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 overflow-hidden ${activeTheme.classes.hero}`}>
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder src="/images/contact.1.jpg" fallbackKeyword="letter,desk,plant" className="w-full h-full object-cover opacity-70" alt="お問合せ 背景" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Mail className="mx-auto mb-6 opacity-70 text-[#FFFFF0]" size={40} />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#FFFFF0] drop-shadow-md">
            お問合せ
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium text-[#FFFFF0] drop-shadow-md">
            ご予約・ご質問はこちらから
          </p>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-2xl mx-auto">
          <div className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
            {status === 'success' ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">送信完了しました</h3>
                <p className="opacity-80 mb-8">
                  お問い合わせありがとうございます。<br />
                  内容を確認次第、折り返しご連絡させていただきます。
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className={`py-2 px-6 font-medium transition-colors duration-300 ${activeTheme.classes.button}`}
                >
                  新しく問い合わせる
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm">
                    送信に失敗しました。時間をおいて再度お試しいただくか、直接メールにてご連絡ください。
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">お問合せ内容</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full py-3 px-6 font-medium transition-colors duration-300 ${activeTheme.classes.button} ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? '送信中...' : '送信する'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
