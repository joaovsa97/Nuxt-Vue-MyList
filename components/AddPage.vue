<template>
  <div class="bg-area">
    <div class="container">
      <form class="d-flex flex-column justify-center align-center" action="">
        <input v-model="item.nome" type="text" placeholder="Nome" />
        <input v-model="item.imagem" type="text" placeholder="Imagem URL" />
        <input v-model="item.descricao" type="text" placeholder="Descrição" />
        <div class="buttons">
          <button
            type="submit"
            class="success mt-5 py-2 px-3 rounded-lg"
            @click.stop.prevent="addItem"
          >
            Adicionar
          </button>
          <button
            class="error mt-5 py-2 px-3 rounded-lg"
            @click.stop.prevent="closeModal"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
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
      const data = this.item
      this.$store.dispatch('items/addItem', data)
      .then(this.$emit("closeModal"))
    },
    closeModal(){
      this.$emit("closeModal")
    }
  },
}
</script>

<style scoped>
.bg-area {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.774);
  max-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.buttons{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

input {
  margin: 5px;
  padding: 5px;
  border: solid 1px #00035a;
  background-color: beige;
  width: 400px;
}
</style>
