<template>
  <div class="primary pa-3 text-center">
    <h1 class="mb-1">LISTA DE ANIMES</h1>
    <div>
      <nuxt-link class="black--text warning rounded-sm" to="/"
        >PRINCIPAL</nuxt-link
      >
      <nuxt-link class="black--text success rounded-sm" to="/AddPage"
        >ADICIONAR</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
}
</script>

<style>
a {
  text-decoration: none;
  border: solid 2px black;
  padding: 5px 15px;
  margin: 10px;
}
</style>
