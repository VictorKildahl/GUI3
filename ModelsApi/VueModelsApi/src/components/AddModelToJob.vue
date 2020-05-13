<template>
    <div class="AddModelToJob">
        <h1>{{ msg }}</h1>
        <p>A manager can add a model to a job</a>.</p>
        <p>There can be more than one model at the same job</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'AddModelToJob',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
