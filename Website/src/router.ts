import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { subsite } from "../src/util/helpers";
import { HomeComponent } from "./components/home";
import { CategoryComponent } from "./components/category";
import { DetailsComponent } from "./components/details";

Vue.use(VueRouter);
export const createRoutes: () => RouteConfig[] = () => [
    {
        path: subsite("/"),
        name: "Homepage",
        component: HomeComponent
    },
    {
        path: subsite("/category"),
        name: "Category",
        component: CategoryComponent
    },
    {
        path: subsite("/category_details"),
        name: "Details",
        component: DetailsComponent
    },
    {
        path: "*",
        redirect: {
            name: "Homepage"
        }
    }
];

export const createRouter = () => new VueRouter({ mode: "history", routes: createRoutes() });