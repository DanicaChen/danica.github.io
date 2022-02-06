import{r as l,o as i,c as p,a as n,b as e,w as o,F as c,e as s,d as r}from"./app.e7dd713a.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";var b="/img/create-repo.jpg",d="/img/push-to-repo.jpg",m="/img/new-token.jpg",h="/img/select-scope.jpg",_="/img/add-secret.jpg",g="/img/gh-pages.jpg",v="/img/workflow-path.jpg",x="/img/deploy.jpg",k="/img/gh-page-path.jpg";const f={},w=n("h2",{id:"vue\u5E94\u7528-\u4ECE\u521B\u5EFA\u5230\u90E8\u7F72",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue\u5E94\u7528-\u4ECE\u521B\u5EFA\u5230\u90E8\u7F72","aria-hidden":"true"},"#"),s(" vue\u5E94\u7528\uFF0C\u4ECE\u521B\u5EFA\u5230\u90E8\u7F72")],-1),j=n("h4",{id:"\u53C2\u8003\u8D44\u6599-\u535A\u6587",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599-\u535A\u6587","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599/\u535A\u6587")],-1),y={href:"https://docs.leoku.top/blog/deploy-vue-app-to-github-pages.html",target:"_blank",rel:"noopener noreferrer"},E=s("\u5982\u4F55\u5C06 Vue \u5E94\u7528\u90E8\u7F72\u5230 GitHub Pages"),q={href:"https://docs.leoku.top/blog/ci-cd-with-github-actions-to-deploy-on-github-pages.html",target:"_blank",rel:"noopener noreferrer"},G=s("\u6301\u7EED\u96C6\u6210\uFF1A\u4F7F\u7528 GitHub Actions \u6765\u5E2E\u4F60\u7684\u5E94\u7528\u81EA\u52A8\u5316\u90E8\u7F72\u5230 GitHub Pages"),T={href:"https://www.wuxunjie.org/Q&A/deploy.html#%E5%89%8D%E7%BD%AE%E5%86%85%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"},B=s("\u624B\u6478\u624B\u4F7F\u7528GitHub Pages + GitHub Actions\u81EA\u52A8\u5316\u90E8\u7F72\u9879\u76EE/\u535A\u5BA2"),H=n("h4",{id:"\u6B65\u9AA4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6B65\u9AA4","aria-hidden":"true"},"#"),s(" \u6B65\u9AA4")],-1),N=r(`<li><p>\u7528vue\u5B98\u65B9\u63D0\u4F9B\u7684\u811A\u624B\u67B6vue-cli\u6765\u5B8C\u6210\u9879\u76EE\u521B\u5EFA</p><ol><li>\u7528npm\u6216\u8005yarn\u5168\u5C40\u5B89\u88C5vue-cli</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i -g @vue-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u521B\u5EFA\u9879\u76EE</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u57FA\u4E8E\u547D\u4EE4\u884C
vue creage ProjectName
//\u6216\u57FA\u4E8E\u53EF\u89C6\u5316\u9762\u677F
vue ui
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6<code>vue.config.js</code>\u6765\u8BA9\u9879\u76EE\u5B9E\u73B0\u81EA\u52A8\u5237\u65B0</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> module.exports = {
     devServer: {
     //\u4FEE\u6539\u7AEF\u53E3
     port: 8080,
     //\u81EA\u52A8\u6253\u5F00
     open: true
     }
 }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>4.\u6253\u5F00<code>package.json</code>\u6587\u4EF6\u67E5\u770B\u53EF\u7528\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;scripts&quot;: {
         &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
         &quot;build&quot;: &quot;vue-cli-service build&quot;
     }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u73B0\u5728\u53EF\u4EE5\u8F93\u5165<code>npm run serve</code>\u547D\u4EE4\uFF0C\u542F\u52A8\u9879\u76EE\u3002</p></li><li><p>\u5F00\u53D1\u9636\u6BB5\uFF08\u7565\u8FC7\uFF09</p></li>`,2),I=s("\u90E8\u7F72\u51C6\u5907\u9636\u6BB5 \u9996\u5148\u8981\u660E\u767D"),V=s("./dist"),A=s("\u6587\u4EF6\u5939\u7684\u7531\u6765"),P=n("li",null,[n("p",null,[s("3.1 \u5728github\u521B\u5EFA\u65B0\u4ED3\u5E93 "),n("img",{src:b,alt:"new repo"})])],-1),C=n("li",null,[n("p",null,[s("3.2 \u6309\u5B9E\u9645\u60C5\u51B5\u9009\u521D\u59CB\u5316\u4ED3\u5E93\uFF0C\u6211\u901A\u5E38\u7528\u7684\u90FD\u662F\u7B2C\u4E8C\u4E2A\uFF0Cpush\u672C\u5730\u5DF2\u6709\u6570\u636E\u5230\u4ED3\u5E93 "),n("img",{src:d,alt:"push repo"})])],-1),L=n("li",null,[n("p",null,[s("3.3 \u521B\u5EFA\u597D\u4EE5\u540E\uFF0C\u5230settings/tokens\uFF0C\u751F\u6210\u65B0token "),n("img",{src:m,alt:"new token"})])],-1),U=s("3.4 \u52FE\u9009repo\uFF0C\u6388\u4E88\u5BF9\u4ED3\u5E93\u7684"),D={href:"https://docs.github.com/cn/developers/apps/building-oauth-apps/scopes-for-oauth-apps",target:"_blank",rel:"noopener noreferrer"},F=s("\u5B8C\u5168\u8BBF\u95EE\u6743\u9650"),K=n("img",{src:h,alt:"scope"},null,-1),O=n("li",null,[n("p",null,[s("3.4 \u521B\u5EFA\u5B8C\u6BD5\u540E\u590D\u5236\u5BC6\u5319\uFF0C\u56DE\u5230\u4ED3\u5E93\u7684settings/secrets/action\u754C\u9762\uFF0C\u6DFB\u52A0\u5BC6\u5319 "),n("img",{src:_,alt:"add secret"})])],-1),S=n("li",null,[n("p",null,[s("3.5 \u70B9\u51FB\u83DC\u5355\u7684pages\uFF0C\u65B0\u5EFA"),n("code",null,"gh-pages"),s("\u62FF\u6765\u653E"),n("code",null,"./dist"),n("img",{src:g,alt:"new branches"})])],-1),$=n("p",null,"\u914D\u7F6Egithub action",-1),R=s("4.1 \u70B9action\uFF0C"),z={href:"https://docs.github.com/cn/actions/using-workflows/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"},Q=s("\u521B\u5EFA\u5DE5\u4F5C\u6D41\u7A0B"),J=s("\uFF0C\u5BF9\u7167\u5DE5\u4F5C\u6D41\u7A0B\u7684\u5B58\u653E\u4F4D\u7F6E\uFF0C\u5728\u672C\u5730\u521B\u5EFA"),M=n("code",null,".yml",-1),W=s("\u6587\u4EF6 "),X=n("img",{src:v,alt:"workflow"},null,-1),Y=r(`<p>\u590D\u5236\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u4FEE\u6539\u6700\u540E\u4E00\u9879<code>GITHUB_TOKEN</code>\u540D\u79F0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># workflow \u7684\u540D\u79F0\uFF0C\u5982\u679C\u7701\u7565\u5219\u9ED8\u8BA4\u4E3A\u5F53\u524D workflow \u7684\u6587\u4EF6\u540D
name: deployment

on:
# \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72
push:
    branches: 
    - main

jobs:
docs:
    runs-on: ubuntu-latest # \u4F7F\u7528\u6700\u65B0\u7684 Ubuntu \u7CFB\u7EDF\u4F5C\u4E3A\u7F16\u8BD1\u90E8\u7F72\u7684\u73AF\u5883

    steps:
    - name: Checkout codes
    uses: actions/checkout@v2.3.4

    # \u8BBE\u7F6E node.js \u8FD0\u884C\u73AF\u5883
    - name: Setup node
    uses: actions/setup-node@v2.1.2
    with:
        node-version: &#39;14&#39;

    # \u8BBE\u7F6E\u7F13\u5B58\u4F9D\u8D56\uFF0C\u52A0\u5FEB\u4E0B\u6B21\u5B89\u88C5\u4F9D\u8D56\u7684\u901F\u5EA6
    - name: Cache node modules
    uses: actions/cache@v2.1.3
    with:
        path: &#39;**/node_modules&#39;
        key: \${{ runner.os }}-node-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}

    # \u5B89\u88C5\u4F9D\u8D56
    - name: Install dependencies
    run: yarn install

    # \u6784\u5EFA\u6587\u4EF6
    - name: Generate files
    run: yarn build

    # \u5C06\u6784\u5EFA\u540E\u7684\u6587\u4EF6\u63A8\u9001\u5230 gh-pages
    - name: Push to gh-pages     
    uses: crazy-max/ghaction-github-pages@v2
    with:
        # \u90E8\u7F72\u5230 gh-pages \u5206\u652F
        target_branch: gh-pages
        # \u90E8\u7F72\u76EE\u5F55
        build_dir: ./dist
    env:
        #\u586B\u5199\u521A\u624D\u7684token\u540D
        GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,2),Z=n("li",null,[n("p",null,[s("\u7528git push\u6765\u8FDB\u884C\u90E8\u7F72\uFF0C\u53EF\u4EE5\u5728action\u91CC\u67E5\u770B\u65E5\u5FD7\uFF0C\u90E8\u7F72\u5730\u5740\u65E2\u53EF\u4EE5\u5728deploy\u4E0B\u627E\u5230 "),n("img",{src:x,alt:"\u67E5\u770B\u65E5\u5FD7"})]),n("p",null,[s("\u4E5F\u53EF\u4EE5\u5728\u4ED3\u5E93\u9996\u9875\u7684\u53F3\u4FA7\u7684"),n("code",null,"Environments"),s("\u627E\u5230\u3002 "),n("img",{src:k,alt:"\u90E8\u7F72\u5730\u5740"})])],-1);function nn(sn,en){const a=l("ExternalLinkIcon"),t=l("RouterLink");return i(),p(c,null,[w,j,n("ul",null,[n("li",null,[n("a",y,[E,e(a)])]),n("li",null,[n("a",q,[G,e(a)])]),n("li",null,[n("a",T,[B,e(a)])])]),H,n("ol",null,[N,n("li",null,[n("p",null,[I,e(t,{to:"/back-end/deploy/how-webpack-work.html"},{default:o(()=>[V]),_:1}),A]),n("ul",null,[P,C,L,n("li",null,[n("p",null,[U,n("a",D,[F,e(a)]),K])]),O,S])]),n("li",null,[$,n("ul",null,[n("li",null,[R,n("a",z,[Q,e(a)]),J,M,W,X])]),Y]),Z])],64)}var rn=u(f,[["render",nn]]);export{rn as default};
