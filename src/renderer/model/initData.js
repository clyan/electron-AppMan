import Status from "./ProgressStatus";
export default [
  {
    pid: 1,
    name: "JAVA",
    priority: 32,
    arriveTime: 5,
    needTime: 40,
    elapsedCpuTime: 20,
    blockReason: "",
    status: Status.ACTIVITY_BLOCK,
    cpuUseRatio: ""
  },
  {
    pid: 2,
    name: "JS",
    priority: 1,
    arriveTime: 20,
    needTime: 20,
    elapsedCpuTime: 0,
    blockReason: "",
    status: Status.ACTIVITY_BLOCK,
    cpuUseRatio: ""
  },
  {
    pid: 3,
    name: "Python",
    priority: 2,
    arriveTime: 6,
    needTime: 10,
    elapsedCpuTime: 5,
    blockReason: "",
    status: Status.ACTIVITY_BLOCK,
    cpuUseRatio: ""
  },
  {
    pid: 4,
    name: "GO",
    priority: 3,
    arriveTime: 5,
    needTime: 20,
    elapsedCpuTime: 5,
    blockReason: "",
    status: Status.ACTIVITY_BLOCK,
    cpuUseRatio: ""
  },
  {
    pid: 5,
    name: "Php",
    priority: 4,
    arriveTime: 10,
    needTime: 20,
    elapsedCpuTime: 5,
    blockReason: "",
    status: Status.ACTIVITY_READY,
    cpuUseRatio: ""
  },
  {
    pid: 6,
    name: "C",
    priority: 5,
    arriveTime: 0,
    needTime: 20,
    elapsedCpuTime: 20,
    blockReason: "",
    status: Status.ACTIVITY_READY,
    cpuUseRatio: ""
  },
  {
    pid: 7,
    name: "C#",
    priority: 20,
    arriveTime: 12,
    needTime: 20,
    elapsedCpuTime: 0,
    blockReason: "",
    status: Status.ACTIVITY_READY,
    cpuUseRatio: ""
  },
  {
    pid: 8,
    name: "Lua",
    priority: 2,
    arriveTime: 0,
    needTime: 10,
    elapsedCpuTime: 5,
    blockReason: "",
    status: Status.ACTIVITY_READY,
    cpuUseRatio: ""
  }
];
