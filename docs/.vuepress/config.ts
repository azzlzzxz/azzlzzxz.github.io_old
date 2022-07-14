/*
 * @Author: xinxu
 * @Date: 2022-06-29 15:51:52
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-14 13:43:23
 * @FilePath: /Blog/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
const { defaultTheme } = require("@vuepress/theme-default");

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
    sidebar: [
      {
        text: "JS基础",
      },
      {
        text: "Promise",
        children: [
          {
            text: "promise原理",
            link: "/promise/promise.md",
          },
          {
            text: "promise方法",
            link: "/promise/promise方法.md",
          }
        ]
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
            link: "/node/commonJs.md",
          },
        ],
      },
    ],
  }),
});
