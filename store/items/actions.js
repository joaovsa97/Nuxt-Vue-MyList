export default {
    getItems(){
        return this.$axios.$get('item');
    },
    addItem(data){
        return this.$axios.$post('item', data);
    },
}