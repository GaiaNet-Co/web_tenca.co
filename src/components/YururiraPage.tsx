import React from 'react';
import { ChevronRight, Leaf } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  activeTheme: Theme;
}

export default function YururiraPage({ activeTheme }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className={`relative py-32 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 overflow-hidden ${activeTheme.classes.hero}`}>
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder src="/images/yururira.1.jpg" fallbackKeyword="spa,relax" className="w-full h-full object-cover opacity-70" alt="ゆるりら 背景" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Leaf className="mx-auto mb-6 opacity-70 text-[#FFFFF0]" size={40} />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#FFFFF0] drop-shadow-md">
            ゆるりら
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium text-[#FFFFF0] drop-shadow-md">
            ゆるっとリラックスして、本来の自分に還る場所
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-10 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            ゆるりらの想い
          </h2>
          <div className="space-y-8 text-lg leading-loose opacity-90">
            <p>
              気づかないうちに頑張りすぎてしまい、自分の感覚や本音を後回しにしてしまうことはありませんか。<br />
              仕事、家庭、人間関係、将来への不安——<br />
              そうした積み重ねの中で、身体は緊張し、呼吸は浅くなり、思考や感情も滞りやすくなっていきます。
            </p>
            <p>
              身体・心・エネルギーはすべてつながっており、どれかひとつではなく、全体を整えることが大切です。<br />
              ゆるりらでは筋肉をゆるめ、骨格を整え頭部から足先まで丁寧にケアしながら身体の深い部分にアプローチしていきます。<br />
              さらに、頭や神経の緊張をゆるめることで思考のクセや無意識の力みをほどき、エネルギーの滞りや乱れにも働きかけながら、全体のバランスを整えていきます。
            </p>
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <ImagePlaceholder src="/images/yururira.2.jpg" fallbackKeyword="massage,healing" className="w-full h-64 object-cover" alt="施術風景" />
            </div>
            <div className={`p-8 my-12 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <p className="text-center font-medium text-xl mb-4">
                ゆるりらとは「ゆるっとリラックス」という意味。
              </p>
              <p className="text-center">
                頑張りすぎているあなたが少し力を抜き、安心してゆるめる場所でありたい。<br />
                そして本来のあなたの輝きを取り戻すきっかけに。<br />
                <strong>“ゆるっとリラックスして、本来の自分に還る場所”</strong>でありたい。<br />
                そんな想いで、施術を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            施術メニュー
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Menu 1 */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-2">ゆるりらトータルケア</h3>
              <p className="text-sm opacity-70 mb-4">60分〜90分 | 15,000円〜30,000円</p>
              <p className="font-medium mb-4">— 迷ったらこちら。全体を整える基本の施術 —</p>
              <p className="opacity-80 mb-6 flex-grow">
                筋肉をゆるめ、骨格を整え、内臓や頭部まで丁寧にケアしながら身体の深い部分へ働きかけます。思考のクセや無意識の力みをほどき、エネルギーの流れにもアプローチ。
              </p>
              <ul className="space-y-2 text-sm opacity-80 mb-8">
                <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5 flex-shrink-0" /> 慢性的な疲れ・コリを解消したい</li>
                <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5 flex-shrink-0" /> 思考のモヤモヤをスッキリさせたい</li>
              </ul>
            </div>

            {/* Menu 2 */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-2">ゆるりら遠隔施術</h3>
              <p className="text-sm opacity-70 mb-4">30分〜60分 | 15,000円〜30,000円</p>
              <p className="font-medium mb-4">— 距離を超えて、内側から整える —</p>
              <p className="opacity-80 mb-6 flex-grow">
                遠隔でも、身体・思考・エネルギーへ働きかけ、内側の状態を整えていきます。対面と同様に、エネルギーの流れやバランスを調整しながら、深いリラックスと変化へと導きます。
              </p>
              <ul className="space-y-2 text-sm opacity-80 mb-8">
                <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5 flex-shrink-0" /> 外出が難しい方、自宅で受けたい方</li>
                <li className="flex items-start"><ChevronRight size={16} className="mr-2 mt-0.5 flex-shrink-0" /> エネルギーから整えたい方に</li>
              </ul>
            </div>

            {/* Menu 3 */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-2">頭蓋骨＆小顔調整</h3>
              <p className="text-sm opacity-70 mb-4">50分 | 10,000円</p>
              <p className="font-medium mb-4">— 思考とお顔、両方がゆるむ —</p>
              <p className="opacity-80 mb-6 flex-grow">
                頭蓋骨や頭部の調整を行い、頭や神経の緊張をゆるめていきます。思考がスッキリと静まり、顔まわりも引き締まりやすくなります。
              </p>
            </div>

            {/* Menu 4 */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-2">呼吸ケア（呼吸法）</h3>
              <p className="text-sm opacity-70 mb-4">60分〜90分 | 5,000円〜10,000円</p>
              <p className="font-medium mb-4">— 体の内側からゆるめて整える —</p>
              <p className="opacity-80 mb-6 flex-grow">
                ただ深呼吸をするのではなく、体の内側からゆるめて整える呼吸法です。滞っていたものが流れはじめ、体と心が一気に軽くなっていきます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
