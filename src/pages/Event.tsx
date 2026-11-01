import { events } from '@/lib/data';

export function Event() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-4">
        ステージ企画
      </h1>

      <p className="text-ink-700 leading-relaxed mb-10">
        PC研究部室でパソコン解体やハッキング実演、大会などを行います！
      </p>

      <div className="space-y-10">
        {events.map((event) => (
          <section key={event.id}>
            <h2 className="text-xl font-bold text-ink-900 mb-2">{event.title}</h2>
            <div className="text-sm text-ink-500 mb-3">
              {event.date} {event.time} ／ {event.location} ／ 担当: {event.grade}
            </div>
            <p className="text-ink-700 leading-relaxed">{event.description}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
