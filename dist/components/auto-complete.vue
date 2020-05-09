<template>
    <autocomplete :placeholder="placeholder" :initValue="value" class="" :classes="{input:'form-control '+className}" :url="url"
        :anchor="anchor" :label="label" :required="required" :on-select="getData" :onInput="onInput" :customHeaders="{ Authorization: 'Bearer '+auth_token,'bearer-name':auth_token_name }">
    </autocomplete>
</template>
<script>
    import Autocomplete from 'vue2-autocomplete-js';
    export default {
        props: {
            url: String,
            anchor: String,
            label: {
                type: String,
                default: function () {
                    return "";
                }
            },
            className:String,
            placeholder: String,
            auth_token_name: String,
            auth_token: String,
            value: {
                type: String,
            },
            required: {
                type: Boolean,
                default: function () {
                    return false;
                }
            }
        },
        components: {
            Autocomplete
        },
        
        methods: {
            onInput: function (text) {
                this.$emit('input', text);
            },
            getData: function (obj) {
                this.$emit('input', obj[this.anchor]);
                this.$emit('selected', obj);
            }
        }
    }

</script>

<style>
    .autocomplete.autocomplete-list {
        border: 1px solid #ccc;
        border-top: 0;
        background: #fff;
        box-shadow: -1px 1px 3px rgba(0, 0, 0, .1);
        text-align: left;
        cursor: default;
        /* core styles should not be changed */
        position: absolute;
        z-index: 9999;
        max-height: 300px;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        text-transform: uppercase;
    }

    .autocomplete.autocomplete.autocomplete-list ul {
        padding: 10px 10px 0px 10px;
    }

    .autocomplete li {
        position: relative;
        line-height: 23px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        cursor: pointer;
    }

    .autocomplete-suggestion b {
        font-weight: normal;
        color: #cf1840;
    }

    .autocomplete-suggestion.selected {
        background: #f0f0f0;
    }

</style>
