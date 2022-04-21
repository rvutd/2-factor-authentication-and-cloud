<template>
    <header class="navBar">
        <div class="flex container">
            <nav class="left">
                <ul class="flex">
                    <li>
                        <h1>iCloudStore</h1>
                    </li>
                    <li><a href="#" @click="$router.push('/')">Home</a></li>
                    <li><a href="#features">Upload</a></li>
                    <li><a href="#price">Your Data</a></li>
                </ul>
            </nav>
            <nav class="right">
                <button class="primary">Profile</button>
                <button class="btn-primary" @click="logoutUser">Logout</button>
            </nav>
        </div>
    </header>
</template>

<script>
    import { getAuth, signOut } from "firebase/auth";

    export default {
        name: 'ClientHeader',
        methods: {
            logoutUser() {
                const auth = getAuth();
                signOut(auth).then(() => {
                    // Sign-out successful.
                    alert('You have successfully logout.')
                    this.$router.push({name: 'home'})
                }).catch((error) => {
                    // An error happened.
                    alert(error)
                });
            }
        }
    }
</script>

<style scoped>
    .navBar {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
    }

    .navBar .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 15px 40px;
        justify-content: space-between;
        align-items: center;
    }

    .navBar ul {
        align-items: center;
    }

    .navBar li {
        padding: 5px 10px;
    }

    .navBar a {
        transition: all 0.3s ease-in;
    }

    .navBar a:hover {
        color: #0275d8;
    }

    .navBar button {
        margin: 0.3rem;
    }
</style>