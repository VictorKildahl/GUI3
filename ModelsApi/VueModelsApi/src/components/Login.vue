<template>
    <div>
        <p>A worker can login, either as a manager or model.</p>

        <form>
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="email" v-model="form.email" placeholder="Please enter email" />
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="text" v-model="form.password" placeholder="Please enter password" />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="loginApplication">Login</button> &nbsp;&nbsp;
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: function () {
            return {
                form: {
                    email: '',
                    password: ''
                },
                message: ''
            }
        },
        methods: {
            loginApplication() {
                let Login = {};
                Login.email = this.form.email;
                Login.password = this.form.password;
                fetch('/api/Account/login',
                {
                    method: 'POST',
                    body: JSON.stringify(Login),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json().then((token) => {
                    localStorage.setItem("token", token.jwt);
                }
                ).catch(error => alert('Error:', error))); 
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
