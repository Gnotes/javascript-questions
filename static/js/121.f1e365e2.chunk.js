(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[121],{151:function(n,s,a){"use strict";a.r(s);var p=a(1);s.default=function(){return Object(p.jsx)("div",{className:"question","data-index":"66",dangerouslySetInnerHTML:{__html:'\n<h6>66. \u4f7f\u7528\u54ea\u4e2a\u6784\u9020\u51fd\u6570\u53ef\u4ee5\u6210\u529f\u7ee7\u627f<code>Dog</code>\u7c7b?</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-class">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword keyword-class">class</span> <span class="token class-name">Labrador</span> <span class="token keyword keyword-extends">extends</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1 </span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 2</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 3</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword keyword-super">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 4 </span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token keyword keyword-this">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: 1</li>\n<li>B: 2</li>\n<li>C: 3</li>\n<li>D: 4</li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: B</h4>\n<p>\u5728\u5b50\u7c7b\u4e2d\uff0c\u5728\u8c03\u7528<code>super</code>\u4e4b\u524d\u4e0d\u80fd\u8bbf\u95ee\u5230<code>this</code>\u5173\u952e\u5b57\u3002 \u5982\u679c\u8fd9\u6837\u505a\uff0c\u5b83\u5c06\u629b\u51fa\u4e00\u4e2a<code>ReferenceError</code>\uff1a1\u548c4\u5c06\u5f15\u53d1\u4e00\u4e2a\u5f15\u7528\u9519\u8bef\u3002</p>\n<p>\u4f7f\u7528<code>super</code>\u5173\u952e\u5b57\uff0c\u9700\u8981\u7528\u7ed9\u5b9a\u7684\u53c2\u6570\u6765\u8c03\u7528\u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u3002 \u7236\u7c7b\u7684\u6784\u9020\u51fd\u6570\u63a5\u6536<code>name</code>\u53c2\u6570\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5c06<code>name</code>\u4f20\u9012\u7ed9<code>super</code>\u3002</p>\n<p><code>Labrador</code>\u7c7b\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c<code>name</code>\u53c2\u6570\u662f\u7531\u4e8e\u5b83\u7ee7\u627f\u4e86<code>Dog</code>\uff0c<code>size</code>\u4f5c\u4e3a<code>Labrador</code>\u7c7b\u7684\u989d\u5916\u5c5e\u6027\uff0c\u5b83\u4eec\u90fd\u9700\u8981\u4f20\u9012\u7ed9<code>Labrador</code>\u7684\u6784\u9020\u51fd\u6570\uff0c\u56e0\u6b64\u4f7f\u7528\u6784\u9020\u51fd\u65702\u6b63\u786e\u5b8c\u6210\u3002</p>\n</p>\n</details>\n'}})}}}]);