<template>
    <div>
        <ClientHeader />
        <YourData />
    </div>
</template>

<script>
    import ClientHeader from "../components/ClientHeader.vue"
    import YourData from "../components/YourData.vue"

    export default {
        name: 'ClientView',
        components: {
            ClientHeader,
            YourData,
        }
    }
</script>

<style scoped>

</style>