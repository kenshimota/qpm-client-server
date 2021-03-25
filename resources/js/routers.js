import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TestApi from "./components/TestApi";
import SingleBox from "./components/SingleBox";
import VueRouter from "vue-router";

export const router = new VueRouter({
    // mode: 'history',
    linkActiveClass: "is-active",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: "/test",
            name: "TestApi",
            component: TestApi
        },
        {
            path: "/single-box",
            name: "SingleBox",
            component: SingleBox
        },
        {
            path: "/404",
            name: "404",
            component: NotFound
        },
        {
            path: "*",
            redirect: "/404"
        }
    ]
});
