<template>
  <div>
    <Header />
    <Login />
    <Footer />
  </div>
</template>


<script>
  import Header from '../components/Header.vue'
  import Login from '../components/Login.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'LoginView',
    components: {
      Header,
      Login,
      Footer,
    }
  }
</script>

