<template>

    <div class="nav-tabs-custom">

        <ul class="nav nav-tabs">
            <li v-for="(tab,key) in tabs" :key="key" :class="tab.active===true?'active':''">
                <a :href="'?tab='+tab.tab_name">{{tab.label }}</a>
            </li>
        </ul>

        <div class="tab-content">
            <div v-for="(tab,key) in tabs" :key="key" :class="tab.active===true?'active':'' + ' tab-pane'">
                <slot :name="tab.tab_name"></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            tabs: {
                type: [Array, Object],
                default: function () {
                    return [];
                }
            }
        },
        mounted : function() {
            //this.tab = this.getAllUrlParams().tab;
        }
    }

</script>
