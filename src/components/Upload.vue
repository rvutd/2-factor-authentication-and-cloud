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
        </div>
        <div>
            <input type="submit" class="btn-primary button">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Upload',
        mounted() {
            const inputTag = document.querySelector('#inputTag');
            const imageName = document.querySelector('#imageName')

            inputTag.addEventListener('change', () => {
                imageName.style.display = 'block';
                imageName.innerHTML = 'Title Changed'
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