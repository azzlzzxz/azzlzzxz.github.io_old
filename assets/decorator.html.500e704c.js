import{_ as n,o as s,c as a,a as t}from"./app.ced88a55.js";const p={},o=t(`<h1 id="\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a> \u88C5\u9970\u5668</h1><h3 id="\u7C7B\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u88C5\u9970\u5668" aria-hidden="true">#</a> \u7C7B\u88C5\u9970\u5668</h3><p>\u7C7B\u88C5\u9970\u5668\u5728\u7C7B\u58F0\u660E\u4E4B\u524D\u58F0\u660E\uFF0C\u7528\u6765\u76D1\u89C6\u3001\u4FEE\u6539\u548C\u66FF\u6362\u7C7B\u7684\u5B9A\u4E49\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addNameEat</span><span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F53\u62FF\u4E00\u4E2A\u51FD\u6570\u88C5\u9970\u7C7B\u65F6\uFF0C\u53C2\u6570\u5C31\u662F\u7C7B\u7684\u6784\u9020\u51FD\u6570</span>
  constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;sxx&quot;</span><span class="token punctuation">;</span>
  constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">age</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">addNameEat</span></span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u4FEE\u9970\u5668\u7684\u5B9E\u9A8C\u652F\u6301\u529F\u80FD\u5728\u5C06\u6765\u7684\u7248\u672C\u4E2D\u53EF\u80FD\u66F4\u6539\u3002</span>
  <span class="token comment">// \u5728 &quot;tsconfig&quot; \u6216 &quot;jsconfig&quot; \u4E2D\u8BBE\u7F6E &quot;experimentalDecorators&quot; \u9009\u9879\u4EE5\u5220\u9664\u6B64\u8B66\u544A\u3002</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  eat<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u88C5\u9970\u5668\u5DE5\u5382-\u88C5\u9970\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u88C5\u9970\u5668\u5DE5\u5382-\u88C5\u9970\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u7C7B\u88C5\u9970\u5668\u5DE5\u5382(\u88C5\u9970\u5668\u6A21\u5F0F)</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addNameEatFactory</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    x<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">age</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">addNameEatFactory</span></span><span class="token punctuation">(</span><span class="token string">&quot;handsome&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u5F53\u60F3\u901A\u8FC7\u88C5\u9970\u5668\u4F20\u53C2\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7C7B\u88C5\u9970\u5668\u5DE5\u5382</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  eat<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","decorator.html.vue"]]);export{r as default};
