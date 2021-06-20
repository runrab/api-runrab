/**
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


 exports.SqliteDB = DB.SqliteDB;

 */
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

var DB = DB || {};

DB.SqliteDB = function(file){
    DB.db = new sqlite3.Database(file);

    DB.exist = fs.existsSync(file);
    if(!DB.exist){
        console.log('数据库文件不存在或者位置不对');
        //console.log("Creating db file!");
        //fs.openSync(file, 'w');
    };
};

DB.printErrorInfo = function(err){
    console.log("Error Message:" + err.message + " ErrorNumber:" + err);
};

DB.SqliteDB.prototype.createTable = function(sql){
    DB.db.serialize(function(){
        DB.db.run(sql, function(err){
            if(null != err){
                DB.printErrorInfo(err);
                return;
            }
        });
    });
};

/// tilesData format; [[level, column, row, content], [level, column, row, content]]
DB.SqliteDB.prototype.insertData = function(sql, objects){
    DB.db.serialize(function(){
        var stmt = DB.db.prepare(sql);
        for(var i = 0; i < objects.length; ++i){
            stmt.run(objects[i]);
        }
        stmt.finalize();
    });
};

DB.SqliteDB.prototype.queryData = function(sql,mid, callback){
    DB.db.all(sql, mid,function(err, rows){
        if(null != err){
            DB.printErrorInfo(err);
            return;
        }
        /// deal query data.
        if(callback){
            callback(rows);
        }
    });
};

DB.SqliteDB.prototype.executeSql = function(sql){
    DB.db.run(sql, function(err){
        if(null != err){
            DB.printErrorInfo(err);
        }
    });
};

DB.SqliteDB.prototype.close = function(){
    DB.db.close();
};

/// export SqliteDB.
exports.SqliteDB = DB.SqliteDB;


