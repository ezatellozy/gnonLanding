<template>
  <section class="banner flex" id="banner">
    <free-trial v-if="trial" @modal="modal" />

    <main-header class="fixed w-full" @modal="modal" />
    <div class="container mx-auto flex justify-between items-center flex-wrap">
      <div class="info xl:px-11 mb-11 w-full lg:w-1/2">
        <h1 class="text-3xl text-primary">
          {{ $t('misc.introTitle') }}
        </h1>
        <h2 class="mb-11 text-md">
          {{ $t('misc.introDesc') }}
        </h2>
      </div>
      <div class="image w-full lg:w-1/2">
        <img
          src="@/assets/header-bulb-table.png"
          class="w-full"
          alt="rwad-header"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FreeTrial from '@/components/FreeTrial.vue'
import MainHeader from './MainHeader.vue'
export default {
  components: { MainHeader, FreeTrial },
  data() {
    return {
      trial: false,
    }
  },
  methods: {
    modal() {
      this.trial = !this.trial
    },
  },
}
</script>

<style scoped lang="scss">
.banner {
  min-height: 100vh;
  background-image: url('@/assets/header-background.png');
  background-size: cover;
  background-position: center center;
  .container {
    .info {
      h1 {
        margin-bottom: 1.75rem;
        color: #2b2b4f;
        font-weight: 700;
        // font-size: 2.5rem;
        line-height: 3.125rem;
        letter-spacing: -0.5px;
      }
      h2 {
        color: #53575a;
        // font: 400 1rem/1.625rem 'Open Sans', sans-serif;
      }
      @media (max-width: 992px) {
        padding-top: 150px;
        text-align: center;
      }
    }

    .image {
      img {
        animation: bunce 5s linear infinite;
      }
    }
  }
}

@keyframes bunce {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
