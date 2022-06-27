<template>
  <div
    class="cursor-pointer d-flex justify-content-between align-items-center"
    @click="switchLang"
  >
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
