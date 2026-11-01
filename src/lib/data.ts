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
    slug: 'game',
    title: 'ゲーム',
    description:
      '部員が作成したゲームを実際に遊ぶことができます！誰でも遊ぶことができます。',
    category: 'ゲーム',
    techStack: [],
    imageUrl:
      'https://images.pexels.com/photos/39046606/pexels-photo-39046606.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    sortOrder: 1,
    longDescription:
      '部員がプログラミングで作成したオリジナルゲームを実際に遊ぶことができる展示です。ジャンルも多岐にわたり、誰でも自由に挑戦できます。ハイスコアを狙ったり、友達と対戦したりと、思い思いの遊び方でお楽しみください。',
    features: [
      '部員が作成したオリジナルゲーム',
      '誰でも自由に遊べます',
      'ハイスコアランキングあり',
    ],
    demoNote: '会場で実際にプレイできます！',
  },
  {
    id: '2',
    slug: 'vr',
    title: 'VR体験',
    description:
      'VRと現実の動きを微妙にずらすことで、錯覚のような体験ができます。（13歳以上限定）',
    category: 'VR',
    techStack: [],
    imageUrl:
      'https://images.pexels.com/photos/36812934/pexels-photo-36812934.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    sortOrder: 2,
    longDescription:
      'VR空間での動きと現実の動きを微妙にずらすことで、普段味わえないような錯覚を体験できる展示です。視覚と身体感覚のズレが生み出す不思議な感覚を、ぜひ自分の体で確かめてみてください。',
    features: [
      'VRと現実の動きのズレによる錯覚体験',
      '没入感の高いVR環境',
    ],
    demoNote: 'VR機器の制約により、13歳以上限定です。',
  },
  {
    id: '3',
    slug: 'parts',
    title: 'パーツ展示',
    description:
      '部が保有しているパソコンのパーツと、そのパーツに関する解説が展示されています。',
    category: 'ハードウェア',
    techStack: [],
    imageUrl:
      'https://images.pexels.com/photos/28675583/pexels-photo-28675583.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 3,
    longDescription:
      'パソコン研究部が保有しているパソコンのパーツを実物として展示し、それぞれのパーツの役割や仕組みを分かりやすく解説しています。中身を普段見ることができないパーツにも触れられる、パソコンの仕組みを学べる展示です。',
    features: [
      '実物のパソコンパーツを展示',
      '各パーツの役割を分かりやすく解説',
    ],
    demoNote: 'パソコンの中身に興味のある方はぜひ！',
  },
  {
    id: '4',
    slug: '3d-projection',
    title: '3D投影',
    description:
      'アクリル板を使って、何もない空間に存在しているように見ることができます。',
    category: '技術',
    techStack: [],
    imageUrl:
      'https://images.pexels.com/photos/28901526/pexels-photo-28901526.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    sortOrder: 4,
    longDescription:
      'アクリル板と投影技術を組み合わせることで、何もない空間に映像が浮かんでいるように見せる3D投影の展示です。裸眼で立体的な映像を楽しめる不思議な体験を提供します。',
    features: [
      'アクリル板を使った空中投影',
      '裸眼で立体感のある映像を体験',
    ],
    demoNote: '会場で実際に投影映像をご覧いただけます。',
  },
  {
    id: '5',
    slug: 'pc-quiz',
    title: 'パソコンクイズ',
    description:
      'パソコンに関する4択クイズを紙にて配布します。レベル1〜3があり、一定数以上解けた方には景品あり！',
    category: 'クイズ',
    techStack: [],
    imageUrl:
      'https://images.pexels.com/photos/6684209/pexels-photo-6684209.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
    sortOrder: 5,
    longDescription:
      'パソコンに関する4択クイズを紙にて配布する展示です。レベル1、2、3の3段階の難易度が用意されており、一定数以上正解した方には景品をお渡しします。パソコンの知識を楽しみながら試せる、誰でも参加できる企画です。',
    features: [
      'パソコンに関する4択クイズ',
      'レベル1・2・3の3段階難易度',
      '一定数以上正解で景品あり',
    ],
    demoNote: '会場でクイズ用紙をお配りしています。ぜひ挑戦して景品をゲット！',
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

export type BushiArticle = {
  id: string;
  title: string;
  writer: string;
  summary: string;
};

export const bushiArticles: BushiArticle[] = [
  {
    id: '1',
    title: 'discord に LINE のメッセージを転送する',
    writer: 'akinyan',
    summary: 'Discordのbotを用いてLINEのメッセージを自動転送するシステムの構築について解説します。',
  },
  {
    id: '2',
    title: '現代の暗号化の技術について',
    writer: 'くま先生',
    summary: '共通鍵暗号から公開鍵暗号まで、現代の暗号化技術の基礎と実装例を紹介します。',
  },
  {
    id: '3',
    title: 'Pandas で表を作ってみよう',
    writer: 'NF23',
    summary: 'Pythonのデータ分析ライブラリPandasを使って、データフレームの操作を学びます。',
  },
  {
    id: '4',
    title: 'Brainfuck の仕様やサンプルコード',
    writer: 'KitKat',
    summary: '難解プログラミング言語Brainfuckの仕様を解説し、実用的なサンプルコードを示します。',
  },
  {
    id: '5',
    title: 'Siv3D でゲームを作ってみよう',
    writer: 'T.M',
    summary: 'C++ゲームライブラリSiv3Dを使って、簡単な2Dゲームを制作する過程を紹介します。',
  },
  {
    id: '6',
    title: 'React2Shell（CVE-2025-55182）の検証',
    writer: 'mikan0131',
    summary: 'Reactのシェルインジェクション脆弱性について、検証と対策をまとめます。',
  },
  {
    id: '7',
    title: 'API の結果を Discord に送信する bot の開発',
    writer: '山下航平',
    summary: '外部APIの結果をDiscordチャンネルに自動投稿するbotの開発手法を解説します。',
  },
  {
    id: '8',
    title: 'Android のアプリを作ろう',
    writer: 'ぱんだ',
    summary: 'Kotlinを使ったAndroidアプリ開発の基礎から、簡単なアプリ完成までの流れを紹介します。',
  },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  grade: string;
};

export const events: EventItem[] = [
  {
    id: '1',
    title: 'パソコン解体',
    date: '11/3, 11/4 ともに',
    time: '10:00 - 11:00',
    location: 'PC研究部室',
    description: '毎年恒例のパソコン解体ショーです。中学2年の部員が、部品の解説をしながらパソコンの解体と組み直しをします。',
    grade: '中2部員',
  },
  {
    id: '2',
    title: 'ハッキング実演',
    date: '11/3, 11/4 ともに',
    time: '13:00 - 14:00',
    location: 'PC研究部室',
    description: '高校1年の部員が、Free Wi-Fiの通信やWebのログインシステムの脆弱性について解説します。',
    grade: '高1部員',
  },
  {
    id: '3',
    title: 'AI対戦大会',
    date: '11/3 のみ',
    time: '13:00 - 14:00',
    location: 'PC研究部室',
    description: '部員が開発したオセロAIと来場者が対戦する大会。優勝者には景品をお渡しします！',
    grade: '全学年',
  },
  {
    id: '4',
    title: 'タイピング大会',
    date: '11/3 のみ',
    time: '14:30 - 15:30',
    location: 'PC研究部室',
    description: 'Code Rushでタイピングスピードを競います。部員が書いたコードが問題として出題されます。',
    grade: '全学年',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
