<template>
  <section id="testimonials" class="testimonials">
    <div class="container mx-auto my-11">
      <h3 class="text-center font-bold text-3xl my-11 text-secondary">
        CLIENTS REVIEWS
      </h3>
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

<style scoped>
.testimonials {
  margin-top: 150px;
  min-height: 600px;
}
</style>
