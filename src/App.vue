<template>
  <div :class="{ 'is-rtl': $i18n.locale === 'ar' }">
    <main-header />
    <bunner />
    <about-us />
    <statistics />
    <testimonials />
    <get-started />
  </div>
</template>

<script>
import Bunner from './components/Bunner.vue'
import MainHeader from './components/MainHeader.vue'
import Testimonials from './components/Testimonials.vue'
import GetStarted from './components/GetStarted.vue'
import Statistics from './components/Statistics.vue'
import AboutUs from '@/components/AboutUs.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    AboutUs,
    Bunner,
    GetStarted,
    Testimonials,
    Statistics,
  },
}
</script>

<style lang="scss"></style>
