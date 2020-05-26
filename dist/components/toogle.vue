<template>
    <input type="checkbox" :id="'toogle' + this._uid">
</template>
<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            off_text: {
                default: function () {
                    return 'Off';
                }
            },
            on_text: {
                default: function () {
                    return 'On';
                }
            },
            on_style: {
                default: function () {
                    return 'primary';
                }
            },
            
            size: {
                default: function () {
                    return 'normal';
                }
            }
        },
        data: function () {
            return {
                toogle_id: '',
                checked: false,
            }
        },
        mounted : function() {

            var vm = this;
            vm.toogle_id = 'toogle' + vm._uid;

            $("#" + vm.toogle_id).bootstrapToggle({
                on: vm.on_text,
                off: vm.off_text,
                width: vm.data_width,
                onstyle: vm.on_style,
                offstyle: vm.off_style,
                size: vm.size,
            });

            if (vm.value === true) {
                $("#" + vm.toogle_id).bootstrapToggle('on');
            }

            $("#" + vm.toogle_id).change(function () {
                vm.$emit('input', $(this).prop('checked'));
            });
        },
        watch: {
            value: function (val) {
                if (val === true)
                    $("#" + this.toogle_id).bootstrapToggle('on');
                else
                     $("#" + this.toogle_id).bootstrapToggle('off');
            }
        },
        computed: {
            data_width: function ()  {
                var length = this.off_text.length + this.on_text.length;
                return length * 7;
            }
        }
    }

</script>
