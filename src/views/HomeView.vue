<template>
  <div>
    <Header />
    <Hero />
    <Specialities />
    <Pricing />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Specialities from '@/components/Specialities.vue'
import Pricing from '@/components/Pricing.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Hero,
    Specialities,
    Pricing,
    Footer,
  }
}
</script>
