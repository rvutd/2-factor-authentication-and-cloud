<template>
    <section class="speciality my-5" id="features">
        <div class="container grid grid-3">
            <div>
                <h3 class="my-1">Future-proof infrastructure</h3>
                <p>
                    Securely deliver services to users with speed and reliability—all on
                    Google's infrastructure.
                </p>
            </div>
            <div>
                <h3 class="my-1">Powerful data and analytics</h3>
                <p>Easily capture, manage, process, and visualize data with Google Cloud data analytics products.</p>
            </div>
            <div>
                <h3 class="my-1">MongoDB Cloud Based</h3>
                <p>
                    Securely deliver services to users with speed and reliability—all on
                    Google's infrastructure.
                </p>
            </div>
        </div>
    </section>
</template>

<script> 
    export default {
        name: 'Specialities',
    }
</script>

<style>
    .speciality {
        background: #f7f7f7;
        padding: 5rem;
    }

    .speciality .container {
        max-width: 900px;
        margin: 0 auto;
        column-gap: 50px;
    }

    .speciality p {
        color: rgb(122, 118, 118);
        font-weight: 300;
    }
</style>