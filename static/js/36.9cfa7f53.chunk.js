(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[36],{66:function(n,s,a){"use strict";a.r(s);var o=a(3);s.default=function(){return Object(o.jsx)("div",{className:"question","data-index":"129",dangerouslySetInnerHTML:{__html:'\n<h6><a name=20191224></a>132. \u8f93\u51fa\u4ec0\u4e48\uff1f</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-class">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>\n\t<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword keyword-const">const</span> counterOne <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncounterOne<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncounterOne<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword keyword-const">const</span> counterTwo <span class="token operator">=</span> counterOne<span class="token punctuation">;</span>\ncounterTwo<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counterOne<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>0</code></li>\n<li>B: <code>1</code></li>\n<li>C: <code>2</code></li>\n<li>D: <code>3</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: D</h4>\n<p><code>counterOne</code> \u662f\u7c7b <code>Counter</code> \u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u7c7b Counter \u5305\u542b\u4e00\u4e2a<code>count</code> \u5c5e\u6027\u5728\u5b83\u7684\u6784\u9020\u51fd\u6570\u91cc\uff0c \u548c\u4e00\u4e2a <code>increment</code> \u65b9\u6cd5\u3002\u9996\u5148\uff0c\u6211\u4eec\u901a\u8fc7 <code>counterOne.increment()</code> \u8c03\u7528\u65b9\u6cd5 <code>increment</code> \u4e24\u6b21\u3002\u73b0\u5728, <code>counterOne.count</code> \u4e3a <code>2</code>.</p>\n<img src="https://i.imgur.com/KxLlTm9.png" width="400">\n<p>\u7136\u540e\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf <code>counterTwo</code> \u5e76\u5c06 <code>counterOne</code> \u7684\u5f15\u7528\u5730\u5740\u8d4b\u503c\u7ed9\u5b83\u3002\u56e0\u4e3a\u5bf9\u8c61\u53d7\u5f15\u7528\u5730\u5740\u7684\u5f71\u54cd\uff0c\u6211\u4eec\u521a\u521a\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u5176\u5f15\u7528\u5730\u5740\u548c <code>counterOne</code> \u7684\u7b49\u4ef7\u3002\u56e0\u6b64\u5b83\u4eec\u6307\u5411\u540c\u4e00\u5757\u5185\u5b58\u5730\u5740\uff0c\u4efb\u4f55\u5bf9\u5176\u7684\u526f\u4f5c\u7528\u90fd\u4f1a\u5f71\u54cd <code>counterTwo</code>\u3002\u73b0\u5728 <code>counterTwo.count</code> \u4e3a <code>2</code>\u3002</p>\n<p>\u6211\u4eec\u8c03\u7528 <code>counterTwo.increment()</code> \u5c06 <code>count</code> \u7684\u503c\u8bbe\u4e3a <code>3</code>\u3002\u7136\u540e\uff0c\u6211\u4eec\u6253\u5370 <code>counterOne</code> \u91cc\u7684count\uff0c\u7ed3\u679c\u4e3a <code>3</code>\u3002</p>\n<img src="https://i.imgur.com/BNBHXmc.png" width="400">\n</p>\n</details>\n'}})}}}]);
//# sourceMappingURL=36.9cfa7f53.chunk.js.map