/*
# 灘校パソコン研究部 文化祭ホームページ - データベーススキーマ作成

## 概要
灘校パソコン研究部の文化祭ホームページ用のデータベーススキーマを作成します。
認証なしの公開ウェブサイト（シングルテナント）として運用します。

## 新規テーブル

### projects（展示プロジェクト）
- `id` (uuid, PK) - プロジェクトID
- `title` (text, 非null) - プロジェクトタイトル
- `description` (text, 非null) - プロジェクトの説明
- `category` (text, 非null) - カテゴリ（ゲーム, Web, AI, etc.）
- `tech_stack` (text[]) - 使用技術スタック
- `image_url` (text) - プロジェクト画像URL
- `featured` (boolean, default false) - 注目プロジェクトかどうか
- `sort_order` (integer, default 0) - 表示順
- `created_at` (timestamptz) - 作成日時

### members（部員紹介）
- `id` (uuid, PK) - 部員ID
- `name` (text, 非null) - 氏名
- `grade` (text, 非null) - 学年（例: "中3", "高2"）
- `role` (text) - 役割（例: "部長", "副部長", "部員"）
- `bio` (text) - 自己紹介
- `avatar_url` (text) - アバター画像URL
- `favorite_tech` (text) - 好きな技術
- `sort_order` (integer, default 0) - 表示順
- `created_at` (timestamptz) - 作成日時

### schedule（スケジュール）
- `id` (uuid, PK) - スケジュールID
- `day` (text, 非null) - 開催日（例: "1日目", "2日目"）
- `date` (text, 非null) - 日付
- `start_time` (text, 非null) - 開始時刻
- `end_time` (text) - 終了時刻
- `title` (text, 非null) - イベントタイトル
- `location` (text) - 場所
- `description` (text) - 説明
- `sort_order` (integer, default 0) - 表示順
- `created_at` (timestamptz) - 作成日時

## セキュリティ
- 全テーブルでRLSを有効化
- anon + authenticatedロールにCRUD権限を付与（公開サイトのため）
- 全データは公開情報として扱う
*/

-- projects テーブル
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  tech_stack text[] DEFAULT '{}',
  image_url text,
  featured boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON projects TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_projects" ON projects;
CREATE POLICY "anon_select_projects" ON projects FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_projects" ON projects;
CREATE POLICY "anon_insert_projects" ON projects FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_projects" ON projects;
CREATE POLICY "anon_update_projects" ON projects FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_projects" ON projects;
CREATE POLICY "anon_delete_projects" ON projects FOR DELETE
  TO anon, authenticated USING (true);

-- members テーブル
CREATE TABLE IF NOT EXISTS members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  grade text NOT NULL,
  role text,
  bio text,
  avatar_url text,
  favorite_tech text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE members ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON members TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_members" ON members;
CREATE POLICY "anon_select_members" ON members FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_members" ON members;
CREATE POLICY "anon_insert_members" ON members FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_members" ON members;
CREATE POLICY "anon_update_members" ON members FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_members" ON members;
CREATE POLICY "anon_delete_members" ON members FOR DELETE
  TO anon, authenticated USING (true);

-- schedule テーブル
CREATE TABLE IF NOT EXISTS schedule (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day text NOT NULL,
  date text NOT NULL,
  start_time text NOT NULL,
  end_time text,
  title text NOT NULL,
  location text,
  description text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE schedule ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON schedule TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_schedule" ON schedule;
CREATE POLICY "anon_select_schedule" ON schedule FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_schedule" ON schedule;
CREATE POLICY "anon_insert_schedule" ON schedule FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_schedule" ON schedule;
CREATE POLICY "anon_update_schedule" ON schedule FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_schedule" ON schedule;
CREATE POLICY "anon_delete_schedule" ON schedule FOR DELETE
  TO anon, authenticated USING (true);
