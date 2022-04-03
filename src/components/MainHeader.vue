<template>
  <header class="bg-secondary flex items-center">
      <div class="container mx-auto flex justify-between items-center">

      <locale-switcher />
      <div class="logo text-white">LOGO</div>
      </div>
  </header>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher.vue'
export default {
    components:{LocaleSwitcher}

}
</script>

<style scoped>
header{
    min-height: 40px;
    max-height: 40px;
}


</style>
