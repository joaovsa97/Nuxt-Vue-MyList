<template>
  <div>
    <div class="pa-3 container main">
      <CardInfo v-for="anime in animes" :key="anime.id" :anime="anime"/>
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
      animes: await store.dispatch('animes/getAnime'),
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
