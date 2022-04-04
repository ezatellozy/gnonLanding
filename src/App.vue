<template>
  <div :class="{ 'is-rtl': $i18n.locale === 'ar' }">
    <!-- <main-header /> -->
    <bunner />
    <about-us />
    <statistics />
    <testimonials />
    <get-started />
    <go-top />
  </div>
</template>

<script>
import Bunner from './components/Bunner.vue'
// import MainHeader from './components/MainHeader.vue'
import Testimonials from './components/Testimonials.vue'
import GetStarted from './components/GetStarted.vue'
import Statistics from './components/Statistics.vue'
import AboutUs from '@/components/AboutUs.vue'
import GoTop from './components/GoTop.vue'

export default {
  name: 'App',
  components: {
    // MainHeader,
    AboutUs,
    Bunner,
    GetStarted,
    Testimonials,
    Statistics,
    GoTop,
  },
}
</script>

<style lang="scss">
.fade-in-left {
  animation: fade-in-left 1s linear forwards;
}
.fade-in-right {
  animation: fade-in-right 1s linear forwards;
}
.fade-in-bottom {
  animation: fade-in-bottom 1s linear forwards;
}

@keyframes fade-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade-in-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
