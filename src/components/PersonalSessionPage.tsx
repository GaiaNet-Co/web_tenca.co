import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  activeTheme: Theme;
}

export default function PersonalSessionPage({ activeTheme }: Props) {
  return (
    <>
      <section className={`relative py-32 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 overflow-hidden ${activeTheme.classes.hero}`}>
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder src="/images/personalsession.1.png" fallbackKeyword="conversation,warm" className="w-full h-full object-cover opacity-40" alt="個人セッション 背景" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <MessageCircle className="mx-auto mb-6 opacity-70 text-[#FFFFF0]" size={40} />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#FFFFF0] drop-shadow-md">
            個人セッション
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium text-[#FFFFF0] drop-shadow-md">
            対話を通して、心とエネルギーの現在地を知る
          </p>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            セッションについて
          </h2>
          <div className="space-y-8 text-lg leading-loose opacity-90">
            <p>
              身体の不調や現実の悩みは、無意識の思い込みやエネルギーの滞りが原因となっていることが多くあります。<br />
              個人セッションでは、丁寧な対話を通して、あなたが今抱えているモヤモヤや課題の根本にアプローチします。
            </p>
            <p>
              ただ話を聴くだけでなく、エネルギーの状態を読み取りながら、あなた自身が気づいていない「本当の望み」や「手放すべきブロック」を紐解いていきます。
            </p>
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <ImagePlaceholder src="/images/personalsession.2.png" fallbackKeyword="tea,relaxing" className="w-full h-64 object-cover" alt="対話風景" />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            メニュー詳細
          </h2>
          
          <div className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">オンライン個人セッション</h3>
                <p className="opacity-80">Zoom等を使用したオンライン対話</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-xl font-bold">15,000円</p>
                <p className="text-sm opacity-70">60分</p>
              </div>
            </div>
            
            <div className="space-y-4 opacity-90">
              <p>
                遠方の方や、ご自宅からリラックスして受けたい方におすすめです。<br />
                画面越しでもエネルギーの状態をしっかりと把握し、必要なメッセージやアドバイスをお伝えします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
