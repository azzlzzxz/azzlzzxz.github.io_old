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
  "name": "my_package", // 包名/项目名
  "bin": {
    "cli": "./bin/index.js"
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
    "url": "https://github.com/monatheoctocat/my_package.git"
  },
  "keywords": ["test", "project", "didi"], // 搜索关键字
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)", // 作者npm用户
  "license": "ISC", // 开源协议
  "bugs": {
    // 项目问题跟踪器的 url 和/或应报告问题的电子邮件地址
    "url": "https://github.com/owner/project/issues",
    "email": "project@hostname.com"
  },
  "homepage": "https://github.com/monatheoctocat/my_package", // 主页
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
