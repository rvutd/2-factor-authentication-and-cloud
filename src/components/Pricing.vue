<template>
    <section class="pricing" id="price">
        <div class="container grid">
            <div><h1>Find the iCloudStore Business plan for you</h1></div>
            <!-- Pricing Cards -->
            <div class="flex">
                <div class="card">
                    <div class="my-1">
                        <h4>STANDARD</h4>
                        <h2>US $15</h2>
                        <p>/ user / month, starting from 3 users</p>
                    </div>
                    <div class="line"></div>
                    <div class="my-1">
                        <i></i><p class="my-1">5 TB (5,000 GB) of space for secure storage</p>
                        <i></i><p>Easy-to-use sharing and collaboration tools</p>
                    </div>
                    <div>
                        <button class="white">Try for 30 days</button>
                    </div>
                    <div>
                        <p class="my-1">or <a href="#">purchase now</a></p>
                    </div>
                </div>
                <div class="card">
                    <div class="my-1">
                        <h4>ADVANCE</h4>
                        <h2>US $25</h2>
                        <p>/ user / month, starting from 3 users</p>
                    </div>
                    <div class="line"></div>
                    <div class="my-1">
                        <i></i><p class="my-1">As much space as your team needs</p>
                        <i></i><p>Sophisticated control and security features</p>
                    </div>
                    <div>
                        <button class="white">Try for 30 days</button>
                    </div>
                    <div>
                        <p class="my-1">or <a href="#">purchase now</a></p>
                    </div>
                </div>
                <div class="card">
                    <div class="my-1">
                        <h4>ENTERPRISE</h4>
                        <h2>US $125</h2>
                        <p>/ user / month, starting from 14 users</p>
                    </div>
                    <div class="line"></div>
                    <div class="my-1">
                        <i></i><p class="my-1">Customisable solutions and more benefit's</p>
                        <i></i><p>Individualised support to help admins manage at scale</p>
                    </div>
                    <div>
                        <button class="white">Try for 30 days</button>
                    </div>
                    <div>
                        <p class="my-1">or <a href="#">purchase now</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Pricing',
    }
</script>

<style scoped>
    .pricing {
        margin-bottom: 5rem;
    }

    .pricing .container {
        padding: 50px;
        width: auto;
        justify-content: center;
    }

    .pricing .card {
        margin: 20px 20px 40px 0;
        border-top: solid 5px #333;
    }

    .pricing a {
        color: #0275d8;
    }

    .pricing .card div:nth-child(3) {
        color: rgb(122, 118, 118);
        font-weight: 300;
    }

    .pricing .card:nth-child(1) {
        border-color: #d9534f;
    }

    .pricing .card:nth-child(2) {
        border-color: #f0ad4e;
    }

    .pricing .card:nth-child(3) {
        border-color: #5cb85c;
    }
</style>