<template>
  <section
    :id="name"
    class="about-us flex items-center"
    :class="withBg ? 'bg-third' : ''"
  >
    <div
      class="container mx-auto flex py-11 justify-between flex-wrap"
      :class="direction"
    >
      <div
        class="image lg:w-1/2 m-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <figure>
          <img class="mx-auto" :src="imgSrc" alt="rwad" />
        </figure>
      </div>
      <div
        class="info px-11 my-auto w-full lg:w-1/2"
        :class="[layout]"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h1 class="font-bold text-3xl text-titleColor mb-4">
          {{ mainTitle }}
        </h1>
        <p v-if="!features">
          {{ description }}
        </p>
        <div v-if="features">
          <div
            v-for="item in items"
            :key="item.id"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div class="title flex items-center mb-2 mt-11">
              <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                size="lg"
                class="text-white bg-primary p-2 rounded-xl"
              ></font-awesome-icon>
              <h2 class="px-2 text-primary font-bold text-lg">
                {{ $i18n.locale == 'en' ? item.titleEn : item.titleAr }}
              </h2>
            </div>
            <p>
              {{
                $i18n.locale == 'en' ? item.descriptionEn : item.descriptionAr
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: Array,
    name: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    mainTitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    withBg: Boolean,
    direction: String,
    layout: String,
    features: Boolean,
  },
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
