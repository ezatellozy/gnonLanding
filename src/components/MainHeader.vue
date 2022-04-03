<template>
  <header class="bg-secondary flex items-center"  :class="scroll ? 'scroll' : ''">
      <div class="container mx-auto flex justify-between items-center">

      <locale-switcher />
      <div class="logo text-white">LOGO</div>
      </div>
  </header>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher.vue'
export default {
    components:{LocaleSwitcher},
    data(){
        return{

            scroll:false
        }
    },
      created() {
    window.addEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 50) {
        this.scroll = true;
        return;
      }
      this.scroll = false;
      return;
    },
  },

}
</script>

<style scoped lang="scss">
header{
    min-height: 40px;
    max-height: 40px;
    animation: fadeUp 0.8s linear;
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
