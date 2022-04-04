<template>
  <div v-if="gotop" class="gotop">
    <a href="#"><font-awesome-icon :icon="['fas', 'arrow-up']" /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gotop: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 400) {
        this.gotop = true
        return
      }
      this.gotop = false
      return
    },
  },
}
</script>

<style>
.gotop {
  position: fixed;
  bottom: 50px;
  right: 50px;
  @apply bg-third text-white px-4 py-2 rounded-lg;
  animation: bunceing 3s linear infinite;
}
@keyframes bunceing {
  0%,
  20%,
  40% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
