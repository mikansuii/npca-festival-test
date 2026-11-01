import { MapPin, Train, Clock } from 'lucide-react';
import { ExhibitMap } from '@/components/ExhibitMap';

export function Navigation() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-ink-900 mb-6 border-b border-ink-200 pb-4">
        場所
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-ink-900 mb-2">場所</h2>
        <p className="text-ink-700 leading-relaxed">
          パソコン部の展示はPC研究部室で行われています。
          <br />
          パソコン解体やハッキング実演などのイベントも同室で行われます。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-ink-900 mb-2">展示配置図</h2>
        <p className="text-ink-700 leading-relaxed mb-4">
          PC研究部室内の展示配置です。各図形にカーソルを合わせると展示名が表示され、クリックすると詳細ページに移動します。
        </p>
        <ExhibitMap />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-ink-900 mb-2">地図</h2>
        <p className="text-ink-700 leading-relaxed mb-4">
          パソコン研究部ブースは高校棟の二階、H3-2教室にあります。正門からスロープを登って、そのまま職員室前を通り、左に曲がると右手に見えます。
        </p>
        <div className="border border-ink-200 rounded overflow-hidden">
          <img
            src="public\Layout.png"
            className="w-full"
            style={{ border: 0 }}
            loading="lazy"
            title="灘校 地図"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-ink-900 mb-3">アクセス</h2>
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
        <h2 className="text-xl font-bold text-ink-900 mb-3">開催時間</h2>
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
    </main>
  );
}
