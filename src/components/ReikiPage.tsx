import React from 'react';
import { Sun } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  activeTheme: Theme;
}

export default function ReikiPage({ activeTheme }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 ${activeTheme.classes.hero}`}>
        <div className="max-w-4xl mx-auto">
          <Sun className="mx-auto mb-6 opacity-50" size={40} />
          <h1 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${activeTheme.classes.heroText}`}>
            レイキ（エネルギー調整）
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            見えない部分から整え、内側から軽やかに
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
            <ImagePlaceholder src="/images/reiki.1.png" fallbackKeyword="light,sun" className="w-full h-64 md:h-96 object-cover" alt="レイキ イメージ" />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            レイキとは
          </h2>
          <div className="space-y-8 text-lg leading-loose opacity-90">
            <p>
              レイキ（霊気）は、日本発祥のエネルギーヒーリングの手法です。<br />
              宇宙や自然界に存在する生命エネルギーを、施術者の手を通じて受け手へと流し、心身のバランスを整えていきます。
            </p>
            <p>
              私たちの身体は、肉体だけでなく、目に見えないエネルギー（気）で満たされています。<br />
              ストレスや疲労、感情の抑圧などが続くと、このエネルギーの流れが滞り、心身の不調として表れることがあります。
            </p>
            <p>
              レイキヒーリングでは、この滞ったエネルギーの流れをスムーズにし、本来の自然治癒力を高めていきます。<br />
              身体の深い部分からリラックスし、心が穏やかになるのを感じていただけるでしょう。
            </p>
            
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <ImagePlaceholder src="/images/reiki.2.png" fallbackKeyword="hands,healing,light" className="w-full h-64 object-cover" alt="レイキヒーリング風景" />
            </div>

            <div className={`p-8 my-12 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-4 text-center">こんな方におすすめです</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>理由もなく疲れが取れない、身体が重い</li>
                <li>考えすぎてしまい、頭が休まらない</li>
                <li>感情の起伏が激しい、または感情を感じにくい</li>
                <li>深いリラクゼーションを求めている</li>
                <li>自分自身のエネルギー状態をクリアに保ちたい</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            メニュー詳細
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* レイキ施術 */}
            <div className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-2xl font-bold mb-6 border-b pb-4">レイキ施術</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold">60分</h4>
                    <p className="text-sm opacity-70">草津のみ</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-xl font-bold">15,000円</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold">90分</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-xl font-bold">20,000円</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4 opacity-90">
                <p>
                  エネルギーの滞りや乱れに働きかけ、本来の流れへと整えていきます。<br />
                  身体だけでは整えきれない部分にもアプローチし、内側から軽やかな状態へ導きます。
                </p>
                <p>
                  ※対面での施術はもちろん、遠隔でのセッションも可能です。ご自宅など、リラックスできる環境でお受けいただけます。
                </p>
              </div>
            </div>

            {/* レイキ講座 */}
            <div className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-2xl font-bold mb-6 border-b pb-4">レイキ講座</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold">１ｓｔ(初伝)</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-xl font-bold">30,000円</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold">２ｎｄ(中伝)</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-xl font-bold">40,000円</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold">３ｒｄ(奥伝)</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-xl font-bold">53,000円</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-xl font-bold">Teacher(神秘伝)</h4>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-xl font-bold">100,000円</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
