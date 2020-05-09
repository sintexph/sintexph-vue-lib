<template>
    <input type="text" v-mask="mask_init" v-model="data_value" @complete="complete" @cleared="cleared" :name="name"
        :class="'form-control '+ class_name" :required="required" :disabled="disabled">
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
                this.data_value = val;
            }
        },
        data: function () {
            return {
                mask: null,
                data_value: '',
                mask_init: {
                    mask: "####-1-##",
                    placeholder: "yyyy-mm-dd",
                    leapday: "-02-29",
                    separator: "-",
                    alias: "yyyy-mm-dd"
                }
            }
        },
        methods: {
            complete: function (data) {
                this.$emit('input', data.target.value);
            },
            cleared: function () {
                this.$emit('input', '');
            }
        },
    }

</script>
