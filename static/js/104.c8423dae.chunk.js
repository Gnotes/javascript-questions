(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[104],{134:function(n,s,a){"use strict";a.r(s);var e=a(1);s.default=function(){return Object(e.jsx)("div",{className:"question","data-index":"50",dangerouslySetInnerHTML:{__html:'\n<h6>50. \u8f93\u51fa\u662f\u4ec0\u4e48?</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword keyword-if">if</span> <span class="token punctuation">(</span><span class="token keyword keyword-typeof">typeof</span> num <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token keyword keyword-return">return</span><span class="token punctuation">;</span>\n  <span class="token keyword keyword-return">return</span> num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>[]</code></li>\n<li>B: <code>[null, null, null]</code></li>\n<li>C: <code>[undefined, undefined, undefined]</code></li>\n<li>D: <code>[ 3 x empty ]</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: C</h4>\n<p>\u5bf9\u6570\u7ec4\u8fdb\u884c\u6620\u5c04\u7684\u65f6\u5019,<code>num</code>\u5c31\u662f\u5f53\u524d\u5faa\u73af\u5230\u7684\u5143\u7d20. \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6240\u6709\u7684\u6620\u5c04\u90fd\u662fnumber\u7c7b\u578b\uff0c\u6240\u4ee5if\u4e2d\u7684\u5224\u65ad<code>typeof num === &quot;number&quot;</code>\u7ed3\u679c\u90fd\u662f<code>true</code>.map\u51fd\u6570\u521b\u5efa\u4e86\u65b0\u6570\u7ec4\u5e76\u4e14\u5c06\u51fd\u6570\u7684\u8fd4\u56de\u503c\u63d2\u5165\u6570\u7ec4\u3002</p>\n<p>\u4f46\u662f\uff0c\u6ca1\u6709\u4efb\u4f55\u503c\u8fd4\u56de\u3002\u5f53\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u503c\u65f6\uff0c\u5373\u9ed8\u8ba4\u8fd4\u56de<code>undefined</code>.\u5bf9\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u6765\u8bf4\uff0c\u51fd\u6570\u5757\u90fd\u5f97\u5230\u4e86\u8fd9\u4e2a\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u7ed3\u679c\u4e2d\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u662f<code>undefined</code>.</p>\n</p>\n</details>\n'}})}}}]);