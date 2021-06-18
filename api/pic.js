module.exports = (req, res) => {
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
