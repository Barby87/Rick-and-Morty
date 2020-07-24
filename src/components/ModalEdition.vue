<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >Editando opinión: {{infoOpinion.characterName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name-user" class="col-form-label">Tu nombre:</label>
                <input type="text" class="form-control" id="name-user" v-model="newNameUser" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Tu opinión:</label>
                <textarea class="form-control" id="message-text" v-model="newComment"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary mt-3 mx-5" data-dismiss="modal" @click="returnToAdmin">Volver</button>
            <!-- Otra forma botón volver, con router-link demora un poco más -->
            <!-- <router-link to="/administration" tag="button" class="btn btn-secondary">Volver</router-link> -->
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="editComment">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Inicializar variable '$' de jQuery
import $ from "jquery";
export default {
  data() {
    return {
      // Forma directa
      newNameUser: '',
      newComment: '',
      infoOpinion: {}
    }
  },

  // Activando la ventana modal cuando se monte la vista
  mounted() {
    this.infoOpinion = this.$store.getters.sendComments[this.$route.params.index]
    $("#editModal").modal("show");
    this.newNameUser = this.infoOpinion.user;
    this.newComment = this.infoOpinion.comment;
  },

  methods: {
    returnToAdmin() {
      this.$router.push("/administration");
    },

    editComment() {
      let newCommentData = {
        user: this.newNameUser,
        comment: this.newComment,
        index: this.$route.params.index
      };

      if (this.newNameUser || this.newComment) {
        this.$store.dispatch("editOpinion", newCommentData);
        this.$router.push("/administration");
      } else {
        alert("Ingrese datos para modificar");
        this.newNameUser = "";
        this.newComment = "";
      }
    },
  },
};
</script>

<style>
</style>