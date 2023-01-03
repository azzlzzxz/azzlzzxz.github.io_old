import{_ as s,p as n,q as a,Q as t,a1 as e}from"./framework-96b046e1.js";const o="/images/ts.png",p={},c=e('<h1 id="了解typescript" tabindex="-1"><a class="header-anchor" href="#了解typescript" aria-hidden="true">#</a> 了解TypeScript</h1><p>TypeScript，简称 ts，是微软开发的一种静态的编程语言，它是 JavaScript 的超集。 那么它有什么特别之处呢?</p><ul><li>简单来说，js 有的 ts 都有，所有js 代码都可以在 ts 里面运行。</li><li>ts 支持类型支持，ts = type +JavaScript <img src="'+o+`" alt="image"></li><li>tsconfig.json配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 目标</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 现在的模块用什么写的</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span>
    <span class="token comment">// moduleResolution:node是根据node的模块查找规则，先找当前目录的node_modules，再找父目录的node_modules</span>
    <span class="token comment">// 路径是c:a/b/c.js，但是import(d)</span>
    <span class="token comment">// moduleResolution:classic --&gt; c:/a/b/d -&gt; c:/a/d -&gt; c:/d -&gt;找不到就报错</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span> <span class="token comment">// 保留不转译</span>
    <span class="token comment">// jsx:&#39;react&#39; 会把jsx -&gt; React.createElement</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 支持json模块</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 严格空检查，建议打开</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不允许隐含any类型</span>
    <span class="token comment">// esnext 最新版的es</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 支持那些库</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 让ts支持装饰器  </span>
    <span class="token property">&quot;downlevelIteration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 转换es6模块（支持模块之间的转换 ）</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 在编译的时候自动生成一份类型声明文件</span>
    <span class="token comment">// 找类型声明文件</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 映射路径</span>
      <span class="token property">&quot;*&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;types/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// * 匹配任意字符但不包括路径分隔符，**匹配任意字符也包括路径分隔符</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">// 编译那些目录下的文件</span>
    <span class="token comment">// glob 模式（文件匹配模式）</span>
    <span class="token string">&quot;typings/**/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;src/**/*.ts&quot;</span> <span class="token comment">// 找src目录下所有的ts</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function l(i,u){return n(),a("div",null,[t(`
 * @Author: xinxu
 * @Date: 2022-07-19 10:42:25
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-20 11:33:25
 * @FilePath: /azzlzzxz.github.io/docs/typescript/ts.md
`),c])}const d=s(p,[["render",l],["__file","ts.html.vue"]]);export{d as default};
