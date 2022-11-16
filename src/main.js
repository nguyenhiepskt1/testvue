import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component("fa", FontAwesomeIcon);
library.add(fas);
app.mount("#app");
