function sqlDeal(){
/// Import SqliteDB.
    var SqliteDB = require('./sqlite_cache').SqliteDB;
    var path = require("path")
//绝对路径
    var file = path.resolve('../api_runrab.db');
//var file = "api_runrab.db";
    var sqliteDB = new SqliteDB(file);

/// create table.
    /**
     var createTileTableSql = "create table if not exists tiles(level INTEGER, column INTEGER, row INTEGER, content BLOB);";
     var createLabelTableSql = "create table if not exists labels(level INTEGER, longitude REAL, latitude REAL, content BLOB);";
     sqliteDB.createTable(createTileTableSql);
     sqliteDB.createTable(createLabelTableSql);
     */


/// insert data.
    /**
     var tileData = [[1, 10, 10], [1, 11, 11], [1, 10, 9], [1, 11, 9]];

     var insertTileSql = "insert into tiles(level, column, row) values(?, ?, ?)";

     sqliteDB.insertData(insertTileSql, tileData);
     */


/// query data.
    /**
     var querySql = 'select * from tiles where level = 1 and column >= 10 and column <= 11 and row >= 10 and row <=11';

     sqliteDB.queryData(querySql, dataDeal);
     */
    //var querySql = 'SELECT * FROM img WHERE id=100';
    var querySql = 'SELECT * FROM img';
    sqliteDB.queryData(querySql, dataDeal);

/// update data.
    /**
     var updateSql = 'update tiles set level = 2 where level = 1 and column = 10 and row = 10';

     sqliteDB.executeSql(updateSql);
     */


/// query data after update.
    /**
     querySql = "select * from tiles where level = 2";

     sqliteDB.queryData(querySql, dataDeal);
     */

    sqliteDB.close();
}


//node-cache
function dataDeal(objects){
    const NodeCache = require( "node-cache" );
    const myCache = new NodeCache({ stdTTL: 100,checkperiod:120 });
    value=undefined
    if ( value == undefined ){
        // handle miss!
        //console.log(JSON.stringify(objects));
        //console.log(typeof objects);
        for(var i = 0; i < objects.length; ++i){
            const key=i;
            const value = myCache.get(key);
            //const value1 = myCache.mget(key);
            //console.log(objects[i]);
            //myCache.set("i",objects[i]);
            myCache.set(`${i}`,objects[i]);
            // myCache.set(`${i}`,objects[i].url); 加.url 则console.log(myCache.get("100"));不加
            //测试 但是当 myCache.get("i").url 在循环外时会找不到url 应该是 nodejs中de url变量导致
            if(i==100){
                console.log(myCache.get(`${i}`).url);
            }
        }
        //console.log(myCache.get("100").url);
    }
    /**
    for(var i = 0; i < objects.length; ++i){
        console.log(objects[i]);

    }*/
/**
    for(var i = 0; i < objects.length; ++i){
        //console.log(myCache.get("i"));
        console.log(myCache.get("i").url);
    }
*/
}

sqlDeal();
//定时执行 setTimeout(sqlDeal,3000) 毫秒  第三个为sqlDel传参函数
//setTimeout(sqlDeal,3000)

/**
//用node-schedule实现
var schedule = require('node-schedule');

function scheduleCronstyle(){
    //每天1点更新
    schedule.scheduleJob('10 0 1 * * *', function(){
        //console.log('scheduleCronstyle:' + new Date());
        sqlDeal();
    });
}
scheduleCronstyle();
 */