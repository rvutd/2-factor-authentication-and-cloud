<template>
    <section class="container">
        <h1>iCloudStore Verification</h1>
        <hr>
        <form>
            <div>
                <label for="Verification">We have sended verification code to your Email Id: "{{ email }}"</label>
                <input type="tel" placeholder="Enter Verification Code" v-model="enteredCode">
                <input type="submit" @click="verifyAuthCode">
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'SecondAuthenticationView',
        methods: {
            verifyAuthCode(e) {
                e.preventDefault();
                console.log(this.verifyCode, this.enteredCode);
                if (this.verifyCode === Number(this.enteredCode)){
                    alert('Authentication Successfull!, You will be redirected to Dashboard.')
                    this.$router.push({name: 'ClientView'})
                } else {
                    alert('Entered Verification Code is Wrong')
                }
            },
        },
        data() {
            return {
                email: '',
                verifyCode: 0,
                enteredCode: null,
            }
        },
        created() {
            const data = JSON.parse(localStorage.getItem('User Creds'));
            this.email = data.email;
            this.verifyCode = data.verifyCode
            console.log(this.email, this.verifyCode);

            window.addEventListener('load', ()=> {
                window.addEventListener('beforeunload', () => {
                    return 'Your Authentication is not completed yet.'
                })
            })
        }
    }
</script>

<style scoped>
    hr {
        border-top: 0px solid rgb(241, 238, 238);
        margin-bottom: 20px;
    }

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
    input[type=tel] {
        width: 100%;
        padding: 12px 20px;
        margin-top: 12px;
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