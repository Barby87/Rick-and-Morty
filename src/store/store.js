import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: []
  },

  getters: {
    sendCharacters(state) {
      return state.characters;
    }
  },

  mutations: {
    receivedApiInfo(state, apiInfoReceived) {
      state.characters = apiInfoReceived;
    }
  },

  actions: {
    apiData(context, apiInfoReceived) {
      context.commit('receivedApiInfo', apiInfoReceived);
    }
  }
});
