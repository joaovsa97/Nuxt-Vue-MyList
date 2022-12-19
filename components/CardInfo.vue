<template>
  <div id="card" class="rounded-lg">
    <h2>{{ anime.nome }}</h2>
    <img :src="anime.imagem" alt="" />
    <p>{{ anime.descricao }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
  props: {
    anime: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<style>
#card {
  text-align: center;
  width: 200px;
  color: black;
  background-color: rgb(198, 157, 228);
}
#card img {
  width: 100%;
}
</style>
