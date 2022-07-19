<template>
  <section id="mobileApp" class="about-us flex items-center">
    <div class="container mx-auto flex py-11 justify-between flex-wrap">
      <div
        class="image lg:w-1/2 m-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        v-if="items.image"
      >
        <figure>
          <img class="mx-auto" :src="items.image" alt="rwad" />
        </figure>
      </div>
      <div
        class="info px-11 my-auto w-full"
        :class="items.image ? ' lg:w-1/2' : ''"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1 class="font-bold text-3xl text-titleColor mb-4">
          {{ items.title }}
        </h1>
        <p>
          {{ items.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style scoped lang="scss">
.about-us {
  min-height: 600px;
  .image {
    img {
      height: auto;
    }
  }
  .info {
    p {
      line-height: 1.7;
      // word-break: break-all;
    }
  }
}
</style>
