import{_ as n,o as s,c as a,a as t}from"./app.505b7b41.js";const p={},e=t(`<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><h2 id="\u51FD\u6570\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a> \u51FD\u6570\u5B9A\u4E49</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// (name: string)\u5B9A\u4E49\u53C2\u6570</span>
<span class="token comment">// :void \u5B9A\u4E49\u8FD4\u56DE\u503C\uFF08\u6CA1\u6709\u8FD4\u56DE\u503C\u7528void\uFF09</span>
<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">&quot;Steins Gate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u51FD\u6570\u8868\u8FBE\u5F0F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GetName</span> <span class="token operator">=</span> <span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> getName<span class="token operator">:</span> <span class="token function-variable function">GetName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">GetName1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> getName1<span class="token operator">:</span> <span class="token function-variable function">GetName1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u53C2\u6570</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \uFF1F\u8868\u793A\u53EF\u9009\uFF0Cage\u8FD9\u4E2A\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Steins Gate&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u9ED8\u8BA4\u53C2\u6570</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// method: string = &#39;GET&#39;   GET\u662Fmethod\u7684\u9ED8\u8BA4\u53C2\u6570</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> method<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u5269\u4F59\u53C2\u6570</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val <span class="token operator">+</span> item<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u91CD\u8F7D-overload" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D-overload" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D(overload)</h2><p>\u51FD\u6570\u91CD\u8F7D\u5176\u5B9E\u5C31\u662F\uFF1A \u591A\u4E2A\u51FD\u6570\u51FD\u6570\u540D\u76F8\u540C\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\u3001\u987A\u5E8F\u3001\u4E2A\u6570\u4E0D\u540C\uFF0C\u6CE8\u610F\u51FD\u6570\u91CD\u8F7D\u4E0E\u8FD4\u56DE\u503C\u7C7B\u578B\u65E0\u5173</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4E00\u4E2A\u51FD\u6570\u6709\u5F88\u591A\u4F20\u53C2\u7684\u65B9\u5F0F</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//\u5982\u679C\u7A7F\u7684val\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u590D\u5236\u7ED9obj.name  \u5982\u679C\u662F\u6570\u5B57\u590D\u5236\u7ED9obj.age</span>

<span class="token comment">// \u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u5B9E\u73B0\u8981\u7D27\u5BC6\u7684\u8FDE\u5728\u4E00\u8D77</span>
<span class="token keyword">function</span> <span class="token function">attr</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// \u51FD\u6570\u58F0\u660E</span>
<span class="token keyword">function</span> <span class="token function">attr</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">attr</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u51FD\u6570\u5B9E\u73B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>age <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;Steins Gate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">attr</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// attr(true) // \u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">add1</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7EA6\u675F\u4E0D\u4E86a,b\u7684\u4F20\u53C2\u53EA\u80FD\u540C\u65F6\u662Fstring\uFF5Cnumber</span>

<span class="token comment">// \u63A7\u5236a\uFF0Cb\u53EA\u80FD\u662Fstring\u6216number</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// add(1,&#39;b&#39;) //\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u5199" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u5199</h2><p>\u5B50\u7C7B\u91CD\u5199\u7EE7\u627F\u7236\u7C7B\u7684\u65B9\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> fatherName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;fatherName&quot;</span><span class="token punctuation">;</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> childName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;childName&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">//\u5B50\u7C7B\u7684\u65B9\u6CD5\u53EF\u4EE5\u548C\u7236\u7C7B\u65B9\u6CD5\u91CD\u540D\uFF0C\u4F46\u5B50\u7C7B\u65B9\u6CD5\u56DE\u8986\u76D6\u7236\u7C7B\u65B9\u6CD5</span>
  <span class="token comment">// \u7236\u7C7B\u8C03\u7528\u4E0D\u4E86\u5B50\u7C7B\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u53EF\u4EE5\u8C03\u7528\u7236\u7C7B\u65B9\u6CD5</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8C03\u7528\u7236\u7C7B\u7684toString\u65B9\u6CD5</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7684\u534F\u53D8\u4E0E\u9006\u53D8" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u534F\u53D8\u4E0E\u9006\u53D8" aria-hidden="true">#</a> \u51FD\u6570\u7684\u534F\u53D8\u4E0E\u9006\u53D8</h2>`,19),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","function.html.vue"]]);export{r as default};