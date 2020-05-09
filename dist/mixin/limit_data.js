export default {
    data: function () {
        return {
            limit_default_value: 20,
            limit_values: [20, 40, 60, 80, 100, 500, 1000, -1],
            limit_labels: ['20', '40', '60', '80', '100', '500', '1000', 'All'], //Must be the same with the datatable limits
        }
    }
}