<template>
    <div>
        <ClientHeader @component='changeComponent' />
        <component :is="component"></component>
    </div>
</template>

<script>
    import ClientHeader from "../components/ClientHeader.vue"
    import Profile from "../components/Profile.vue"
    import YourData from "../components/YourData.vue"
    import Upload from "../components/Upload.vue"


    export default {
        name: 'ClientView',
        components: {
            ClientHeader,
            Profile,
            YourData,
            Upload,
        },
        data() {
            return {
                component: 'YourData',
            }
        },
        methods: {
            changeComponent(newComponent) {
                this.component = newComponent;
                console.log(this.component, newComponent);
            }
        }
    }
</script>

<style scoped>

</style>