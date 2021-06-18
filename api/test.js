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
  var file = '../api_runrab.db';//这里写的就是数据库文件的路径  
  var exists = fs.existsSync(file);  
  console.log(exists);
  const Database = require('better-sqlite3');
  const db = new Database(file,{ verbose: console.log });	
  const row = db.prepare('SELECT url FROM img WHERE id=10');
  //console.log("test");
  //console.log(row.url); 
  //db.close();
  //url= row.url
  //res.redirect(url);	
  res.json({
    json: true
  })
}



