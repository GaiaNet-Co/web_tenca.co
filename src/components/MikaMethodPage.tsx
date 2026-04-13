import React from 'react';
import { Sparkles } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  activeTheme: Theme;
}

export default function MikaMethodPage({ activeTheme }: Props) {
  return (
    <>
      <section className={`relative py-32 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 overflow-hidden ${activeTheme.classes.hero}`}>
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder src="/images/mikamethod.1.png" fallbackKeyword="yoga,nature" className="w-full h-full object-cover opacity-40" alt="美加式メソッド 背景" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Sparkles className="mx-auto mb-6 opacity-70 text-[#FFFFF0]" size={40} />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#FFFFF0] drop-shadow-md">
            美加式メソッド
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium text-[#FFFFF0] drop-shadow-md">
            自分で自分を整え、本来の輝きを取り戻す
          </p>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            メソッドの概要
          </h2>
          <div className="space-y-8 text-lg leading-loose opacity-90">
            <p>
              17年間の施術経験から生まれた、自分で自分の身体と心、エネルギーを整えるためのオリジナルメソッドです。
            </p>
            <p>
              施術を受けるだけでなく、日常の中で自分自身をケアできるようになることで、変化のスピードは加速し、より自分らしく生きられるようになります。<br />
              簡単な身体の動かし方、呼吸法、意識の向け方などを体系的にお伝えします。
            </p>
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <ImagePlaceholder src="/images/mikamethod.2.png" fallbackKeyword="stretching,sunlight" className="w-full h-64 object-cover" alt="セルフケア風景" />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            講座・レッスン
          </h2>
          
          <div className="grid grid-cols-1 gap-12">
            {/* セルフメンテナンス */}
            <div className={`overflow-hidden border transition-colors duration-500 flex flex-col md:flex-row ${activeTheme.classes.card}`}>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">セルフメンテナンス</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    呼吸法をメインにあなたご自身のメンテナンス方法を覚えてキラキラの未来を手に入れましょう
                  </p>
                </div>
                <div>
                  <div className="border-t border-current opacity-20 mb-4"></div>
                  <p className="opacity-80 mb-4">3時間 x 2回のコースとなります</p>
                  <p className="text-2xl font-bold text-right tracking-wider">50,000円</p>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <ImagePlaceholder src="/images/mikamethod.self.png" fallbackKeyword="woman,stretching,outdoor" className="w-full h-full object-cover" alt="セルフメンテナンス" />
              </div>
            </div>

            {/* 頭蓋骨調整 */}
            <div className={`overflow-hidden border transition-colors duration-500 flex flex-col md:flex-row ${activeTheme.classes.card}`}>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">頭蓋骨調整</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    心と体のバランスを整える頭蓋骨調整メソッドです。自然のエネルギーを使い、深いリラクゼーションと癒しを提供します。自分自身を大切にする時間を過ごしませんか？
                  </p>
                </div>
                <div>
                  <div className="border-t border-current opacity-20 mb-4"></div>
                  <p className="opacity-80 mb-4">3時間 x 4回のコースとなります</p>
                  <p className="text-2xl font-bold text-right tracking-wider">100,000円</p>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <ImagePlaceholder src="/images/mikamethod.cranial.png" fallbackKeyword="head,massage,relax" className="w-full h-full object-cover" alt="頭蓋骨調整" />
              </div>
            </div>

            {/* ボディベーシック */}
            <div className={`overflow-hidden border transition-colors duration-500 flex flex-col md:flex-row ${activeTheme.classes.card}`}>
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">ボディベーシック</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    セルフメンテナンスで呼吸法を整えつつ体全体のバランスを整えることで心身ともに深いリラクゼーションを得ることで生まれ変わったような自分を手に入れることができます
                  </p>
                </div>
                <div>
                  <div className="border-t border-current opacity-20 mb-4"></div>
                  <p className="opacity-80 mb-4">3時間 x 10回のコースとなります</p>
                  <p className="text-2xl font-bold text-right tracking-wider">300,000円</p>
                </div>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <ImagePlaceholder src="/images/mikamethod.body.png" fallbackKeyword="meditation,incense,relax" className="w-full h-full object-cover" alt="ボディベーシック" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
