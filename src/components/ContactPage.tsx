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
      <section className={`py-20 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 ${activeTheme.classes.hero}`}>
        <div className="max-w-4xl mx-auto">
          <Mail className="mx-auto mb-6 opacity-50" size={40} />
          <h1 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${activeTheme.classes.heroText}`}>
            お問合せ
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            ご予約・ご質問はこちらから
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
            <ImagePlaceholder src="/images/contact.1.png" fallbackKeyword="letter,desk,plant" className="w-full h-64 md:h-96 object-cover" alt="お問合せ イメージ" />
          </div>
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
