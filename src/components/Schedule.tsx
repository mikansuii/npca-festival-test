import { useEffect, useState } from 'react';
import { Clock, MapPin, CalendarDays } from 'lucide-react';
import { supabase, type ScheduleItem } from '@/lib/supabase';

export function Schedule() {
  const [items, setItems] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('schedule')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) {
        setError(error.message);
      } else if (data) {
        setItems(data as ScheduleItem[]);
      }
      setLoading(false);
    })();
  }, []);

  const day1 = items.filter((i) => i.day === '1日目');
  const day2 = items.filter((i) => i.day === '2日目');

  const days = [
    { label: '1日目', date: '11月3日 (祝)', items: day1 },
    { label: '2日目', date: '11月4日 (日)', items: day2 },
  ];

  return (
    <section id="schedule" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <CalendarDays className="w-4 h-4 text-gold-400" />
            <span className="text-navy-200 text-sm font-medium">イベントスケジュール</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            2日間の<span className="gradient-text">タイムテーブル</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            展示体験だけでなく、大会や技術トークショーも開催。ぜひ参加してください。
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
          <div className="grid md:grid-cols-2 gap-8">
            {days.map((day, dayIdx) => (
              <div key={day.label} className="rounded-2xl glass p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: `${dayIdx * 0.2}s` }}>
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-navy-700/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-500 to-navy-600 flex items-center justify-center text-white font-black text-lg">
                    {dayIdx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{day.label}</h3>
                    <p className="text-navy-300 text-sm">{day.date}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {day.items.map((item) => (
                    <div
                      key={item.id}
                      className="group relative pl-6 border-l-2 border-navy-700 hover:border-gold-400 transition-colors"
                    >
                      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-navy-500 group-hover:bg-gold-400 transition-colors" />
                      <div className="py-2">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-3.5 h-3.5 text-navy-400" />
                          <span className="text-navy-200 text-sm font-mono">
                            {item.start_time}{item.end_time ? ` - ${item.end_time}` : ''}
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                        {item.location && (
                          <div className="flex items-center gap-1.5 mb-1">
                            <MapPin className="w-3 h-3 text-navy-400" />
                            <span className="text-navy-400 text-xs">{item.location}</span>
                          </div>
                        )}
                        {item.description && (
                          <p className="text-navy-300 text-sm leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
