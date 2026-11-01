export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-ink-200 mt-16">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-ink-600">
            <a href="https://npca.jp/" className="font-medium">NPCA公式サイト</a>
            <span className="mx-2 text-ink-300">|</span>
            <a href="https://twitter.com/ND_NPCA/">Twitter</a>
            <span className="mx-2 text-ink-300">|</span>
            <a href="https://fest80.nada-sc.jp/">文化祭公式サイト</a>
          </div>
          <div className="text-ink-400 font-mono text-xs">
            © 2026 灘校パソコン研究部
          </div>
        </div>
      </div>
    </footer>
  );
}
