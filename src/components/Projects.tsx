import { useEffect, useState } from 'react';
import { Code2, Gamepad2, Brain, Globe, Cpu, Trophy } from 'lucide-react';
import { supabase, type Project } from '@/lib/supabase';

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

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('すべて');

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) {
        setError(error.message);
      } else if (data) {
        setProjects(data as Project[]);
      }
      setLoading(false);
    })();
  }, []);

  const categories = ['すべて', ...new Set(projects.map((p) => p.category))];
  const filtered = activeCategory === 'すべて' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Cpu className="w-4 h-4 text-gold-400" />
            <span className="text-navy-200 text-sm font-medium">展示プロジェクト</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            部員が作った<span className="gradient-text">作品たち</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            ゲーム、AI、Webアプリ——多様なジャンルの作品を展示しています。実際に触って体験できます。
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-navy-700 border-t-navy-400 rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400">データの読み込みに失敗しました: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-navy-500 text-white shadow-lg shadow-navy-500/30'
                      : 'glass text-navy-200 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => {
                const Icon = categoryIcons[project.category] || Code2;
                const color = categoryColors[project.category] || 'from-navy-500 to-navy-600';
                return (
                  <div
                    key={project.id}
                    className="group relative rounded-2xl overflow-hidden glass glow-border transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {project.image_url && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image_url}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                        <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${color}`}>
                          <Icon className="w-3.5 h-3.5 text-white" />
                          <span className="text-white text-xs font-bold">{project.category}</span>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold-500">
                            <Trophy className="w-3.5 h-3.5 text-navy-950" />
                            <span className="text-navy-950 text-xs font-bold">注目</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-navy-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-navy-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-navy-800/60 text-navy-200 text-xs font-mono font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
