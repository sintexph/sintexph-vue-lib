window.Vue = require('vue');
window.axios = require('axios');
require('es6-promise').polyfill();

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueToast);

const VueInputMask = require('vue-inputmask').default
import toastHelper from './dist/mixin/toast_helper.js'
import httpAlert from './dist/mixin/http_alert.js'
import waitDialog from './dist/mixin/wait_dialog.js'
import limitData from './dist/mixin/limit_data.js'
import urlHelper from './dist/mixin/url.js'
import common from './dist/mixin/common.js';

window.toastHelper = toastHelper;
window.httpAlert = httpAlert;
window.waitDialog = waitDialog;
window.limitData = limitData;
window.urlHelper = urlHelper;
window.common = common;


Vue.mixin(waitDialog);
Vue.use(VueInputMask)

import pdfViewer from './dist/components/pdf-viewer.vue';
import select2 from './dist/components/select2.vue';
import datatable from './dist/components/datatable.vue';
import inputFile from './dist/components/file_input.vue'
import tiny from './dist/components/editor.vue'
import modal from './dist/components/modal.vue'
import dateMask from './dist/components/date_mask.vue'
import currencyMask from './dist/components/currency_mask.vue'
import inputTag from './dist/components/tag.vue'
import inputLimit from './dist/components/limit_input.vue'
import autoComplete from './dist/components/auto-complete.vue'
import icheckCheckbox from './dist/components/icheck-checkbox.vue'
import icheckRadio from './dist/components/icheck-radio.vue'
import tabs from './dist/components/tabs.vue';
import validation from './dist/components/validation.vue';
import datePicker from './dist/components/date_picker.vue';
import toogle from './dist/components/toogle.vue';

Vue.component('pdf-viewer', pdfViewer);
Vue.component('select2', select2);
Vue.component('datatable', datatable).mixin(limitData);
Vue.component('input-file', inputFile);
Vue.component('tiny-editor', tiny);
Vue.component('modal', modal);
Vue.component('date-mask', dateMask);
Vue.component('input-tag', inputTag);
Vue.component('input-limit', inputLimit).mixin(limitData);
Vue.component('input-autocomplete', autoComplete);
Vue.component('icheck-checkbox', icheckCheckbox);
Vue.component('icheck-radio', icheckRadio);
Vue.component('tabs', tabs);
Vue.component('currency-mask', currencyMask);
Vue.component('validation', validation);
Vue.component('date-picker', datePicker);
Vue.component('toogle', toogle);