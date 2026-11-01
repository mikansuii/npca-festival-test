import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/data';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-ink-900 mb-4">展示が見つかりません</h1>
        <p className="text-ink-600 mb-8">指定された展示は存在しないか、削除されています。</p>
        <Link
          to="/exhibits"
          className="inline-flex items-center gap-2 text-blue-600 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          展示一覧に戻る
        </Link>
      </div>
    );
  }

  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        to="/exhibits"
        className="inline-flex items-center gap-1.5 text-sm text-ink-600 hover:text-ink-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        展示一覧に戻る
      </Link>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono text-ink-400">No. {project.sortOrder}</span>
        <span className="text-xs text-ink-500 bg-ink-100 px-2 py-0.5 rounded">
          {project.category}
        </span>
        {project.featured && (
          <span className="text-xs text-white bg-ink-800 px-2 py-0.5 rounded">注目</span>
        )}
      </div>

      <h1 className="text-3xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-4">
        {project.title}
      </h1>

      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-8"
        />
      )}

      <section className="mb-8">
        <h2 className="text-xl font-bold text-ink-900 mb-3">展示について</h2>
        <p className="text-ink-700 leading-relaxed">
          {project.longDescription || project.description}
        </p>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-ink-900 mb-3">見どころ</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-ink-700">
                <span className="text-ink-400 mt-1 flex-shrink-0">- </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.demoNote && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-ink-900 mb-3">会場での体験</h2>
          <p className="text-ink-700 leading-relaxed">{project.demoNote}</p>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-xl font-bold text-ink-900 mb-3">使用技術</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-mono text-ink-600 bg-ink-50 border border-ink-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-ink-900 mb-4 border-b border-ink-200 pb-2">
            同じカテゴリの展示
          </h2>
          <div className="space-y-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/exhibits/${p.slug}`}
                className="block group hover:no-underline"
              >
                <div className="flex items-center gap-3 py-2 border-b border-ink-100">
                  {p.imageUrl && (
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-16 h-16 object-cover rounded flex-shrink-0"
                    />
                  )}
                  <div>
                    <div className="font-bold text-ink-900 group-hover:text-blue-600">
                      {p.title}
                    </div>
                    <div className="text-sm text-ink-500 line-clamp-1">{p.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
