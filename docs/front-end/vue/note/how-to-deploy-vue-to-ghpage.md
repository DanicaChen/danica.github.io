## vue应用，从创建到部署

#### 参考连接
[如何将 Vue 应用部署到 GitHub Pages](https://docs.leoku.top/blog/deploy-vue-app-to-github-pages.html)
[持续集成：使用 GitHub Actions 来帮你的应用自动化部署到 GitHub Pages](https://docs.leoku.top/blog/ci-cd-with-github-actions-to-deploy-on-github-pages.html)
#### 步骤

1. 用vue官方提供的脚手架vue-cli来完成项目创建
   1. 用npm或者yarn全局安装vue-cli
    ```
    npm i -g @vue-cli
    ```
   2. 创建项目
    ``` 
    //基于命令行
    vue creage ProjectName
    //或基于可视化面板
    vue ui
    ````

   3. 默认情况下修改vue的文件后，需要手动刷新浏览器查看效果，可以通过修改项目根目录中的配置文件`vue.config.js`来让实现自动刷新
   ```
    module.exports = {
        devServer: {
        port: 8080,
        open: true
        }
    }
   ```

   4.打开`package.json`文件查看可用命令
   ```
   {
       "scripts": {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build"
        }
   }
   ```
    现在可以输入`npm run serve`命令，启动项目。

2. 开发阶段（略过）

3. 部署阶段
   - 3.1 


   