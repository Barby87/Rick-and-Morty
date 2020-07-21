<template>
  <div class="container">
    <div v-if="arrayOpinions.length > 0">
      <h1 class="my-5">Administración</h1>
      
      <!-- Tabla -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>N°</th>
            <th>Personaje</th>
            <th>Opinión</th>
            <th>Usuario</th>
            <th>Eliminar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrayOpinions" :key="index">
            <td>{{index + 1}}</td>
            <td>{{item.characterName}}</td>
            <td>{{item.comment}}</td>
            <td>{{item.user}}</td>
            <td><button class="btn btn-danger">Eliminar</button></td>
            <td><button class="btn btn-primary">Editar</button></td>
          </tr>
        </tbody>
      </table>      
    </div>

    <!-- Alert -->
    <div class="alert alert-warning mt-5" role="alert" v-else>
      Aún no existen datos para administrar
    </div>
  </div>
</template>

<script>
export default {
  name: 'Administration',

  computed: {
    arrayOpinions() {
      return this.$store.getters.sendComments;
    }
  }

}
</script>

<style>

</style>