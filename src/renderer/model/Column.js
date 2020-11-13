export default [
  {
    title: "pid",
    dataIndex: "pid",
    key: "pid",
    sorter: (a, b) => a - b
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length
  },
  { title: "优先级", dataIndex: "priority", key: "priority" },
  { title: "到达时间", dataIndex: "arriveTime", key: "arriveTime" },
  { title: "需要运行时间", dataIndex: "needTime", key: "needTime" },
  {
    title: "已用CPU时间",
    dataIndex: "elapsedCpuTime",
    key: "elapsedCpuTime",
    scopedSlots: { customRender: "elapsedCpuTime" }
  },
  {
    title: "进程状态",
    dataIndex: "status",
    key: "status",
    scopedSlots: { customRender: "status" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
