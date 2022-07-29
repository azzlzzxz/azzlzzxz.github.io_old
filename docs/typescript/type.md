<!--
 * @Author: xinxu
 * @Date: 2022-07-20 11:28:35
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-29 17:58:17
 * @FilePath: /azzlzzxz.github.io/docs/typescript/type.md
-->

# TS 中的类型

### 联合类型

联合类型通常与  null  或  undefined  一起使用：

```ts
const sayHello = (name: string | undefined) => {
  /* ... */
};
```

例如，这里  name  的类型是  string | undefined  意味着可以将  string  或  undefined  的值传递给 sayHello  函数。

```js
sayHello("azzlzzxz");
sayHello(undefined);
```

通过这个示例，你可以凭直觉知道类型 A 和类型 B 联合后的类型是同时接受 A 和 B 值的类型。此外，对于联合类型来说，你可能会遇到以下的用法.

```ts
let num: 1 | 2 = 1;
type EventNames = "click" | "scroll";
```

以上示例中的  1、2  或  'click'  被称为字面量类型，用来约束取值只能是某几个值中的一个。

### 可辨识联合类型

TypeScript 可辨识联合类型，也称为代数数据类型或标签联合类型。
它包含 3 个要点：

- 可辨识
- 联合类型
- 类型守卫

这种类型的本质是结合联合类型和字面量类型的一种类型保护方法。  
如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。  
利用联合类型中得公共字段，来进行类型保护的一种技巧。

1. 可辨识
   可辨识要求联合类型中的每个元素都含有一个单例类型属性，比如:

```ts
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission;
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}
```

在上述代码中，我们分别定义了  Motorcycle、 Car  和  Truck  三个接口，在这些接口中都包含一个  vType  属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。

```ts

```

```ts

```
