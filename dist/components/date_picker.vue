<template>

    <input type="text" v-model="data_value" :placeholder="placeholder" :class="'form-control '+ class_name"
        :required="required" :disabled="disabled" :name="name">

</template>
<script>
    export default {

        props: {
            name: String,
            value: {
                type: [String, Object]
            },
            disabled: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            required: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            placeholder: String,
            class_name: String,

        },
        watch: {
            value: function (val) { 
               $(this.$el).datepicker('setDate',val);

            },
            data_value(value) {
                this.$emit('input', value);
            }
        },
        data: function () {
            return {
                data_value: '',
            }
        },
        mounted() {
            var vm = this;
            $(this.$el).datepicker({
                autoclose: true,
                format: 'yyyy-mm-dd'
            }).on('changeDate', function (ev) {
                vm.data_value = ev.format();
            });

        },
        beforeDestroy() {
            $(this.$el).off('changeDate');
        }
    }

</script>
