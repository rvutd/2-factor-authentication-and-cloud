<template>
    <section class="flex">
        <h3 for="Heading">Choose Files You Want To Upload</h3>
        <div>
            <form>
                <label for="inputTag">
                    Select Image
                    <input id="inputTag" type="file">
                    <br>
                </label>
                <span id="imageName">Title of the Image</span>
            </form>
        </div>
        <div>
            <input type="submit" class="btn-primary button" @click="uploadDataToFirebase">
        </div>
    </section>
</template>

<script>
    import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import { collection, getDocs, doc , getFirestore, updateDoc } from "firebase/firestore"; 

    export default {
        name: 'Upload',
        data() {
            return {
                files: [],
            }
        },
        methods: {
            async uploadDataToFirebase(e) {
                e.preventDefault();
                // Create a root reference
                const storage = getStorage();
                const fileName = this.files[0].name;
                const uid = JSON.parse(localStorage.getItem('LoginUserData')).UID;
                
                // Create a reference to 'mountains.jpg'
                const mountainsRef = ref(storage, `images/${fileName}`);

                // 'file' comes from the Blob or File API
                const uploadbytes = await uploadBytes(mountainsRef, this.files[0]).then((snapshot) => {
                    console.log('Uploading');
                });

                const pathReference = await ref(storage, `images/${uid}/${fileName}`);
                this.saveImageToFireStore(fileName, storage)
            },
            saveImageToFireStore(fileName, storage) {
                getDownloadURL(ref(storage, `images/${fileName}`))
                .then((url) => {
                    // Get Images from Store and push in images array -
                    const db = getFirestore();
                    const imgDetails = {
                        imgName: fileName,
                        imgSrc: url,
                    }
                    const uid = JSON.parse(localStorage.getItem('User Creds')).uid;
                    
                    // Get User Data - FireStore
                    const docRef = collection(db, uid);
                    getDocs(docRef).then((data) => {
                        let images;

                        if (data.docs[0].data().images === null) {
                            images = [];
                        } else {
                            images = data.docs[0].data().images;
                        }
                        
                        images.push(imgDetails)

                        // Update Iamges -
                        const usersDataRef = doc(db, uid, data.docs[0].id);

                        // Set the "capital" field of the city 'DC'
                        updateDoc(usersDataRef, {
                            images: images,
                        });
                        
                        localStorage.setItem('userFiles', JSON.stringify(images))
                        
                        alert('Your Files Successfully Uploaded!')

                        this.files = []
                        imageName.innerHTML = 'Title of the Image'
                    })
                })
                .catch((error) => {
                    // Handle any errors
                    console.error(error);
                });
            }
        },
        mounted() {
            var inputTag = document.querySelector('#inputTag');
            var imageName = document.querySelector('#imageName');

            inputTag.addEventListener('change', (e) => {
                this.files = e.target.files

                imageName.style.display = 'block';
                imageName.innerHTML = `${this.files[0].name} is Selected`
            })

        }
    }
</script>

<style scoped>
    section {
        margin: 10rem auto;
        border: 3px #171717;
        border-style: dashed;
        width: 30rem;
        height: 15rem;
        text-align: center;
        place-items: center;
        flex-direction: column;
        justify-content: space-evenly;
    }

    h3 {
        font-size: 24px;
    }

    input[type=file] {
        display: none;
    }

    label {
        cursor:pointer;
        font-size: 18px;
        transition: all .8s ease;
    }

    label:hover {
        color: #0275d8;
    }

    #imageName{
        margin-top: 5px;
        color:green;
    }

    .button {
        margin-top: 20px;
        background: #0275d8;
        color: #fff;
        padding: 10px 30px;
    }    
    
</style>