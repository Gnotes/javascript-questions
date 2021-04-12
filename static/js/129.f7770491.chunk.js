(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[129],{159:function(n,a,s){"use strict";s.r(a);var t=s(1);a.default=function(){return Object(t.jsx)("div",{className:"question","data-index":"73",dangerouslySetInnerHTML:{__html:'\n<h6>73. \u8f93\u51fa\u4ec0\u4e48?</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-async">async</span> <span class="token keyword keyword-function">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword keyword-return">return</span> <span class="token keyword keyword-await">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"I made it!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword keyword-const">const</span> data <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>&quot;I made it!&quot;</code></li>\n<li>B: <code>Promise {&lt;resolved&gt;: &quot;I made it!&quot;}</code></li>\n<li>C: <code>Promise {&lt;pending&gt;}</code></li>\n<li>D: <code>undefined</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: C</h4>\n<p>\u5f02\u6b65\u51fd\u6570\u59cb\u7ec8\u8fd4\u56de\u4e00\u4e2apromise\u3002<code>await</code>\u4ecd\u7136\u9700\u8981\u7b49\u5f85promise\u7684\u89e3\u51b3\uff1a\u5f53\u6211\u4eec\u8c03\u7528<code>getData()</code>\u5e76\u5c06\u5176\u8d4b\u503c\u7ed9<code>data</code>\uff0c\u6b64\u65f6<code>data</code>\u4e3a<code>getData</code>\u65b9\u6cd5\u8fd4\u56de\u7684\u4e00\u4e2a\u6302\u8d77\u7684promise\uff0c\u8be5promise\u5e76\u6ca1\u6709\u89e3\u51b3\u3002</p>\n<p>\u5982\u679c\u6211\u4eec\u60f3\u8981\u8bbf\u95ee\u5df2\u89e3\u51b3\u7684\u503c<code>&quot;I made it!&quot;</code>\uff0c\u53ef\u4ee5\u5728<code>data</code>\u4e0a\u4f7f\u7528<code>.then()</code>\u65b9\u6cd5\uff1a</p>\n<p><code>data.then(res =&gt; console.log(res))</code></p>\n<p>\u8fd9\u6837\u5c06\u6253\u5370 <code>&quot;I made it!&quot;</code></p>\n</p>\n</details>\n'}})}}}]);