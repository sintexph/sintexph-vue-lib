export default {

    methods: {
        alert_success: function (response) {
            this.toast_now(response.data.message, 'success');
        },
        alert_failed: function (error) {
            this.message_failed(error);
        },
        message_failed: function (error) {
            let vm = this;
            vm.toast_now(error.response.data.message, 'error');

            let validation_errors = error.response.data.errors;
            if (validation_errors !== undefined) {
                Object.keys(validation_errors).forEach(function (key) {
                    vm.toast_now(validation_errors[key][0], 'error');
                });
            }
        },
        message_success: function (response) {
            return response.data.message;

        }

    }
}
