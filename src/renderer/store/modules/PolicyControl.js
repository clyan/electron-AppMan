import Policy from "@/model/Policy";
const state = {
  SchedulingPolicy: Policy.FCFS
};

const mutations = {
  FCFS_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.FCFS;
  },
  HPF_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.HPF;
  },
  HRRF_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.HRRF;
  },
  RR_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.RR;
  },
  SJF_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.SJF;
  },
  MFQS_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.MFQS;
  },
  HRRN_SCHEDULINGPOLICY(state) {
    state.SchedulingPolicy = Policy.HRRN;
  }
};
const getters = {
  getSchedulingPolicy: state => {
    return state.SchedulingPolicy;
  }
};
const actions = {
  setFCFS({ commit }) {
    commit("FCFS_SCHEDULINGPOLICY");
  },
  setHPF({ commit }) {
    // do something async
    commit("HPF_SCHEDULINGPOLICY");
  },
  setHRRF({ commit }) {
    // do something async
    commit("HRRF_SCHEDULINGPOLICY");
  },
  setRR({ commit }) {
    // do something async
    commit("RR_SCHEDULINGPOLICY");
  },
  setSJF({ commit }) {
    // do something async
    commit("SJF_SCHEDULINGPOLICY");
  },
  setMFQS({ commit }) {
    commit("MFQS_SCHEDULINGPOLICY");
  },
  setHRRN({ commit }) {
    commit("HRRN_SCHEDULINGPOLICY");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
