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
const TheAuthor = defineAsyncComponent(() =>
  import("./components/base/TheAuthor.vue")
);

const app = createApp(App);
app.component("the-content", TheContent);
app.component("base-link", BaseLink);
app.component("the-author", TheAuthor);

app.use(store);
app.use(router);
router.isReady().then(() => app.mount("#app"));
