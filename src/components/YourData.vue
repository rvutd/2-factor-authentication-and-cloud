<template>
    <section>
        <div class="container">
            <!-- Data -->
            <div class="upper flex">
                <h1>Ravindra's Data</h1>
                <button class="btn-primary">Get Data</button>
            </div>
            <div class="lower"> 
                <div class="card">
                    <img src="../assets/images/cosmos.png" alt="Your Data Image">
                    <div class="flex">
                        <p>COSMOS</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/imgs.png" alt="Your Data Image">
                    <div class="flex">
                        <p>COSMOS</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/cosmos.png" alt="Your Data Image">
                    <div class="flex">
                        <p>COSMOS</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/imgs.png" alt="Your Data Image">
                    <div class="flex title">
                        <p>COSMOS</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/cosmos.png" alt="Your Data Image">
                    <div class="flex">
                        <p>COSMOS</p>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'YourData',
    }
</script>

<style scoped>
    section {
        margin: 10rem 0;
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: -20px;
    }

    .card {
        margin: 30px;
        padding: 0;
        border-radius: 3px;
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
    }

    i {
        color: #d9534f;
        cursor: pointer;
    }
</style>