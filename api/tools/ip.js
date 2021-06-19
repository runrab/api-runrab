module.exports = (req, res) => {
	var http = require('http')
	var server = http.createServer(function (req,res) {
	console.log(req.headers['x-forwarded-for'] ); // 判断是否有反向代理
	console.log(req.socket.remoteAddress ); 	  // 判断后端的 socket 的 IP
	let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
	//res.end(ip)
})
  res.send(`${ip}`)
}


