/// Import SqliteDB.
var SqliteDB = require('./better.js').SqliteDB;

let path = require("path");
//绝对路径
let file = path.resolve('../api_runrab.db');

var sqliteDB = new SqliteDB(file);


/**
/// create table.
var createTileTableSql = "create table if not exists tiles(level INTEGER, column INTEGER, row INTEGER, content BLOB);";
var createLabelTableSql = "create table if not exists labels(level INTEGER, longitude REAL, latitude REAL, content BLOB);";

sqliteDB.createTable(createTileTableSql);
sqliteDB.createTable(createLabelTableSql);

/// insert data.
var tileData = [[1, 10, 10], [1, 11, 11], [1, 10, 9], [1, 11, 9]];
var insertTileSql = "insert into tiles(level, column, row) values(?, ?, ?)";
sqliteDB.insertData(insertTileSql, tileData);
 /// update data.

 var updateSql = 'update tiles set level = 2 where level = 1 and column = 10 and row = 10';

 sqliteDB.executeSql(updateSql);
 querySql = "select * from tiles where level = 2";
 sqliteDB.queryData(querySql, dataDeal);
 */
/// query data.
/// query data after update.
    const mid=200;
var querySql = 'select * from img where id=?';
sqliteDB.queryData(querySql, mid,dataDeal);

sqliteDB.close();

function dataDeal(objects){
    /**
    for(var i = 0; i < objects.length; ++i){
        console.log(objects[i]);
    }*/
    console.log(objects[0].url);
}