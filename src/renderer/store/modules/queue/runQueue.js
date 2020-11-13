import Queue from "@/util/Queue";

const state = {
  runQueue: new Queue(1) //运行队列
};

const getters = {
  runQueue: state => state.runQueue.getQueue(), //运行队列
  runQueueLength: state => state.runQueue.length()
};
const mutations = {
  ADD_RUNQUEUE(state, progress) {
    const runQueue = new Queue(1);
    runQueue.enQueue(progress);
    state.runQueue = runQueue;
  },
  DELETE_RUNQUEUE(state, progress) {
    state.runQueue.deQueue(progress);
    const runQueue = new Queue(1);
    state.runQueue = runQueue;
  }
};

const actions = {
  addRunQueue({ commit }, pro) {
    commit("ADD_RUNQUEUE", pro);
  },
  delRunQueue({ commit }, pro) {
    commit("DELETE_RUNQUEUE");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
