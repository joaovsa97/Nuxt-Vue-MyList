export default {
    getItems(){
        return this.$axios.$get('item');
    },
    addItem(context, data){
        return this.$axios.$post('item', data);
    },
    updateItem(context, {id, data}){
        return this.$axios.$patch(`item/${id}`, data);
    },
    deleteItem(context, id){
        return this.$axios.$delete(`item/${id}`);
    },
}