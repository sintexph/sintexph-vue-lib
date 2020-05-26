<template>
    <editor v-model="editor_value" :init="init"></editor>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';

    export default {
        props: {
            value: {
                type: [Array, Object, String]
            },
            autofocus: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            paste_image: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            advance_plugins: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            min_height: {
                type: Number,
                default: function () {
                    return 150;
                }
            }
        },
        components: {
            'editor': Editor
        },
        data: function () {
            return {
                editor_value: '',
                init: {
                    force_br_newlines: true,
                    force_p_newlines: false,
                    forced_root_block: '', // Needed for 3.x,
                    oninit: "setPlainText",
                    branding: false,
                    entity_encoding: "raw",
                    toolbar: this.toolbar(),
                    plugins: this.plugins(),
                    font_formats: 'Arial=arial,helvetica,sans-serif;',
                    content_style:'body,p,h3,h2,h1,h5 { font-family: Arial }'+
                       'ol { counter-reset: item }'+
                        'ol li { display: block }'+
                        'ol li:before { content: counters(item, ".") ". "; counter-increment: item }'+
                        'ol[style*="list-style-type: lower-alpha;"] li:before { content: counters(item, ".", lower-alpha) ". "; '+
                        'counter-increment: item }'
                    ,
                    paste_data_images: this.paste_image,
                    autoresize_min_height: this.min_height,

                    setup: function (editor) {
                        editor.on('focus', function () {
                            this.execCommand("fontName", false, "Arial");
                        });
                        // Listen for paste event, add "Paste as plain text" callback
                        editor.on('paste', function (editor, e) {

                            this.execCommand("fontName", false, "Arial");
                        });

                    },
                    menubar: false,
                }
            }
        },
        methods: {
            plugins: function () {
                var plugin = ["autoresize code"];

                if (this.advance_plugins === true) {
                    plugin.push(
                        "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak");
                    plugin.push(
                        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking"
                    );
                    plugin.push(
                        "table contextmenu directionality emoticons template textcolor fullpage textcolor colorpicker textpattern code image imagetools"
                    );
                }
                if (this.paste_image === true)
                    plugin.push("paste");

                return plugin;
            },
            toolbar: function () {
                if (this.advance_plugins === true)
                    return "code | mybutton image media | newdocument | fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor | insertdatetime preview | forecolor backcolor | table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | visualchars visualblocks nonbreaking template pagebreak restoredraft";
                else
                    return 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help';
            }
        },
        watch: {
            editor_value: function (val) {
                this.$emit('input', val);
            },
            value: function (val) {
                this.editor_value = val;
            }
        },
        mounted: function () {

            this.editor_value = this.value;
            this.$nextTick(function () {
                if (this.autofocus === true) {
                    this.init["auto_focus"] = this.$el.id;
                }


            });
        }

    }
</script>