<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/Login">Login</router-link> |
            <router-link to="/CreateModel">Create Model</router-link> |
            <router-link to="/CreateManager">Create Manager</router-link> |
            <router-link to="/CreateJob">Create Job</router-link> |
            <router-link to="/AddModelToJob">Add Model To Job</router-link> |
            <router-link to="/RemoveModelFromJob">Remove Model From Job</router-link> |
            <router-link to="/SeeJobs">See Jobs</router-link> |
            <router-link to="/AddExpenses">Add Expenses</router-link>
        </div>
        <!-- component matched by the route will render here -->
        <router-view />

    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
</style>



