import { bushiArticles } from '@/lib/data';

export function Bushi() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-4">
        部誌
      </h1>

      <p className="text-ink-700 leading-relaxed mb-8">
        全体の部誌の閲覧は<span className="font-medium text-blue-600">こちら</span>！クリックするとPDFのページに移ります。
        章立ては以下の通りです。
      </p>

      <div className="space-y-6">
        {bushiArticles.map((article) => (
          <section key={article.id} className="pb-4 border-b border-ink-100">
            <h2 className="text-lg font-bold text-ink-900 mb-1">{article.title}</h2>
            <div className="text-sm text-ink-500 mb-2">
              writer: <span className="font-medium">{article.writer}</span>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">{article.summary}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
