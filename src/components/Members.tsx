import { Users, Star } from 'lucide-react';
import { members } from '@/lib/data';

const avatarColors = [
  'from-navy-500 to-navy-600',
  'from-gold-500 to-gold-600',
  'from-emerald-500 to-teal-600',
  'from-sky-500 to-blue-600',
  'from-rose-500 to-pink-600',
  'from-purple-500 to-indigo-600',
  'from-amber-500 to-orange-600',
];

export function Members() {
  const sorted = [...members].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="members" className="relative py-24 bg-gradient-to-b from-white to-navy-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Users className="w-4 h-4 text-navy-500" />
            <span className="text-navy-700 text-sm font-medium">部員紹介</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
            つくる<span className="gradient-text">人々</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            中学生から高校生まで、幅広い学年の部員が集まっています。それぞれが得意分野を活かして活動しています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sorted.map((member, index) => {
            const color = avatarColors[index % avatarColors.length];
            const initials = member.name.replace(/\s/g, '').slice(0, 2);
            return (
              <div
                key={member.id}
                className="group rounded-2xl p-6 bg-white border border-navy-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {initials}
                </div>

                {member.role && (
                  <div className="flex justify-center mb-2">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-navy-100 text-navy-600 text-xs font-bold">
                      <Star className="w-3 h-3" />
                      {member.role}
                    </div>
                  </div>
                )}

                <h3 className="text-lg font-bold text-navy-900 mb-1 text-center">{member.name}</h3>
                <p className="text-navy-500 text-sm mb-3 text-center">{member.grade}</p>

                {member.bio && (
                  <p className="text-navy-600 text-xs leading-relaxed mb-3 line-clamp-3 text-center">
                    {member.bio}
                  </p>
                )}

                {member.favoriteTech && (
                  <div className="flex justify-center">
                    <div className="inline-block px-3 py-1 rounded-md bg-navy-100 text-navy-700 text-xs font-mono font-medium">
                      {member.favoriteTech}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
