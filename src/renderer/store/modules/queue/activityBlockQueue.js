import Queue from "@/util/Queue";

const state = {
  activityBlockQueue: new Queue() //活动阻塞
};

const getters = {
  activityBlockQueue: state => state.activityBlockQueue.getQueue()
};
const mutations = {
  ADD_ACTIVITYBLOCKQUEUE(state, progress) {
    const activityBlockQueue = Object.assign(
      new Queue(),
      state.activityBlockQueue
    );
    activityBlockQueue.enQueue(progress);
    state.activityBlockQueue = activityBlockQueue;
  },
  DELETE_ACTIVITYBLOCKQUEUE(state, progress) {
    state.activityBlockQueue.deQueue(progress);
    const activityBlockQueue = Object.assign(
      new Queue(),
      state.activityBlockQueue
    );
    state.activityBlockQueue = activityBlockQueue;
  }
};

const actions = {
  addActivityBlockQueue({ commit }, pro) {
    commit("ADD_ACTIVITYBLOCKQUEUE", pro);
  },
  delActivityBlockQueue({ commit }, pro) {
    commit("DELETE_ACTIVITYBLOCKQUEUE");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
