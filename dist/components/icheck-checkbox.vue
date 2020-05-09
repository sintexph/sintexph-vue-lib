<template>
    <input type="checkbox" :name="name" class="minimal" :id="_uid+'-icheck'">
</template>
<script>
    import _ from 'icheck';
    export default {
        props: {
            value: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            name: {
                type: String,
                default: function () {
                    return '';
                }
            },
            skin: {
                type: String,
                default: function () {
                    return 'red';
                }
            }
        },

        data: function () {
            return {
                checked: false,
                icheck: null,
            }
        },
        watch: {
            value: function (val) {
                if (val === true)
                    this.icheck.iCheck('check').iCheck('update');
                else
                    this.icheck.iCheck('uncheck').iCheck('update');
            }
        },
        mounted: function () {

            this.$nextTick(function () {
                var vm = this;
                vm.icheck = $('#' + vm.$el.id);
                vm.icheck.iCheck({
                    checkboxClass: 'icheckbox_flat-' + vm.skin,
                    radioClass: 'iradio_flat-' + vm.skin,
                });
                vm.icheck.on('ifChanged', function (e) {
                    vm.checked = this.checked;
                    vm.$emit('input', vm.checked);
                    vm.$emit('changed', vm.checked);
                    if (vm.checked === true)
                        vm.$emit('checked');
                    else
                        vm.$emit('unchecked');
                });

                if (vm.value === true) {

                    vm.icheck.iCheck('check').iCheck('update');
                }


            });


        }
    }

</script>
