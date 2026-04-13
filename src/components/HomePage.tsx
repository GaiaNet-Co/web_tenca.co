import React, { useRef } from 'react';
import { Sparkles, ChevronRight, User } from 'lucide-react';
import { Theme } from '../types';
import ImagePlaceholder from './ImagePlaceholder';
import { motion, useScroll, useTransform } from 'motion/react';

interface Props {
  activeTheme: Theme;
  navigateTo: (page: string) => void;
}

export default function HomePage({ activeTheme, navigateTo }: Props) {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: testimonialsRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <>
      {/* Hero Section */}
      <section className={`relative py-32 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 overflow-hidden ${activeTheme.classes.hero}`}>
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder src="/images/home.1.png" fallbackKeyword="forest,sunlight" className="w-full h-full object-cover opacity-40" alt="ヒーロー背景" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Sparkles className="mx-auto mb-6 opacity-70 text-[#FFFFF0]" size={40} />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#FFFFF0] drop-shadow-md">
            ゆるむほど、<br className="md:hidden" />本来のあなたに還っていく
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed font-medium text-[#FFFFF0] drop-shadow-md">
            身体・心・エネルギーのすべてにアプローチし、<br className="hidden md:block" />
            本来の自分へと還っていくためのトータルケアサロンです。
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            サービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Yururira Link */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-4">ゆるりら（施術）</h3>
              <p className="opacity-80 mb-6 flex-grow">
                筋肉をゆるめ、骨格を整え、内臓や頭部まで丁寧にケアしながら身体の深い部分へ働きかけます。
              </p>
              <button 
                onClick={() => navigateTo('ゆるりら')}
                className={`w-full py-3 px-6 font-medium transition-colors duration-300 flex items-center justify-center ${activeTheme.classes.button}`}
              >
                詳しく見る <ChevronRight size={18} className="ml-1" />
              </button>
            </div>

            {/* Personal Session Link */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-4">個人セッション</h3>
              <p className="opacity-80 mb-6 flex-grow">
                対話を通して、心とエネルギーの現在地を知り、モヤモヤや課題の根本にアプローチします。
              </p>
              <button 
                onClick={() => navigateTo('個人セッション')}
                className={`w-full py-3 px-6 font-medium transition-colors duration-300 flex items-center justify-center ${activeTheme.classes.button}`}
              >
                詳しく見る <ChevronRight size={18} className="ml-1" />
              </button>
            </div>

            {/* Mika Method Link */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-4">美加式メソッド</h3>
              <p className="opacity-80 mb-6 flex-grow">
                自分で自分の身体と心、エネルギーを整えるためのオリジナルメソッドをお伝えします。
              </p>
              <button 
                onClick={() => navigateTo('美加式メソッド')}
                className={`w-full py-3 px-6 font-medium transition-colors duration-300 flex items-center justify-center ${activeTheme.classes.button}`}
              >
                詳しく見る <ChevronRight size={18} className="ml-1" />
              </button>
            </div>

            {/* Reiki Link */}
            <div className={`p-8 border transition-colors duration-500 flex flex-col h-full ${activeTheme.classes.card}`}>
              <h3 className="text-xl font-bold mb-4">レイキ（エネルギー調整）</h3>
              <p className="opacity-80 mb-6 flex-grow">
                エネルギーの滞りや乱れに働きかけ、本来の流れへと整えていきます。内側から軽やかな状態へ導きます。
              </p>
              <button 
                onClick={() => navigateTo('レイキ')}
                className={`w-full py-3 px-6 font-medium transition-colors duration-300 flex items-center justify-center ${activeTheme.classes.button}`}
              >
                詳しく見る <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 flex items-center justify-center">
              <ImagePlaceholder src="/images/home.2.png" fallbackKeyword="woman,smile,nature" className="w-full h-full object-cover" alt="林 美加" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold mb-2 ${activeTheme.classes.heading}`}>林 美加</h2>
              <p className="text-lg opacity-70 mb-6">tenca 代表</p>
              <div className="space-y-4 opacity-90 leading-relaxed">
                <p>
                  はじめまして。林美加です。<br />
                  表面的なケアでは変わらなかった不調や違和感を、根本から整えたい方のための施術を行っています。
                </p>
                <p>
                  これまで17年にわたり、多くの方の身体と向き合ってきました。一人ひとり異なる不調の背景に触れる中で感じてきたのは、身体だけを整えても、本当の意味での変化には至らないということ。
                </p>
                <p>
                  ここは、ただ癒される場所ではなく、本来の自分へと還るための場所。<br />
                  静かに、深く整えていく時間を。心を込めてご用意しております。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden ${activeTheme.classes.section}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            お客様の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Voice 1 */}
            <motion.div style={{ y: y1 }} className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <ImagePlaceholder src="/images/voice.1.png" fallbackKeyword="woman,smile" className="w-full h-full object-cover" alt="山田花子" />
                </div>
                <div>
                  <p className="font-bold">山田花子</p>
                  <p className="text-sm opacity-70">38歳, 東京都</p>
                </div>
              </div>
              <p className="opacity-90 leading-relaxed">
                「レイキヒーリングを受けたことで、自分の内側からのエネルギーが整いました。心から感謝しています。」
              </p>
            </motion.div>
            {/* Voice 2 */}
            <motion.div style={{ y: y2 }} className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <ImagePlaceholder src="/images/voice.2.png" fallbackKeyword="woman,happy" className="w-full h-full object-cover" alt="佐藤雅子" />
                </div>
                <div>
                  <p className="font-bold">佐藤雅子</p>
                  <p className="text-sm opacity-70">29歳, 神奈川県</p>
                </div>
              </div>
              <p className="opacity-90 leading-relaxed">
                「このワークショップで、自己を見つめ直す素晴らしい機会に恵まれました。心が軽くなりました。」
              </p>
            </motion.div>
            {/* Voice 3 */}
            <motion.div style={{ y: y3 }} className={`p-8 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                  <ImagePlaceholder src="/images/voice.3.png" fallbackKeyword="woman,relax" className="w-full h-full object-cover" alt="鈴木明子" />
                </div>
                <div>
                  <p className="font-bold">鈴木明子</p>
                  <p className="text-sm opacity-70">45歳, 大阪府</p>
                </div>
              </div>
              <p className="opacity-90 leading-relaxed">
                「このカウンセリングで、自分の気持ちを理解できるようになりました。本当に助かりました。」
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.sectionAlt}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-12 text-center pb-4 border-b-2 inline-block mx-auto ${activeTheme.classes.heading}`}>
            よくある質問
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className={`p-6 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-xl font-black opacity-50">Q.</span>
                レイキヒーリングとは何ですか？
              </h3>
              <p className="opacity-90 flex items-start gap-3 pl-8">
                <span className="text-xl font-black opacity-50 hidden md:inline">A.</span>
                レイキヒーリングは、エネルギー療法の一つで、心と体を調和させるための手法です。施術によってリラックスし、ストレスを軽減する効果が期待できます。自分の内面を調整する手助けをするものです。
              </p>
            </div>
            {/* FAQ 2 */}
            <div className={`p-6 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-xl font-black opacity-50">Q.</span>
                どうやって予約をしますか？
              </h3>
              <p className="opacity-90 flex items-start gap-3 pl-8">
                <span className="text-xl font-black opacity-50 hidden md:inline">A.</span>
                予約は簡単です。ウェブサイトのお問い合わせフォームからご希望の日程を選んで送信いただければ、こちらから確認のお返事を差し上げます。
              </p>
            </div>
            {/* FAQ 3 */}
            <div className={`p-6 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-xl font-black opacity-50">Q.</span>
                施術はどのくらいの時間がかかりますか？
              </h3>
              <p className="opacity-90 flex items-start gap-3 pl-8">
                <span className="text-xl font-black opacity-50 hidden md:inline">A.</span>
                レイキヒーリングの施術は約60分もしくは90分です(60分は草津のみ)。ただし、お一人おひとりの状態によって異なる場合がありますので、詳細は施術時にお話しします。
              </p>
            </div>
            {/* FAQ 4 */}
            <div className={`p-6 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-xl font-black opacity-50">Q.</span>
                効果はすぐに実感できますか？
              </h3>
              <p className="opacity-90 flex items-start gap-3 pl-8">
                <span className="text-xl font-black opacity-50 hidden md:inline">A.</span>
                個人差はありますが、多くの方が施術後すぐにリラックス感や心地よさを感じていただけます。継続的な施術により、より深い効果を実感していただくことができます。
              </p>
            </div>
            {/* FAQ 5 */}
            <div className={`p-6 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-xl font-black opacity-50">Q.</span>
                施術後の注意点はありますか？
              </h3>
              <p className="opacity-90 flex items-start gap-3 pl-8">
                <span className="text-xl font-black opacity-50 hidden md:inline">A.</span>
                施術後は水分をしっかり摂り、心身の状態を落ち着ける時間を持つことをお勧めします。また、施術内容を日常生活で意識してみるとさらに良い結果が得られます。
              </p>
            </div>
            {/* FAQ 6 */}
            <div className={`p-6 border transition-colors duration-500 ${activeTheme.classes.card}`}>
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-xl font-black opacity-50">Q.</span>
                他に何か準備が必要ですか？
              </h3>
              <p className="opacity-90 flex items-start gap-3 pl-8">
                <span className="text-xl font-black opacity-50 hidden md:inline">A.</span>
                特別な準備は必要ありませんが、リラックスできる服装でお越しいただくと良いでしょう。また、心をオープンにし、リラックスした状態でお越しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${activeTheme.classes.section}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${activeTheme.classes.heading}`}>メール</h3>
              <p className="opacity-80 mb-6 leading-relaxed">
                お気軽にお問い合わせください。あなたの声をお聞きすることを楽しみにしています。
              </p>
              <a href="mailto:info@tenca.co" className="underline hover:opacity-80 transition-opacity">
                info@tenca.co
              </a>
            </div>

            {/* LINE */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.292c.129 0 .234.105.234.234v.662c0 .129-.105.234-.234.234h-3.188c-.129 0-.234-.105-.234-.234v-5.049c0-.129.105-.234.234-.234h.458zm5.188 5.283c0 .129-.105.234-.234.234h-.458c-.129 0-.234-.105-.234-.234v-5.049c0-.129.105-.234.234-.234h.458c.129 0 .234.105.234.234v5.049zm5.541 0c0 .129-.105.234-.234.234h-.458c-.129 0-.234-.105-.234-.234v-3.411l-2.292 3.486c-.055.084-.15.134-.25.134h-.386c-.129 0-.234-.105-.234-.234v-5.049c0-.129.105-.234.234-.234h.458c.129 0 .234.105.234.234v3.411l2.292-3.486c.055-.084.15-.134.25-.134h.386c.129 0 .234.105.234.234v5.049zm4.845-3.387c0 .129-.105.234-.234.234h-2.292v1.177h2.292c.129 0 .234.105.234.234v.662c0 .129-.105.234-.234.234h-2.984c-.129 0-.234-.105-.234-.234v-5.049c0-.129.105-.234.234-.234h2.984c.129 0 .234.105.234.234v.662c0 .129-.105.234-.234.234h-2.292v1.177h2.292c.129 0 .234.105.234.234v.662z"/>
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${activeTheme.classes.heading}`}>LINE公式アカウント</h3>
              <p className="opacity-80 mb-6 leading-relaxed">
                こちらより直接ご質問をどうぞ。お待ちしています。
              </p>
              <a href="#" className="underline hover:opacity-80 transition-opacity">
                LINEで問い合わせる
              </a>
            </div>

            {/* Salon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${activeTheme.classes.heading}`}>サロン</h3>
              <p className="opacity-80 mb-6 leading-relaxed">
                リラックスした雰囲気の中、あなたをお迎えします。<br />
                お気軽にお立ち寄りください。
              </p>
              <div className="opacity-80 space-y-2">
                <p>滋賀県草津市ＸＸＸＸＸ</p>
                <p>大阪市中央区ＸＸＸＸＸ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
