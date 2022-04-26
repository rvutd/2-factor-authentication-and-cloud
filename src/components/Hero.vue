<template>
    <section class="hero">
        <div class="container grid grid-2">
            <div class="div1">
                <div class="my-1">
                    <h1>Store Data on Cloud.</h1>
                    <h1>Better than Ever.</h1>
                </div>
                <div class="my-1">
                    <div>
                        <i class="fa-solid fa-check"></i>Use iCloudStore's core
                        infrastructure, data analytics.
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>Secure and fully featured for all
                        enterprises.
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>Committed to open source and
                        industry-leading price-performance.
                    </div>
                </div>
                <div class="my-1">
                    <button class="primary blue" @click="this.$router.push({ name: 'registration'})">Get started for free</button>
                    <a href="#price" class="white">Contact sales</a>
                </div>
            </div>
            <div>
                <img src="../assets/iCloudStore.png" alt="iCloudStorage Image">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Hero',
    }
</script>

<style scoped>
    .hero .container {
        max-width: 900px;
        margin: 10rem auto;
        color: #333;
        align-items: center;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero i {
        color: #5cb85c;
        margin-right: 10px;
    }

    .hero img {
        padding: 0rem;
    }

    .hero button:nth-child(1) {
        margin-right: 0.5rem;
    }

    .white {
        cursor: pointer;
        padding: 7px 15px;
        border-radius: 5px;
        font-size: 12px;
        border: 1px solid rgb(134, 134, 134);
    }

    /* Reponsive Styles */
    @media only screen and (max-width: 870px) {
        section {
            padding: 0 25px;
            margin-top: 200px;
        }

        .container {
            grid-template-columns: repeat(1, 1fr);
            place-items: center;
        }

        .container .div1 {
            max-width: 500px;
        }

        .container img {
            max-width: 400px;
            height: 400px;
            margin: 0 auto;
        }

        .div1 h1 { font-size: 30px;}
    }

    @media only screen and (max-width: 400px) {
        .container img {
            width: 300px;
            height: 300px;
        }
    }
</style>