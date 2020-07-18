import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    comments: []
  },

  getters: {
    sendCharacters(state) {
      return state.characters;
    },

    sendComments(state) {
      return state.comments;
    }
  },

  mutations: {
    receivedApiInfo(state, apiInfoReceived) {
      state.characters = apiInfoReceived;
    },

    savingOpinionObject(state, opinionObjectReceived) {
      state.comments.push(opinionObjectReceived);
    }
  },

  actions: {
    apiData(context, apiInfoReceived) {
      context.commit('receivedApiInfo', apiInfoReceived);
    },

    saveOpinion(context, opinionObjectReceived ) {
      context.commit('savingOpinionObject', opinionObjectReceived);
    }
  }
});
