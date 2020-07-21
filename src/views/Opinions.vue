<template>
<div class="container mt-5 pt-5">

  <div v-if="arrayComments.length > 0">
    <h1 class="mb-5">Opiniones de usuarios</h1>
    <div id="accordion" v-for="(item, index) in arrayComments" :key="index">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Opinión sobre: {{item.characterName}}. Realizado por: {{item.user}}
              </button>
          </h5>
        </div>
    
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body text-justify">
            {{item.comment}}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="alert alert-warning" role="alert" v-else>
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
