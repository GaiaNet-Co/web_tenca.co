import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { themes } from './themes';
import HomePage from './components/HomePage';
import YururiraPage from './components/YururiraPage';
import ReikiPage from './components/ReikiPage';
import PersonalSessionPage from './components/PersonalSessionPage';
import MikaMethodPage from './components/MikaMethodPage';
import ContactPage from './components/ContactPage';

export default function App() {
  // テラコッタ＆フォレストのテーマに固定
  const activeTheme = themes.find(t => t.id === 'terracotta-forest') || themes[0];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage activeTheme={activeTheme} navigateTo={navigateTo} />;
      case 'ゆるりら':
        return <YururiraPage activeTheme={activeTheme} />;
      case '個人セッション':
        return <PersonalSessionPage activeTheme={activeTheme} />;
      case '美加式メソッド':
        return <MikaMethodPage activeTheme={activeTheme} />;
      case 'レイキ':
        return <ReikiPage activeTheme={activeTheme} />;
      case 'お問合せ':
        return <ContactPage activeTheme={activeTheme} />;
      default:
        return <HomePage activeTheme={activeTheme} navigateTo={navigateTo} />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${activeTheme.classes.app}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${activeTheme.classes.header}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigateTo('Home')}>
              <span className="text-2xl font-bold tracking-widest">tenca</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'ゆるりら', '個人セッション', '美加式メソッド', 'レイキ', 'お問合せ'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => navigateTo(item)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item ? 'opacity-100 font-bold border-b-2 border-current' : 'opacity-70 hover:opacity-100'
                  } ${activeTheme.classes.navLink}`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
              {['Home', 'ゆるりら', '個人セッション', '美加式メソッド', 'レイキ', 'お問合せ'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item)}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                    currentPage === item ? 'bg-black/5 font-bold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Dynamic Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-500 ${activeTheme.classes.header}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-widest cursor-pointer" onClick={() => navigateTo('Home')}>tenca</div>
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'ゆるりら', '個人セッション', '美加式メソッド', 'レイキ', 'お問合せ'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigateTo(item)}
                className={`text-sm opacity-80 hover:opacity-100 transition-opacity`}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} tenca. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
