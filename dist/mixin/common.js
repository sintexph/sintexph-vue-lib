export default {
    methods: {
        remove_from_array: function (array, element) {
            var index = array.indexOf(element);
            array.splice(index, 1);
        }
    }
}
