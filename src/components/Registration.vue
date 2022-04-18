<template>
    <div class="container">
        <div>
            <h1>iCloudStore Register</h1>
        </div>
        <div>
            <form id="registrationForm">
                <div>
                    <label for="User Id">Email Id:</label> <br>
                    <input type="email" v-model="email" name="email" required>
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="password" name="password" required>
                </div>
                <div>
                    <label for="Password">Verify Password</label> <br>
                    <input type="password" v-model="rePassword" name="rePassword" required->
                </div>
                <input type="submit" @click="registerUser">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Registration',
        data() {
            return {
                email: this.email,
                password: this.password,
                rePassword: this.rePassword,
            }
        },
        methods: {
            registerUser(e) {
                const email = this.email;
                const password = this.password;
                const rePassword = this.rePassword;

                if( password != rePassword) {
                    alert('Your Password is not same as Re entered password.')
                    return false
                }

                const personData = {
                    email: email,
                    password: password,
                }

                // Save to Local Storage
                if (email != null && password != null && rePassword != null ){
                    this.saveTokenToLocalStorage(personData)
                    alert('Congrats, You have successfully regitered.')
                } else {
                    alert('Please fill all the information')
                }

                // Redirect to Login Page -
                this.$router.push({name: 'login'})
            },
            saveTokenToLocalStorage(personData){
                let userData;
                if (localStorage.getItem('User Data') === null){
                    userData = []
                } else {
                    userData = JSON.parse(localStorage.getItem('User Data'))
                }
                userData.push(personData)
                console.log(userData);
                localStorage.setItem('User Data', JSON.stringify(userData))
            }
        }
    }
</script>

<style scoped>
    .container {
        margin:  10rem auto;
        max-width: 30rem;
        padding: 40px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    h1 { 
        text-align: center;
        margin-bottom: 20px;
    }
    label {
        font-size: 20px;
        font-weight: bold;
    }
    input[type=email], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin-top: 1.3rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    input[type=submit]:hover {
        background-color: #45a049;
    }
</style>