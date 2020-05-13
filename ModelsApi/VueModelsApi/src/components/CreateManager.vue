<template>
    <div class="CreateManager">
        <h1>{{ msg }}</h1>
        <p>A manager can create a new manager</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'CreateManager',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

