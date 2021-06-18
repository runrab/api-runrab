# api-runrab
 nodejs 开发api











```
演示地址: https://vercel-api-shanyue.vercel.app/api/json(opens new window)
在 vercel 中通过 res.json(obj) 来返回 JSON 数据，像这样的简单方便的函数并不为原生的 HTTP Handler (opens new window)所提供。而由 vercel 提供的 Node.js Helper (opens new window)实现:

req.query: An object containing the request's query string, or {} if the request does not have a query string.
req.cookies: An object containing the cookies sent by the request, or {} if the request contains no cookies.
req.body: An object containing the body sent by the request, or null if no body is sent.
res.status(code): A function to set the status code sent with the response where code must be a valid HTTP status code. Returns res for chaining.
res.send(body): A function to set the content of the response where body can be a string, an object or a Buffer.
res.json(obj): A function to send a JSON response where obj is the JSON object to send.
res.redirect(url): A function to redirect to the URL derived from the specified path with status code "307 Temporary Redirect".
res.redirect(statusCode, url): A function to redirect to the URL derived from the specified path, with specified HTTP status code.
```

