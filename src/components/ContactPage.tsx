import React from 'react';
import { Mail } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  activeTheme: Theme;
}

export default function ContactPage({ activeTheme }: Props) {
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
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">お名前</label>
                <input type="text" className="w-full p-3 border rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス</label>
                <input type="email" className="w-full p-3 border rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">お問合せ内容</label>
                <textarea rows={5} className="w-full p-3 border rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-opacity-50"></textarea>
              </div>
              <button type="button" className={`w-full py-3 px-6 font-medium transition-colors duration-300 ${activeTheme.classes.button}`}>
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
