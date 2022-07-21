import { createApp } from 'vue'
import { createStore } from "vuex";
import router from "./router";
import App from "./App.vue";

const store = createStore({
    state() {
        return {
            counter: 0,
            baseSalary: false,
            baseCalc: false,
            performCalc: false,
            bonusTest: false,
            test: false,
        };
    },
});

createApp(App).use(store).use(router).mount("#app");

