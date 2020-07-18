<template>
<div class="container mt-5 pt-5">
  <h1 class="mb-5">Opiniones de usuarios</h1>
  <div id="accordion" v-for="(item, index) in gettingComments" :key="index">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Opinión sobre: {{item.characterName}}. Realizado por: {{item.user}}
          </button>
        </h5>
      </div>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          {{item.comment}}
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Opinions',

  computed: {
    gettingComments() {
      return this.$store.getters.sendComments;
    }
  },
}
</script>
