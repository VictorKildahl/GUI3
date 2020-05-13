<template>
    <div class="AddExpenses">
        <h1>{{ msg }}</h1>
        <p>A model can add an expense to a job</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'AddExpenses',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
