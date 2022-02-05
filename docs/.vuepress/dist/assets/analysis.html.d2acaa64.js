import{d as n}from"./app.3f9835f6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var e="/img/python-json-data.jpg",a="/img/python-analysis-result.jpg";const t={},r=n('<h2 id="\u7528python\u5206\u6790\u5173\u952E\u8BCD\u7684\u51FA\u73B0\u9891\u6B21" tabindex="-1"><a class="header-anchor" href="#\u7528python\u5206\u6790\u5173\u952E\u8BCD\u7684\u51FA\u73B0\u9891\u6B21" aria-hidden="true">#</a> \u7528python\u5206\u6790\u5173\u952E\u8BCD\u7684\u51FA\u73B0\u9891\u6B21</h2><p>\u4ECE\u67D0\u62DB\u8058\u7F51\u7AD9\u624B\u52A8\u6293\u53D6\u4E86\u67D0\u533A\u57DF\u524D\u7AEF\u5C97\u4F4D\u7684JSON\u6570\u636E\uFF0C\u6253\u7B97\u6765\u5206\u6790\u4E00\u4E0B2022\u5E74\u8BE5\u533A\u57DF\u516C\u53F8\u5BF9\u524D\u7AEF\u5C97\u4F4D\u7684\u6280\u672F\u9700\u6C42\u3002 <img src="'+e+`" alt="json\u6570\u636E"></p><p>\u6293\u53D6\u5230\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[
	{	
		&quot;jobName&quot;: &quot;****&quot;,
		
		&quot;salaryDesc&quot;: &quot;10-15K\xB713\u85AA&quot;,
		
		&quot;jobLabels&quot;: [
		
			&quot;1-3\u5E74&quot;,
			
			&quot;\u672C\u79D1&quot;
		
		],
		
		&quot;skills&quot;: [
		
			&quot;TypeScript&quot;,
			
			&quot;HTML&quot;,
			
			&quot;HTML5&quot;,
			
			&quot;AngularJS&quot;,
			
			&quot;Angular&quot;
			
		],
		
		&quot;jobExperience&quot;: &quot;1-3\u5E74&quot;,
	},
	{
		//\u5185\u5BB9
	},
	{
		//\u5185\u5BB9	
	}\uFF0C
	...
]

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><strong>\u76EE\u6807\uFF1A\u7EDF\u8BA1skills\u91CC\u7684\u5404\u4E2A\u6280\u672F\u51FA\u73B0\u7684\u6B21\u6570</strong></p><ol><li>\u5BFC\u5165\u5E93</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import json
import operator
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li><p>\u521B\u5EFA\u53D8\u91CF<code>rank</code>\u63A5\u6536\u6392\u5E8F\u7ED3\u679C <code>rank = []</code></p></li><li><p>\u7528<code>open</code>\u65B9\u6CD5\u6253\u5F00json\u6587\u4EF6\uFF0C\u7528<code>json.load</code>\u65B9\u6CD5\u8BFB\u53D6\u6570\u636E\uFF0C\u5E76\u7528data\u63A5\u6536</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>f = open(&#39;\u6587\u4EF6\u8DEF\u5F84/\u6587\u4EF6\u540D&#39;)
data = json.load(f)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>4.\u521B\u5EFA\u53D8\u91CF<code>frenquency_word</code>\uFF0C\u50A8\u5B58\u6240\u6709\u51FA\u73B0\u7684\u5173\u952E\u8BCD\uFF1B\u53D8\u91CF<code>count</code>\u50A8\u5B58\u51FA\u73B0\u7684\u6B21\u6570\u3002\u7136\u540E\u7528<code>for</code>\u904D\u5386\u5FAA\u73AFjson\u5217\u8868\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>frequency_list = []
frequency_word = []

for i in data:
	for keyword in i[&#39;skills&#39;]:
		//\u5173\u952E\u8BCD\u9996\u6B21\u51FA\u73B0\u65F6\u6DFB\u52A0\u5230frenquency_word\uFF0C\u7136\u540Ecount+1
		if keyword not in frequency_word:
			frequency_word.append(keyword)
			count.append(1)
		//\u5173\u952E\u8BCD\u5DF2\u7ECF\u5B58\u5728\u65F6\uFF0C\u76F4\u63A5\u627E\u5230\u8BE5\u5173\u952E\u8BCD\u5BF9\u5E94\u7684index\uFF0C\u7136\u540Ecount\u5217\u8868\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4E5F\u52A01
		else:
			ind = frequency_word.index(keyword)
			count[ind] += 1
f.close()
	
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="5"><li>\u5408\u5E76frequency_word\u548Ccount\u4E24\u4E2A\u5217\u8868\uFF0C\u7528<code>rank</code>\u63A5\u6536\u540E\uFF0C\u4F7F\u7528 <code>operator</code> \u6A21\u5757\u7684<code>itemgetter</code>\u51FD\u6570\u8F85\u52A9\u5BF9\u4E8C\u7EF4\u5217\u8868\u8FDB\u884C\u6309\u6B21\u6570\u7684\u5012\u5E8F\u6392\u5E8F\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rank = list(zip(count,frequency_word))
rank.sort(key=operator.itemgetter(0),reverse=True)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4EE5\u4E0B\u662F\u5F97\u51FA\u6765\u7684\u7ED3\u679C\uFF0Chtml\u548Ccss\u5206\u522B\u662F\u7B2C\u4E00\u7B2C\u4E8C\uFF0C\u7136\u540E\u662Fjs\uFF0Creact\uFF0Cvue\uFF0C\u5C0F\u7A0B\u5E8F\u548Cts\u3002node.js\u548Cjquery\u6BD4\u60F3\u8C61\u4E2D\u7684\u5C11\u3002 <img src="`+a+'" alt="\u7EDF\u8BA1\u7ED3\u679C"></p>',14);function l(p,c){return r}var u=s(t,[["render",l]]);export{u as default};
