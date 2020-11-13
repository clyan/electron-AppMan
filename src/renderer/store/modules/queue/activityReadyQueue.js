import Queue from "@/util/Queue";
const state = {
  activityReadyQueue: new Queue() //活动就绪
};

const getters = {
  activityReadyQueue: state => state.activityReadyQueue.getQueue(),
  arqLength: state => state.activityReadyQueue.length()
};
const mutations = {
  ADD_ACTIVITYREADYQUEUE(state, progress) {
    const activityReadyQueue = Object.assign(
      new Queue(),
      state.activityReadyQueue
    );
    activityReadyQueue.enQueue(progress);
    state.activityReadyQueue = activityReadyQueue;
  },
  DELETE_ACTIVITYREADYQUEUE(state, progress = null) {
    state.activityReadyQueue.deQueue(progress);
    const activityReadyQueue = Object.assign(
      new Queue(),
      state.activityReadyQueue
    );
    state.activityReadyQueue = activityReadyQueue;
  }
};

const actions = {
  addActivityReadyQueue({ commit }, pro) {
    commit("ADD_ACTIVITYREADYQUEUE", pro);
  },
  deleteActivityReadyQueue({ commit }, pro) {
    commit("DELETE_ACTIVITYREADYQUEUE");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
