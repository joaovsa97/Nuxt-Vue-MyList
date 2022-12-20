<template>
  <div id="card" class="rounded-lg">
    <div class="text-center d-flex align-center justify-center mt-2">
      <h3>{{ item.nome }}</h3>
    </div>
    <div class="imagem">
      <img :src="item.imagem" alt="" />
    </div>
    <div class="text-center">
      <h4>{{ item.descricao }}</h4>
    </div>
    <div class="pa-1">
      <button><img src="../assets/visibility_black_24dp.svg" alt=""></button>
      <button><img src="../assets/delete_black_24dp.svg" alt=""></button>
    </div>
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
.imagem img {
  width: 100%;
  height: 280px;
}
</style>
