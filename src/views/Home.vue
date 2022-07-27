<template>
  <intro v-if="header" :items="header" />
  <Features v-if="features" :items="features" />
  <attract v-if="attracts" :items="attracts" />
  <MobilApp v-if="mobileApp" :items="mobileApp" />
  <partners v-if="partners" :items="partners" />
  <clients v-if="clients" :items="clients" />
  <get-started :logo="logo" />
  <go-top />
</template>

<script>
import Intro from '@/components/Intro.vue'
// import MobilApp from '@/components/MobilApp.vue'
import GoTop from '@/components/GoTop.vue'
import Partners from '@/components/Partners.vue'
import Clients from '@/components/Clients.vue'
import GetStarted from '@/components/GetStarted.vue'
import Attract from '@/components/Attract.vue'
import Features from '@/components/Features.vue'
import MobilApp from '../components/MobilApp.vue'
export default {
  components: {
    Intro,
    Partners,
    GoTop,
    Clients,
    GetStarted,
    Attract,
    Features,
    MobilApp,
  },
  data() {
    return {
      mobileApp: null,
      features: null,
      partners: null,
      clients: null,
      attracts: null,
      header: null,
      logo: null,
    }
  },
  methods: {
    getSettings() {
      this.axios.get('lists').then((data) => {
        this.clients = data.data.lists.clients
        this.partners = data.data.lists.parteners
        this.features = data.data.lists.featuresTop
        this.attracts = data.data.lists.main_features
        this.logo = data.data.lists.logo
        this.header = data.data.lists.home[0]
        this.mobileApp = data.data.lists.home[1]
        console.log(data)
      })
    },
  },
  mounted() {
    this.getSettings()
  },
  computed: {
    locale() {
      return this.$store.getters.locale
    },
  },
}
</script>

<style></style>
