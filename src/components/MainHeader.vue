<template>
  <header
    class="flex header items-center"
    :class="scroll ? 'scroll bg-white' : ''"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo font-bold mx-11">
        <a href="/">
          <img src="@/assets/logo.png" alt="logo" />
        </a>
      </div>
      <div class="flex items-center" v-if="this.$route.name == 'home'">
        <locale-switcher class="mx-4" />
        <button class="text-2xl lg:hidden" @click="mobile = !mobile">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
        <div class="nav lg:block" :class="mobile ? 'colapsed' : ' hidden'">
          <ul class="flex justify-between items-center">
            <li>
              <a href="#">{{ $t('nav.home') }}</a>
            </li>
            <li>
              <a href="#features">{{ $t('nav.features') }}</a>
            </li>
            <li>
              <a href="#partners">{{ $t('nav.partners') }}</a>
            </li>
            <li>
              <a href="#clients">{{ $t('nav.clients') }}</a>
            </li>
            <li>
              <a href="#getStarted">{{ $t('nav.Getstarted') }}</a>
            </li>
            <li>
              <router-link
                to="/register"
                class="bg-primary hover:bg-secondary text-white font-bold text-sm px-4 py-2 rounded-lg"
              >
                أحصل علي نسختك التجريبيه
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher.vue'
export default {
  components: { LocaleSwitcher },
  data() {
    return {
      scroll: false,
      mobile: false,
      mobileMenu: true,
      notMain: true,
    }
  },
  created() {
    window.addEventListener('scroll', this.checkScroll)
    window.addEventListener('resize', this.checkSize)
  },
  mounted() {},
  methods: {
    modal() {
      this.$emit('modal')
    },
    checkSize() {
      if (window.innerWidth > 992) {
        this.mobileMenu = false
        this.mobile = false
      } else {
        this.mobileMenu = true
      }
    },

    checkScroll() {
      // const els = document.querySelectorAll('.scrollme')
      // els.forEach((els) => {
      //   console.log(els.getBoundingClientRect().top < 0)
      // })
      // console.log(els)
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
  min-height: 80px;
  max-height: 80px;
  // background: linear-gradient(to right, #43cea2, #185a9d);
  animation: fadeUp 0.8s linear;
  .logo {
    width: 50px;
  }
  .nav {
    li {
      margin-right: 30px;
      a {
        position: relative;
        @apply font-bold text-sm md:text-lg;
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
        &:hover:not(:last-child) {
          &::before {
            width: 100%;
          }
          color: #43cea2;
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

header.header {
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
}
.colapsed {
  position: fixed;
  top: 3.25rem;
  left: 0;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  overflow-y: auto;
  background-color: #ffffff;
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  ul {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    flex-direction: column;
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
