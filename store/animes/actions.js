export default {
    getAnime(){
        return this.$axios.$get('animes');
    }
}