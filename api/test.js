/**module.exports = (req, res) => {
  const db = require('better-sqlite3')('./api_runrab.db',options);
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
  const Database = require('better-sqlite3');
  const db = new Database('../api_runrab.db', { verbose: console.log });	
  const row = db.prepare('SELECT * FROM img WHERE id=10');
  //console.log("test");
  //console.log(row.url); 
  //db.close();
  //url= row.url
  //res.redirect(url);	
  res.json({
    json: true
  })
}



