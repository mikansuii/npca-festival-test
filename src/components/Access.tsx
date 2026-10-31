import { MapPin, Train, Clock } from 'lucide-react';

export function Access() {
  return (
    <section id="access" className="mb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-2">
        場所
      </h2>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-ink-900 mb-2">場所</h3>
        <p className="text-ink-700 leading-relaxed">
          パソコン部の展示はPC研究部室で行われています。
          <br />
          AI対戦大会やタイピング大会などのイベントも同室で行われます。
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-ink-900 mb-2">地図</h3>
        <div className="border border-ink-200 rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=神戸市東灘区魚崎西町3-1-1+灘中学校高等学校&output=embed"
            className="w-full h-[300px]"
            style={{ border: 0 }}
            loading="lazy"
            title="灘校 地図"
          />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-bold text-ink-900 mb-3">アクセス</h3>
        <ul className="space-y-1.5 text-ink-700">
          <li className="flex items-center gap-2">
            <Train className="w-4 h-4 text-ink-400 flex-shrink-0" />
            阪神本線「魚崎駅」より徒歩約5分
          </li>
          <li className="flex items-center gap-2">
            <Train className="w-4 h-4 text-ink-400 flex-shrink-0" />
            JR「住吉駅」より徒歩約15分
          </li>
          <li className="flex items-center gap-2">
            <Train className="w-4 h-4 text-ink-400 flex-shrink-0" />
            六甲ライナー「魚崎駅」より徒歩約5分
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-bold text-ink-900 mb-3">開催時間</h3>
        <div className="flex items-start gap-2 text-ink-700">
          <Clock className="w-4 h-4 text-ink-400 flex-shrink-0 mt-1" />
          <div>
            <div>1日目: 11月3日 (祝) 9:00 - 16:00</div>
            <div>2日目: 11月4日 (日) 9:00 - 16:00</div>
          </div>
        </div>
        <div className="flex items-start gap-2 text-ink-700 mt-2">
          <MapPin className="w-4 h-4 text-ink-400 flex-shrink-0 mt-1" />
          <div>PC研究部室は校舎2階でお待ちしています</div>
        </div>
      </section>
    </section>
  );
}
