import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight,faChevronLeft)

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
createApp(App).use(router).mount("#app");
