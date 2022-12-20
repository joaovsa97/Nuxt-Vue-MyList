<template>
  <div>
    <div class="pa-3 container main">
      <CardInfo v-for="item in items" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import CardInfo from '@/components/CardInfo.vue'

export default {
  name: 'Index',
  comments: {
    CardInfo,
  },
  async asyncData({ store }) {
    return {
      items: await store.dispatch('items/getItems'),
    }
  },
  data() {
    return {
      title: 'Home',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
</style>
