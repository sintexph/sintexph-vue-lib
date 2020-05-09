<template>
    <input type="text" :id="_uid+'-tag-input'" @keydown.enter.prevent="" data-role="tagsinput" style="width:100%">
</template>
<script>
    export default {
        props: {
            value: {
                type: [Array, String],
            }
        },

        watch: {
            value: function (val) {
                var par = this;
                if (val !== null)
                {
                    if (typeof val === 'string') {
                        var split = val.split(',');
                        split.forEach(function (sval) {
                            $('#' + par.$el.id).tagsinput('add', sval);
                        });
                    } else if (typeof val === 'object') {

                        val.forEach(function (sval) {
                            $('#' + par.$el.id).tagsinput('add', sval);
                        });
                    }
                }


            }
        },
        mounted() {


            this.$nextTick(function () {
                var par = this;

                $('#' + this.$el.id).tagsinput({
                    confirmKeys: [13, 188],
                });
                // Updating the model value if the item is added
                $('#' + this.$el.id).on('itemAdded', function () {
                    par.$emit('input', $(this).val());
                });

                // Updating the model value if the item is removed
                $('#' + this.$el.id).on('itemRemoved', function (event) {
                    par.$emit('input', $(this).val());
                });


                // Prevent from submitting the form if pressed enter
                $('.bootstrap-tagsinput input').on('keypress', function (e) {
                    if (e.keyCode == 13) {
                        e.keyCode = 188;
                        e.preventDefault();
                    };
                });


            });
        }
    }

</script>
<style>
    .bootstrap-tagsinput {
        width: 100% !important;
    }

</style>
