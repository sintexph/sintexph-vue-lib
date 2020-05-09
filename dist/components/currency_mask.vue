<template>
    <input type="text" v-mask="mask_init" :name="name" v-model="data_value" :disabled="disabled" @complete="complete"
        :required="required" :class="'form-control '+class_name">
</template>
<script>
    export default {
        props: ['name', 'value', 'disabled', 'required', 'placeholder', 'class_name'],
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
                    alias: 'currency',
                    digits: '2',
                    prefix: '',
                    autoUnmask: true
                }
            }
        },
        methods: {
            complete: function (data) {
                this.$emit('input', data.target.value);
            }
        },

    }

</script>
