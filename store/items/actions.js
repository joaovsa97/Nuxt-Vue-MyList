export default {
    getItems(){
        return this.$axios.$get('item');
    },
    addItem(context, data){
        return this.$axios.$post('item', data);
    },
}