/*
 * @Author: xinxu
 * @Date: 2022-06-29 15:51:52
 * @LastEditors: xinxu
 * @LastEditTime: 2022-08-18 10:58:00
 * @FilePath: /azzlzzxz.github.io/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
const { defaultTheme } = require("@vuepress/theme-default");
// const { searchPlugin } = require("@vuepress/plugin-search");

export default defineUserConfig({
  lang: "zh-CN",
  title: "Steins Gate 主页",
  description: "Steins Gate的前端记录",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  theme: defaultTheme({
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
    ],
    sidebar: {
      "/promise/": [
        {
          text: "Promise",
          collapsible: true,
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
          collapsible: true,
          children: ["/node/commonJs.md"],
        },
      ],
      "/typescript/": [
        {
          text: "TS",
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
