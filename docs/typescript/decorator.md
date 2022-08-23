<!--
 * @Author: xinxu
 * @Date: 2022-08-18 10:57:30
 * @LastEditors: xinxu
 * @LastEditTime: 2022-08-23 19:57:00
 * @FilePath: /azzlzzxz.github.io/docs/typescript/decorator.md
-->

# 装饰器

## 类装饰器

类装饰器在类声明之前声明，用来监视、修改和替换类的定义。

```ts
function addNameEat(constructor: Function) {
  // 当拿一个函数装饰类时，参数就是类的构造函数
  constructor.prototype.name = "sxx";
  constructor.prototype.age = function () {};
}

@addNameEat
class Person {
  // 对修饰器的实验支持功能在将来的版本中可能更改。
  // 在 "tsconfig" 或 "jsconfig" 中设置 "experimentalDecorators" 选项以删除此警告。
  name: string;
  eat: Function;
  constructor() {}
}

let p: Person = new Person();
console.log(p.name);
p.eat();
```

## 类装饰器工厂(装饰器模式)

```ts
function addNameEatFactory(name: string) {
  return function (x: Function) {
    x.prototype.name = name;
    x.prototype.age = function () {};
  };
}

@addNameEatFactory("handsome") // 当想通过装饰器传参，可以使用类装饰器工厂
class Person {
  name: string;
  eat: Function;
  constructor() {}
}

let p: Person = new Person();
console.log(p.name);
p.eat();
```
