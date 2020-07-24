<template>
  <div class="container">
    <div v-if="arrayOpinions.length > 0">
      <h1 class="my-5">Administración</h1>
      
      <!-- Tabla dinámica-->
      <table class="table table-hover">
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
            <td>
              <button type="button" class="btn btn-danger" data-toggle="modal" :data-target="`#deleteModal-${index}`">
              Eliminar</button>

               <!-- Modal 'Eliminar -->
              <div class="modal fade" :id="`deleteModal-${index}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">¿Deseas eliminar comentario realizado por {{item.user}}?</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Volver</button>
                      <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteComment(index)">Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <button class="btn btn-info" @click="editEvent(index)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Botón para borrar opiniones -->
      <button type="button" class="btn btn-warning" @click="restart">Reiniciar</button>     
    </div>

    <!-- Alert -->
    <div class="alert alert-warning mt-5" role="alert" v-else>
      Aún no existen datos para administrar
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',

  computed: {
    arrayOpinions() {
      return this.$store.getters.sendComments;
    }
  },

  methods: {
    deleteComment(index) {
      this.$store.dispatch('deleteOpinion', index);
    },

    editEvent(index) {
      this.$router.push(`/edit-opinion/:${index}`);
    },

    restart(){
      this.$emit('restartAll');
    }
  }
}
</script>

<style lang="scss" scoped>
tbody {
  tr {
    &:hover {
      background-color: rgb(225, 255, 245)!important;
    }
  }
  
}

@import '../../node_modules/bootstrap/scss/bootstrap.scss'
</style>