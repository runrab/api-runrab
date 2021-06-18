module.exports = (req, res) => {
	var db = require('better-sqlite3')('api_runrab.db', options);
	var row = db.prepare('SELECT * FROM img WHERE id=10');
	console.log("test");
	console.log(row.url); 
	db.close();
	//url= row.url
	//res.redirect(url);
}



