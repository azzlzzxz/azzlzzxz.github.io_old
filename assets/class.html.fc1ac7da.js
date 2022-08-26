import{_ as n,o as s,c as a,a as t}from"./app.f7450105.js";const e={},p=t(`<h1 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h1><h2 id="\u5B9A\u4E49\u5B58\u53D6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5B58\u53D6\u5668" aria-hidden="true">#</a> \u5B9A\u4E49\u5B58\u53D6\u5668</h2><p>TS \u91CC\u53EF\u4EE5\u901A\u8FC7\u5B58\u53D6\u5668\u6765\u6539\u53D8\u4E00\u4E2A\u7C7B\u4E2D\u5C5E\u6027\u7684\u8BFB\u53D6\u548C\u8D4B\u503C\u64CD\u4F5C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  myName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>myName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myName <span class="token operator">=</span> myName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ---&gt; \u7B49\u4EF7\u4E8E</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> myName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myName <span class="token operator">=</span> myName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myName <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;ws&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ws \u7ED9\u4E86constructor</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;steins&quot;</span><span class="token punctuation">;</span> <span class="token comment">// steins \u7ED9\u4E86set</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get\u65B9\u6CD5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly-\u53EA\u8BFB" tabindex="-1"><a class="header-anchor" href="#readonly-\u53EA\u8BFB" aria-hidden="true">#</a> readonly \u53EA\u8BFB</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// public readonly \u7684\u5C5E\u6027\u53EA\u80FD\u5728constructor\u91CC\u8D4B\u503C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">changeName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.name = name //\u65E0\u6CD5\u5206\u914D\u5230 &quot;name&quot; \uFF0C\u56E0\u4E3A\u5B83\u662F\u53EA\u8BFB\u5C5E\u6027\u3002</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  stuNo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> stuNo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stuNo <span class="token operator">=</span> stuNo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getStuNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stuNo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;czp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span><span class="token function">getStuNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;czp&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u91CC\u7684\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u91CC\u7684\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u7C7B\u91CC\u7684\u4FEE\u9970\u7B26</h2><ol><li>public(\u516C\u5171) \u81EA\u5DF1\u7684\u5B50\u7C7B\u548C\u5176\u4ED6\u7C7B\u90FD\u80FD\u8BBF\u95EE\u3002</li><li>protected(\u53D7\u4FDD\u62A4\u7684) \u81EA\u5DF1\u548C\u81EA\u5DF1\u5B50\u7C7B\u80FD\u8BBF\u95EE\uFF0C\u5176\u4ED6\u7C7B\u4E0D\u80FD\u8BBF\u95EE\u3002</li><li>private(\u79C1\u6709\u7684) \u81EA\u5DF1\u80FD\u8BBF\u95EE\uFF0C\u5B50\u7C7B\u548C\u5176\u4ED6\u7C7B\u4E0D\u80FD\u8BBF\u95EE\u3002</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> fatherName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;fatherName&quot;</span><span class="token punctuation">;</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// public(\u516C\u5171) \u81EA\u5DF1\u7684\u5B50\u7C7B\u548C\u5176\u4ED6\u7C7B\u90FD\u80FD\u8BBF\u95EE</span>
  <span class="token keyword">protected</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// protected(\u53D7\u4FDD\u62A4\u7684) \u81EA\u5DF1\u548C\u81EA\u5DF1\u5B50\u7C7B\u80FD\u8BBF\u95EE\uFF0C\u5176\u4ED6\u7C7B\u4E0D\u80FD\u8BBF\u95EE</span>
  <span class="token keyword">private</span> money<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// private(\u79C1\u6709\u7684) \u81EA\u5DF1\u80FD\u8BBF\u95EE\uFF0C\u5B50\u7C7B\u548C\u5176\u4ED6\u7C7B\u4E0D\u80FD\u8BBF\u95EE</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> money<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> money<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> childName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;childName&quot;</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> money<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5B50\u7C7B\u7684\u65B9\u6CD5\u53EF\u4EE5\u548C\u7236\u7C7B\u65B9\u6CD5\u91CD\u540D\uFF0C\u4F46\u5B50\u7C7B\u65B9\u6CD5\u56DE\u8986\u76D6\u7236\u7C7B\u65B9\u6CD5</span>
    <span class="token comment">// \u7236\u7C7B\u8C03\u7528\u4E0D\u4E86\u5B50\u7C7B\u65B9\u6CD5\uFF0C\u5B50\u7C7B\u53EF\u4EE5\u8C03\u7528\u7236\u7C7B\u65B9\u6CD5</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8C03\u7528\u7236\u7C7B\u7684toString\u65B9\u6CD5</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(this.money) // \u5C5E\u6027\u201Cmoney\u201D\u4E3A\u79C1\u6709\u5C5E\u6027\uFF0C\u53EA\u80FD\u5728\u7C7B\u201CFather\u201D\u4E2D\u8BBF\u95EE\u3002</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token string">&quot;szy&quot;</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">&quot;czp&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;czp&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>father<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;szy&#39;</span>

<span class="token comment">// child.age //\u5C5E\u6027\u201Cage\u201D\u53D7\u4FDD\u62A4\uFF0C\u53EA\u80FD\u5728\u7C7B\u201CFather\u201D\u53CA\u5176\u5B50\u7C7B\u4E2D\u8BBF\u95EE\u3002</span>

child<span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
Child<span class="token punctuation">.</span>fatherName<span class="token punctuation">;</span> <span class="token comment">// \u9759\u6001\u5C5E\u6027\u7ED9\u4E86\u7C7B</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Child<span class="token punctuation">.</span>fatherName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fatherName</span>
child<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// father child</span>
father<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// father</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// exports.__esModule = true;  \u8868\u793A\u5F53\u524D\u662F\u4E00\u4E2Aes6\u6A21\u5757</span>

<span class="token comment">// Person\u6807\u8BC6\u7B26\u91CD\u590D\uFF1A\u56E0\u4E3A\u58F0\u660E\u7684person\u662F\u5168\u5C40\u7684\u7C7B</span>
<span class="token comment">// \u522B\u7684ts\u6587\u4EF6\u91CC\u4E5F\u6709 \uFF0C\u5728ts\u6587\u4EF6\u4E2D\u52A0export{},\u4F1A\u4F7Fts\u8BA4\u4E3A\u8FD9\u4E2A\u6587\u4EF6\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u62A5\u9519</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;sxx&quot;</span><span class="token punctuation">;</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(this.name)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u5C31\u662F\u8BED\u6CD5\u7CD6\u6700\u540E\u7F16\u8BD1\u8FD8\u662F\u51FD\u6570</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;sxx&quot;</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u7684-ts-\u8F6C-js" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684-ts-\u8F6C-js" aria-hidden="true">#</a> \u7C7B\u7684 TS \u8F6C JS</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// ts</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS ext-JS line-numbers-mode"><pre class="language-JS"><code>&quot;use strict&quot;;
// var __extends = (this &amp;&amp; this.__extends) || (function () {
//     // \u7EE7\u627F\u9759\u6001\u5C5E\u6027
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array &amp;&amp; function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();

// ====&gt;
var extendStatics = function (Child, Father) {
    // extendStatics = function (Child, Father) {
    //         for (var p in Father)
    //             if (Object.prototype.hasOwnProperty.call(Father, p)) Child[p] = Father[p];
    //     };
    // return extendStatics(Child, Father);

    // =====&gt;

    for (var p in Father) {
        Child[p] = Father[p];
    }
};
var __extends = function (Child, Father) {
    extendStatics(Child, Father); // \u628Afather\u7684\u9759\u6001\u5C5E\u6027\u90FD\u62F7\u8D1D\u5230Child\u8EAB\u4E0A

    // function __() {
    //     this.constructor = Child;
    // }
    // Child.prototype = Father === null ? Object.create(Father) : (__.prototype = Father.prototype, new __());

    // ====&gt;

    function Temp(){
        this.constructor = Child
    }
    // \u539F\u578B\u7EE7\u627F
    let temp = new Temp()
    temp.prototype = Father.prototype
    Child.prototype = temp
};


// var Father = /** @class */ (function () {
//     function Father() {
//     }
//     return Father;
// }());
// ===&gt;
function Father() {}

// var Child = /** @class */ (function (_super) {
//     __extends(Child, _super);
//     function Child() {
//         return _super !== null &amp;&amp; _super.apply(this, arguments) || this;
//     }
//     return Child;
// }(Father));
// ====&gt;
__extends(Child, Father);

// function Child() {
//     return Father !== null &amp;&amp; Father.apply(this, arguments) || this;
// }
// ===&gt;
function Child(...args) {
    return Father(...args);
}

return Child;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B</h2><ol><li>\u62BD\u8C61\u63CF\u8FF0\u7684\u662F\u4E00\u79CD\u62BD\u8C61\u7684\u6982\u5FF5\uFF0C\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316\uFF0C\u53EA\u80FD\u7EE7\u627F\u3002</li><li>\u62BD\u8C61\u65B9\u6CD5\u4E0D\u80FD\u5728\u62BD\u8C61\u7C7B\u4E2D\u5B9E\u73B0\uFF0C\u53EA\u80FD\u5728\u62BD\u8C61\u7C7B\u7684\u5177\u4F53\u5B50\u7C7B\u4E2D\u5B9E\u73B0\uFF0C\u4E14\u5FC5\u987B\u5B9E\u73B0\u3002</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u62BD\u8C61\u7C7B abstract</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">abstract</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// \u62BD\u8C61\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62BD\u8C61\u65B9\u6CD5\u5B9E\u73B0</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u62BD\u8C61\u7C7B-vs-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B-vs-\u63A5\u53E3" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B vs \u63A5\u53E3</h3><ol><li>\u4E0D\u540C\u7C7B\u4E4B\u95F4\u5171\u6709\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u62BD\u8C61\u6210\u4E00\u4E2A\u63A5\u53E3\u3002</li><li>\u800C\u62BD\u8C61\u7C7B\u662F\u63D0\u4F9B\u5176\u4ED6\u7C7B\u7EE7\u627F\u7684\u57FA\u7C7B\uFF0C\u62BD\u8C61\u7C7B\u4E0D\u5141\u8BB8\u88AB\u5B9E\u4F8B\u8BDD\uFF0C\u62BD\u8C61\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u5728\u5B50\u7C7B\u4E2D\u5B9E\u73B0\u3002</li><li>\u62BD\u8C61\u7C7B\u672C\u8D28\u662F\u4E00\u4E2A\u65E0\u6CD5\u88AB\u5B9E\u4F8B\u5316\u7684\u7C7B\uFF0C\u5176\u4E2D\u80FD\u591F\u5B9E\u73B0\u65B9\u6CD5\u548C\u521D\u59CB\u5316\u5C5E\u6027\uFF0C\u800C\u63A5\u53E3\u4EC5\u80FD\u7528\u4E8E\u63CF\u8FF0\uFF0C\u65E2\u4E0D\u63D0\u4F9B\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u4E5F\u4E0D\u4E3A\u5C5E\u6027\u8FDB\u884C\u521D\u59CB\u5316\u3002</li><li>\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u7EE7\u627F\u4E00\u4E2A\u7C7B\u6216\u62BD\u8C61\u7C7B\uFF0C\u4F46\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3\u3002</li><li>\u62BD\u8C61\u7C7B\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53E3</li></ol>`,21),i=[p];function c(o,l){return s(),a("div",null,i)}var r=n(e,[["render",c],["__file","class.html.vue"]]);export{r as default};
