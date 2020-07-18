<template>
  <div class="container">
    <h1>Lista de personajes</h1>

    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 col-lg-3" v-for="(item, index) in gettingCharacters" :key="index"> 
        <div class="card mb-4" style="width: 18rem;">
          <img :src="item.image" class="card-img-top" alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',

  computed: {
    gettingCharacters() {
      return this.$store.getters.sendCharacters;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
