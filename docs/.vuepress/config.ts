/*
 * @Author: xinxu
 * @Date: 2022-06-29 15:51:52
 * @LastEditors: xinxu
 * @LastEditTime: 2023-01-04 14:53:49
 * @FilePath: /azzlzzxz.github.io/docs/.vuepress/config.ts
 */
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
// const { searchPlugin } = require("@vuepress/plugin-search");

export default defineUserConfig({
  dest: "dist",
  lang: "zh-CN",
  title: "Steins Gate",
  description: "Steins Gate的前端记录",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  theme: defaultTheme({
    logo: "/logo.png",
    navbar: [
      {
        text: "前端基础知识",
        link: "/base/promise/promise.md",
      },

      {
        text: "Vue",
        link: "/vue/vue3源码.md",
      },
      {
        text: "React",
        link: "/react/hooks/useMemo.md",
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
        text: "其他",
        children: [],
      },
      {
        text: "主页",
        link: "https://github.com/azzlzzxz",
      },
    ],
    sidebar: {
      "/base/": [
        {
          text: "Promise",
          collapsible: true,
          children: [
            "/base/promise/promise.md",
            "/base/promise/promise方法.md",
            "/base/promise/generator.md",
          ],
        },
        {
          text: "浏览器基础知识",
          collapsible: true,
          children: ["/base/browser/browser.md"],
        },
      ],
      "/react/": [
        {
          text: "react",
          collapsible: true,
          children: ["/react/base/jsx.md", "/react/base/virtualDOM.md"],
        },
        {
          text: "Hooks系列",
          collapsible: true,
          children: ["/react/hooks/useMemo.md"],
        },
        {
          text: "源码",
          collapsible: true,
          children: ["/react/source/fiber.md"],
        },
      ],
      "/node/": [
        {
          text: "Node",
          collapsible: true,
          children: ["/node/commonJs.md", "/node/stream.md"],
        },
        {
          text: "NPM",
          collapsible: true,
          children: [
            "/node/npm/source.md",
            "/node/npm/npm.md",
            "/node/npm/pnpm.md",
          ],
        },
        {
          text: "Nest",
          collapsible: true,
          children: ["/node/nest/base.md"],
        },
      ],
      "/typescript/": [
        {
          text: "TS",
          collapsible: true,
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
