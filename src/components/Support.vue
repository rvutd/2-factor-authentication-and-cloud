<template>
    <section>
        <div class="container">
            <article class="flex">
                <div class="card img-card hover">
                    <div class="left">
                        <img src="../assets/iCloudStore.png"  alt="Left Image">
                    </div>
                </div>
                <div class="card content">
                    <h1>Ravindra Purohit</h1>
                    <div>
                        <button class="red">iCloudStore CEO</button>
                        <button class="yellow">Hotwax Systems Intern</button>
                        <button class="green">Enterprise Javascript Developer</button>
                    </div>
                    <ul class="flex">
                        <li><a href="https://www.linkedin.com/in/rvutd/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/rv_utd/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://github.com/rvutd" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                    <p>
                        A self-introduction should include your name and occupation 
                        (or desired occupation) and key facts that will help you make 
                        an impression on the person you're speaking to. In a few sentences, 
                        cover the most important things that others need to know about you.
                    </p>
                </div>
            </article>
            <article class="flex">
                <div class="card content-2">
                    <h1>Shubham Verma</h1>
                    <div>
                        <button class="red">iCloudStore CFO</button>
                        <button class="yellow">Tata Consultant Service</button>
                        <button class="green">Assistant System Enginner</button>
                    </div>
                    <ul class="flex">
                        <li><a href="https://www.linkedin.com/in/shubhsonixp/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/s.soni2806/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://github.com/shubhsonixp" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                    <p>
                        A self-introduction should include your name and occupation 
                        (or desired occupation) and key facts that will help you make 
                        an impression on the person you're speaking to. In a few sentences, 
                        cover the most important things that others need to know about you.
                    </p>
                </div>
                <div class="card hover">
                    <div class="left">
                        <img src="../assets/iCloudStore.png"  alt="Left Image">
                    </div>
                </div>
            </article>
        </div>
    </section>    
</template>

<script>
    import Footer from './Footer.vue'

    export default {
        name: 'Support',
        components: {
            Footer,
        }
    }
</script>

<style scoped>
    .container {
        margin: 10rem auto;
    }
    
    .img-card {
        margin-right: 30px;
    }

    article:nth-child(2) {
        margin-top: 5rem;
    }

    .content {
        width: 150rem;
    }

    .content-2 { 
        margin-right: 30px;
        width: 150rem;
    }

    img {
        width: 15rem;
        height: 15rem;
        cursor: pointer;
    }

    .hover {
        transition: all 0.4s ease;
    }

    .hover:hover {
        transform: scale(1.02, 1.02);
    }

    h1 {
        margin-top: 10px;
        font-size: 26px;
    }

    button {
        background: #333;
        color: #fff;
        padding: 5px 10px;
        margin-right: 8px;
    }

    .red {
        background: #d9534f;
    }

    .yellow {
        background: #f0ad4e;
    }

    .green {
        background: #5cb85c;
    }

    li {
        margin: 5px 15px 5px 0;
        font-size: 25px;
        cursor: pointer;
    }

    p {
        color: #333;
    }

    /* Reponsive Styles */
    @media only screen and (max-width: 590px) {
        section {
            margin: 13rem 0;
        }

        .flex {
            flex-wrap: wrap;
            place-items: center;
        }

        .card {
            margin: 2rem auto;
        }

        .content, .content-2 {
            margin: 0 40px;
        }

        .content *, .content-2 * {
            margin: 5px 0;
        }

        li a {
            padding-right: 10px;
        }
    }
</style>