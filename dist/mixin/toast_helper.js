export default {
    methods: {
        toast_now: function (message, type) {
            Vue.$toast.open({
                message: message,
                type: type,
                position: 'top-right',
                duration: 5000
            });
        },
    }
}