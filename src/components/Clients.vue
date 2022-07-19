<template>
  <section id="clients" class="clients flex scrollme">
    <FreeTrial v-if="trial" @modal="modal" />
    <div class="container mx-auto text-white">
      <h3
        class="text-center font-bold text-3xl mt-11 mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {{ $t('misc.clients') }}
      </h3>

      <p class="text-center text-md mb-11">
        {{
          $t(
            'misc.We are happy to provide our services to clients who were our success partners',
          )
        }}
      </p>
      <div
        style="margin: 100px 0;"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <carousel v-bind="settings">
          <slide v-for="item in items" :key="item.id">
            <card :items="item" />
          </slide>
        </carousel>
      </div>
      <router-link
        to="/register"
        @click="modal"
        class="bg-secondary w-fit my-11 block mx-auto hover:bg-primary font-bold text-lg px-4 py-2 rounded-lg"
      >
        {{ $t('misc.start now') }}
      </router-link>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import FreeTrial from './FreeTrial.vue'
export default {
  props: ['items'],
  components: { Card, Carousel, Slide, FreeTrial },
  data() {
    return {
      trial: false,
      settings: {
        autoplay: 2000,
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: 'left',

        breakpoints: {
          1280: {
            itemsToShow: 4,
          },
          768: {
            itemsToShow: 3,
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
