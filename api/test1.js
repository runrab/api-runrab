/**module.exports = (req, res) => {
  const db = require('better-sqlite3')('../api_runrab.db',options);
  const row = db.prepare('SELECT * FROM img WHERE id=10');
  //console.log("test");
  //console.log(row.url); 
  //db.close();
  //url= row.url
  //res.redirect(url);
  res.json({
    json: true
  })	
	
}*/
module.exports = (req, res) => {
  var fs = require('fs');	
  var path = require("path")
  var file = path.resolve('api_runrab.db');;  //这里写的就是数据库文件的路径  
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

  res.redirect(row[0].url)
}



