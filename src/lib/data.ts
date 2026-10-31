export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  imageUrl: string | null;
  featured: boolean;
  sortOrder: number;
  longDescription?: string;
  features?: string[];
  demoNote?: string;
};

export type Member = {
  id: string;
  name: string;
  grade: string;
  role: string | null;
  bio: string | null;
  favoriteTech: string | null;
  sortOrder: number;
};

export type ScheduleItem = {
  id: string;
  day: string;
  date: string;
  startTime: string;
  endTime: string | null;
  title: string;
  location: string | null;
  description: string | null;
  sortOrder: number;
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'memory-game',
    title: '神経衰弱ゲーム',
    description:
      '画像認識AIを使ったリアルタイム神経衰弱ゲーム。AIがあなたの記憶力をスコア化します！',
    category: 'ゲーム',
    techStack: ['React', 'TensorFlow.js', 'WebGL'],
    imageUrl:
      'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    sortOrder: 1,
    longDescription:
      'プレイヤーがカードをめくるたびに、Webカメラで表情を認識し、集中度や驚きの度合いをスコアに反映する新感覚の神経衰弱ゲーム。TensorFlow.jsを用いた顔表情認識エンジンを自作し、ブラウザだけで完結するのが特徴です。',
    features: [
      'Webカメラを使ったリアルタイム表情認識',
      '記憶力スコアと感情スコアの2軸評価',
      '全20ステージ、難易度順',
    ],
    demoNote: '会場で実際にプレイできます。ベストスコアを競おう！',
  },
  {
    id: '2',
    slug: 'nada-navi',
    title: '灘校ナビ',
    description:
      '校内を3Dで探索できるバーチャル校舎ツアー。文化祭の迷子にならないための必須アプリ。',
    category: 'Web',
    techStack: ['Three.js', 'TypeScript', 'Vite'],
    imageUrl:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    sortOrder: 2,
    longDescription:
      '灘校の校舎を3Dモデルで再現し、ブラウザ上で自由に歩き回れるバーチャルツアーアプリ。各教室の展示情報と連動しており、どこで何が展示されているか一目で分かります。Three.jsによる軽量レンダリングで、スマートフォンからも快適に動作します。',
    features: [
      '校舎全体の3Dマップ',
      '展示ブースのピン表示とナビ機能',
      'スマートフォン対応',
    ],
    demoNote: '会場でスマホからアクセスして、現在地を確認できます。',
  },
  {
    id: '3',
    slug: 'ai-portrait',
    title: 'AI似顔絵ジェネレーター',
    description:
      'あなたの顔写真から似顔絵をAIが自動生成。文化祭の思い出に一枚いかが？',
    category: 'AI',
    techStack: ['Python', 'PyTorch', 'FastAPI'],
    imageUrl:
      'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    sortOrder: 3,
    longDescription:
      'GAN（敵対的生成ネットワーク）を用いて、来場者の顔写真から似顔絵イラストを自動生成するAIシステム。PyTorchで学習したモデルをFastAPIサーバー上で推論し、数秒で似顔絵を出力します。複数の画風（水彩、ペン画、アニメ風）から選択可能です。',
    features: [
      '3種類の画風から選べる似顔絵生成',
      '生成時間約5秒',
      '画像はその場でダウンロード可能',
    ],
    demoNote: '会場で写真を撮って似顔絵をゲット！',
  },
  {
    id: '4',
    slug: 'nada-beat',
    title: 'リズムゲーム「灘ビート」',
    description:
      '灘校の日常をテーマにしたオリジナル楽曲のリズムゲーム。キーボードで演奏しよう！',
    category: 'ゲーム',
    techStack: ['Unity', 'C#', 'FMOD'],
    imageUrl:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 4,
    longDescription:
      '灘校の日常音（チャイム、部活の掛け声、給食の音など）をサンプリングしたオリジナル楽曲で遊ぶリズムゲーム。Unityで構築したノーツ演出とFMODによる音響処理で、爽快感のあるゲームプレイを実現。全5曲、3つの難易度を収録しています。',
    features: [
      'オリジナル楽曲5曲収録',
      'Easy / Normal / Hard の3難易度',
      'ハイスコアランキング表示',
    ],
    demoNote: '会場でベストスコアに挑戦！部員との対戦も可能です。',
  },
  {
    id: '5',
    slug: 'photo-gallery',
    title: '文化祭投稿サイト',
    description:
      '来場者が写真を投稿できるリアルタイムフォトギャラリー。みんなの文化祭の思い出が集まる場所。',
    category: 'Web',
    techStack: ['React', 'Supabase', 'Tailwind'],
    imageUrl:
      'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 5,
    longDescription:
      '来場者がスマートフォンから写真を投稿し、会場の大型モニターにリアルタイム表示されるフォトギャラリーシステム。Supabaseのリアルタイム機能を活用し、投稿から表示まで1秒以内を実現。いいねボタンで人気写真のランキングも表示されます。',
    features: [
      'リアルタイム写真投稿',
      'いいねランキング機能',
      '会場モニターへの同時表示',
    ],
    demoNote: 'QRコードからアクセスして、写真を投稿してみよう！',
  },
  {
    id: '6',
    slug: 'nada-othello',
    title: 'オセロAI「Nada-Othello」',
    description:
      'Minimax法＋αβ枝刈りで強さを追求したオセロAI。君は勝てるか？',
    category: 'AI',
    techStack: ['Python', 'Rust', 'WebSocket'],
    imageUrl:
      'https://images.pexels.com/photos/4762765/pexels-photo-4762765.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 6,
    longDescription:
      'Minimax法とαβ枝刈り、さらにオリジナルの評価関数を組み合わせたオセロAI。Pythonで評価関数を設計し、探索部をRustで実装して高速化。レベル1（初級）からレベル5（超上級）まで選べます。1日目には来場者との対戦大会を開催します。',
    features: [
      '5段階の強さ調整',
      'Rustによる高速探索エンジン',
      '対戦履歴の保存と振り返り',
    ],
    demoNote: '1日目13:00からのAI対戦大会に参加しよう！優勝者には景品あり。',
  },
  {
    id: '7',
    slug: 'code-rush',
    title: 'タイピングゲーム「Code Rush」',
    description:
      'プログラミングコードをタイピングするスピード競争。部員のコードが問題として出題されます。',
    category: 'ゲーム',
    techStack: ['React', 'Node.js', 'Socket.io'],
    imageUrl:
      'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 7,
    longDescription:
      '実際のプログラミングコードをタイピングするスピード競争ゲーム。部員が書いた本物のコードが出題され、正確さと速さの両方が求められます。Socket.ioによるリアルタイム対戦モードも搭載し、最大4人同時プレイが可能です。',
    features: [
      '本物のコードを使ったタイピング問題',
      '最大4人のリアルタイム対戦',
      '正確率と速度のダブルスコア',
    ],
    demoNote: '1日目14:30からのタイピング大会にエントリーしよう！',
  },
  {
    id: '8',
    slug: 'nada-map-api',
    title: '灘校マップAPI',
    description:
      '校内の展示位置を検索できるAPIサービス。他の部活のアプリからも利用可能。',
    category: 'API',
    techStack: ['Go', 'PostgreSQL', 'Docker'],
    imageUrl:
      'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 8,
    longDescription:
      '文化祭の全展示の位置情報、カテゴリ、説明を提供するRESTful API。Goで書かれた軽量サーバーとPostgreSQLで構成され、Dockerコンテナとして運用されています。他の部活のアプリからも利用できるよう、オープンなAPI仕様を公開しています。',
    features: [
      '展示情報の検索・フィルタリングAPI',
      'OpenAPI準拠のドキュメント',
      '他部活アプリからの利用実績あり',
    ],
    demoNote: 'API仕様書を会場で配布しています。興味のある方は部員まで。',
  },
];

export const members: Member[] = [
  {
    id: '1',
    name: '田中 太郎',
    grade: '高3',
    role: '部長',
    bio: '機械学習とWeb開発の両方をこなすマルチエンジニア。来年は情報学部へ進学予定。',
    favoriteTech: 'PyTorch',
    sortOrder: 1,
  },
  {
    id: '2',
    name: '佐藤 花子',
    grade: '高3',
    role: '副部長',
    bio: 'フロントエンド担当。デザインから実装まで一人でこなす文化祭の縁の下の力持ち。',
    favoriteTech: 'React',
    sortOrder: 2,
  },
  {
    id: '3',
    name: '山田 一郎',
    grade: '高2',
    role: '部員',
    bio: '競技プログラミングに情熱を注ぐ。AtCoderレートの上昇が何よりの楽しみ。',
    favoriteTech: 'C++',
    sortOrder: 3,
  },
  {
    id: '4',
    name: '鈴木 次郎',
    grade: '高2',
    role: '部員',
    bio: 'Unityゲーム開発が得意。文化祭ではリズムゲームを担当。',
    favoriteTech: 'Unity',
    sortOrder: 4,
  },
  {
    id: '5',
    name: '高橋 三郎',
    grade: '高1',
    role: '部員',
    bio: '入部1年目で早くも才能を発揮。Web開発とAIに興味津々。',
    favoriteTech: 'TypeScript',
    sortOrder: 5,
  },
  {
    id: '6',
    name: '渡辺 美咲',
    grade: '中3',
    role: '部員',
    bio: '中学からプログラミングを始めた新人。Pythonでデータ分析に挑戦中。',
    favoriteTech: 'Python',
    sortOrder: 6,
  },
  {
    id: '7',
    name: '伊藤 健太',
    grade: '中3',
    role: '部員',
    bio: 'Webデザインに興味あり。文化祭ではフロントエンドを担当。',
    favoriteTech: 'CSS',
    sortOrder: 7,
  },
];

export const scheduleItems: ScheduleItem[] = [
  {
    id: '1',
    day: '1日目',
    date: '11月3日(祝)',
    startTime: '9:00',
    endTime: '10:00',
    title: '開場',
    location: 'PC研究部室',
    description: '文化祭開始。展示の準備が整いました。',
    sortOrder: 1,
  },
  {
    id: '2',
    day: '1日目',
    date: '11月3日(祝)',
    startTime: '10:00',
    endTime: '12:00',
    title: '展示体験タイム',
    location: 'PC研究部室',
    description: '各プロジェクトを自由に体験できます。',
    sortOrder: 2,
  },
  {
    id: '3',
    day: '1日目',
    date: '11月3日(祝)',
    startTime: '13:00',
    endTime: '14:00',
    title: 'AI対戦大会',
    location: 'PC研究部室',
    description: 'オセロAIと来場者が対戦する大会。優勝者には景品あり！',
    sortOrder: 3,
  },
  {
    id: '4',
    day: '1日目',
    date: '11月3日(祝)',
    startTime: '14:30',
    endTime: '15:30',
    title: 'タイピング大会',
    location: 'PC研究部室',
    description: 'Code Rushでタイピングスピードを競おう。',
    sortOrder: 4,
  },
  {
    id: '5',
    day: '2日目',
    date: '11月4日(日)',
    startTime: '9:00',
    endTime: '10:00',
    title: '開場',
    location: 'PC研究部室',
    description: '2日目スタート。',
    sortOrder: 5,
  },
  {
    id: '6',
    day: '2日目',
    date: '11月4日(日)',
    startTime: '10:00',
    endTime: '12:00',
    title: '展示体験タイム',
    location: 'PC研究部室',
    description: '各プロジェクトを自由に体験できます。',
    sortOrder: 6,
  },
  {
    id: '7',
    day: '2日目',
    date: '11月4日(日)',
    startTime: '13:00',
    endTime: '14:00',
    title: '技術トークショー',
    location: 'PC研究部室',
    description: '部員が各プロジェクトの技術解説を行います。',
    sortOrder: 7,
  },
  {
    id: '8',
    day: '2日目',
    date: '11月4日(日)',
    startTime: '15:00',
    endTime: '16:00',
    title: '閉場セレモニー',
    location: 'PC研究部室',
    description: '展示の片付けと感想戦。',
    sortOrder: 8,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
