import { MapPin, Train, Clock, Navigation } from 'lucide-react';

export function Access() {
  return (
    <section id="access" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Navigation className="w-4 h-4 text-navy-500" />
            <span className="text-navy-700 text-sm font-medium">アクセス</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-4">
            会場への<span className="gradient-text">アクセス</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            お越しいただけるのを部員一同お待ちしています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden bg-white border border-navy-200 shadow-md p-2">
            <iframe
              src="https://www.google.com/maps?q=神戸市東灘区魚崎西町3-1-1+灘中学校高等学校&output=embed"
              className="w-full h-full min-h-[400px] rounded-xl"
              style={{ border: 0 }}
              loading="lazy"
              title="灘校 地図"
            />
          </div>

          {/* Access info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-navy-200 shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <h3 className="text-navy-900 font-bold text-lg mb-1">住所</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    〒658-0081<br />
                    兵庫県神戸市東灘区魚崎西町3-1-1<br />
                    灘中学校・灘高等学校
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-navy-200 shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <h3 className="text-navy-900 font-bold text-lg mb-1">アクセス</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    阪神本線「魚崎駅」より徒歩約5分<br />
                    JR「住吉駅」より徒歩約15分<br />
                    六甲ライナー「魚崎駅」より徒歩約5分
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-navy-200 shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <h3 className="text-navy-900 font-bold text-lg mb-1">開催時間</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    1日目: 11月3日 (祝) 9:00 - 16:00<br />
                    2日目: 11月4日 (日) 9:00 - 16:00<br />
                    <span className="text-navy-500 font-medium">PC研究部室は校舎2階でお待ちしています</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
