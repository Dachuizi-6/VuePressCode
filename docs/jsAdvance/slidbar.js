module.exports = [
  {
    title: "一、作用域", // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    // children: ['/node/notes/one']
    children: require("./1notes/children"),
  },
  {
    title: "二、数组",
    collapsable: true,
    children: require("./2notes/children"),
  },
]
