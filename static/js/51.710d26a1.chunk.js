(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[51],{81:function(n,s,a){"use strict";a.r(s);var t=a(1);s.default=function(){return Object(t.jsx)("div",{className:"question","data-index":"142",dangerouslySetInnerHTML:{__html:'\n<h6>142. \u8f93\u51fa\u4ec0\u4e48\uff1f</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-class">class</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>\n\t<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I\'m a bird. \ud83e\udda2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword keyword-class">class</span> <span class="token class-name">Flamingo</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>\n\t<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"I\'m pink. \ud83c\udf38"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword keyword-super">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword keyword-const">const</span> pet <span class="token operator">=</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Flamingo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>I\'m pink. \ud83c\udf38</code></li>\n<li>B: <code>I\'m pink. \ud83c\udf38</code> <code>I\'m a bird. \ud83e\udda2</code></li>\n<li>C: <code>I\'m a bird. \ud83e\udda2</code> <code>I\'m pink. \ud83c\udf38</code></li>\n<li>D: Nothing, we didn\'t call any method</li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: B</h4>\n<p>\u6211\u4eec\u521b\u5efa\u4e86\u7c7b <code>Flamingo</code> \u7684\u5b9e\u4f8b <code>pet</code>\u3002\u5f53\u6211\u4eec\u5b9e\u4f8b\u5316\u8fd9\u4e2a\u5b9e\u4f8b\uff0c<code>Flamingo</code> \u4e2d\u7684 <code>constructor</code> \u88ab\u8c03\u7528\u3002\u9996\u76f8\uff0c\u8f93\u51fa <code>&quot;I\'m pink. \ud83c\udf38&quot;</code>, \u4e4b\u540e\u6211\u4eec\u8c03\u7528<code>super()</code>\u3002<code>super()</code> \u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c<code>Bird</code>\u3002<code>Bird</code> \u7684\u6784\u9020\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u5e76\u8f93\u51fa <code>&quot;I\'m a bird. \ud83e\udda2&quot;</code>\u3002</p>\n</p>\n</details>\n'}})}}}]);