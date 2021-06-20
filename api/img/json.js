module.exports = (req, res) => {
    let path = require("path");
    const SqliteDB = require('./better.js').SqliteDB;
    let file = path.resolve('api_runrab.db');
    const sqliteDB = new SqliteDB(file);
    const mid=Math.random.floor(1000)+1;
    const querySql='SELECT * FROM img where id=?';
    sqliteDB.queryData(querySql, mid,dataDeal);
    function dataDeal(objects) {
      res.json(objects[0])
    }
}
