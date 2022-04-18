<template>
    <section class="hero">
        <div class="container grid grid-2">
            <div>
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
                <img src="../assets/cloud-backup-img.jpg" alt="hero image" />
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
</style>