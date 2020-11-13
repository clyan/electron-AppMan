const state = {
  views: []
};

const mutations = {
  SET_INFOVIEW(state, info) {
    state.views = [...state.views, info];
  },
  ADD_VIEWS(state) {}
};
const getters = {
  getViews: state => state.views
};
const actions = {
  setInfoView({ commit }, info) {
    commit("SET_INFOVIEW");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
