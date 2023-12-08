const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("artifact.db");

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const message = "Hello world";
  const sql = `select * from artifact_managers;`;
  db.serialize(() => {
    db.all(sql, (error, data) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      //console.log(data);    // ③
      res.render("main", { data: data, mes: message });
    });
  });
});

app.post("/insert", (req, res) => {
  console.log(req.body);
  res.render("main", { data: "data", mes: "seikou" });
});

app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
