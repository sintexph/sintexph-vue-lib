<template>
    <select :class="class_name" :style="style_name" :placeholder="placeholder">
    </select>
</template>

<script>
    export default {
        props: {
            options: {
                type: [Object, Array],
                default () {
                    return null;
                }
            },
            class_name: String,
            style_name: String,
            value: {
                type: [Object, Array, String, Number],
                default () {
                    return null;
                }
            },
            url: {
                type: [String],
                default () {
                    return null;
                }
            },
            multiple: Boolean,
            placeholder: String,
            disabled: Boolean,
        },
        data() {
            return {
                select_value: null,
            }
        },
        mounted: function () {

            this.$nextTick(function () {
                var vm = this

                if (vm.url) {
                    $(this.$el)
                        // init select2
                        .select2({
                            ajax: {
                                dataType: 'json',
                                url: vm.url
                            },
                            placeholder: vm.placeholder,
                            multiple: this.multiple,
                            allowClear: true
                        })
                        // emit event on change.
                        .on('select2:select', function () {
                            vm.select_value = $(this).val();
                        }).on('select2:unselect', function () {
                            vm.select_value = $(this).val();
                        });

                } else {
                    $(this.$el)
                        // init select2
                        .select2({
                            placeholder: vm.placeholder,
                            data: this.options,
                            multiple: this.multiple,
                            allowClear: true
                        })
                        // emit event on change.
                        .on('select2:select', function () {
                            vm.select_value = $(this).val();
                        }).on('select2:unselect', function () {
                            vm.select_value = $(this).val();
                        });
                }

                $(this.$el).prop("disabled", vm.disabled);
            });
        },
        watch: {
            value: {
                deep: true,
                handler: function (value) {
                    this.select_value = value;
                    $(this.$el).val(value).trigger('change');
                }
            },
            select_value: {
                deep: true,
                handler(value) {
                    this.$emit('input', value);
                    this.$emit('changed');
                }
            },
            options: function (options) {
                // update options
                $(this.$el).empty().select2({
                    data: options
                })
                $(this.$el).val(this.value).trigger('change');
            },
            disabled: function (val) {
                $(this.$el).prop("disabled", val);
            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy');
        }
    }

</script>
