import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import CreateModel from "./components/CreateModel.vue";
import CreateManager from "./components/CreateManager.vue";
import CreateJob from "./components/CreateJob.vue";
import AddModelToJob from "./components/AddModelToJob.vue";
import RemoveModelFromJob from "./components/RemoveModelFromJob.vue";
import SeeJobs from "./components/SeeJobs.vue";
import AddExpenses from "./components/AddExpenses.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/CreateModel",
            name: "CreateModel",
            component: CreateModel
        },
        {
            path: "/CreateManager",
            name: "CreateManager",
            component: CreateManager
        },
        {
            path: "/CreateJob",
            name: "CreateJob",
            component: CreateJob
        },
        {
            path: "/AddModelToJob",
            name: "AddModelToJob",
            component: AddModelToJob
        },
        {
            path: "/RemoveModelFromJob",
            name: "RemoveModelFromJob",
            component: RemoveModelFromJob
        },
        {
            path: "/SeeJobs",
            name: "SeeJobs",
            component: SeeJobs
        },
        {
            path: "/AddExpenses",
            name: "AddExpenses",
            component: AddExpenses
        },]
});