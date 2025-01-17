const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('artifact.db');

let sql = `
select * from stats;
`

db.serialize(() => {
  db.all(sql, (error, row) => {
    if (error) {
      console.log('Error: ', error);
      return;
    }
    for (let data of row) {
      console.log(data.id + ' : ' + data.name_jp);
    }
  });
});
