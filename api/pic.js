module.exports = (req, res) => {
  const fs = require('fs');
  const path = require("path");
  const mydb = require("/preload/better.js");
  const row = mydb.prepare('SELECT * FROM img WHERE id=100').get();//得到一个
  //console.log(row.url);
  //console.log('=========')
  res.redirect(row.url)
}



