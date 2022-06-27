<template>
  <section id="partners" class="partners scrollme flex">
    <div class="container mx-auto my-11">
      <h3
        class="text-center font-bold text-3xl mb-4 text-primary"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {{ $t('misc.partners') }}
      </h3>
      <p
        class="text-center text-md"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div>
        <carousel v-bind="settings">
          <slide v-for="n in 5" :key="n">
            <card />
          </slide>
        </carousel>
      </div>
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
}
</script>

<style lang="scss">
.partners {
  min-height: 300px;

  .container {
    > p {
      max-width: 600px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
}
</style>
