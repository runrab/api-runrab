/**module.exports = (req, res) => {
  const db = require('better-sqlite3')('api_runrab.db',options);
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
  res.json({
    json: true
  })
}



