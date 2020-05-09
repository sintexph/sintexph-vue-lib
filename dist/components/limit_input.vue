<template>
    <select name="limit" v-model="limit_default_value" class="form-control input-sm">
        <option v-for="(label,key) in limit_labels" :key="key" :value="limit_values[key]">{{ label }}</option>
    </select>
</template>

<script>
    export default {
        props: ['value'],
        watch: {
            limit_default_value: function (val) {
                this.$emit("change", val);
                this.$emit('input', val);
            }
        }
    }
</script>