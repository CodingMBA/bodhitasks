import { LocalStorage } from "quasar";

const state = {
  settings: {
    show12HrFormat: false,
    showTasksInOneList: false
  }
};

const mutations = {
  setShow12HrFormat(state, value) {
    state.settings.show12HrFormat = value;
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value;
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  }
};

const actions = {
  setShow12HrFormat({ commit, dispatch }, value) {
    commit("setShow12HrFormat", value);
    dispatch("saveSettings");
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit("setShowTasksInOneList", value);
    dispatch("saveSettings");
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem("settings");
    if (settings) {
      commit("setSettings", settings);
    }
  }
};

const getters = {
  settings: state => state.settings
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
