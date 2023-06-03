import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from 'vuex';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import store from './store'

library.add(faChevronRight, faChevronLeft)

const app = createApp(App).use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Vuex);
app.use(router);
app.mount("#app");
