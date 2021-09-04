module.exports = (req, res) => {
  /**
   * precision 精度 100 1000 10000
   */
  function getNumberUid(precision){
    const rawPre = (Date.now() - new Date(1624206802955).getTime()) / precision;
    const preNumber = Number(rawPre.toFixed()) * precision;
    const randam = Math.floor(Math.random() * precision);
    return preNumber + randam;
  }
  const db = require('better-sqlite3')('api_runrab.db', options);
  const row = db.prepare('SELECT * FROM users WHERE id=?').get(getNumberUid(2000));
  console.log("aaa");
}






/**module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.send(`Hello ${name}!`)
}
*/