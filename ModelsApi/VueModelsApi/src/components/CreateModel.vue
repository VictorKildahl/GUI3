<template>
    <div class="CreateModel">
        <h1>{{ msg }}</h1>
        <p>A manager can create a new model</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'CreateModel',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

