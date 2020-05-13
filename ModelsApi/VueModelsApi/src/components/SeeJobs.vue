<template>
    <div class="SeeJobs">
        <h1>{{ msg }}</h1>
        <p>A manager can see a list of all jobs</a>.</p>
        <p>A model can see a list of his/her own jobs</a>.</p>
    </div>
</template>

<script>
    //export default {
    //    name: 'SeeJobs',
    //    props: {
    //        msg: String
    //    }
    //};

    //fetch('./api/Jobs')
    //    .then(
    //        function (response) {
    //            if (response.status !== 200) {
    //                console.log('Looks like there was a problem. Status Code: '
    //                    + response.status);
    //                return;
    //            }
    //            // Examine the text in the response
    //            response.json().then(function (data) {
    //                console.log(data);
    //            });
    //        }
    //    )
    //    .catch(function (err) {
    //        console.log('Fetch Error :-S', err);
    //    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
