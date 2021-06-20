const fs = require('fs');
const path = require("path");
const file = path.resolve('../api_runrab.db');
var DB = DB || {};
const database = require('better-sqlite3');

 DB.SqliteDB = function(file){
    DB.db = new database(file);
    DB.exist = fs.existsSync(file);
    console.log('哈哈哈');
    if(!DB.exist){
        ///console.log("Creating db file!");
        console.log("db file not exits");
        //fs.openSync(file, 'w');
    };
};

 DB.SqliteDB.prototype.queryData = function(file,sql){
    DB.db = new database(file);
    DB.exist = fs.existsSync(file);
    if(!DB.exist){
        ///console.log("Creating db file!");
        console.log("db file not exits");
        //fs.openSync(file, 'w');
    };
    const mid = Math.floor(Math.random() * 1000) + 1;
    //console.log(DB.db.prepare(sql));
    const a = DB.db.prepare(sql);
    console.log(typeof a);
    console.log(a);
    //return DB.db.prepare(sql);

}



 DB.SqliteDB.prototype.close = function(){
    DB.db.close();
};


 const sql1='SELECT * FROM img where id=100';
 //这里写的就是数据库文件的路径
 //console.log(DB.SqliteDB(file));
 console.log(DB.SqliteDB.prototype.queryData(file,sql1));
 //console.log(DB.exist)
 /// export SqliteDB.

 function dataDeal(objects){
    for(var i = 0; i < objects.length; ++i){
        console.log(objects[i]);
    }
}

//exports.SqliteDB = DB.SqliteDB;


