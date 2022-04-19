<template>
  <section id="partners" class="partners scrollme flex">
    <div class="container mx-auto my-11">
      <h3 class="text-center font-bold text-3xl mb-4 text-primary">
        {{ $t('misc.partners') }}
      </h3>
      <p class="text-center text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="count font-bold text-md mb-4 text-primary">
          500
        </span>
        Eveniet aliquam fuga sequi, labore esse deleniti
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
