import { Cpu, Calendar, MapPin, ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-50"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl animate-float" />

      {/* Floating code snippets */}
      <div className="absolute top-32 left-10 hidden lg:block opacity-30 font-mono text-sm text-navy-400 animate-float">
        <pre>{`const nuda = {
  school: "灘",
  club: "PC研",
  passion: "∞"
};`}</pre>
      </div>
      <div
        className="absolute bottom-40 right-10 hidden lg:block opacity-30 font-mono text-sm text-gold-500 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <pre>{`> npm run festival
  ✓ compiling joy
  ✓ building dreams
  ▶ ready to showcase`}</pre>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-navy-500" />
          <span className="text-navy-700 text-sm font-medium">2026年11月3日-4日 開催</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-navy-900 leading-tight mb-6 animate-fade-in-up">
          灘校パソコン研究部
          <br />
          <span className="gradient-text">文化祭 2026</span>
        </h1>

        <p className="text-lg md:text-xl text-navy-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          ゲーム、AI、Webアプリ——部員が作った最新の作品を体験しよう。
          <br />
          技術と熱量が交差する2日間。ぜひ遊びに来てください。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl glass">
            <Calendar className="w-5 h-5 text-navy-500" />
            <span className="text-navy-800 text-sm font-medium">11/3 (祝) - 11/4 (日)</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl glass">
            <MapPin className="w-5 h-5 text-navy-500" />
            <span className="text-navy-800 text-sm font-medium">灘校 PC研究部室</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl glass">
            <Cpu className="w-5 h-5 text-navy-500" />
            <span className="text-navy-800 text-sm font-medium">展示8作品</span>
          </div>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-navy-500 hover:text-navy-700 transition-colors animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="text-sm font-medium">展示を見る</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
