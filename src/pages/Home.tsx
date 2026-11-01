import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-4">
        文化祭用サイト
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-ink-900 mb-3">About</h2>
        <p className="text-ink-700 leading-relaxed">
          こちらのサイトは、灘校パソコン研究部の2026年度文化祭用に特設されたサイトです。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ink-900 mb-3">Information</h2>
        <ul className="space-y-3 text-ink-700">
          <li>
            <Link to="/event" className="font-medium">ステージ企画</Link>
            ：PC研究部室で行われるパソコン解体やハッキング実演などのイベントに関するお知らせです。
          </li>
          <li>
            <Link to="/navigation" className="font-medium">場所</Link>
            ：校内の地図とパソコン部の展示場所が載っています。
          </li>
          <li>
            <Link to="/exhibits" className="font-medium">展示</Link>
            ：PC研究部室にあるパソコン部の展示作品を紹介します。
          </li>
          <li>
            <Link to="/bushi" className="font-medium">部誌</Link>
            ：部員が書いた部誌の完全版を載せています。
          </li>
        </ul>
      </section>
    </main>
  );
}
