<template>
    <div class="container">
        <div>
            <h1>Welcome Back!</h1>
        </div>
        <div>
            <form onsubmit="#">
                <div>
                    <label for="User Id">User Id:</label> <br>
                    <input type="email" v-model="email">
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="password">
                </div>
                <input type="submit" @click="autherizedUser">
            </form>
        </div>
    </div>
</template>


<script>
  export default {
    name: 'Login',
    data() {
        return {
            email: this.email,
            password: this.password,
        }
    },
    methods: {
        autherizedUser(){
            // Getting User Data Set and Sending it for verification -
            const usersDataSet = JSON.parse(localStorage.getItem('User Data'))
            const checkedData = usersDataSet.find(this.findUserInDataSet)

            // Redirect User if Authenticated -
            if (checkedData !== undefined){
                this.$router.push({name: 'ClientView'})
            } else {
                alert('User not found, Please check details entered')
            }
        },
        findUserInDataSet(obj) {
            if(obj.email === this.email && obj.password === this.password) {
                return true
            }
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
 </style>