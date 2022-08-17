<!--
 * @Author: xinxu
 * @Date: 2022-08-17 14:01:05
 * @LastEditors: xinxu
 * @LastEditTime: 2022-08-17 14:06:29
 * @FilePath: /azzlzzxz.github.io/docs/typescript/assertion.md
-->

# 断言

## 类型断言

可以用来手动指定一个值的类型。

### 尖括号语法

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

### as 语法

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 非空断言
