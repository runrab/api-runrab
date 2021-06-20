module.exports = (req, res) => {
    let path = require("path");
    const SqliteDB = require('./better.js').SqliteDB;
    let file = path.resolve('api_runrab.db');
    const sqliteDB = new SqliteDB(file);
    const querySql='SELECT * FROM img where id=100';
    sqliteDB.queryData(querySql, dataDeal);
    function dataDeal(objects) {
      res.json(objects[0])
    }
}
