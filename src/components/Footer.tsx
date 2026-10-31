import { Terminal, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-navy-800/50">
      {/* Marquee */}
      <div className="overflow-hidden py-4 border-b border-navy-800/50 bg-navy-900/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 font-mono text-sm text-navy-400">
              <span>// 灘校パソコン研究部</span>
              <span className="text-gold-400">{"// 文化祭2026"}</span>
              <span>{"// 11/3-11/4"}</span>
              <span className="text-gold-400">{"// See you at Nada!"}</span>
              <span>{"// 灘校パソコン研究部"}</span>
              <span className="text-gold-400">{"// 文化祭2026"}</span>
              <span>{"// 11/3-11/4"}</span>
              <span className="text-gold-400">{"// See you at Nada!"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy-500 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">灘校パソコン研究部</div>
              <div className="text-navy-400 text-xs">Nada School Computer Club</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-navy-400 text-sm flex items-center justify-center md:justify-end gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" /> by PC研
            </p>
            <p className="text-navy-500 text-xs mt-1 font-mono">© 2026 Nada PC Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
