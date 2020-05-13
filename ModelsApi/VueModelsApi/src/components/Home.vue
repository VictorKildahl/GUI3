<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>This is GUI Handin 3</a>.</p>
        <p>Made by Group 4:</p>
        <p>Brian Routhaues Boeg Stjernholm - 20032559</p>
        <p>Lasse Mosel - 201809086</p>
        <p>Marc Pramgaard Warming - 201711205</p>
        <p>Victor Kildahl Petersen - 201805042</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
