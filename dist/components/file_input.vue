<template>
    <input type="file" ref="fileInput" :class="class_name" @change="input_file_change" :accept="accept"
        :multiple="multiple" :required="required">
</template>

<script>
    export default {
        props: {
            accept: {
                type: String,
            },
            class_name: {
                type: String
            },
            value: {
                type: [String, Array, Object, FileList, File]
            },
            multiple: {
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
            }
        },

        methods: {
            input_file_change: function (e) {
                var files = null;
                if (this.multiple === true) {
                    files = e.target.files || e.dataTransfer.files;

                } else {
                    files = e.target.files[0] || e.dataTransfer.files[0];
                }
                this.$emit('input', files);

            }
        },
        watch: {
            value: {
                deep: true,
                handler: function (val) {
                    if (val === null)
                        this.$refs.fileInput.value = "";
                }
            }
        }
    }

</script>
