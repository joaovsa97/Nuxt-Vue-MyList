<template>
  <div>
    <div class="pa-3 container main">
      <CardInfo v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import CardInfo from '@/components/CardInfo.vue'

export default {
  name: 'CardsList',
  comments: {
    CardInfo,
  },
  data() {
    return {
      title: 'Home',
      items: [{}],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  created() {
    this.$store.dispatch('items/getItems').then((response) => {
      this.items = response
    })
  },
  beforeUpdate(){
    this.$store.dispatch('items/getItems').then((response) => {
      this.items = response
    })
  }
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  overflow: hidden;
}
</style>
