const fs = require('fs');
const path = require("path");
const file = path.resolve('../api_runrab.db');;  //这里写的就是数据库文件的路径
const Database = require('better-sqlite3');
const exists = fs.existsSync(file);
if (!exists) {
    console.log('数据库不存在或者位置不对')
} else {
    let db_file = new Database(file, {verbose: console.log});
    const row = db_file.prepare('SELECT * FROM img').all();
    //console.log(db_file.memory==false)
    const db_buffer = db_file.serialize();
    const db = new Database(db_buffer);
    db_file.close();
    console.log(db);
    return db
}