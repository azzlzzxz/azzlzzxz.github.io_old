<!--
 * @Author: xinxu
 * @Date: 2023-01-03 16:45:06
 * @LastEditors: xinxu
 * @LastEditTime: 2023-01-04 15:22:08
 * @FilePath: /azzlzzxz.github.io/docs/base/browser/browser.md
-->

# 浏览器渲染原理

## 浏览器中的 5 个进程

1. 浏览器进程：负责界面显示、用户交互、子进程管理，提供存储等。
2. 渲染进程：每个页卡都有单独的渲染进程，核心用于渲染页面。
3. 网络进程：主要处理网络资源加载(HTML、CSS,、JS 等)，最终将加载的资源交给渲染进程来处理。
4. GPU 进程：3d 绘制,提高性能。
5. 插件进程： chrome 中安装的一些插件。


