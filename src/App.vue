<template>
<div  :class="{ 'is-rtl': $i18n.locale === 'ar' }">
<main-header />
</div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';

export default {
  name: "App",
  components: {
    MainHeader
  },
};
</script>
    

<style lang="scss">

</style>
