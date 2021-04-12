(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[65],{95:function(n,s,a){"use strict";a.r(s);var e=a(1);s.default=function(){return Object(e.jsx)("div",{className:"question","data-index":"155",dangerouslySetInnerHTML:{__html:'\n<h6>155. \u8f93\u51fa\u4ec0\u4e48?</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-let">let</span> randomValue <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"Lydia"</span> <span class="token punctuation">}</span>\nrandomValue <span class="token operator">=</span> <span class="token number">23</span>\n\n<span class="token keyword keyword-if">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword keyword-typeof">typeof</span> randomValue <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"It\'s not a string!"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword keyword-else">else</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Yay it\'s a string!"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ul>\n<li>A: <code>It\'s not a string!</code></li>\n<li>B: <code>Yay it\'s a string!</code></li>\n<li>C: <code>TypeError</code></li>\n<li>D: <code>undefined</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: B</h4>\n<p><code>if</code> \u8bed\u53e5\u7684\u6761\u4ef6\u5224\u65ad <code>!typeof randomValue</code> \u7684\u503c\u662f\u5426\u7b49\u4e8e <code>&quot;string&quot;</code>\u3002 <code>!</code> \u64cd\u4f5c\u7b26\u5c06\u8fd9\u4e2a\u503c\u8f6c\u5316\u4e3a\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u5982\u679c\u503c\u662ftruthy\u7684\u8bdd\uff0c\u8fd4\u56de\u503c\u4f1a\u662f <code>false</code>\uff0c\u5982\u679c\u503c\u662ffalsy\uff0c\u8fd4\u56de\u503c\u4f1a\u662f <code>true</code>\u3002\u5728\u8fd9\u91cc\uff0c <code>typeof randomValue</code> \u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2atruthy\u503c <code>&quot;number&quot;</code>\uff0c\u610f\u5473\u7740 <code>!typeof randomValue</code> \u7684\u503c\u662f\u4e00\u4e2a\u5e03\u5c14\u503c <code>false</code>\u3002</p>\n<p><code>!typeof randomValue === &quot;string&quot;</code> \u603b\u662f\u8fd4\u56defalse\uff0c\u56e0\u4e3a\u6211\u4eec\u5b9e\u9645\u4e0a\u662f\u5728\u6267\u884c <code>false === &quot;string&quot;</code>\u3002\u56e0\u4e3a\u6761\u4ef6\u8fd4\u56de\u7684\u662f <code>false</code>\uff0c\u6240\u4ee5 <code>else</code> \u8bed\u53e5\u4e2d\u7684\u4ee3\u7801\u5757\u4f1a\u88ab\u8fd0\u884c\uff0c\u56e0\u6b64\u6253\u5370 <code>Yay it\'s a string!</code> \u3002</p>\n</p>\n</details>\n'}})}}}]);