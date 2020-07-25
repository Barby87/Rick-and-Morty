<template>
  <div class="container my-5">
    <div v-if="arrayComments.length > 0">
      <h1 class="my-5">Opiniones de usuarios</h1>
      <div :id="`accordion-${index}`" v-for="(item, index) in arrayComments" :key="index">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse-${index}`" aria-expanded="true" :aria-controls="`collapse-${index}`">
                  Opinión sobre: <strong>{{item.characterName}}</strong> | Realizado por: <strong>{{item.user}}</strong>
                </button>
            </h5>
          </div>
      
          <div :id="`collapse-${index}`" class="collapse px-3" aria-labelledby="headingOne" :data-parent="`#accordion-${index}`">
            <div class="card-body text-justify">
              {{item.comment}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert -->
    <div class="alert alert-warning mt-5" role="alert" v-else>
      Aún no existen opiniones de los usuarios
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opinions',

  computed: {
    arrayComments() {
      return this.$store.getters.sendComments;
    }
  },
}
</script>

<style scoped lang="scss">

.btn-link {
    // font-weight: bold!important;
    color: rgb(4, 1, 148)!important;
    text-decoration: none!important;

    &:hover {
      color: #000000!important;
      text-decoration: none!important;
    }
}

</style>
