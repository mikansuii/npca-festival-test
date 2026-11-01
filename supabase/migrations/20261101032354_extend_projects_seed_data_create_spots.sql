/*
# Extend projects table, seed new data, and create exhibit_spots

## Overview
1. Adds missing columns to existing `projects` table
2. Clears old 8-row data and inserts the correct 5 exhibits
3. Creates `exhibit_spots` table for visual map positions

## Modified Tables

### projects (existing — old 8 rows replaced with 5 correct rows)
- slug (text, NOT NULL, unique) — URL slug
- long_description (text, nullable)
- features (text[], default '{}')
- demo_note (text, nullable)
- updated_at (timestamptz, default now())

## New Tables

### exhibit_spots
- id (uuid, primary key)
- project_id (uuid, FK to projects)
- x, y, w, h (double precision) — map position percentages
- created_at (timestamptz)

## Security
- RLS already enabled on projects; policies already exist (anon full CRUD)
- RLS enabled on exhibit_spots with full CRUD for anon + authenticated
*/

-- Add missing columns to projects
ALTER TABLE projects ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS long_description text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS features text[] DEFAULT '{}';
ALTER TABLE projects ADD COLUMN IF NOT EXISTS demo_note text;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- Clear old data and insert correct 5 exhibits
DELETE FROM projects;

INSERT INTO projects (slug, title, description, category, tech_stack, image_url, featured, sort_order, long_description, features, demo_note) VALUES
  ('game', 'ゲーム', '部員が作成したゲームを実際に遊ぶことができます！誰でも遊ぶことができます。', 'ゲーム', '{}', 'https://images.pexels.com/photos/39046606/pexels-photo-39046606.jpeg?auto=compress&cs=tinysrgb&w=800', true, 1,
   '部員がプログラミングで作成したオリジナルゲームを実際に遊ぶことができる展示です。ジャンルも多岐にわたり、誰でも自由に挑戦できます。ハイスコアを狙ったり、友達と対戦したりと、思い思いの遊び方でお楽しみください。',
   ARRAY['部員が作成したオリジナルゲーム', '誰でも自由に遊べます', 'ハイスコアランキングあり'],
   '会場で実際にプレイできます！'),
  ('vr', 'VR体験', 'VRと現実の動きを微妙にずらすことで、錯覚のような体験ができます。（13歳以上限定）', 'VR', '{}', 'https://images.pexels.com/photos/36812934/pexels-photo-36812934.jpeg?auto=compress&cs=tinysrgb&w=800', true, 2,
   'VR空間での動きと現実の動きを微妙にずらすことで、普段味わえないような錯覚を体験できる展示です。視覚と身体感覚のズレが生み出す不思議な感覚を、ぜひ自分の体で確かめてみてください。',
   ARRAY['VRと現実の動きのズレによる錯覚体験', '没入感の高いVR環境'],
   'VR機器の制約により、13歳以上限定です。'),
  ('parts', 'パーツ展示', '部が保有しているパソコンのパーツと、そのパーツに関する解説が展示されています。', 'ハードウェア', '{}', 'https://images.pexels.com/photos/28675583/pexels-photo-28675583.jpeg?auto=compress&cs=tinysrgb&w=800', false, 3,
   'パソコン研究部が保有しているパソコンのパーツを実物として展示し、それぞれのパーツの役割や仕組みを分かりやすく解説しています。中身を普段見ることができないパーツにも触れられる、パソコンの仕組みを学べる展示です。',
   ARRAY['実物のパソコンパーツを展示', '各パーツの役割を分かりやすく解説'],
   'パソコンの中身に興味のある方はぜひ！'),
  ('3d-projection', '3D投影', 'アクリル板を使って、何もない空間に存在しているように見ることができます。', '技術', '{}', 'https://images.pexels.com/photos/28901526/pexels-photo-28901526.jpeg?auto=compress&cs=tinysrgb&w=800', true, 4,
   'アクリル板と投影技術を組み合わせることで、何もない空間に映像が浮かんでいるように見せる3D投影の展示です。裸眼で立体的な映像を楽しめる不思議な体験を提供します。',
   ARRAY['アクリル板を使った空中投影', '裸眼で立体感のある映像を体験'],
   '会場で実際に投影映像をご覧いただけます。'),
  ('pc-quiz', 'パソコンクイズ', 'パソコンに関する4択クイズを紙にて配布します。レベル1〜3があり、一定数以上解けた方には景品あり！', 'クイズ', '{}', 'https://images.pexels.com/photos/6684209/pexels-photo-6684209.jpeg?auto=compress&cs=tinysrgb&w=800', false, 5,
   'パソコンに関する4択クイズを紙にて配布する展示です。レベル1、2、3の3段階の難易度が用意されており、一定数以上正解した方には景品をお渡しします。パソコンの知識を楽しみながら試せる、誰でも参加できる企画です。',
   ARRAY['パソコンに関する4択クイズ', 'レベル1・2・3の3段階難易度', '一定数以上正解で景品あり'],
   '会場でクイズ用紙をお配りしています。ぜひ挑戦して景品をゲット！');

-- Now slug is populated, make it NOT NULL + unique
ALTER TABLE projects ALTER COLUMN slug SET NOT NULL;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'projects_slug_unique' AND conrelid = 'projects'::regclass) THEN
    ALTER TABLE projects ADD CONSTRAINT projects_slug_unique UNIQUE (slug);
  END IF;
END $$;

-- exhibit_spots table
CREATE TABLE IF NOT EXISTS exhibit_spots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  x double precision NOT NULL,
  y double precision NOT NULL,
  w double precision NOT NULL,
  h double precision NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE exhibit_spots ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON exhibit_spots TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_spots" ON exhibit_spots;
CREATE POLICY "anon_select_spots" ON exhibit_spots FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_spots" ON exhibit_spots;
CREATE POLICY "anon_insert_spots" ON exhibit_spots FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_spots" ON exhibit_spots;
CREATE POLICY "anon_update_spots" ON exhibit_spots FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_spots" ON exhibit_spots;
CREATE POLICY "anon_delete_spots" ON exhibit_spots FOR DELETE
  TO anon, authenticated USING (true);

-- Seed initial exhibit spots (matching current ExhibitMap layout)
INSERT INTO exhibit_spots (project_id, x, y, w, h)
SELECT id, 8, 18, 28, 20 FROM projects WHERE slug = 'game';
INSERT INTO exhibit_spots (project_id, x, y, w, h)
SELECT id, 42, 18, 28, 20 FROM projects WHERE slug = 'vr';
INSERT INTO exhibit_spots (project_id, x, y, w, h)
SELECT id, 8, 48, 28, 20 FROM projects WHERE slug = 'parts';
INSERT INTO exhibit_spots (project_id, x, y, w, h)
SELECT id, 42, 48, 28, 20 FROM projects WHERE slug = '3d-projection';
INSERT INTO exhibit_spots (project_id, x, y, w, h)
SELECT id, 8, 76, 28, 14 FROM projects WHERE slug = 'pc-quiz';