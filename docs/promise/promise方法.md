<!--
 * @Author: xinxu
 * @Date: 2022-07-07 20:39:54
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-07 20:41:28
 * @FilePath: /Blog/docs/promise/promise方法.md
-->

# Promise 方法

## 1.Promise.all

```js
const fs = require("fs");
const getName = fs.readFile("name.txt", "utf8");
const getAge = fs.readFile("age.txt", "utf8");
Promise.all([1, getName, getAge, 2]).then((data) => {
  console.log(data);
});
```

### Promise.all 方法返回的是一个 promise,其中一个失败就真的失败了

```js
// Promsie.all实现原理
// 判断是不是promise
function isPromise(val) {
  return val && typeof val.then === "function";
}
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let times = 0;
    //做定时器的原因是：[1,getName,getAge,2]循环走到2，那么getName,getAge是empty，因为是异步的，所以不能用result.length === promises.length作为判断条件
    function processData(i, val) {
      result[i] = val;
      if (times++ === promises.length) {
        resolve(result);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      if (isPromise(promises[i])) {
        promises[i].then((data) => {
          processData(i, data);
        }, reject);
      } else {
        processData(i, promises[i]);
      }
    }
  });
};
```
