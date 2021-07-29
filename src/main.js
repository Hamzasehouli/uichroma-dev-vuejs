import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const TheContent = defineAsyncComponent(() =>
  import("./components/TheContent.vue")
);
const BaseLink = defineAsyncComponent(() =>
  import("./components/base/BaseLink.vue")
);

const app = createApp(App);
app.component("the-content", TheContent);
app.component("base-link", BaseLink);
app.use(store);
app.use(router);
app.mount("#app");
