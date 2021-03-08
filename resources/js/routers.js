import Home from "./components/Home";
import NotFound from "./components/NotFound";
import VueRouter from "vue-router";

export const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404',
        },
    ]
});