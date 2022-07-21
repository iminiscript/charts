import { createRouter, createWebHashHistory } from "vue-router";

import charts from "../components/charts.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: charts,
    },
    {
        path: "/fetch-data",
        name: "fetch-data",
        component: () =>
            import("../components/LearningResources/TheTabsData.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
