<template>
  <div v-if="items">
    <div class="image-holder" v-if="items.image">
      <!-- <img :src="imageSrc" alt="rwad" /> -->
      <img :src="items.image" alt="rwad" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      rank: 3,
    }
  },
}
</script>

<style scoped lang="scss"></style>
