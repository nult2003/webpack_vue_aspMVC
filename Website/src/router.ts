import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { subsite } from "../src/util/helpers";
import { HomeComponent } from "./components/home";

Vue.use(VueRouter);
export const createRoutes: () => RouteConfig[] = () => [
    {
        path: subsite("/"),
        name: "Homepage",
        component: HomeComponent
    },
    {
        path: "*",
        redirect: {
            name: "Homepage"
        }
    }
];

export const createRouter = () => new VueRouter({ mode: "history", routes: createRoutes() });