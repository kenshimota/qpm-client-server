/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import Vue from "vue";
window.Vue = Vue;

const { QPM } = require("qpm-client-js");
window.QPM = QPM;

if (!localStorage["client-qpm"] == false)
    window.ClientQPM = QPM(JSON.parse(localStorage["client-qpm"]));

/*// esta es la variable cliente
const Client = QPM({
    "username": "admin_lin001", // username
    "password": "koona001", // password
    "server": "http://45.79.44.19:8888"  // link and port the server
});

window.ClientQPM = Client;*/

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import { router } from "./routers";
import App from "./components/App";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/window.css";
import "vue-code-highlight/themes/prism-okaidia.css";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueCodeHighlight);

router.beforeEach((to, from, next) => {
    if (
        to.path != "/" &&
        to.path != "/home" &&
        !window.ClientQPM &&
        to.path != "/webgl"
    )
        next({ path: "/" });
    else next();
});

const app = new Vue({
    el: "#app",
    router,
    components: { App },
    vuetify: new Vuetify()
});

window.appInstance = app;
