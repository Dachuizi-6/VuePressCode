# Node

```js
浏览器内核现状：目前谷歌、Edge、Opera都是用的Blink
浏览器内核也叫；浏览器的排版引擎，也叫浏览器引擎，页面渲染引擎，样板引擎
```

```js
渲染引擎的工作过程：对html、css进行解析生成dom tree、css tree，再attachment附加生成渲染树（render tree），然后跟layout tree 一起绘制painting，最后展示

这其中会通过script嵌入js代码（高级语言），js引擎所做的工作就是高级语言转化成汇编语言，最后是机器语言，最后才能给cpu去执行
```
