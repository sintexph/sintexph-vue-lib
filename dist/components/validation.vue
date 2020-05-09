<template>
    <span v-if="errors[field]!==undefined" class="help-block text-red">
        <template v-for="(value,key) in errors[field]" >
           <span :key="key"> {{ value }}<br/></span>
        </template>
        
    </span>
</template>
<script>
    export default {
        props: {
            errors: {
                required: true,
                default () {
                    return []
                }
            },
            field: {
                required: true,
                default () {
                    return '';
                }
            },
        }

    }

</script>
