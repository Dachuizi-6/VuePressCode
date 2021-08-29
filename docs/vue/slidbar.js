module.exports = [
  {
    title: "Vue", // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    // children: ['/node/notes/one']
    children: require("./notes/children"),
  },
]
