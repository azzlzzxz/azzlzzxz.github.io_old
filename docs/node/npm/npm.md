# NPM 常用命令

## 镜像

1. 镜像查询可以使用 nrm

全局安装 nrm：

```shell
npm install nrm -g
```

使用 nrm 查询镜像地址

```shell
nrm ls
```

```lua
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

2. 镜像获取/修改

```shell
npm config get registry 检查源是否切换成功
npm set registry https://registry.npmjs.org/
```

## npx

npx: Node 包的可执行运行器。

npx 和 npm 区别：

1. npx 是 npm 5.2.0 版本之后新增的命令，可以直接运行安装在本地 node_modules 目录下的可执行文件，而不需要全局安装。npm 需要全局安装才能使用。

2. npx 可以直接运行远程仓库中的包，而不需要先安装到本地。npm 需要先安装到本地才能使用。

3. npx 可以避免全局安装的包版本冲突问题，因为它会优先使用本地的包。npm 需要全局安装，容易出现版本冲突问题。

```shell
npx create-react-app my-app
```
