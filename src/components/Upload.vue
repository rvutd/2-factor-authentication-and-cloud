<template>
    <section class="flex">
        <h3 for="Heading">Choose Files You Want To Upload</h3>
        <div>
            <form id="uploadForm">
                <label for="inputTag">
                    Select Image
                    <input id="inputTag" type="file">
                    <br>
                </label>
                <span id="imageName">Title of the Image</span><br>
            </form>
        </div>
        <div>
            <input type="submit" class="btn-primary button" @click="uploadDataToFirebase">
        </div>
    </section>
</template>

<script>
    import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
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
                
                const storageRef = ref(storage, `${uid}/${fileName}`)

                const metaData = {
                    contentType: this.files[0].type
                }

                // Reference To Storage - File - File Type
                const uploadBytesRes = uploadBytesResumable(storageRef, this.files[0], metaData)
                
                const uploadForm = document.querySelector('#uploadForm');
                let progressBar = document.createElement('progress');
                progressBar.max = 100

                uploadForm.appendChild(progressBar)
                // Upload To Firebase Storage
                const waitForIt = await uploadBytesRes.on('state_changed', (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    progressBar.value = progress

                    if (progress === 100) {
                        this.saveImageToFireStore(fileName, storage, uid)
                        this.files = []
                        imageName.innerHTML = 'Title of the Image'
                        this.$emit('component', 'YourData')
                    }
                })
            },
            async saveImageToFireStore(fileName, storage, uid) {
                getDownloadURL(ref(storage, `${uid}/${fileName}`))
                .then((url) => {
                    const xhr = new XMLHttpRequest();
                        xhr.responseType = 'blob'
                        xhr.Accept = "*/*";

                        xhr.onload = (event) => {
                        const blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();

                    // Get Images from Store and push in images array -
                    const db = getFirestore();
                    const imgDetails = {
                        imgName: fileName,
                        imgSrc: url,
                    }
                    
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
                    })
                })
                .catch((err) => {
                    // Handle any errors
                    console.error(err);
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
    
        /* Reponsive Styles */
    @media only screen and (max-width: 590px) {
        .flex {
            margin: 14rem 20px;
            max-width: fit-content;
        }

    }
</style>
