/*
 * @Author: xinxu
 * @Date: 2022-06-29 15:51:52
 * @LastEditors: xinxu
 * @LastEditTime: 2023-01-03 15:51:05
 * @FilePath: /azzlzzxz.github.io/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
const { defaultTheme } = require("@vuepress/theme-default");
// const { searchPlugin } = require("@vuepress/plugin-search");

export default defineUserConfig({
  lang: "zh-CN",
  title: "Steins Gate",
  description: "Steins Gate的前端记录",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  theme: defaultTheme({
    logo: "/logo.png",
    navbar: [
      {
        text: "前端框架",
        children: [
          {
            text: "vue",
            children: ["/vue/vue3源码.md"],
          },
        ],
      },
      {
        text: "TS",
        link: "/typescript/ts.md",
      },
      {
        text: "Node",
        link: "/node/commonJS.md",
      },
      {
        text: "主页",
        link: "https://github.com/azzlzzxz",
      },
    ],
    sidebar: {
      "/promise/": [
        {
          text: "Promise",
          collapsable: true,
          children: [
            "/promise/promise.md",
            "/promise/promise方法.md",
            "/promise/generator.md",
          ],
        },
      ],
      "/node/": [
        {
          text: "Node",
          collapsable: true,
          children: ["/node/commonJs.md"],
        },
      ],
      "/typescript/": [
        {
          text: "TS",
          collapsable: true,
          children: [
            "/typescript/ts.md",
            "/typescript/type.md",
            "/typescript/assertion.md",
            "/typescript/function.md",
            "/typescript/class.md",
            "/typescript/interface.md",
            "/typescript/generic.md",
            "/typescript/decorator.md",
            "/typescript/compatibility.md",
            "/typescript/tool.md",
            "/typescript/module.md",
          ],
        },
      ],
    },
  }),
});
