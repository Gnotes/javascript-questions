(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[79],{109:function(n,s,a){"use strict";a.r(s);var o=a(3);s.default=function(){return Object(o.jsx)("div",{className:"question","data-index":"30",dangerouslySetInnerHTML:{__html:'\n<h6>30. \u8f93\u51fa\u662f\u4ec0\u4e48\uff1f</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-const">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'First\'</span><span class="token punctuation">)</span>\n<span class="token keyword keyword-const">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Second\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword keyword-const">const</span> <span class="token function-variable function">baz</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Third\'</span><span class="token punctuation">)</span>\n\n<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n<ul>\n<li>A: <code>First</code> <code>Second</code> <code>Third</code></li>\n<li>B: <code>First</code> <code>Third</code> <code>Second</code></li>\n<li>C: <code>Second</code> <code>First</code> <code>Third</code></li>\n<li>D: <code>Second</code> <code>Third</code> <code>First</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: B</h4>\n<p>\u6211\u4eec\u6709\u4e00\u4e2a <code>setTimeout</code> \u51fd\u6570\uff0c\u5e76\u9996\u5148\u8c03\u7528\u5b83\u3002\u7136\u800c\uff0c\u5b83\u662f\u6700\u540e\u6253\u5370\u65e5\u5fd7\u7684\u3002</p>\n<p>\u8fd9\u662f\u56e0\u4e3a\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u6709\u8fd0\u884c\u65f6\u5f15\u64ce\uff0c\u8fd8\u6709\u4e00\u4e2a\u53eb\u505a <code>WebAPI</code> \u7684\u4e1c\u897f\u3002<code>WebAPI</code> \u63d0\u4f9b\u4e86 <code>setTimeout</code> \u51fd\u6570\uff0c\u4e5f\u5305\u542b\u5176\u4ed6\u7684\uff0c\u4f8b\u5982 DOM\u3002</p>\n<p>\u5c06 <em>callback</em> \u63a8\u9001\u5230 WebAPI \u540e\uff0c<code>setTimeout</code> \u51fd\u6570\u672c\u8eab(\u4f46\u4e0d\u662f\u56de\u8c03\uff01)\u5c06\u4ece\u6808\u4e2d\u5f39\u51fa\u3002</p>\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\n<p>\u73b0\u5728\uff0c<code>foo</code> \u88ab\u8c03\u7528\uff0c\u6253\u5370 <code>&quot;First&quot;</code>\u3002</p>\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\n<p><code>foo</code> \u4ece\u6808\u4e2d\u5f39\u51fa\uff0c<code>baz</code> \u88ab\u8c03\u7528. \u6253\u5370 <code>&quot;Third&quot;</code>\u3002</p>\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\n<p>WebAPI \u4e0d\u80fd\u968f\u65f6\u5411\u6808\u5185\u6dfb\u52a0\u5185\u5bb9\u3002\u76f8\u53cd\uff0c\u5b83\u5c06\u56de\u8c03\u51fd\u6570\u63a8\u5230\u540d\u4e3a <em>queue</em> \u7684\u5730\u65b9\u3002</p>\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\n<p>\u8fd9\u5c31\u662f\u4e8b\u4ef6\u5faa\u73af\u5f00\u59cb\u5de5\u4f5c\u7684\u5730\u65b9\u3002\u4e00\u4e2a<strong>\u4e8b\u4ef6\u5faa\u73af</strong>\u67e5\u770b\u6808\u548c\u4efb\u52a1\u961f\u5217\u3002\u5982\u679c\u6808\u662f\u7a7a\u7684\uff0c\u5b83\u63a5\u53d7\u961f\u5217\u4e0a\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u5e76\u5c06\u5176\u63a8\u5165\u6808\u3002</p>\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\n<p><code>bar</code> \u88ab\u8c03\u7528\uff0c\u6253\u5370 <code>&quot;Second&quot;</code>\uff0c\u7136\u540e\u5b83\u88ab\u6808\u5f39\u51fa\u3002</p>\n</p>\n</details>\n'}})}}}]);
//# sourceMappingURL=79.b52703bd.chunk.js.map