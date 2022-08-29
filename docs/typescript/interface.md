<!--
 * @Author: xinxu
 * @Date: 2022-08-18 10:52:09
 * @LastEditors: xinxu
 * @LastEditTime: 2022-08-29 22:39:15
 * @FilePath: /azzlzzxz.github.io/docs/typescript/interface.md
-->

# 接口

## 描述对象的形状

```typescript
interface Speakable {
  name: string;
  speak(): void;
}

let speakMan: Speakable = {
  name: "czp",
  speak() {},
};
```
