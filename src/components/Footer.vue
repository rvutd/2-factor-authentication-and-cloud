<template>
    <footer>
        <div class="container">
            <p>Made with <i class="fa-solid fa-heart"></i> by <a href="">rvutd</a></p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    footer {
        background-color: #292b2c;
        padding: 20px;
        color: #fff;
        text-align: center;
        width: 100%;
    }

    footer i {
        color: #d9534f;
    }

    a {
        color: #fff;
    }

    a:hover {
        text-decoration: underline;
    }
</style>