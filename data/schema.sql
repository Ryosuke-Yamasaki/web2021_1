create table stats (
  id integer primary key,
  name_jp text,
  name_en text
);
create table artifacts (
  id integer primary key,
  artifact_type_id integer,
  artifact_set_id integer,
  name text,
  description text,
  star integer,
  url text
);
create table artifact_sets (
  id integer primary key,
  name_japanese text,
  name_english text,
  description_2set text,
  description_4set text
);
create table artifact_types (
  id integer primary key,
  japanese text,
  english text
);
create table artifact_main_stats (
  stat_id integer primary key,
  star4 real,
  star5 real
 );


