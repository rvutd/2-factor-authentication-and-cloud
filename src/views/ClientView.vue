<template>
    <div>
        <ClientHeader @component='changeComponent' />
        <component @component='changeComponent' :is="component"></component>
    </div>
</template>

<script>
    import ClientHeader from "../components/ClientHeader.vue"
    import Profile from "../components/Profile.vue"
    import YourData from "../components/YourData.vue"
    import Upload from "../components/Upload.vue"
    import Support from "../components/Support.vue"
    import { collection, getDocs ,getFirestore } from "firebase/firestore"; 

    export default {
        name: 'ClientView',
        components: {
            ClientHeader,
            Profile,
            YourData,
            Upload,
            Support,
        },
        data() {
            return {
                component: 'Upload',
            }
        },
        methods: {
            changeComponent(newComponent) {
                this.component = newComponent;
                console.log(this.component);
            },
            async getUserDataFromFireStore() {
                const db = getFirestore();
                const uid = JSON.parse(localStorage.getItem('User Creds')).uid;
                
                // Get User Data - FireStore
                const docRef = collection(db, uid);
                getDocs(docRef).then((data) => {    
                    localStorage.setItem('LoginUserData', JSON.stringify(data.docs[0].data()))                    
                })
            }
        },
        mounted() {
            this.getUserDataFromFireStore()
        }
    }
</script>

<style scoped>

</style>