<template>
  <section
    id="features"
    class="about-us flex items-center"
    v-for="item in items"
    :key="item.id"
  >
    <div class="container mx-auto flex py-11 justify-between flex-wrap">
      <div
        class="info px-11 my-auto w-full"
        :class="item.image ? 'lg:w-1/2' : ''"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1 class="font-bold text-3xl text-titleColor mb-4">
          {{ item.title }}
        </h1>
        <p>{{ item.description }}</p>

        <div v-if="item.featureList">
          <div
            v-for="feature in item.featureList"
            :key="feature.id"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div class="title flex items-center mb-2 mt-11">
              <span
                :class="feature.icon"
                class="text-white bg-primary p-2 rounded-xl"
              ></span>
              <!-- <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                size="lg"
                class="text-white bg-primary p-2 rounded-xl"
              ></font-awesome-icon> -->
              <h2 class="px-2 text-primary font-bold text-lg">
                {{ feature.title }}
              </h2>
            </div>
            <p>
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="item.image"
        class="image lg:w-1/2 m-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <figure>
          <img class="mx-auto" :src="item.image" alt="rwad" />
        </figure>
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
#features {
  &:nth-child(odd) {
    @apply bg-third;
    .container {
      flex-direction: row-reverse;
    }
  }
}
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
