<template>
  <v-app dark>
    <NavBar class="mb-3"/>
    <nuxt/>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
export default {
  name: 'DefaultLayout',
  comments:{
    NavBar
  },
  data() {
    return {
      
    }
  }
}
</script>
