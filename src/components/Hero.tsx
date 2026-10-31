export function Hero() {
  return (
    <div className="mb-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-4">
        灘校パソコン研究部 文化祭2026
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-ink-900 mb-3">About</h2>
        <p className="text-ink-700 leading-relaxed">
          こちらのサイトは、灘校パソコン研究部の2026年度文化祭用に特設されたサイトです。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-ink-900 mb-3">Information</h2>
        <ul className="space-y-2 text-ink-700">
          <li>
            <a href="#projects" className="font-medium">展示</a>
            ：部員が作成したゲーム、AI、Webアプリなどの展示作品を紹介します。
          </li>
          <li>
            <a href="#schedule" className="font-medium">スケジュール</a>
            ：文化祭両日のタイムテーブルを紹介します。
          </li>
          <li>
            <a href="#access" className="font-medium">場所</a>
            ：校内の地図とパソコン部の展示場所を記載しています。
          </li>
        </ul>
      </section>
    </div>
  );
}
