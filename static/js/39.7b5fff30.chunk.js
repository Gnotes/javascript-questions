(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[39],{69:function(n,s,a){"use strict";a.r(s);var o=a(3);s.default=function(){return Object(o.jsx)("div",{className:"question","data-index":"131",dangerouslySetInnerHTML:{__html:'\n<h6>134. \u6211\u4eec\u600e\u6837\u624d\u80fd\u5728 <code>index.js</code> \u4e2d\u8c03\u7528 <code>sum.js?</code> \u4e2d\u7684 <code>sum</code>\uff1f</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// sum.js</span>\n<span class="token keyword keyword-export">export</span> <span class="token keyword keyword-default">default</span> <span class="token keyword keyword-function">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword keyword-return">return</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.js</span>\n<span class="token keyword keyword-import">import</span> <span class="token operator">*</span> <span class="token keyword keyword-as">as</span> sum <span class="token keyword keyword-from">from</span> <span class="token string">"./sum"</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>sum(4)</code></li>\n<li>B: <code>sum.sum(4)</code></li>\n<li>C: <code>sum.default(4)</code></li>\n<li>D: \u9ed8\u8ba4\u5bfc\u51fa\u4e0d\u7528 <code>*</code> \u6765\u5bfc\u5165\uff0c\u53ea\u80fd\u5177\u540d\u5bfc\u51fa</li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: C</h4>\n<p>\u4f7f\u7528\u7b26\u53f7 <code>*</code>\uff0c\u6211\u4eec\u5f15\u5165\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u503c\uff0c\u5305\u62ec\u9ed8\u8ba4\u548c\u5177\u540d\u3002\u5982\u679c\u6211\u4eec\u6709\u4ee5\u4e0b\u6587\u4ef6\uff1a</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// info.js</span>\n<span class="token keyword keyword-export">export</span> <span class="token keyword keyword-const">const</span> name <span class="token operator">=</span> <span class="token string">"Lydia"</span><span class="token punctuation">;</span>\n<span class="token keyword keyword-export">export</span> <span class="token keyword keyword-const">const</span> age <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>\n<span class="token keyword keyword-export">export</span> <span class="token keyword keyword-default">default</span> <span class="token string">"I love JavaScript"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.js</span>\n<span class="token keyword keyword-import">import</span> <span class="token operator">*</span> <span class="token keyword keyword-as">as</span> info <span class="token keyword keyword-from">from</span> <span class="token string">"./info"</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>\u5c06\u4f1a\u8f93\u51fa\u4ee5\u4e0b\u5185\u5bb9\uff1a</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n  <span class="token keyword keyword-default">default</span><span class="token operator">:</span> <span class="token string">"I love JavaScript"</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">"Lydia"</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">21</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>\u4ee5 <code>sum</code> \u4e3a\u4f8b\uff0c\u76f8\u5f53\u4e8e\u4ee5\u4e0b\u5f62\u5f0f\u5f15\u5165\u503c <code>sum</code>\uff1a</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span> <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword keyword-function">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword keyword-return">return</span> x <span class="token operator">+</span> x <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre>\n<p>\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 <code>sum.default</code> \u6765\u8c03\u7528\u8be5\u51fd\u6570</p>\n</p>\n</details>\n'}})}}}]);
//# sourceMappingURL=39.7b5fff30.chunk.js.map