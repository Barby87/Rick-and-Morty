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

    savingFavObject(state, favReceived) {
      state.favorites.push(favReceived);
    },

    deletingFavorite(state, index) {
      state.favorites.splice(index, 1);
    },

    deletingOpinion(state, id) {
      // compara el valor de id enviado con el id del elemento del array
      let opinion = state.comments.findIndex(value => value.characterId === id);
      state.comments.splice(opinion, 1);
    },

    editingOpinion(state, newCommentReceived) {
      let filterId = state.comments.find(element => element.characterId === newCommentReceived.characterId);
      filterId.user = newCommentReceived.user;
      filterId.comment = newCommentReceived.comment;
    }
  },

  actions: {
    apiData(context, apiInfoReceived) {
      context.commit('receivedApiInfo', apiInfoReceived);
    },

    saveOpinion(context, opinionObjectReceived ) {
      context.commit('savingOpinionObject', opinionObjectReceived);
    },

    saveFavorites(context, favReceived) {
      context.commit('savingFavObject', favReceived);
    },

    deleteFavorite(context, index) {
      context.commit('deletingFavorite', index);
    },

    deleteOpinion(context, id) {
      context.commit('deletingOpinion', id);
    },

    editOpinion(context, newCommentReceived) {
      context.commit('editingOpinion', newCommentReceived);
    }
  }
});
