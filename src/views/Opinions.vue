<template>
<div class="container mt-5 pt-5">

  <div v-if="arrayComments.length > 0">
    <h1 class="my-5">Opiniones de usuarios</h1>
    <div :id="`accordion-${item.characterId}`" v-for="(item, index) in arrayComments" :key="index">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" :data-target="`#collapse-${item.characterId}`" aria-expanded="true" :aria-controls="`collapse-${item.characterId}`">
                Opinión sobre: {{item.characterName}} | Realizado por: {{item.user}}
              </button>
          </h5>
        </div>
    
        <div :id="`collapse-${item.characterId}`" class="collapse show px-3" aria-labelledby="headingOne" :data-parent="`#accordion-${item.characterId}`">
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
    font-weight: bold!important;
    color: #000000!important;
    text-decoration: none!important;
}

.btn-link:hover {
    color: #0a5db6!important;
    text-decoration: none!important;
}

</style>
