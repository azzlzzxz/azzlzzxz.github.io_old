<!--
 * @Author: xinxu
 * @Date: 2022-07-01 17:36:28
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-04 11:25:29
 * @FilePath: /Blog/docs/promise/Promise.md
-->
# Promise原理

[Promise文档规范](https://promisesaplus.com)

## Promise解决的问题
* 异步并发问题（Promise.all）
* 解决回调地狱（链式操作）
* 错误处理十分方便（catch方法）
* 缺陷：依然是基于回调函数的，进化版：generator + co ---> async + await


### 先简单实现一个promise
```
const Promise = require('./promise.js')
let p = new Promise((resolve, reject) => {
    
})
```