<template>
  <div
    class="cursor-pointer d-flex justify-content-between align-items-center"
    @click="switchLang"
  >
    <img :src="`/images/${lang}.png`" width="20" alt="" class="mx-1" />
    <!-- <span class="w-2"></span> -->

    <span class="text-bold font-bold">
      {{ $t(`locales.${locale}`) }}
    </span>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data: () => ({
    lang: 'ar',
  }),

  mounted() {},
  computed: {
    locale() {
      return this.$store.getters.locale
    },
  },

  methods: {
    switchLang() {
      this.lang = this.$i18n.locale === 'ar' ? 'en' : 'ar'
      Cookies.set('locale', this.lang)
      setTimeout(() => {
        window.location.reload()
      }, 300)
    },
  },
}
</script>
