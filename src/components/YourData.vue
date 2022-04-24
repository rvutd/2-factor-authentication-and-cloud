<template>
    <section>
        <div class="container">
            <!-- Data -->
            <div class="upper flex">
                <h1>{{this.firstName}}'s Images</h1>
                <button id="getData" class="btn-primary" @click="getFiles">Get Data</button>
            </div>
            <div class="lower"> 
                <div class="card" v-for="file in userFiles" :key="file.imgName">
                    <img :src="file.imgSrc" alt="Your Data Image">
                    <div class="flex">
                        <p>{{ file.imgName }}</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { collection, getDocs, getFirestore } from "firebase/firestore"; 

    export default {
        name: 'YourData',
        data() {
            return {
                firstName: '',
                userFiles: [],
            }
        },
        methods: {
            getFiles() {
                const uid = JSON.parse(localStorage.getItem('User Creds')).uid;
                const db = getFirestore();
                
                // Get User Data - FireStore
                const docRef = collection(db, uid);
                getDocs(docRef).then((data) => {
                    let images;

                    if (data.docs[0].data().images === null) {
                        images = [];
                    } else {
                        images = data.docs[0].data().images;
                    }
                    
                    localStorage.setItem('userFiles', JSON.stringify(images))

                    return this.userFiles = images
                })
            }
        },
        created() {
            this.firstName = JSON.parse(localStorage.getItem('LoginUserData')).firstName;
            this.userFiles = JSON.parse(localStorage.getItem('userFiles'))
            this.getFiles()
        }
    }
</script>

<style scoped>
    section {
        margin: 10rem 3rem;
        text-align: center;
    }

    .container {
        padding: 40px;
        max-width: 1200px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    .container .upper {
        border-bottom: 1px solid rgb(223, 219, 219);
        text-align: left;
        margin: 0 30px 30px 30px;
        padding-bottom: 10px;
        justify-content: space-between;
    }

    .upper button {
        background: #0275d8;
        color: #fff;
    }

    .container .lower {
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: -20px;
    }

    .card {
        margin: 30px;
        padding: 0;
        border-radius: 3px;
        width: 19.5rem;
    }

    .card .flex {
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px;
        padding-bottom: 6px;
        font-size: 18px;
    }

    img {
        width: 100%;
        height: 10rem;
        cursor: pointer;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    p {
        font-weight: bold;
        color: #333;
    }

    h1 { color: #333; }

    i {
        color: #da211a;
        cursor: pointer;
    }
</style>