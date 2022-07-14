/*
 * @Author: xinxu
 * @Date: 2022-06-29 15:51:52
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-14 20:26:57
 * @FilePath: /Blog/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
const { defaultTheme } = require("@vuepress/theme-default");
const { searchPlugin } = require("@vuepress/plugin-search");

export default defineUserConfig({
  lang: "zh-CN",
  title: "Steins Gate 主页",
  description: "Steins Gate的前端记录",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  theme: defaultTheme({
    navbar: [
      {
        text: "commonJs",
        link: "/node/commonJs.md",
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
    },
  }),
});
