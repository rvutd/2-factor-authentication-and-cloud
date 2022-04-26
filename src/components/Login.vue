<template>
    <div class="container">
        <div>
            <h1>Welcome Back!</h1>
        </div>
        <div>
            <form>
                <div>
                    <label for="User Id">Email Id:</label> <br>
                    <input type="email" placeholder="johnDoe@gmail.com" v-model="email">
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" placeholder="xyz^_89" v-model="password">
                </div>
                <input type="submit" @click="authFirebaseUser" value="Login">
            </form>
        </div>
    </div>
</template>


<script>

    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export default {
    name: 'Login',
    data() {
        return {
            email: this.email,
            password: this.password,
        }
    },
    methods: {
        authFirebaseUser(e){
            e.preventDefault();
            
            const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    // Get Verification Code & Send it on Email Id -
                    const verifyCode = this.sendVerificationCode(e)

                    // Save Creds for 2nd Authentication & further use -
                    const userData = {
                        email: user.email,
                        uid: user.uid,
                        verifyCode: verifyCode,
                    }

                    localStorage.setItem('User Creds', JSON.stringify(userData))

                    // Redirect for second verification -
                    this.$router.push({name: 'SecondAuthenticationView'})
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        },
        sendVerificationCode(e) {
            e.preventDefault();
            // Generates Code -
            const verifyCode = Math.floor(100000 + Math.random() * 900000)
            const subject = 'iCloudStorage 2 Factor Verification'
            const msg = `Hello, here is your verification code ${verifyCode}`

            // Send Email -
            Email.send({
                Host : "smtp.gmail.com",
                Username : "iCloudStore.rvutd@gmail.com",
                Password : "logIN@cloud",
                To : this.email,
                From : "iCloudStore.rvutd@gmail.com",
                Subject : subject,
                Body : msg,
            }).catch(err => alert(err))

            return verifyCode
        }
    },
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

        /* Reponsive Styles */
    @media only screen and (max-width: 590px) {
        .container {
            margin: 5rem 20px;
            margin-top: 14rem;
        }
    }

 </style>