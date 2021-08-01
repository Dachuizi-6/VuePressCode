# Node

1. 浏览器内核现状：目前谷歌、Edge、Opera 都是用的 Blink
   浏览器内核也叫；浏览器的排版引擎，也叫浏览器引擎，页面渲染引擎，样板引擎

---

1. 渲染引擎的工作过程：对 html、css 进行解析生成 dom tree、css tree，再 attachment 附加生成渲染树（render tree），然后跟 layout tree 一起绘制 painting，最后展示

2. 这其中会通过 script 嵌入 js 代码（高级语言），js 引擎所做的工作就是高级语言转化成汇编语言，最后是机器语言，最后才能给 cpu 去执行

- 这其中也解释了，为啥需要就是 js 引擎，代码最终是交给 cpu 执行的，但是 cpu 只认识自己的指令集，而 js 是一门高级语言，只有转化成汇编语言，最终变成机器语言才能被 cpu 执行，而这部分的转化工作就是交给 js 引擎来做的

3. 在渲染的时候遇到 script 标签的时候，会停止解析 html，跑去加载 js，因为 js 可能会操作 dom，浏览器不希望频繁操作生成 dom 树

![An image](./imgs/1.png)
