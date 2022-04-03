<template>
  <div
    class="cursor-pointer d-flex justify-content-between align-items-center"
    @click="switchLang"
  >
    <img :src="`/images/${lang}.png`" width="20" alt="" class="mx-1" />
    <!-- <span class="w-2"></span> -->

    <span class="text-white font-bold">{{
      $t(`locales.${this.$store.state.locale}`)
    }}</span>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data: () => ({
    lang: "ar",
  }),

  mounted() {
    this.lang = this.$i18n.locale === "ar" ? "en" : "ar";

  },

  methods: {
    switchLang() {
      Cookies.set("locale", this.lang);
      setTimeout(() => {
        window.location.reload();
      }, 300);
    },
  },
};
</script>
