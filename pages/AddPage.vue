<template>
  <div class="container">
    <form class="d-flex flex-column justify-center align-center" action="">
      <input v-model="item.nome" type="text" placeholder="Nome" />
      <input v-model="item.imagem" type="text" placeholder="Imagem URL" />
      <input v-model="item.descricao" type="text" placeholder="Descrição" />
      <button
        type="submit"
        class="success mt-5 py-2 px-3 rounded-lg"
        @click.stop.prevent="addItem"
      >
        Adicionar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPage',

  async asyncData({ store }) {
    return {
      items: await store.dispatch('items/getItems'),
    }
  },

  data() {
    return {
      title: 'Add Page',
      item: {
        nome: '',
        imagem: '',
        descricao: '',
      },
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  methods: {
    addItem() {
      const data = this.item;
      this.$store.dispatch('items/addItem', data)
      .then(this.$router.push('/'));
    },
  },
}
</script>

<style scoped>
input {
  margin: 5px;
  padding: 5px;
  border: solid 1px #00035a;
  background-color: beige;
  width: 400px;
}
</style>
