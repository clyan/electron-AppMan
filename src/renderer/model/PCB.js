import Policy from "./Policy";
import Status from "./ProgressStatus";
/**
 * 含如下信息：进程名、 进程 ID 、 优先数、到达时间、 需要运行时间、已用 CPU时间、进程状态 阻塞原因
 */
class PCB {
  constructor(props) {
    this.pid = props.pid || 0; //进程PID
    this.name = props.name || ""; //进程名
    this.priority = props.priority || 1; //优先级
    this.arriveTime = props.arriveTime; //到达时间
    this.needTime = props.needTime; //需要运行的时间
    this.status = props.status || Status.ACTIVITY_READY; //进程状态
    this.elapsedCpuTime = props.elapsedCpuTime || 0; //已用Cpu时间
    this.ioTime = props.ioTime || 0; //运行io时间
    this.blockReason = props.blockReason || ""; //阻塞原因
  }
  setIoTime(val) {
    this.ioTime = val;
  }
  setStatus(val) {
    this.status = val;
  }
  setElapsedCpuTime(val) {
    this.elapsedCpuTime += val;
  }
  isFinish() {
    if (this.needTime - this.elapsedCpuTime == 0) return true;
    return false;
  }
  toPending() {
    const _self = this;
    const oldStatus = _self.status;
    switch (_self.status) {
      case Status.ACTIVITY_READY:
        _self.setStatus(Status.STATIC_READY);
        break;
      case Status.ACTIVITY_BLOCK:
        _self.setStatus(Status.STATIC_BLOCK);
        break;
      case Status.RUN:
        _self.setStatus(Status.STATIC_READY);
        break;
    }
    return oldStatus;
  }
  toReady() {
    const _self = this;
    const oldStatus = _self.status;
    switch (_self.status) {
      case Status.STATIC_READY:
        _self.setStatus(Status.ACTIVITY_READY);
        break;
      case Status.STATIC_BLOCK:
        _self.setStatus(Status.ACTIVITY_BLOCK);
        break;
      case Status.ACTIVITY_BLOCK:
        _self.setStatus(Status.ACTIVITY_READY);
        break;
    }
    return oldStatus;
  }
}
export default PCB;
