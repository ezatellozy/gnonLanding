<template>
  <div class="card bg-white">
    <div
      class="card-icon"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      v-if="items.image"
    >
      <img class="rounded-full" :src="items.image" alt="rwad" />
    </div>
    <div
      class="text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h5 class="text-lg font-bold mb-2 text-primary">
        {{ items.title }}
      </h5>
      <p v-html="items.description" class="px-4"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style lang="scss">
.card {
  width: 350px;
  @apply mb-4 mx-4 rounded-lg py-4;
  // box-shadow: 0 0 8px -4px;

  .card-icon {
    width: 64px;
    height: 64px;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: auto;
    border-radius: 4px;
    text-align: center;
    line-height: 64px;
  }
}
</style>
