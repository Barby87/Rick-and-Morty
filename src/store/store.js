import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    comments: [],
    favorites: []
  },

  getters: {
    sendCharacters(state) {
      return state.characters;
    },

    sendComments(state) {
      return state.comments;
    },

    sendFavorites(state) {
      return state.favorites;
    }
  },

  mutations: {
    receivedApiInfo(state, apiInfoReceived) {
      state.characters = apiInfoReceived;
    },

    savingOpinionObject(state, opinionObjectReceived) {
      state.comments.push(opinionObjectReceived);
    },

    savingFavObject(state, favObjectReceived) {
      state.favorites.push(favObjectReceived);
    }

  },

  actions: {
    apiData(context, apiInfoReceived) {
      context.commit('receivedApiInfo', apiInfoReceived);
    },

    saveOpinion(context, opinionObjectReceived ) {
      context.commit('savingOpinionObject', opinionObjectReceived);
    },

    saveFavorites(context, favObjectReceived) {
      context.commit('savingFavObject', favObjectReceived);
    }
  }
});
