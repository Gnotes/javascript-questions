(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[38],{68:function(n,s,a){"use strict";a.r(s);var t=a(1);s.default=function(){return Object(t.jsx)("div",{className:"question","data-index":"130",dangerouslySetInnerHTML:{__html:'\n<h6>130. \u8f93\u51fa\u4ec0\u4e48\uff1f</h6>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword keyword-const">const</span> myPromise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"Woah some cool data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword keyword-async">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword keyword-try">try</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword keyword-await">await</span> myPromise<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword keyword-catch">catch</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword keyword-throw">throw</span> <span class="token keyword keyword-new">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Oops didn\'t work</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword keyword-finally">finally</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Oh finally!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ul>\n<li>A: <code>Woah some cool data</code></li>\n<li>B: <code>Oh finally!</code></li>\n<li>C: <code>Woah some cool data</code> <code>Oh finally!</code></li>\n<li>D: <code>Oops didn\'t work</code> <code>Oh finally!</code></li>\n</ul>\n<details><summary><b>\u7b54\u6848</b></summary>\n<p>\n<h4>\u7b54\u6848: C</h4>\n<p>\u5728 <code>try</code> \u5757\u533a\uff0c\u6211\u4eec\u6253\u5370 <code>myPromise</code> \u53d8\u91cf\u7684 awaited \u503c\uff1a <code>&quot;Woah some cool data&quot;</code>\u3002\u56e0\u4e3a<code>try</code> \u5757\u533a\u6ca1\u6709\u9519\u8bef\u629b\u51fa\uff0c<code>catch</code> \u5757\u533a\u7684\u4ee3\u7801\u5e76\u4e0d\u6267\u884c\u3002<code>finally</code> \u5757\u533a\u7684\u4ee3\u7801 <em>\u603b\u662f</em> \u6267\u884c\uff0c<code>&quot;Oh finally!&quot;</code> \u88ab\u8f93\u51fa\u3002</p>\n</p>\n</details>\n'}})}}}]);