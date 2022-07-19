import{_ as s,o as n,c as a,a as t}from"./app.337c9d73.js";const o={},e=t(`<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><ul><li>tsconfig.json\u914D\u7F6E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u76EE\u6807</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u73B0\u5728\u7684\u6A21\u5757\u7528\u4EC0\u4E48\u5199\u7684</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span>
    <span class="token comment">// moduleResolution:node\u662F\u6839\u636Enode\u7684\u6A21\u5757\u67E5\u627E\u89C4\u5219\uFF0C\u5148\u627E\u5F53\u524D\u76EE\u5F55\u7684node_modules\uFF0C\u518D\u627E\u7236\u76EE\u5F55\u7684node_modules</span>
    <span class="token comment">// \u8DEF\u5F84\u662Fc:a/b/c.js\uFF0C\u4F46\u662Fimport(d)</span>
    <span class="token comment">// moduleResolution:classic --&gt; c:/a/b/d -&gt; c:/a/d -&gt; c:/d -&gt;\u627E\u4E0D\u5230\u5C31\u62A5\u9519</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span> <span class="token comment">// \u4FDD\u7559\u4E0D\u8F6C\u8BD1</span>
    <span class="token comment">// jsx:&#39;resct&#39; \u4F1A\u628Ajsx -&gt; React.createElement</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u6301json\u6A21\u5757</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// \u4E25\u683C\u7A7A\u68C0\u67E5\uFF0C\u5EFA\u8BAE\u6253\u5F00</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u5141\u8BB8\u9690\u542Bany\u7C7B\u578B</span>
    <span class="token comment">// exnext \u6700\u65B0\u7248\u7684es</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u652F\u6301\u90A3\u4E9B\u5E93</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8BA9ts\u652F\u6301\u88C5\u9970\u5668  </span>
    <span class="token property">&quot;downlevelIteration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8F6C\u6362es6\u6A21\u5757\uFF08\u652F\u6301\u6A21\u5757\u4E4B\u95F4\u7684\u8F6C\u6362 \uFF09</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u7F16\u8BD1\u7684\u65F6\u5019\u81EA\u52A8\u751F\u6210\u4E00\u4EFD\u7C7B\u578B\u58F0\u660E\u6587\u4EF6</span>
    <span class="token comment">// \u627E\u7C7B\u578B\u58F0\u660E\u6587\u4EF6</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6620\u5C04\u8DEF\u5F84</span>
      <span class="token property">&quot;*&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;types/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// * \u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4F46\u4E0D\u5305\u62EC\u8DEF\u5F84\u5206\u9694\u7B26\uFF0C**\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4E5F\u5305\u62EC\u8DEF\u5F84\u5206\u9694\u7B26</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">// \u7F16\u8BD1\u90A3\u4E9B\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6</span>
    <span class="token comment">// glob \u6A21\u5F0F\uFF08\u6587\u4EF6\u5339\u914D\u6A21\u5F0F\uFF09</span>
    <span class="token string">&quot;typings/**/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;src/**/*.ts&quot;</span> <span class="token comment">// \u627Esrc\u76EE\u5F55\u4E0B\u6240\u6709\u7684ts</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[e];function c(l,i){return n(),a("div",null,p)}var r=s(o,[["render",c],["__file","ts.html.vue"]]);export{r as default};
