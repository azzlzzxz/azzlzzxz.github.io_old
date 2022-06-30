/*
 * @Author: xinxu
 * @Date: 2022-06-29 15:51:52
 * @LastEditors: xinxu
 * @LastEditTime: 2022-06-29 20:14:24
 * @FilePath: /Blog/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
const { defaultTheme } = require("@vuepress/theme-default");

export default defineUserConfig({
  lang: "zh-CN",
  title: "Steins Gate 主页",
  description: "Steins Gate的前端记录",
  head: [["link", { rel: "icon", href: "/logo.jpeg" }]],
  theme: defaultTheme({
    navbar: [
      {
        text: "commjs",
        link: "/Node/commonJs.md",
      },
    ],
    sidebar: [
      {
        text: "JS基础",
      },
      {
        text: "Promise",
      },
      {
        text: "Vue",
      },
      {
        text: "React",
      },
      {
        text: "Webpack",
      },
      {
        text: "Node",
        children: [
          {
            text: "commonJS规范",
            link: "/Node/commonJs.md",
          },
        ],
      },
    ],
  }),
});
