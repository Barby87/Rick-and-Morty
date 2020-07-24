<template>
  <footer class="bg-dark text-white py-5 d-flex flex-column align-items-center">
      <div class="mb-2">
        <p>Rick and Morty</p>
      </div>

      <div>
        <!-- Íconos de redes sociales-->
        <a href="https://www.facebook.com/RickandMorty" target="_blank">
            <font-awesome-icon class="icon" :icon="[ 'fab', 'facebook-square' ]"/>
        </a>
        <a href="https://www.instagram.com/rickandmorty/?hl=es-la" target="_blank">
            <font-awesome-icon class="icon" :icon="[ 'fab', 'instagram-square' ]"/>
        </a>
        <a href="https://github.com/Barby87/Rick-and-Morty" target="_blank">
            <font-awesome-icon class="icon" :icon="[ 'fab', 'github-square' ]"/>
        </a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
p {
  font-size: 1.5rem;
}

a {
  color: white;
  text-decoration: none;

  .icon {
    font-size: 2rem;
    margin: 0 1rem;
  }

  &:hover {
    color: rgb(169, 245, 250);
  }
}

// $info: #05c5ab;

// @import '../../node_modules/bootstrap/scss/bootstrap.scss'
</style>