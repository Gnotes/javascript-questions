(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[117],{147:function(n,s,a){"use strict";a.r(s);var t=a(1);s.default=function(){return Object(t.jsx)("div",{className:"question","data-index":"62",dangerouslySetInnerHTML:{__html:'\n<h6>62. \u8f93\u51fa\u662f\u4ec0\u4e48?</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-const">const</span> settings <span class="token operator">=</span> <span class="token punctuation">{</span>\n  username<span class="token operator">:</span> <span class="token string">"lydiahallie"</span><span class="token punctuation">,</span>\n  level<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>\n  health<span class="token operator">:</span> <span class="token number">90</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword keyword-const">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>settings<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"level"</span><span class="token punctuation">,</span> <span class="token string">"health"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>&quot;{&quot;level&quot;:19, &quot;health&quot;:90}&quot;</code></li>\n<li>B: <code>&quot;{&quot;username&quot;: &quot;lydiahallie&quot;}&quot;</code></li>\n<li>C: <code>&quot;[&quot;level&quot;, &quot;health&quot;]&quot;</code></li>\n<li>D: <code>&quot;{&quot;username&quot;: &quot;lydiahallie&quot;, &quot;level&quot;:19, &quot;health&quot;:90}&quot;</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: A</h4>\n<p><code>JSON.stringify</code>\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f <em>\u66ff\u4ee3\u8005(replacer)</em>. \u66ff\u4ee3\u8005(replacer)\u53ef\u4ee5\u662f\u4e2a\u51fd\u6570\u6216\u6570\u7ec4\uff0c\u7528\u4ee5\u63a7\u5236\u54ea\u4e9b\u503c\u5982\u4f55\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002</p>\n<p>\u5982\u679c\u66ff\u4ee3\u8005(replacer)\u662f\u4e2a <em>\u6570\u7ec4</em> \uff0c\u90a3\u4e48\u5c31\u53ea\u6709\u5305\u542b\u5728\u6570\u7ec4\u4e2d\u7684\u5c5e\u6027\u5c06\u4f1a\u88ab\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u53ea\u6709\u540d\u4e3a<code>&quot;level&quot;</code> \u548c <code>&quot;health&quot;</code> \u7684\u5c5e\u6027\u88ab\u5305\u62ec\u8fdb\u6765\uff0c <code>&quot;username&quot;</code>\u5219\u88ab\u6392\u9664\u5728\u5916\u3002 <code>data</code> \u5c31\u7b49\u4e8e <code>&quot;{&quot;level&quot;:19, &quot;health&quot;:90}&quot;</code>.</p>\n<p>\u800c\u5982\u679c\u66ff\u4ee3\u8005(replacer)\u662f\u4e2a <em>\u51fd\u6570</em>\uff0c\u8fd9\u4e2a\u51fd\u6570\u5c06\u88ab\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5c5e\u6027\u90fd\u8c03\u7528\u4e00\u904d\u3002\n\u51fd\u6570\u8fd4\u56de\u7684\u503c\u4f1a\u6210\u4e3a\u8fd9\u4e2a\u5c5e\u6027\u7684\u503c\uff0c\u6700\u7ec8\u4f53\u73b0\u5728\u8f6c\u5316\u540e\u7684JSON\u5b57\u7b26\u4e32\u4e2d\uff08\u8bd1\u8005\u6ce8\uff1aChrome\u4e0b\uff0c\u7ecf\u8fc7\u5b9e\u9a8c\uff0c\u5982\u679c\u6240\u6709\u5c5e\u6027\u5747\u8fd4\u56de\u540c\u4e00\u4e2a\u503c\u7684\u65f6\u5019\u6709\u5f02\u5e38\uff0c\u4f1a\u76f4\u63a5\u5c06\u8fd4\u56de\u503c\u4f5c\u4e3a\u7ed3\u679c\u8f93\u51fa\u800c\u4e0d\u4f1a\u8f93\u51faJSON\u5b57\u7b26\u4e32\uff09\uff0c\u800c\u5982\u679c\u8fd4\u56de\u503c\u4e3a<code>undefined</code>\uff0c\u5219\u8be5\u5c5e\u6027\u4f1a\u88ab\u6392\u9664\u5728\u5916\u3002</p>\n</p>\n</details>\n'}})}}}]);