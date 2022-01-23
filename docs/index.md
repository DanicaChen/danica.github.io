# can't add less as dependency #826

**bug:**

[can't add less as dependency · Issue #826 · vitejs/vite](https://github.com/vitejs/vite/issues/826#/)

**原因：**

### [**underfin**](https://github.com/underfin) commented [on 18 Sep 2020](https://github.com/vitejs/vite/issues/826#issuecomment-694776869) • edited

The `less` should place inside `devDependencies` instead of `dependencies`, because `vite` will optimized the package comes from `dependencies`.

在启动时会自动分析依赖进行一次预优化，把没有提供 esm 格式的依赖和内部有大量模块的依赖提前打包，

作者原话

[尤雨溪 的想法: Vite 0.15 现在启动时会自动分析依赖进行… - 知乎](https://www.zhihu.com/pin/1244577301163106304#/)

Vite 0.15 现在启动时会自动分析依赖进行一次预优化，把没有提供 esm 格式的依赖和内部有大量模块的依赖提前打包，减少开发时 es import 的请求数量，解决 es import 在开发中的主要软肋（请求多了影响页面 reload 速度）。这一步后会对保存一个当前依赖和配置的 hash，确保只有依赖变动的时候才需要重新优化。

另外实验性的加入了 vite —sw 选项，用 service worker 缓存编译过的文件，进一步减少请求瓶颈。

[依赖预构建 | Vite 官方中文文档](https://cn.vitejs.dev/guide/dep-pre-bundling.html)

underfin commented on 21 Oct 2020

If you don't want this behavior, you can add them into exclude inside optimizeDeps.

[Vite 依赖关系与捆绑 - 有些依赖项不能无法安装到 devDependencies_皮蛋很白的博客-CSDN博客_vite 安装依赖](https://blog.csdn.net/u012961419/article/details/112321417#/)

自己总结的原因：因为vue在启动时会预编译，安装在dependecy的依赖项都会被提前打包，

但因为less自己就是一个css编译器，所以不能被提前打包？

[https://less.bootcss.com/usage/#/](https://less.bootcss.com/usage/#/)

