<!--
 * @Author: xinxu
 * @Date: 2022-07-01 17:36:28
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-07 20:25:56
 * @FilePath: /Blog/docs/promise/Promise.md
-->

# Promise 原理

[Promise 文档规范](https://promisesaplus.com)

### Promise 解决的问题

- 异步并发问题（Promise.all）
- 解决回调地狱（链式操作）
- 错误处理十分方便（catch 方法）
- 缺陷：依然是基于回调函数的，进化版：generator + co ---> async + await

### Promise 实现步骤

- Promise 是一个类，类中的构造函数需要传入一个 executor，默认会执行。
- executor 里有两个参数分别是 resolve、reject。
- 默认创建一个 Promise 的状态就是 pending、fulfilled、rejected 三种状态。
- 调用成功和失败时，需要传入成功和失败的原因。
- Promise 的状态一旦确定就不能改变（如果成功了就不会失败）。
- 每一个 Promise 实例都有 then 方法。
- 如果抛出异常，按失败来处理。

### 先简单实现一个同步状态的 promise

```javascript
const Promise = require("./promise.js");
let p = new Promise((resolve, reject) => {
  resolve("成功");
});

p.then(
  (data) => {
    // 成功的回调 onFulfilled
    console.log("success", data);
  },
  (reason) => {
    // 失败的回调 onRejected
    console.log("error", reason);
  }
);
```

```js
const STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class Promise {
  constructor(executor) {
    this.status = STATUS.PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      this.value = value;
      this.status = STATUS.FULFILLED;
    };
    const reject = (reason) => {
      this.reason = reason;
      this.status = STATUS.REJECTED;
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === STATUS.FULFILLED) onFulfilled(this.value);
    if (this.status === STATUS.REJECTED) onRejected(this.reason);
  }
}

module.exports = Promise;
```

👆 那个 promise 无法解决异步问题（promise 里放定时器）。  
这时就需要把 then 里的 onFulfilled 和 onReject 函数存起来，当 Promise 走 resolve 和 rejected 时才调用，利用订阅发布模式

### 再实现一个异步状态的 promise

```js
let p = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

p.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
```

```js
const STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};
class Promise {
  constructor(executor) {
    this.status = STATUS.PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = []; // 存放成功的回调
    this.onRejectedCallbacks = []; // 存放失败的回调
    const resolve = (value) => {
      this.value = value;
      this.status = STATUS.FULFILLED;
      // 在promise状态确定下来时候就依次执行，数组里的函数（也就是发布）
      this.onResolveCallbacks.forEach((fn) => fn());
    };
    const reject = (reason) => {
      this.reason = reason;
      this.status = STATUS.REJECTED;
      this.onRejectedCallbacks.forEach((fn) => fn());
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === STATUS.FULFILLED) onFulfilled(this.value);
    if (this.status === STATUS.REJECTED) onRejected(this.reason);
    if (this.status === STATUS.PENDING) {
      // promise的状态处于pending，需要等promise的状态确定下来，再走then的onFulfilled/onRejected方法，
      // 所以需要把onFulfilled/onRejected，存到数组里，这里就是订阅
      this.onResolveCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}
```

### promise 链式调用

- 如果 then 方法中（成功或失败），返回的不是一个 promise，那么会将 then 的返回值出递给外层下一个 then 的成功的结果。
- 如果 then 方法出错、抛出异常，则会走外层下一个 then 方法的失败。
- 如果 then 返回的是个 promise，则会用 promise 的成功或失败，来走外层 then 的成功或失败。
- 什么时候会当前的 then 走完会走下一个 then 的失败：
  - then 出错就失败。
  - 返回的 promise 出错或失败，就走下个 then 的失败，其他一律走下个 then 的成功。
- then 方法为什么能够链式调用：
  - 因为每次调用 then 方法都会返回一个新的 promise，才能保证状态一直改变（当上层的 promise 失败时，之后会走 then 方法的失败 onRejected，返回新的 promise 会走下个 then 的成功 onFulfilled）
  - catch 就是 then 方法的别名，没有成功只有失败（找最近的优先处理，处理不了就向下找），也就是说 promise 失败，会先走 then 的 onRejected 方法返回失败的值，如果找不到，就会走 catch。

> Promise 链式调用原理一：then 同步状态，返回的不是 promise

```js
const Promise = require("./promise.js");
function read(...args) {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
let p = read("name.txt", "utf8");
let promise2 = p.then(
  (data) => {
    return 100;
    // throw new Error()
  },
  (err) => {
    return 200;
  }
);
promise2.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log("err", err);
  }
);
```

```js
const STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};
class Promise {
  constructor(executor) {
    this.status = "PENDING";
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];
    const resolve = (val) => {
      // 最外层的promise状态
      this.status = STATUS.FULFILLED;
      this.value = val;
      this.onResolveCallbacks.forEach((fn) => fn());
    };
    const reject = (reason) => {
      this.status = STATUS.REJECTED;
      this.reason = reason;
      this.onRejectCallbacks.forEach((fn) => fn());
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === STATUS.FULFILLED) {
        // 上层promise成功
        try {
          // 走then方法成功，返回的不是promise
          let x = onFulfilled(this.value);
          resolve(x); // 会将值传给外层下一个then的成功结果里
        } catch (e) {
          // then成功方法执行时抛出异常
          reject(e); // 会将异常传给外层下一个then的失败结果里
        }
      }
      if (this.status === STATUS.REJECTED) {
        // 上层promise失败
        try {
          // 走then方法失败，返回的不是promise
          let x = onRejected(this.reason);
          resolve(x); // 会将值传给外层then方法的成功里
        } catch (e) {
          // 走then方法失败，抛异常
          reject(e); // 会将异常传给外层then的失败结果里
        }
      }
      if (this.status === STATUS.PENDING) {
        this.onResolveCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectCallbacks.push(() => {
          try {
            let x = onRejected(this.reason);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise2; // promise调用then方法会生成新的promise
  }
}
```

> Promise 链式调用原理二：then 异步状态，返回的不是 promise

```js
function read (...args) {
    return new Promise((resolve, reject) => {
        resolve()
    })
}
let p = read('name.txt','utf8')
// 判断返回值和promise2的关系，这个返回值决定promise2的成功还是失败
let promise2 = p.then((data)=>{
    // 判断当前成功/失败返回的是不是一个promise
    return new Promise((resolve, reject) => {
        resolve(return new Promise((resolve, reject) => {
            resolve(return new Promise((resolve, reject) => {
                resolve(return new Promise((resolve, reject) => {
                    setTimeOut(()=>{
                        resolve('ok')
                    }, 1000)
                 }))
            }))
        }))
    })
})
promise2.then((data)=>{
    console.log(data)
}, err => {
    console.log('err', err)
})
```

```js
const STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};
//我们的promise按照规范来写，就可以和别人的promise公用，兼容
function reslovePromise(x, promsie2, resolve, reject) {
  // 先要判断promise2和x是不是同一个对象引用，是的话就报类型错误
  if (promise2 === x) {
    // 如果promise2 === x，会导致循环引用，自己等自己执行完成
    return reject(new TypeError("出错了"));
  }
  // 看x是普通值还是promise，如果是promise要采用他的状态
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    // x是对象或函数
    let called; // 防止别人的promise出错（别人的promise可能及调resolve又调reject）
    try {
      // 取then的时候有可能失败
      let then = x.then; // 看一下这个对象是否有then方法
      if (typeof then === "function") {
        // then是函数，就认为x是promise
        // 如果x是promise，那么就采用他的状态

        // 这样写相当于从新获取then,并且存在风险，第一次取then没问题，第二次取就可能有问题了
        // x.then(function(data){},function(err){})

        // 这样写是拿前面定义的then，then调用call方法，并且this指向x
        // 这里就是用当前返回promise的结果作为下一次then的成功/失败
        then.call(
          x,
          function (y) {
            // 成功的回调
            if (called) return;
            called = true;
            // 递归解析成功后的值，知道他是一个普通值为止
            reslovePromise(y, promise2, resolve, reject);
          },
          function (r) {
            //失败的回调
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x); // 此时x就是一个普通对象 {then: {}}
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e); // 取then的时候抛错（因为要兼容别人的promise）
    }
  } else {
    resolve(x); // x是一个原始数据类型，不是promise
  }
  // 如果不是promise，就直接调resolve
}
class Promise {
  constructor(executor) {
    this.status = "PENDING";
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];
    const resolve = (val) => {
      this.status = STATUS.FULFILLED;
      this.value = val;
      this.onResolveCallbacks.forEach((fn) => fn());
    };
    const reject = (reason) => {
      this.status = STATUS.REJECTED;
      this.reason = reason;
      this.onRejectCallbacks.forEach((fn) => fn());
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    // then方法的onFulfilled和onRejected，是需要异步调用的
    let promise2 = new Promsie((resolve, reject) => {
      // x有可能是promise，有可能是普通值
      if (this.status === STATUS.FULFILLED) {
        // 判断时同步的
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // 判断x是promise还是普通值，并且当x是promise时，x的状态决定promise2的成功/失败
            reslovePromise(x, promsie2, resolve, reject);
            // 此时promise2是在实例化，拿不到，所以需要用个定时器，就可以取到，
            //（用宏任务（setTimeout/setImmdieate）/微任务（process.nextTick））,单独执行栈
            // 这样的话就是promise2先new完，再调定时器把promise2传进去
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            reslovePromise(x, promsie2, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === STATUS.PENDING) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              reslovePromise(x, promsie2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              reslovePromise(x, promsie2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promsie2;
  }
}
```
