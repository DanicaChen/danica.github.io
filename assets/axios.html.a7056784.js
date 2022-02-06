import{r as a,o as r,c as l,a as e,b as t,F as o,e as s,d as i}from"./app.e7dd713a.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var c="/img/vue-cors.jpg",d="/img/vue-proxy.jpg";const b={},u=e("h2",{id:"vue3\u4E2Daxios\u7684\u914D\u7F6E\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue3\u4E2Daxios\u7684\u914D\u7F6E\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" Vue3\u4E2Daxios\u7684\u914D\u7F6E\u65B9\u6CD5")],-1),m=e("h4",{id:"\u914D\u7F6E\u6B65\u9AA4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6B65\u9AA4","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u6B65\u9AA4")],-1),x=s("\u4EE5\u4E0B\u7B14\u8BB0\u5927\u591A\u6570\u6765\u6E90\u4E8E "),v={href:"https://www.bilibili.com/video/BV1zq4y1p7ga?from=search&seid=14896841834527189848&spm_id_from=333.337.0.0",target:"_blank",rel:"noopener noreferrer"},g=s("\u9ED1\u9A6C\u7A0B\u5E8F\u5458Vue\u5168\u5957\u89C6\u9891\u6559\u7A0B"),h=s("\uFF0C\u672C\u4EBA\u5728\u6B64\u57FA\u7840\u4E0A\u6574\u7406\u8865\u5145\u3002 \u6D89\u53CA\u96C6\u6570\uFF1A"),_=i(`<ul><li>P537 Vue3.0-22.\u7EFC\u5408\u6848\u4F8B - \u5B89\u88C5\u548C\u914D\u7F6Eaxios</li><li>P538 Vue3.0-23.\u7EFC\u5408\u6848\u4F8B - \u8BF7\u6C42\u7528\u6237\u5217\u8868\u7684\u6570\u636E\u5E76\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898</li></ul><p>\u73AF\u5883\uFF1A axios: ^0.25.0 vue: ^3.0.0</p><hr><ol><li><p>\u7528npm\u7B49\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5axios\u5305 <code>npm i axios -S</code></p></li><li><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728vue\u9879\u76EE\u7684<code>main.js</code> \u5165\u53E3\u6587\u4EF6\u4E2D\u5BFC\u5165\u5E76\u5168\u5C40\u914D\u7F6Eaxios\uFF1A</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5BFC\u5165axios
import axios from &#39;axios&#39;

//\u7528app\u6765\u63A5\u53D7vue\u7684instance
const app = createApp(App)

//\u914D\u7F6E\u8BF7\u6C42\u6839\u8DEF\u5F84
axios.defaults.baseURL = &#39;https://www/escook.cn&#39;

//\u5C06axios\u6302\u8F7D\u4E3A\u5168\u5C40\u7684$http\u81EA\u5B9A\u4E49\u5C5E\u6027
app.config.globalProperties.$http = axios

app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="\u8BF7\u6C42\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6570\u636E" aria-hidden="true">#</a> \u8BF7\u6C42\u6570\u636E</h4><ol><li>\u5728\u7EC4\u4EF6\u4E2D\u58F0\u660E<code>data</code>\u6570\u636E<code>myList</code>\uFF0C\u62FF\u6765\u63A5\u53D7\u8BF7\u6C42\u6570\u636E</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>data(){
	return{
		myList:[]
	}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u5728\u7EC4\u4EF6\u7684<code>created</code>[[\u751F\u547D\u5468\u671F\u51FD\u6570]]\u4E2D\uFF0C\u9884\u8C03\u7528\u83B7\u53D6\u6570\u636E\u5217\u8868\u7684<code>methods</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>created(){
	this.getMyList()
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u5728\u7EC4\u4EF6\u7684<code>mthods</code>\u8282\u70B9\u4E2D\uFF0C\u58F0\u660E\u521A\u624D\u9884\u8C03\u7528\u7684<code>getMyList</code>\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>methods:{
	async getMyList(){
		const { data:res } = await this.$http.get(&#39;/api/users&#39;)
		if(res.status !== 0) return console.log(&#39;\u7528\u6237\u5217\u8868\u8BF7\u6C42\u5931\u8D25&#39;)
		this.userList = res.data
	}
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6210\u529F\u4E4B\u540E\u91CD\u542F\u670D\u52A1\u5668\uFF0C\u6253\u5F00\u81EA\u5DF1\u914D\u7F6E\u8BF7\u6C42\u7684\u9875\u9762\uFF0C\u5982\u679Capi\u8BF7\u6C42\u5730\u5740\u4F4D\u4E8E\u7AD9\u5916\u7684\u8BDD\uFF0C\u4F1A\u53D1\u73B0\u6709cors\u8DE8\u57DF\u8BF7\u6C42\u95EE\u9898\u3002</p><p><img src="`+c+`" alt="cors\u8DE8\u57DF\u8BF7\u6C42"></p><ol start="4"><li>\u901A\u8FC7proxy\u4EE3\u7406\u6765\u89E3\u51B3cors\u8DE8\u57DF\u8BF7\u6C42\u95EE\u9898</li></ol><blockquote><p>\u6CE8\u610FdevServer.proxy\u63D0\u4F9B\u7684\u4EE3\u7406\u529F\u80FD\uFF0C\u4EC5\u5728\u5F00\u53D1\u8C03\u8BD5\u7684\u9636\u6BB5\u751F\u6548\uFF0C\u9879\u76EE\u4E0A\u7EBF\u53D1\u5E03\u65F6\uFF0C\u4F9D\u65E7\u9700\u8981API\u63A5\u53E3\u670D\u52A1\u5668\u5F00\u542Fcors\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u3002</p></blockquote><blockquote><p>\u901A\u8FC7 <code>vue.config.js</code> \u4E2D\u7684 <code>devServer.proxy</code> \u5373\u53EF\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u5C06 API \u8BF7\u6C42\u4EE3\u7406\u5230 API \u670D\u52A1\u5668</p></blockquote><p><code>vue.config.js </code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
	devServer: {
		port:3000,
		open:true,
		//\u4F1A\u5C06\u4EFB\u4F55\u672A\u77E5\u8BF7\u6C42\u4EE3\u7406\u5230proxy\u91CC\u6307\u5B9A\u7684\u503C
		proxy:&#39;https://www.escook.cn&#39;
	}
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>\u540C\u65F6\uFF0C\u5728<code>main.js</code>\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u9700\u8981\u628A <code>axios</code>\u7684\u6839\u8DEF\u5F84\u6539\u9020\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u7684\u6839\u8DEF\u5F84\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>axios.defaults.baseURL = &#39;http://localhost:3000&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u91CD\u542F\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u770B\u5230\u6CA1\u6709\u62A5\u9519\uFF0C\u58F0\u660E\u7684<code>data</code>\u4E5F\u5DF2\u7ECF\u987A\u5229\u63A5\u6536\u5230\u6570\u636E <img src="`+d+'" alt="\u4F7F\u7528proxy\u4EE3\u7406\u540E\u6210\u529F\u83B7\u53D6\u5230\u6570\u636E"></p>',22);function f(y,k){const n=a("ExternalLinkIcon");return r(),l(o,null,[u,m,e("p",null,[x,e("a",v,[g,t(n)]),h]),_],64)}var V=p(b,[["render",f]]);export{V as default};
