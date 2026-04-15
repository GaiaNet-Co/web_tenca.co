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
          <ImagePlaceholder src="/images/personalsession.1.jpg" fallbackKeyword="conversation,warm" className="w-full h-full object-cover opacity-70" alt="個人セッション 背景" />
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
              <ImagePlaceholder src="/images/personalsession.2.jpg" fallbackKeyword="tea,relaxing" className="w-full h-64 object-cover" alt="対話風景" />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            メニュー詳細
          </h2>

          <div className="grid grid-cols-1 gap-12">
            {/* セルフメンテナンス */}
            <div className={`overflow-hidden border transition-colors duration-500 flex flex-col md:flex-row ${activeTheme.classes.card}`}>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">インナーチャイルドの解放と手放し</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    幼少期の体験や記憶から生まれたインナーチャイルドに優しく向き合い、心に残る感情や思い込みを解放していく60分の講座です。手放しのワークを通して、本来の自分らしさと心の軽やかさを取り戻します。
                  </p>
                </div>
                <div>
                  <div className="border-t border-current opacity-20 mb-4"></div>
                  <p className="text-2xl font-bold text-right tracking-wider">13,000円</p>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <ImagePlaceholder src="/images/innerchild.jpg" fallbackKeyword="woman,stretching,outdoor" className="w-full h-full object-cover" alt="セルフメンテナンス" />
              </div>
            </div>

            {/* 頭蓋骨調整 */}
            <div className={`overflow-hidden border transition-colors duration-500 flex flex-col md:flex-row ${activeTheme.classes.card}`}>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">メンタルブロック外し</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    知らないうちに心に作られた思い込みや恐れなどのメンタルブロックに気づき、やさしく解放していく60分の講座です。ワークを通して制限を手放し、本来の可能性や行動力を引き出していきます。
                  </p>
                </div>
                <div>
                  <div className="border-t border-current opacity-20 mb-4"></div>
                  <p className="text-2xl font-bold text-right tracking-wider">13,000円</p>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <ImagePlaceholder src="/images/mentalblock.jpg" fallbackKeyword="head,massage,relax" className="w-full h-full object-cover" alt="頭蓋骨調整" />
              </div>
            </div>

            {/* ボディベーシック */}
            <div className={`overflow-hidden border transition-colors duration-500 flex flex-col md:flex-row ${activeTheme.classes.card}`}>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">【無条件の愛の講座】</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    詳細はお問い合わせください
                  </p>
                </div>
                <div>
                  <div className="border-t border-current opacity-20 mb-4"></div>
                  <p className="opacity-80 mb-4">90分 x 12回のコースとなります</p>
                  <p className="text-2xl font-bold text-right tracking-wider">500,000円</p>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <ImagePlaceholder src="/images/love.jpg" fallbackKeyword="meditation,incense,relax" className="w-full h-full object-cover" alt="ボディベーシック" />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
