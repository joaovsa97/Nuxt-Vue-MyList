<template>
  <div class="primary pa-3 text-center">
    <h1 class="mb-1">LISTA DE ANIMES</h1>
    <button @click="openModal">Add</button>
  </div>
</template>
<script>

export default {
  name: 'NavBar',
  methods: {
    openModal() {
      this.$emit('openModal')
    },
  },
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
