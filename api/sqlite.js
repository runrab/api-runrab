module.exports = (req, res) => {
	const db = require('better-sqlite3')('api_runrab.db', options);
	const row = db.prepare('SELECT * FROM img WHERE id=10');
	//console.log(row.url); 
	url= row.url
	res.redirect(url)
}



