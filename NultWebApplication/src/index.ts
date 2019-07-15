import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import { NavbarComponent } from "./components/navbar";
import { createRouter } from "./router";

const router = createRouter();
Vue.use(BootstrapVue);
let app = new Vue({
    el: "#app-main",
    router,
    components: {
        "navbar": NavbarComponent
    }
});