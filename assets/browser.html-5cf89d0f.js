import{_ as a,p as n,q as r,Q as o,R as e,t}from"./framework-96b046e1.js";const s={},l=e("h1",{id:"浏览器渲染原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#浏览器渲染原理","aria-hidden":"true"},"#"),t(" 浏览器渲染原理")],-1),i=e("h2",{id:"浏览器中的-5-个进程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#浏览器中的-5-个进程","aria-hidden":"true"},"#"),t(" 浏览器中的 5 个进程")],-1),d=e("ol",null,[e("li",null,"浏览器进程：负责界面显示、用户交互、子进程管理，提供存储等。"),e("li",null,"渲染进程：每个页卡都有单独的渲染进程，核心用于渲染页面。"),e("li",null,"网络进程：主要处理网络资源加载(HTML、CSS,、JS 等)，最终将加载的资源交给渲染进程来处理。"),e("li",null,"GPU 进程：3d 绘制,提高性能。"),e("li",null,"插件进程： chrome 中安装的一些插件。")],-1);function c(h,_){return n(),r("div",null,[o(`
 * @Author: xinxu
 * @Date: 2023-01-03 16:45:06
 * @LastEditors: xinxu
 * @LastEditTime: 2023-01-04 15:22:08
 * @FilePath: /azzlzzxz.github.io/docs/base/browser/browser.md
`),l,i,d])}const m=a(s,[["render",c],["__file","browser.html.vue"]]);export{m as default};
