<template>
  <header class="flex items-center" :class="scroll ? 'scroll' : ''">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo text-white font-bold mx-11">LOGO</div>
      <div class="nav">
        <ul class="flex justify-between items-center">
          <li><a href="#aboutUs">About us</a></li>
          <li><a href="#statistics">Statistics</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#getStarted">Get started</a></li>
        </ul>
      </div>
      <!-- <locale-switcher /> -->
    </div>
  </header>
</template>

<script>
// import LocaleSwitcher from './LocaleSwitcher.vue'
export default {
  // components: { LocaleSwitcher },
  data() {
    return {
      scroll: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 50) {
        this.scroll = true
        return
      }
      this.scroll = false
      return
    },
  },
}
</script>

<style scoped lang="scss">
header {
  z-index: 100;
  min-height: 110px;
  max-height: 110px;
  background: linear-gradient(to right, #43cea2, #185a9d);
  animation: fadeUp 0.8s linear;

  .nav {
    li {
      margin-right: 30px;
      a {
        position: relative;
        @apply text-white font-bold text-sm md:text-lg;
        &::before {
          content: '';
          transition: 0.3s;
          position: absolute;
          bottom: -10px;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #43cea2;
        }
        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
    }
  }

  &.scroll {
    animation: fadeIn 0.8s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}

@keyframes fadeIn {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeUp {
  0% {
    transform: translateY(2px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
