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
    },

    deletingFavorite(state, id) {
      // compara el valor de id enviado con el id del elemento del array
      let fav = state.favorites.findIndex(value => value.id === id);
      state.favorites.splice(fav, 1);
    },

    deletingOpinion(state, id) {
      let opinion = state.comments.findIndex(value => value.characterId === id);
      state.comments.splice(opinion, 1);
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
    },

    deleteFavorite(context, id) {
      context.commit('deletingFavorite', id);
    },

    deleteOpinion(context, id) {
      context.commit('deletingOpinion', id);
    }
  }
});
