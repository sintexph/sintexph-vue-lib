<template>
    <transition name="fade">
        <div v-if="show_alert" :class="'alert ontop '+type_alert">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong v-text="title"></strong> {{ message }}
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            timeout: {
                type: Number,
                default: function () {
                    return 1000;
                }
            },
            title: {
                type: String,
                default: function () {
                    return 'Title';
                }
            },
            message: {
                type: String,
                default: function () {
                    return 'Hellow world!';
                }
            },
            type: {
                type: String,
                default: function () {
                    return 'success';
                }
            }
        },
        computed: {
            type_alert: function () {
                let class_type = '';
                switch (this.type) {
                    case 'success':
                        class_type = 'alert-success';
                        break;
                    case 'error':
                        class_type = 'alert-danger';
                        break;
                    case 'info':
                        class_type = 'alert-info';
                        break;
                    case 'warning':
                        class_type = 'alert-warning';
                        break;
                    default:
                        class_type = 'alert-default';
                        break;
                }
                return class_type;
            }
        },
        data: function () {
            return {
                show_alert: false
            }
        },
        methods: {
            show: function () {
                this.show_alert = true;
                this.set_timeout();
            },
            hide: function () {
                this.show_alert = false;
            },
            set_timeout: function () {
                setTimeout(() => {
                    this.show_alert = false;
                }, this.timeout);
            }
        }
    }

</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }

    .ontop {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 30em;


        margin-top: -9em;
        /*set to a negative number 1/2 of your height*/
        margin-left: -15em;
        /*set to a negative number 1/2 of your width*/

    }

</style>
