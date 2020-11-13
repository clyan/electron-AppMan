import dataList from "./initData";
import Status from "./ProgressStatus";
import Policy from "./Policy";
import PCB from "./PCB";
import disp from "@/util/disp";
import { HRRF, HRRN, RR, MFQS, SJF, HPF, FCFS } from "./strategy";

const swithPolicy = (vm, sourceData) => {
  let data = null;
  switch (vm.$store.state.PolicyControl.SchedulingPolicy) {
    case Policy.FCFS:
      data = FCFS(sourceData);
      break;
    case Policy.SJF:
      data = SJF(sourceData);
      break;
    case Policy.RR:
      data = RR(sourceData);
      break;
    case Policy.HPF:
      data = HPF(sourceData);
      break;
    case Policy.HRRF:
      data = HRRF(sourceData);
      break;
    case Policy.HRRN:
      data = HRRN(sourceData);
      break;
    case Policy.MFQS:
      data = MFQS(sourceData);
      break;
    default:
      throw new Error("类型错误，请检查");
      break;
  }
  return data;
};

class System {
  constructor(vm) {
    this._init(vm);
  }
  _init(vm) {
    const Pcbs = dataList.map(item => new PCB(item));
    const data = swithPolicy(vm, Pcbs);
    data.forEach((item, index) => {
      switch (item.status) {
        case Status.ACTIVITY_READY:
          disp(vm, "addActivityReadyQueue", item);
          break;
        case Status.ACTIVITY_BLOCK:
          disp(vm, "addActivityBlockQueue", item);
          break;
        case Status.STATIC_BLOCK:
          disp(vm, "addStaticBlockQueue", item);
          break;
        case Status.STATIC_READY:
          disp(vm, "addStaticReadyQueue", item);
          break;
        case Status.FINISH:
          disp(vm, "addFinishQueue", item);
          break;
        case Status.RUN:
          disp(vm, "addRunQueue", item);
          break;
        default:
          throw new Error("类型错误，请检查");
          break;
      }
    });
  }
  changePolicy() {}
  createGlobalTimer(vm, State, cb) {
    let timer = null;
    timer = window.setInterval(async () => {
      await disp(vm, "addTime");
    }, 1000);

    if (State.timer == null) {
      disp(vm, "setTimer", timer);
    }
    cb();
  }
  StartScheduling(vm) {
    this.rrExec(vm);
  }
  rrExec(vm) {
    const State = vm.$store.state.System;
    const $Store = vm.$store;
    let first = true;
    let timer = null;
    let timeCache = 0;
    if (State.isStart) {
      const f = async () => {
        if (!State.activityReadyQueue.isEmpty()) {
          if (first) {
            timer = window.setInterval(async () => {
              await disp(vm, "addTime");
            }, 1000);

            if (State.timer == null) {
              disp(vm, "setTimer", timer);
            }
            first = false;
          }
          let out = false;
          let unwatch = vm.$watch(
            "$store.state.System.globalTime",
            async val => {
              //如果当前没有运行中的进程，则创建进程
              if (!out) {
                const obj = new PCB(State.activityReadyQueue.Front());
                if (val > obj.arriveTime) {
                  await disp(vm, "deleteActivityReadyQueue");
                  obj.setStatus(Status.RUN);
                  await disp(vm, "addRunQueue", obj);
                  out = true;
                }
              } else {
                let runObj = State.runQueue.Front();
                // 停止调度
                if (runObj.status !== Status.RUN) {
                  unwatch();
                  await disp(vm, "delRunQueue");
                  f();
                } else if (!runObj.isFinish()) {
                  let runObj1 = new PCB(runObj);
                  //当前是否是时间轮转
                  if (
                    vm.$store.state.PolicyControl.SchedulingPolicy == Policy.RR
                  ) {
                    if (
                      !State.activityReadyQueue.isEmpty() &&
                      timeCache >= State.timeSlice
                    ) {
                      runObj1.setStatus(Status.ACTIVITY_READY);
                      await disp(vm, "delRunQueue");
                      await disp(vm, "addActivityReadyQueue", runObj1);
                      timeCache = 0;
                    } else {
                      runObj1.setElapsedCpuTime(1);
                      timeCache++;
                      await disp(vm, "delRunQueue");
                      await disp(vm, "addRunQueue", runObj1);
                    }
                  } else {
                    runObj1.setElapsedCpuTime(1);
                    await disp(vm, "delRunQueue");
                    await disp(vm, "addRunQueue", runObj1);
                  }
                } else {
                  unwatch();
                  let runObj = new PCB(State.runQueue.Front());
                  runObj.setStatus(Status.FINISH);
                  await disp(vm, "addFinishQueue", runObj);
                  await disp(vm, "delRunQueue");
                  f();
                }
              }
            }
          );
        } else {
          await disp(vm, "setFalseIsStart");
          clearInterval(timer);
          return;
        }
      };
      f();
    }
  }
  create() {}
}
export default System;
