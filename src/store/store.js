import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    comments: [],
    favorites: [],
    searching: ''
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

    deletingOpinion(state, index) {
      // compara el valor de id enviado con el id del elemento del array
      console.time("Duración");
      state.comments.splice(index, 1);
      console.timeEnd("Duración");
    },

    editingOpinion(state, newCommentReceived) {
      // Modificando valores del objeto
      state.comments[newCommentReceived.index].user = newCommentReceived.user;
      state.comments[newCommentReceived.index].comment = newCommentReceived.comment;
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

    deleteOpinion(context, index) {
      context.commit('deletingOpinion', index);
    },

    editOpinion(context, newCommentReceived) {
      context.commit('editingOpinion', newCommentReceived);
    }
  }
});
