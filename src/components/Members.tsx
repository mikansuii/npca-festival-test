import { members } from '@/lib/data';

export function Members() {
  const sorted = [...members].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="members" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-2">
        部員
      </h2>

      <p className="text-ink-700 leading-relaxed mb-8">
        中学生から高校生まで、幅広い学年の部員が集まっています。
      </p>

      <div className="space-y-3">
        {sorted.map((member) => (
          <div
            key={member.id}
            className="flex items-start gap-3 py-3 border-b border-ink-100"
          >
            <div className="w-10 h-10 rounded bg-ink-200 flex items-center justify-center text-ink-700 font-bold text-sm flex-shrink-0">
              {member.name.replace(/\s/g, '').slice(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink-900">{member.name}</span>
                <span className="text-sm text-ink-500">{member.grade}</span>
                {member.role && (
                  <span className="text-xs text-ink-600 bg-ink-100 px-2 py-0.5 rounded">
                    {member.role}
                  </span>
                )}
              </div>
              {member.bio && (
                <p className="text-sm text-ink-600 mt-1">{member.bio}</p>
              )}
              {member.favoriteTech && (
                <span className="text-xs font-mono text-ink-500 mt-1 inline-block">
                  好きな技術: {member.favoriteTech}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
