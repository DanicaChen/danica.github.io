import{r,o as l,c as p,a as n,b as a,F as c,e,d as t}from"./app.19cd60c8.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const b={},o=n("h2",{id:"vue\u4E2D\u5982\u4F55\u5BF9\u65F6\u95F4\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue\u4E2D\u5982\u4F55\u5BF9\u65F6\u95F4\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406","aria-hidden":"true"},"#"),e(" vue\u4E2D\u5982\u4F55\u5BF9\u65F6\u95F4\u8FDB\u884C\u683C\u5F0F\u5316\u5904\u7406")],-1),u=n("h5",{id:"vue2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue2","aria-hidden":"true"},"#"),e(" vue2")],-1),m=n("p",null,"\u53C2\u8003\u8D44\u6599\uFF1A",-1),d={href:"https://www.bilibili.com/video/BV1zq4y1p7ga?p=541&t=122.1",target:"_blank",rel:"noopener noreferrer"},h=e("P541 Vue3.0-26.\u7EFC\u5408\u6848\u4F8B - \u901A\u8FC7\u4F5C\u7528\u57DF\u63D2\u69FD\u81EA\u5B9A\u4E49\u521B\u5EFA\u65F6\u95F4\u7684\u6E32\u67D3\u683C\u5F0F"),g={href:"https://cn.vuejs.org/v2/guide/filters.html",target:"_blank",rel:"noopener noreferrer"},f=e("\u8FC7\u6EE4\u5668"),_={href:"https://www.runoob.com/jsref/jsref-obj-date.html",target:"_blank",rel:"noopener noreferrer"},v=e("JavaScript Date \u5BF9\u8C61"),x=t(`<ol><li>\u539F\u59CB\u65F6\u95F4\u6570\u636E\u4E3A<code>addtime</code>,\u5728\u6570\u636E<code>addtime</code>\u540E\u9762\u6DFB\u52A0\u7BA1\u9053\u7B26<code>|</code>\u548C\u5168\u5C40\u8FC7\u6EE4\u5668<code>dateFormat</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ addtime | dateFormat }}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728<code>main.js</code>\u5165\u53E3\u6587\u4EF6\u4E2D\u5B9A\u4E49\u5168\u5C40\u8FC7\u6EE4\u5668 <code>dateFormat</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Vue.filter(&#39;dataFormat&#39;,(dtStr)=&gt;{
	//\u8FD4\u56DE\u4E00\u4E2A\u65E5\u671F\u5BF9\u8C61
	const dt = new Date(dtStr)
	
	const y = dt.getFullYear()
	const m = padZero(dt.getMonth() + 1)
	const d = padZero(dt.getDate())

	const hh = padZero(dt.getHours())
	const mm = padZero(dt.getMinutes())
	const ss = padZero(dt.getSeconds())
	
	return \`\${y}-\${m}-\${d} \${hh}:\${mm}:\${ss}\`
})

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="3"><li>\u58F0\u660E\u8865\u96F6\u51FD\u6570\uFF0C\u4E3A\u4E0D\u8DB3\u4E24\u4F4D\u6570\u7684\u65F6\u95F4\u6570\u636E\u8865\u96F6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function padZero(n){
	n &gt; 9 ? n : &#39;0&#39; + n
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> vue3</h5><p>\u53C2\u8003\u8D44\u6599\uFF1A</p>`,8),y={href:"https://www.mybj123.com/12885.html",target:"_blank",rel:"noopener noreferrer"},k=e("vue3 \u901A\u8FC7\u8BA1\u7B97\u5C5E\u6027\u4EE3\u66FF filter \u8FC7\u6EE4\u5668\u5B9E\u73B0\u65F6\u95F4\u683C\u5F0F\u5316"),w={href:"https://v3.cn.vuejs.org/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},D=e("\u8BA1\u7B97\u5C5E\u6027"),E=t(`<ol><li>\u5728<code>assets/js/</code>\u4E2D\u58F0\u660E\u4E00\u4E2A<code>FormatDate</code>\u7684\u51FD\u6570\uFF0C\u5E76\u5BFC\u51FA</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7528\u4E8E\u683C\u5F0F\u5316\u65F6\u95F4

function formatDate(value, format) {
	//value: \u9700\u8981\u683C\u5F0F\u5316\u7684\u6570\u636E
	//format: \u6307\u5B9A\u683C\u5F0F yyyy-MM-dd hh:mm:ss
	let date = new Date(value);
	
	// \u83B7\u53D6\u5E74\u4EFD
	let year = date.getFullYear();
	if (/(y+)/.test(format)) {
	
	// \u83B7\u53D6\u5339\u914D\u7EC4\u7684\u5185\u5BB9
	let content = RegExp.$1;
	format = format.replace(content, year.toString().slice(4 - content.length));
	}

	let o = {

	// y: date.getFullYear(), // \u7528\u8FD9\u4E00\u53E5\u4E5F\u884C\uFF0C\u4F46\u53EA\u9002\u7528\u4E8E\u56DB\u4F4D\u6570\u663E\u793A\u65F6\u5019\u7528
		
		M: date.getMonth() + 1,
		
		d: date.getDate(),
		
		h: date.getHours(),
		
		m: date.getMinutes(),
		
		s: date.getSeconds()
	
	};

	for (let key in o) {
	
		// \u6784\u9020\u52A8\u6001\u6B63\u5219
	
		let reg = new RegExp(\`(\${key}+)\`);
	
		if (reg.test(format)) {
		
			// \u83B7\u53D6\u5339\u914D\u7EC4\u7684\u5185\u5BB9

			let content = RegExp.$1;
			
			let k = o[key] &gt;= 10 ? o[key] : content.length == 2 ? &#39;0&#39; + o[key] : o[key];
			
			format = format.replace(content, k);
		
		}
	
	}

	return format;

}

export default formatDate

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><ol start="2"><li>\u5728\u4F7F\u7528\u7EC4\u4EF6\u9875\u9762\u4E2D\u5BFC\u5165\u6B64js\u6A21\u5757 <code>import formatDate from &#39;@/assets/js/FormatDate&#39;</code></li><li>\u5728\u4F7F\u7528\u7EC4\u4EF6\u7684<code>computed</code>\u8282\u70B9\u4E2D\u8C03\u7528\u6B64\u51FD\u6570</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>computed:{

	formatDate(){
	
	return formatDate
	
	}

},

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4"><li>\u5728\u9700\u8981\u6E32\u67D3\u5904\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ formatDate(scope.row.addtime, &quot;yyyy-mm-dd hh:MM:ss&quot;) }}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6);function j(F,M){const s=r("ExternalLinkIcon");return l(),p(c,null,[o,u,m,n("ul",null,[n("li",null,[n("a",d,[h,a(s)])]),n("li",null,[n("a",g,[f,a(s)])]),n("li",null,[n("a",_,[v,a(s)])])]),x,n("ul",null,[n("li",null,[n("a",y,[k,a(s)])]),n("li",null,[n("a",w,[D,a(s)])])]),E],64)}var V=i(b,[["render",j]]);export{V as default};
