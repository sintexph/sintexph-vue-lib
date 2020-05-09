export default {
    methods: {
        remove_from_array: function (array, element) {
            const index = array.indexOf(element);
            array.splice(index, 1);
        }
    }
}
