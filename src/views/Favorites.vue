<template>
  <div class="container">
      <h1>Lista de favoritos</h1>

      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 col-lg-3" v-for="(item, index) in gettingFavorites" :key="index">
          <div class="card" style="width: 18rem;">
            <img :src="item.image" class="card-img-top" :alt="item.image">
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">{{item.gender}}</p>
              <a href="#" class="btn btn-primary">Eliminar de favoritos</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  computed: {
    gettingFavorites() {
      return this.$store.getters.sendFavorites;
    }
  }
}
</script>

<style>

</style>