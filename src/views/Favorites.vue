<template>
  <div class="container">
    <div v-if="arrayFavorites.length > 0">
      <h1 class="my-5">Lista de favoritos</h1>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="(item, index) in arrayFavorites" :key="index">
          <div class="card mb-4">
            <img :src="item.image" class="card-img-top" :alt="item.image">
            <div class="card-body text-center">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">{{item.gender}}</p>
              <a href="#" class="btn btn-danger" @click="deleteFav(item.id)">Eliminar de favoritos</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert -->
    <div class="alert alert-warning mt-5" role="alert" v-else>
      Aún no existen favoritos seleccionados por el usuario
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  computed: {
    arrayFavorites() {
      return this.$store.getters.sendFavorites;
    }
  },

  methods: {
    deleteFav(id) {
      if(confirm('¿Desea eliminar?')) {
        this.$store.dispatch('deleteFavorite', id);
      }
    }
  }
}
</script>

<style>

</style>