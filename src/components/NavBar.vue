<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3">
        <div class="container">
            <router-link class="navbar-brand font-weigth-bold ranchers" to='/'>Rick and Morty</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to='/opinions'>Opiniones<span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to='/favorites'>Favoritos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to='/administration'>Administración</router-link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ranchers { 
    font-family: 'Ranchers', cursive;
}

// Importación font-family Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
</style>