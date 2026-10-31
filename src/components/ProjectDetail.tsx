import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Code2,
  Gamepad2,
  Brain,
  Globe,
  Trophy,
  CheckCircle2,
  Sparkles,
  Info,
  ArrowRight,
} from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/data';

const categoryIcons: Record<string, typeof Gamepad2> = {
  'ゲーム': Gamepad2,
  'AI': Brain,
  'Web': Globe,
  'API': Code2,
};

const categoryColors: Record<string, string> = {
  'ゲーム': 'from-pink-500 to-rose-500',
  'AI': 'from-emerald-500 to-teal-500',
  'Web': 'from-sky-500 to-blue-500',
  'API': 'from-amber-500 to-orange-500',
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-50 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">展示が見つかりません</h1>
          <p className="text-navy-600 mb-8">指定された展示は存在しないか、削除されています。</p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-500 hover:bg-navy-600 text-white font-bold transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            展示一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  const Icon = categoryIcons[project.category] || Code2;
  const color = categoryColors[project.category] || 'from-navy-500 to-navy-600';
  const related = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-navy-100/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              展示一覧に戻る
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className={`flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r ${color}`}>
                <Icon className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold">{project.category}</span>
              </div>
              {project.featured && (
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy-500">
                  <Trophy className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-bold">注目展示</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-navy-500" />
                展示について
              </h2>
              <p className="text-navy-700 text-lg leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">見どころ</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-navy-50 border border-navy-200 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Demo note */}
            {project.demoNote && (
              <div className="rounded-2xl p-6 bg-navy-50 border border-navy-300">
                <h2 className="text-lg font-bold text-navy-700 mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-navy-500" />
                  会場での体験
                </h2>
                <p className="text-navy-700 leading-relaxed">{project.demoNote}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech stack */}
            <div className="rounded-2xl bg-white border border-navy-200 shadow-md p-6">
              <h3 className="text-navy-900 font-bold text-lg mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-navy-500" />
                使用技術
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-navy-100 text-navy-700 text-sm font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta info */}
            <div className="rounded-2xl bg-white border border-navy-200 shadow-md p-6 space-y-4">
              <div>
                <div className="text-navy-400 text-xs font-medium mb-1">カテゴリ</div>
                <div className="text-navy-900 font-bold">{project.category}</div>
              </div>
              <div>
                <div className="text-navy-400 text-xs font-medium mb-1">展示番号</div>
                <div className="text-navy-900 font-bold">No. {project.sortOrder}</div>
              </div>
              <div>
                <div className="text-navy-400 text-xs font-medium mb-1">会場</div>
                <div className="text-navy-900 font-bold">PC研究部室</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">同じカテゴリの展示</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, index) => {
                const RelIcon = categoryIcons[p.category] || Code2;
                const relColor = categoryColors[p.category] || 'from-navy-500 to-navy-600';
                return (
                  <Link
                    key={p.id}
                    to={`/projects/${p.slug}`}
                    className="group rounded-2xl overflow-hidden bg-white border border-navy-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {p.imageUrl && (
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={p.imageUrl}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                        <div className={`absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r ${relColor}`}>
                          <RelIcon className="w-3 h-3 text-white" />
                          <span className="text-white text-xs font-bold">{p.category}</span>
                        </div>
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-600 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-navy-600 text-sm leading-relaxed line-clamp-2 mb-3">
                        {p.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-navy-500 text-sm font-bold group-hover:gap-3 transition-all">
                        詳細を見る
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
