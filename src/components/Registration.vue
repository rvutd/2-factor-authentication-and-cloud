<template>
    <div class="container">
        <div>
            <h1>iCloudStore Register</h1>
        </div>
        <div>
            <form id="registrationForm">
                <div class="flex">
                    <div>
                        <label for="User Id">First Name</label> <br>
                        <input type="email" v-model="firstName" placeholder="John" required>
                    </div>
                    <div>
                        <label for="User Id">Last Name</label> <br>
                        <input type="email" v-model="lastName" placeholder="Doe" required>
                    </div>
                </div>
                <div>
                    <label for="Email Id">Email Id:</label> <br>
                    <input type="email" v-model="email" name="email" placeholder="johnDoe@gmail.com" required>
                </div>
                <div>
                    <label for="Phone Number">Phone Number</label> <br>
                    <input type="tel" v-model="phoneNumber" placeholder="+91 9874321650" required>
                </div>
                <div>
                    <label for="Password">Password</label> <br>
                    <input type="password" v-model="password" placeholder="Enter atleast 8 digit password" required>
                </div>
                <div>
                    <label for="Verify Password">Verify Password</label> <br>
                    <input type="password" v-model="rePassword" placeholder="Re-Enter above password" required>
                </div>
                <div>
                    <label for="Cloud Store Plan">iCloudStore Plan</label> <br>
                    <input type="text" value="Default: Unlimited For 30 Days" disabled>
                </div>
                <input type="submit" @click="createFirebaseUser" value="Register">
            </form>
        </div>
    </div>
</template>

<script>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import { collection, addDoc, getFirestore } from "firebase/firestore"; 
    
    export default {
        name: 'Registration',
        data() {
            return {
                email: this.email,
                password: this.password,
                rePassword: this.rePassword,
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                storePlan: 'Basic',
            }
        },
        methods: {
            async createFirebaseUser(e){
                e.preventDefault();

                if (this.phoneNumber.length !== 10) {
                    alert('Please Enter a valid number!')
                    return false
                } else if (this.password !== this.rePassword) {
                    alert("Entered Passwords are not same.")
                    return false
                }
                
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    this.saveUserDataToFiresStore(user)

                    alert("Congratulations you have successfully registered to iCloudStored")
                    this.$router.push('/login')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
            },
            async saveUserDataToFiresStore(user) {

                const userData = {
                    UID: user.uid,
                    userToken: user.accessToken,
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    fullName: this.firstName + " " + this.lastName,
                    phoneNumber: this.phoneNumber,
                    storePlan: this.storePlan,
                    images: null,
                }

                // Save Data To FireStore -
                const db = getFirestore()
                try {
                    const docRef = await addDoc(collection(db, user.uid), userData);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
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
    input[type=email], input[type=password],
    input[type=tel], input[type=text] {
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

    #registrationForm .flex div:nth-child(1) {
        margin-right: 30px;
    }

    /* Reponsive Styles */
    @media only screen and (max-width: 590px) {
        .container {
            margin: 5rem 20px;
            margin-top: 14rem;
        }
    }
</style>