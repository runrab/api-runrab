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

## vercel重写

## [无效的路由源模式](https://vercel.com/docs/platform/frequently-asked-questions#invalid-route-source-pattern)

该`source`属性遵循以下语法[正则表达式路径](https://github.com/pillarjs/path-to-regexp/tree/v6.1.0)，不是`RegExp`语法。

例如，负前瞻必须包含在一个组中。

前

```
{
  "source": "/feedback/(?!general)",
  "destination": "/api/feedback/general"
}
```

后

```
{
  "source": "/feedback/((?!general).*)",
  "destination": "/api/feedback/general"
}
```

## [无效的路由目标段](https://vercel.com/docs/platform/frequently-asked-questions#invalid-route-destination-segment)

该`source`属性遵循以下语法[正则表达式路径](https://github.com/pillarjs/path-to-regexp/tree/v6.1.0).

这意味着冒号 ( `:`) 定义了一个[命名段参数](https://github.com/pillarjs/path-to-regexp/tree/v6.1.0#named-parameters).

`destination`属性中定义的命名段参数也必须在`source`属性中定义。

前

```
{
  "source": "/feedback/:type",
  "destination": "/api/feedback/:id"
}
```

后

```
{
  "source": "/feedback/:id",
  "destination": "/api/feedback/:id"
}
```



## 方法一：

更改npm配置文件：

```
npm config set registry URL
```





URL 即为需要设置的镜像站点地址，如淘宝镜像: **http://registry.npm.taobao.org**

参考网站：[http://www.runoob.com/w3cnote/npm-slow-use-cnpm.html](https://www.runoob.com/w3cnote/npm-slow-use-cnpm.html)。

## 方法二：

安装nrm 管理，安装这个的前提是能确定链接到现在的镜像地址：

```
npm install -g nrm
```

待安装完nrm 之后，通过nrm 管理镜像的地址，一条命令切换，如：

```
nrm use taobao
```

nrm 除了淘宝站点镜像之外还有其他的，可以使用一下命令查看：

```
nrm ls
```





sqlite3需要  npm install node-pre-gyp  --save



# nrm 报[TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string

打开C:\Users\Administrator\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
 把



```csharp
// const NRMRC = path.join(process.env.HOME, '.nrmrc');
改成下面这样既可
const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
```

npm 升级所有可升级的包

```
npm install -g npm-check
```

```
npm-check -u -g
```

```
通过上下键可以移动光标，使用空格键可以选择需要处理的包，回车直接进行处理。
```

或者脚本

```
#!/bin/sh
set -e
#set -x
for package in $(npm -g outdated --parseable --depth=0 | cut -d: -f2) do     npm -g install "$package" done
```

或者

比如 `npm-check-updates`, 安装好后，运行 `ncu`能列出当前的`package.json` 中的 npm 包版本及能够最新的版本







# [1.Npm使用npm-check选择升级所有可更新包(全局+局部) + 项目单个依赖](https://www.cnblogs.com/wangRong-smile/articles/12341886.html)

### 1.安装npm-check： （全局目录安装）

```
npm install -g npm-check
```

### 2.npm 全局更新包 (全局目录)

```
npm-check -u -g
```

### 3.npm更新某个项目的包 （项目目录）

```
npm-check -u
```

### 4.npm 更新单个全局包

```
npm update <name> -g
```

### 5.npm 更新 项目 生产环境依赖包

```
npm update <name> --save
```

### 6.npm 更新 项目 开发环境依赖包

```
npm update <name> --save-dev
```

### 7.npm 查找全局安装过的包

```
npm ls -g --depth 0
```

node-pre-gyp

https://github.com/mapbox/node-pre-gyp#readme

```
npm uninstall node-pre-gyp --save
npm install @mapbox/node-pre-gyp --save
```

路径问题

https://github.com/imsobear/blog/issues/48

