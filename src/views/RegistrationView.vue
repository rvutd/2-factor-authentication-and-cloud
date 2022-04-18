<template>
  <div>
    <Header />
    <Registration />
    <Footer />
  </div>
</template>


<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Registration from '../components/Registration.vue'

  export default {
    name: 'LoginView',
    components: {
      Header,
      Registration,
      Footer,
    }
  }
</script>

