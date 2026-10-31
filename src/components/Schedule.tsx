import { scheduleItems } from '@/lib/data';

export function Schedule() {
  const sorted = [...scheduleItems].sort((a, b) => a.sortOrder - b.sortOrder);
  const day1 = sorted.filter((i) => i.day === '1日目');
  const day2 = sorted.filter((i) => i.day === '2日目');

  const days = [
    { label: '1日目', date: '11月3日 (祝)', items: day1 },
    { label: '2日目', date: '11月4日 (日)', items: day2 },
  ];

  return (
    <section id="schedule" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-2">
        スケジュール
      </h2>

      <p className="text-ink-700 leading-relaxed mb-8">
        展示体験だけでなく、大会や技術トークショーも開催します。
      </p>

      <div className="space-y-10">
        {days.map((day) => (
          <div key={day.label}>
            <h3 className="text-lg font-bold text-ink-900 mb-4">
              {day.label}　{day.date}
            </h3>
            <div className="space-y-2">
              {day.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-2 border-b border-ink-100"
                >
                  <div className="font-mono text-sm text-ink-500 sm:w-32 flex-shrink-0">
                    {item.startTime}
                    {item.endTime ? ` - ${item.endTime}` : ''}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-ink-900">{item.title}</div>
                    {item.location && (
                      <div className="text-sm text-ink-500">{item.location}</div>
                    )}
                    {item.description && (
                      <div className="text-sm text-ink-600 mt-1">{item.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
