<template>
  <div class="primary pa-3 d-flex justify-space-around align-center">
    <h3>LISTA DE ANIMES</h3>
    <div>
      <nuxt-link class="black--text warning rounded-sm" to="/">home</nuxt-link>
      <nuxt-link class="black--text success rounded-sm" to="/AddPage"
        >add</nuxt-link
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
