<template>
  <section id="clients" class="clients flex scrollme">
    <div class="container mx-auto text-white">
      <h3 class="text-center font-bold text-3xl mt-11 mb-4">
        {{ $t('misc.clients') }}
      </h3>

      <p class="text-center text-md mb-11">
        نسعد بتقديم خدماتنا للعملاء الذين كانوا شركاء النجاح لنا
      </p>
      <div style="margin: 100px 0;">
        <carousel v-bind="settings">
          <slide v-for="n in 5" :key="n">
            <card />
          </slide>
        </carousel>
      </div>
      <button
        @click="modal"
        class="bg-secondary my-11 block mx-auto hover:bg-primary font-bold text-lg px-4 py-2 rounded-lg"
      >
        أبدأ الان
      </button>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
  components: { Card, Carousel, Slide },
  data() {
    return {
      settings: {
        autoplay: 2000,
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: 'center',

        breakpoints: {
          1280: {
            itemsToShow: 4,
            snapAlign: 'center',
          },
          768: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
        },
      },
    }
  },
  methods: {
    modal() {
      this.trial = !this.trial
    },
  },
}
</script>

<style lang="scss" scoped>
.clients {
  min-height: 300px;
  position: relative;
  background-image: url('@/assets/clientbackground.jpg') !important;
  background-size: cover !important;
  background-position: center center !important;

  background: #f6f6f7;
  .container {
    z-index: 11;
    > p {
      max-width: 600px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }

  &::before {
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.63);
    z-index: 10;
  }
}
</style>
