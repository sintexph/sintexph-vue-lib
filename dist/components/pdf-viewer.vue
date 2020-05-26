<template>
    <div :id="id"></div>
</template>
<script>
    export default {
        props: ['src'],
        data:function(){
            return {
                id:'',
            }
        },
        mounted : function() {
            this.id='pdfviewer'+this._uid;
            this.$nextTick(function () {
                PDFObject.embed(this.src, "#"+this.id);
            })
        }
    }

</script>
<style>
    .pdfobject-container {
        height: 50rem;
    }

</style>
