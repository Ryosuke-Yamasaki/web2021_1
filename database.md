# テーブル一覧
テーブル名|内容
-|-
artifact_managers|聖遺物のデータを保存するテーブル
status|ステータスのテーブル
artifact_main_status|メインステータスの数値のテーブル
artifact_sub_status|サブステータスの伸び幅のテーブル

# スキーマ一覧
## artifact_managers
カラム名|型|例
-|-|-
id|integer|1
score|numeric|60.3
artifact_id|interger|1
main_status_id|interger|1
sub1_status_id|integer|1
sub2_status_id|integer|1
sub3_status_id|integer|1
sub4_status_id|integer|1
sub1_value_number|numeric|3.9
sub2_value_number|numeric|3.9
sub3_value_number|numeric|3.9
sub4_value_number|numeric|3.9

## artifacts
カラム名|型|例
-|-|-
id|integer|1
name|text|金メッキのコサージュ
artifact_type_id|integer|1
artifact_set_id|integer|1

## artifact_types
カラム名|型|例
-|-|-
id|integer|1
name|text|生の花

## artifact_sets
カラム名|型|例
-|-|-
id|integer|1
name|text|絶縁の旗印
star|integer|5

## statuses
カラム名|型|例
-|-|-
id|integer|1
name_jp|text|攻撃力%
name_en|text|attack_percent

## artifact_main_statuses
カラム名|型|例
-|-|-
status_id|integer|1
star4|numeric|46.6
star5|numeric|46.6

## artifact_sub_status
カラム名|型|例
-|-|-
id|integer|1
status_id|integer|1
quality|integer|5
value_number1|numeric|3.9
value_number2|numeric|3.5
value_number3|numeric|3.1
value_number4|numeric|2.7