import { Link } from 'react-router-dom';
import { projects } from '@/lib/data';

export function Projects() {
  const sorted = [...projects].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="projects" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-2">
        展示
      </h2>

      <p className="text-ink-700 leading-relaxed mb-8">
        部員が作成したゲーム、AI、Webアプリなど、様々な展示を行っています！
        展示の詳細は各ページをご覧ください。
      </p>

      <div className="space-y-8">
        {sorted.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="block group hover:no-underline"
          >
            <div className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-ink-100">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full sm:w-48 h-32 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-ink-400">No. {project.sortOrder}</span>
                  <span className="text-xs text-ink-500 bg-ink-100 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs text-white bg-ink-800 px-2 py-0.5 rounded">注目</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-ink-900 group-hover:text-blue-600 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-ink-500 bg-ink-50 border border-ink-200 px-1.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
