<template>
  <div id="card" class="rounded-lg">
    <div class="text-center d-flex align-center justify-center mt-2 title">
      <h3>{{ item.nome }}</h3>
    </div>
    <div class="imagem">
      <img :src="item.imagem" alt="" />
    </div>
    <div class="text-center description">
      <h4>{{ item.descricao }}</h4>
    </div>
    <div class="pa-1">
      <button>
        <img src="../assets/icons/visibility_black_24dp.svg" alt="" />
      </button>
      <button @click="deleteItem()">
        <img src="../assets/icons/delete_black_24dp.svg" alt="" />
      </button>
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
  methods: {
    deleteItem() {
      // console.log(this.item.id)
      // this.$emit("deleteItem", this.item.id)
      this.$store.dispatch("items/deleteItem", this.item.id)
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
.title {
  height: 40px;
}
.imagem img {
  width: 100%;
  height: 240px;
}
.description {
  height: 20px;
}
</style>
