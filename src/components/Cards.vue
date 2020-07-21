<template>
  <div class="container">
    <h1 class="my-5">Lista de personajes</h1>

    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 col-lg-3" v-for="(item, index) in gettingCharacters" :key="index"> 
        <div class="card mb-4" style="width: 18rem;">
          <img :src="item.image" class="card-img-top" alt="item.name">
          <div class="card-body bg-dark">
            <h5 class="card-title font-weight-bold text-white text-center py-3">{{item.name}}</h5>
           <div class="d-flex pb-2">
              <!-- Botón Modal 1 'Opinión' -->
              <button type="button" class="btn btn-warning" data-toggle="modal" :data-target="`#modal1-${item.id}`" data-whatever="@mdo">Opinar</button>
             
              <!-- Botón Modal 2 'Ver más' -->
              <button type="button" class="btn btn-outline-success" data-toggle="modal" :data-target="`#modal2-${item.id}`">Ver más</button>
           </div>
          </div>
        </div>

        <!-- Modal 1 'Opinión' -->       
        <div class="modal fade" :id="`modal1-${item.id}`"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" id="recipient-name" placeholder="Ingresa tu nombre" v-model="userName">
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Tu opinión:</label>
                    <textarea class="form-control" id="message-text" placeholder="Escribe un comentario" v-model="userComment"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary mx-3" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success" data-dismiss="modal" data-target="`#modalOpinion-${item.id}`" @click="opinionData(item)">Guardar</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal 2 'Ver más' -->
        <div class="modal fade" :id="`modal2-${item.id}`"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">{{item.name}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>               
              </div>
              <div class="modal-body">
                <div class="d-flex justify-content-center">
                    <div>
                      <img :src="item.image" class="card-img-top" alt="item.name">
                    </div>
                    <div class="col-8 col-sm-6">
                      <p><strong>Status:</strong>{{item.status}}</p>
                      <p><strong>Especie</strong> {{item.species}}</p>
                      <p><strong>Ubicación:</strong>{{item.location.name}}</p>
                      <p><strong>Cantidad de episodios:</strong>{{item.episode.length}}</p>
                      <p><strong>Fecha de creación:</strong>{{item.created}}</p>
                    </div>                 
                </div> 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success" data-dismiss="modal" @click="favoritesData(item)">Guardar en Favoritos</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',

  data() {
    return {
      userName: '',
      userComment: ''
    }
  },

  computed: {
    gettingCharacters() {
      return this.$store.getters.sendCharacters;
    }
  },

  methods: {
    opinionData(item) {
      if(this.userComment.length > 5) {
        let opinionObject = {
        characterName: item.name,
        characterId: item.id,
        user: this.userName,
        comment: this.userComment
      }
      this.$store.dispatch('saveOpinion', opinionObject);
      // Redireccionando a la ruta 'opinions'
      this.$router.push('/opinions');
      } else {
        alert('Debe ingresar datos para guardar un comentario');
      }
    },

    favoritesData(item) {
      let favObject = {
        name: item.name,
        image: item.image,
        gender: item.gender
      }
      this.$store.dispatch('saveFavorites', favObject);
      // Redireccionando a la ruta 'favoritos'
      this.$router.push('/favorites');
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.d-flex {
  justify-content: space-evenly;
}

</style>
