const express = require("express");
const path = require("path");
const app = express();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("artifact.db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const message = "Hello world";
  const sql = `select
	a.id,a.name,m.name as artifactName,t.japanese as typeName,s.name_japanese as setName,main.name_jp as mainName,sub1Stat.name_jp as subName1,sub2Stat.name_jp as subName2,sub3Stat.name_jp as subName3,sub4Stat.name_jp as subName4,a.sub1_value_number as subNum1,a.sub2_value_number as subNum2,a.sub3_value_number as subNum3,a.sub4_value_number as subNum4
	from artifact_managers as a
	inner join artifacts as m
	on a.artifact_id=m.id
	inner join artifact_types as t
	on m.artifact_type_id=t.id
	inner join artifact_sets as s
	on m.artifact_set_id=s.id
	inner join stats as main
	on a.main_stat_id=main.id
	inner join stats as sub1Stat
	on a.sub1_stat_id=sub1Stat.id
	inner join stats as sub2Stat
	on a.sub2_stat_id=sub2Stat.id
	inner join stats as sub3Stat
	on a.sub3_stat_id=sub3Stat.id
	inner join stats as sub4Stat
	on a.sub4_stat_id=sub4Stat.id
	;`;
  console.log(sql);
  db.serialize(() => {
    db.all(sql, (error, rows) => {
      if (error) {
        console.log(error);
        res.render("show", { mes: "エラーです" });
      }
      res.render("main", { data: rows, mes: message });
    });
  });
});

app.post("/insert", (req, res) => {
  const name = req.body.name;
  const artifact = req.body.type + req.body.set;
  const mainStat = req.body.main;
  const sub1Stat = req.body.sub1;
  const sub2Stat = req.body.sub2;
  const sub3Stat = req.body.sub3;
  const sub4Stat = req.body.sub4;
  const sub1Num = req.body.sub1Num;
  const sub2Num = req.body.sub2Num;
  const sub3Num = req.body.sub3Num;
  const sub4Num = req.body.sub4Num;

  const sql = `insert into artifact_managers ("name","artifact_id","main_stat_id","sub1_stat_id","sub2_stat_id","sub3_stat_id","sub4_stat_id","sub1_value_number","sub2_value_number","sub3_value_number","sub4_value_number") values ("${name}","${artifact}","${mainStat}","${sub1Stat}","${sub2Stat}","${sub3Stat}","${sub4Stat}","${sub1Num}","${sub2Num}","${sub3Num}","${sub4Num}");`;

  console.log(sql);

  db.serialize(() => {
    db.run(sql, (error, row) => {
      if (error) {
        console.log("Error: ", error);
        return;
      }
      console.log("データを追加しました");
      res.redirect("/");
    });
  });
});

app.delete("/delete", (req, res) => {
  console.log(req.params.id);
  res.render("delete", { data: "data" });
});

app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
