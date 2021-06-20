/**module.exports = (req, res) => {
  // npm install --save random-int
  var randomInt = require('random-int');	
  var mid=randomInt(1, 1000);
  var fs = require('fs');	
  var path = require("path")
  var file = path.resolve('api_runrab.db');;  //这里写的就是数据库文件的路径  
  //var exists = fs.existsSync(file);  
  //console.log(exists);
  console.log(mid);
  var Database = require('better-sqlite3');
  var db = new Database(file,{ verbose: console.log });	
  var row = db.prepare('SELECT url FROM img WHERE id=100').all();
  db.close();
  res.redirect(row[0].url)
}
*/
module.exports = (req, res) => {
  let path = require("path");
  const SqliteDB = require('./better.js').SqliteDB;
//绝对路径
  let file = path.resolve('../api_runrab.db');
//var file = "api_runrab.db";
  const sqliteDB = new SqliteDB(file);
//sql区域==========
  const querySql='SELECT * FROM img where id=100';
  let picUrl = sqliteDB.queryData(querySql, dataDeal);
  //console.log(picUrl);
  function dataDeal(objects) {
    //console.log(objects.url);
    console.log(objects[0].url);
    res.redirect(objects[0].url)
  }
  //res.redirect(picUrl)
}












  //res.redirect();
  /**
  var fs = require('fs');
  path = require("path");
  var mid=Math.floor(Math.random()*1000)+1;
  console.log(mid);
  file = path.resolve('api_runrab.db');;  //这里写的就是数据库文件的路径
  var exists = fs.existsSync(file);  
  console.log(exists);
  var Database = require('better-sqlite3');
  var db = new Database(file,{ verbose: console.log });	
  var row = db.prepare('SELECT url FROM img WHERE id=100').all();
  db.close();
  console.log(row);
  console.log("test");
  //console.log(typeof row[0],typeof JSON.parse(row[0],JSON.parse(row[0]); 
  //console.log(typeof row[0].url);
  //var surl = JSON.parse(row[0]);
  //db.close();
  //url= row.url
  //res.redirect(url);	
  //console.log(row);
  res.redirect(row[0].url)  */




