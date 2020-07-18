<template>
  <div class="container mt-5 pt-5">
    <h1 class="mb-5">Lista de personajes</h1>

    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 col-lg-3" v-for="(item, index) in gettingCharacters" :key="index"> 
        <div class="card mb-4" style="width: 18rem;">
          <img :src="item.image" class="card-img-top" alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>

           <div class="d-flex">
              <!-- Botón que Modal 'Opinión' -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo">Opinar</button>
             
              <!-- Botón Modal 'Ver más' -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">Ver más</button>
           </div>
          </div>
        </div>

        <!-- Modal opinión -->       
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <button type="button" class="btn btn-primary" @click="opinionData(item)">Guardar</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal 'Ver más' -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
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
                <button type="button" class="btn btn-primary">Guardar en Favoritos</button>
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
      let opinionObject = {
        characterName: item.name,
        user: this.userName,
        comment: this.userComment
      }
      this.$store.dispatch('saveOpinion', opinionObject)
      // Redireccionando a la ruta 'opinions'
      this.$router.push('/opinions');
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

.d-flex {
  justify-content: space-evenly;
}
</style>
