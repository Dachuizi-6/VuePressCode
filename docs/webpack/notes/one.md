# 一、loader

css-loader：只是加载 css 文件

style-loader：生成 style 标签，把加载的 css 放进去

```js
module: {
  rules: [
    {
      test: /\.css$/,
      // 用法1
      // loader:"css-loader" // 语法糖

      // 用法2
      // use:"css-loader"

      // 用法3
      // use: ["css-loader"], // 可以写多个loader

      // 用法4:完整写法
      use: [
        {
          loader: "css-loader",
        },
      ],
    },
  ]
}
```

处理 less 文件：用 less-loader 连接 less 与 webpack，在用 lessc 转化 less 为 css

::: tip 注意
loader 的加载顺序是从后往前的

less-loader 依赖 lessc
postcss-loader 依赖 postcss（独立工具，也可以安装插件）
:::
