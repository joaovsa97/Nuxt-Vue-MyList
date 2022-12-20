<template>
  <div id="card" class="rounded-lg">
    <h2>{{ item.nome }}</h2>
    <img :src="item.imagem" alt="" />
    <p>{{ item.descricao }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
  props: {
    item: {
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
  height: 300px;
}
</style>
