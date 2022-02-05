import{r,o as t,c as l,a as e,b as a,F as i,e as s,d as o}from"./app.3f9835f6.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const d={},p=e("h6",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599\uFF1A")],-1),u={href:"https://youtu.be/Htt8AKeF1Kw?t=193",target:"_blank",rel:"noopener noreferrer"},b=s("Vue 3 and Firebase - Build and deploy a CRUD Application with Vue.js and Firebase"),m={href:"https://firebase.google.com/docs/firestore/quickstart#initialize",target:"_blank",rel:"noopener noreferrer"},g=s("\u521D\u59CB\u5316 Cloud Firestore"),f=o(`<h6 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4\uFF1A</h6><ol><li>\u7528npm\u5B89\u88C5firebase</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install firebase@9.4.1 --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728<code>/src</code>\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA<code>firebase/firebaseinit.js</code>\u914D\u7F6E\u6587\u4EF6\uFF0C\u5BFC\u5165firebase</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { initializeApp } from &quot;firebase/app&quot;;  
import { getFirestore } from &quot;firebase/firestore&quot;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u521D\u59CB\u5316 <code>Cloud Firestore</code> \u7684\u5B9E\u4F8B\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const firebaseApp = initializeApp({ 
	apiKey: &#39;### FIREBASE API KEY ###&#39;, 
	authDomain: &#39;### FIREBASE AUTH DOMAIN ###&#39;, 
	projectId: &#39;### CLOUD FIRESTORE PROJECT ID ###&#39;  
});  
  
const db = getFirestore();

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4"><li>\u5BFC\u51FAdb</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default db
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u6253\u5F00\u9700\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6\u6587\u4EF6\uFF0C\u4F8B\u5982\u6839\u7EC4\u4EF6<code>App.vue</code>\uFF0C\u5BFC\u5165\u76F8\u5173\u6A21\u5757</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import db from &quot;./firebase/firebaseinit&quot;
import { collection, getDocs } from &quot;firebase/firestore&quot;;

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>\u67E5\u8BE2\u6587\u6863</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const querySnapshot = await getDocs(collection(db, &quot;users&quot;));  
querySnapshot.forEach((doc) =&gt; { 
	console.log(\`\${doc.id} =&gt; \${doc.data()}\`);  
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6210\u529F\u83B7\u53D6\u5230\u6570\u636E ![[firebase-output.jpg]]</p>`,14);function x(h,v){const n=r("ExternalLinkIcon");return t(),l(i,null,[p,e("ol",null,[e("li",null,[e("a",u,[b,a(n)])]),e("li",null,[e("a",m,[g,a(n)])])]),f],64)}var F=c(d,[["render",x]]);export{F as default};
