<template>
  <v-app dark>
    <div id="content">
      <NavBar class="mb-3" @openModal="openModal" />
      <CardsList @deleteItem="deleteItem" @updateList="updateList" />
      <AddPage v-if="visibility" @closeModal="closeModal" />
    </div>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import AddPage from '~/components/AddPage.vue'
import CardsList from '~/components/CardsList.vue'

export default {
  name: 'DefaultLayout',
  comments: {
    NavBar,
    AddPage,
    CardsList,
  },
  data() {
    return {
      visibility: false,
    }
  },
  methods: {
    openModal() {
      this.visibility = !this.visibility
      if (this.visibility) {
        document.getElementById('content').style.height = '100vh'
        document.getElementById('content').style.overflow = 'hidden'
      }
    },
    updateList() {
      this.$store.dispatch('items/getItems').then((response) => {
        this.items = response
      })
    },
    closeModal() {
      this.visibility = false
      document.getElementById('content').style.height = '100%'
      document.getElementById('content').style.overflow = 'auto'
    },
    deleteItem(id) {
      this.$store.dispatch('items/deleteItem', id)
    },
  },
}
</script>
<style>
#content {
  width: 100vw;
  height: 100%;
}
</style>
