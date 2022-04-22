<template>
    <section class="grid">
        <form>
            <input type="file">
        </form>
    </section>
</template>

<script>
    export default {
        name: 'Upload',
    }
</script>

<style scoped>
    section {
        margin: 10rem auto;
        border: 3px #171717;
        border-style: dashed;
        width: 30rem;
        height: 15rem;
        place-items: center;
    }

    input[type=file] {
        background: gold;
        padding: 10px 20px;
        text-align: center;
        width: 13.5rem;
    }
</style>