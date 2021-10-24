import Vue from 'vue';
import App from './App.vue'
import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './reset/reset.css';

Vue.use(VueCookies)

new Vue({
    el: '#app',
    render: h => h(App)
});