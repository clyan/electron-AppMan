import Queue from "@/util/Queue";
const state = {
  finishQueue: new Queue() //完成队列
};

const getters = {
  finishQueue: state => state.finishQueue.getQueue()
};
const mutations = {
  ADD_FINISHQUEUE(state, progress) {
    const finishQueue = Object.assign(new Queue(), state.finishQueue);
    finishQueue.enQueue(progress);
    state.finishQueue = finishQueue;
  },
  DELETE_FINISHQUEUE(state, progress) {
    state.finishQueue.deQueue();
    const finishQueue = Object.assign(new Queue(), state.finishQueue);
    state.finishQueue = finishQueue;
  }
};

const actions = {
  addFinishQueue({ commit }, pro) {
    commit("ADD_FINISHQUEUE", pro);
  },
  delFinishQueue({ commit }, pro) {
    commit("DELETE_FINISHQUEUE");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
