# NPM

[npm 官网](https://www.npmjs.com/)

## 介绍 NPM

npm（Node Package Manager）是一种用于管理 JavaScript 软件包和依赖项的包管理工具。它是 Node.js 生态系统的一部分，并且是最常用的 JavaScript 包管理器之一。以下是 npm 的一些关键特点和功能：

1. 包管理、发布、安装
2. 依赖项管理
3. 版本管理
4. 脚本运行

```json
package.json
{
  "private": true, // 是否私有
  "name": "xxx", // 包名/项目名
  "bin": {// 指定可执行文件的路径或命令
    "cli": "./bin/cli.js"
  },
  "description": "this is test project", // 描述
  "version": "1.0.0", // 版本
  "scripts": {
    // 脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    // 仓库地址
    "type": "git",
    "url": "https://github.com/xxx/xxx.git"
  },
  "keywords": ["test", "project", "azzlzzxz"], // 搜索关键字
  "author": "xxx", // 作者npm用户
  "license": "ISC", // 开源协议
  "bugs": {
    // 项目问题跟踪器的 url 和/或应报告问题的电子邮件地址
    "url": "https://github.com/owner/project/issues",
    "email": "project@hostname.com"
  },
  "homepage": "https://github.com/xxx/xxx", // 主页
  "dependencies": {
    // 生产依赖
    "my_dep": "^1.0.0",
    "another_dep": "~2.2.0"
  },
  "devDependencies": {
    // 开发依赖
    "my_test_framework": "^3.1.0",
    "another_dev_dep": "1.0.0 - 1.2.0"
  }
}
```

## 发布一个 npm 包(公共)

1. 首先需要到 [npm 官网](https://www.npmjs.com/) 注册一个 npm 账号。
   > 你也可以直接在本地执行 npm adduser 来创建账户
2. 在本地通过运行 npm login 登陆你的 npm 账号
   > npm 的账户管理是镜像维度的，所以当你切换镜像的时候用户也会跟着切换，也就是说如果你想把你的包发布到官方的 npm 上，那么你登陆时就需要将你的镜像设置为 npm 官方就像，如果你想发布到 taobao，那么你就需要切换为 taobao 镜像。
   > 随便推荐一个 npm 镜像管理工具 nrm，可以像 nvm 切换 node 一样方便的切换 npm 镜像。
   > npm whoami 可以查看到当前登陆的用户名
3. 初始化项目

   - npm init -y 可以在当前目录下快速初始化一个 package.json 文件

   ```json
   {
     "name": "azzlzzxz",
     "description": "this is test project",
     "version": "1.0.0",
     "repository": {
       "type": "git",
       "url": "https://github.com/xxx/xxx.git"
     },
     "keywords": ["test", "project", "azzlzzxz"],
     "author": "xxx",
     "license": "ISC",
     "bugs": {
       "url": "https://github.com/owner/project/issues",
       "email": "project@hostname.com"
     },
     "homepage": "https://github.com/xxx/xxx",
     "main": "index.js"
   }
   ```

   - 初始化一个 README.md 文件

   ```md
   这是一个测试的 npm 包
   ```

4. 编写代码/修改代码
   - 如果你是修改代码，那么你还需要修改 package.json 中的 version 来修改版本，或者也可以运行 npm version xxx 来智能的生成新版本号（命令参数详见官网或者 npm version -h ）
   - 升级版本：
     npm version patch : package.json 中的版本号 2.0.0 变为 2.0.1
     npm version minor : package.json 中的版本号 2.0.1 变为 2.1.0;
     npm version major : package.json 中的版本号 2.1.0 变为 3.0.0
5. 使用 npm publish 发布当前包到 npm 仓库
   > 注意你当前的镜像必须是 npm 官方镜像

## 发布属于某个 scope 或者组织下的包

在实际项目中，对于一些不能完全和项目或者框架解藕的 npm 包我们一般会将其发布到相应的命名空间或者组织下，例如 @vue/cli、 @vue/runtime-core、 @vue/composition-api...他们都是 vue 组织下的包，同理 @bable/xxx、@webpack/xxx 等也是一样的。当我们在开发一个公司内部的项目时一般也会搭建 npm 私服，然后在其中创建项目的 scope，然后将项目的 npm 发布上去。

1. 需要 name 用 @组织名 开头，例如 @vue/cli

   ```json
   {
     "name": "@azzlzzxz/form",
     "version": "1.0.4",
     "description": "",
     "main": "index.js",
     "keywords": ["test", "project"],
     "author": "azzlzzxz",
     "license": "ISC",
     "dependencies": {
       "jquery": "^3.6.0",
       "lodash": "<4.2.0"
     }
   }
   ```

2. 你的 npm 账户需要属于这个组织或者命名空间

   ```shell
    npm set registry http://nexus.xxx
    输入：npm config get registry 检查源是否切换成功

    在本地注册并登录用户
    npm adduser --registry http://nexus.xxx
   ```

3. 如果发布的包属于某一个 scope 或者组织，如果是非 npm 官方镜像（一般就是指私有 npm 仓库），那么你还需要配置 publishConfig.registry 来指定镜像地址。

```json
// package.json
{
  // ...
  "publishConfig": {
    "registry": "私有镜像地址"
  }
  // ...
}
```

4. 发布 npm 包
   ```shell
    npm publish --registry 'xxx：私服镜像源'
   ```

## 调试/修改包

我们在开发一个 @azzlzzxz/form 包时，经常会在本地先做一些测试或者修改。如果我们本地正好有一个项目 project1 在使用这个包时，使用这个项目来检验包的运行结果当然是不二之选，所以我就需要将我们修改的包给放入项目的 node_modules 中来替换线上的版本。这时候就需要使用到 npm link 命令了。

1. 在你的 @azzlzzxz/form 目录下运行 npm link 命令，不加任何参数。这一步会在你全局的 node_modules 下创建一个名为 @azzlzzxz/form 的链接（可以理解为快捷方式）链接到你的 @azzlzzxz/form 代码所在目录。

2. 在 project1 目录下运行 npm link @azzlzzxz/form ，这一步就是在 project1 的 node_modules 中再创建一个 @azzlzzxz/form 链接链接到全局的 node_modules/@azzlzzxz/form。

这样当你修改 @azzlzzxz/form 的代码时， project1 中的 @azzlzzxz/form 代码也会同步。

## 安装本地包

上面说到 npm link 可以创建链接直接链接到本地对应包的代码目录，但是当我们运行 npm i 或者 node_modules 丢失之类的情况时，再次安装就会出现去 npm 官网下载包代码而不是创建链接，原因是 npm link 并不会在 package.json 存在记录。但是有的时候我们想开发一个私有包，不想发布到 npm 上，又要运行 npm install 能正常安装这个包，那么我们可以用下面这种方式。

```shell
npm install 待安装包的相对路径
```

当运行 npm i ../bar 时，我们可以在 package.json 中看到相关信息

```json
{
  "name": "@azzlzzxz/form",
  "version": "1.0.4",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@yuexi111/bar": "file:../bar", // <---- 这里
    "jquery": "^3.6.0",
    "lodash": "<4.2.0"
  }
}
```

## npm 常用的命令如何工作的

### npm run

npm run 是最常用的命令，他的作用是运行 pacgake.json 中指定的脚本

```json
// package.josn
{
  "name": "demo",
  "version": "1.0.7",
  "scripts": {
    "serve": "vue-cli-service serve"
  }
}
```

当我们运行 npm run serve 会查找 package.json 中 scripts 中 key 为 serve 对应的值来当作命令执行，也就是相当于执行了 vue-cli-service serve

这里有一个 npm 包：@azzlzzxz/hello_shell，他给我们提供了一个 hello 命令，我们来在项目中使用一下它。

```json
// package.json
{
  "name": "demo",
  "scripts": {
    "hello": "hello"
  },
  "dependencies": {
    "@azzlzzxz/hello_shell": "^1.0.0"
  }
}
```

当运行 npm run hello 时其实就相当于运行了 hello

那为什么我们要执行 npm run hello 而不直接执行 hello 呢？

> hello
> zsh: command not found: hello

为什么我们直接执行 hello 找不到命令，使用 npm run 来执行却可以？
原因是 npm run 执行脚本时会先去 node_modules/.bin 中查找是否存在要运行的命令，如果不存在则查找 ../node_modules/.bin，如果全都找不到才会去按系统的环境变量查找。

![hello.js](../../.vuepress/public/images/hello.jpg)

好在现在 node 给我们提供了 npx 命令来解决这个问题。运行 npx hello 即可运行 hello 命令。当然你也可以直接运行 node_modules/.bin/hello

> npx 可以让命令的查找路径与 npm run 一致

那么 node_modules/.bin 中的文件从哪来的呢？
npm i @azzlzzxz/hello_shell 时会将 @azzlzzxz/hello_shell 中的 package.json 中的 bin 指定的命令和文件链接到 node_modules/.bin，也就是说 node_modules/.bin/hello 其实是 node_modules@azzlzzxz/hello_shell/bin/index.js 的快捷方式

```json
// package.json
{
  "name": "@azzlzzxz/hello_shell",
  "version": "1.0.0",
  "description": "一个描述",
  "keywords": [],
  "bin": {
    "hello": "bin/hello_shell.js" // 指定运行 hello 命令时运行的文件
  },
  "license": "ISC"
}
```

```js
// bin/index.js
#!/usr/bin/env node
console.log('Hello NPM')
```

当运行 npx hello 时自然就相当于运行了 @yuexi111/hello_shell/bin/index.js

- 当我们使用 npm install 安装包时，会将这个包中 package.json 中 bin 中指定的脚本软链接到项目的 node_modules/.bin 下，key 作为链接名字（也就是命令），value 作为命令运行时执行的文件
- 当我们通过 npm run xxx 运行某个脚本时，会执行 package.json 中 scripts 中指定的脚步后的命令，会先去 node_modules/.bin 中查找这些命令，然后去 ../node_modules/.bin,...全都找不到才会去环境变量中查找。

### npm install
