import Queue from "@/util/Queue";
const state = {
  staticReadyQueue: new Queue(), //静止就绪
  staticBlockQueue: new Queue() //静止阻塞
};

const getters = {
  pendingQueue: state =>
    state.staticReadyQueue.getQueue().concat(state.staticBlockQueue.getQueue())
};
const mutations = {
  ADD_STATICREADYQUEUE(state, progress) {
    //静态就绪

    const staticReadyQueue = Object.assign(new Queue(), state.staticReadyQueue);
    staticReadyQueue.enQueue(progress);
    state.staticReadyQueue = staticReadyQueue;
  },
  DELETE_STATICREADYQUEUE(state, progress) {
    state.staticReadyQueue.deQueue(progress);
    const staticReadyQueue = Object.assign(new Queue(), state.staticReadyQueue);
    state.staticReadyQueue = staticReadyQueue;
  },
  ADD_STATICBLOCKQUEUE(state, progress) {
    const staticBlockQueue = Object.assign(new Queue(), state.staticBlockQueue);
    staticBlockQueue.enQueue(progress);
    state.staticBlockQueue = staticBlockQueue;
  },
  DELETE_STATICBLOCKQUEUE(state, progress) {
    state.staticBlockQueue.deQueue(progress);
    const staticBlockQueue = Object.assign(new Queue(), state.staticBlockQueue);
    state.staticBlockQueue = staticBlockQueue;
  }
};

const actions = {
  addStaticReadyQueue({ commit }, pro) {
    commit("ADD_STATICREADYQUEUE", pro);
  },
  delStaticReadyQueue({ commit }, pro) {
    commit("DELETE_STATICREADYQUEUE");
  },
  addStaticBlockQueue({ commit }, pro) {
    commit("ADD_STATICBLOCKQUEUE", pro);
  },
  delStaticBlockQueue({ commit }, pro) {
    commit("DELETE_STATICBLOCKQUEUE");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
