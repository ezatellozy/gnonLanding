<template>
  <section class="statistics flex items-center" id="statistics">
    <div class="container mx-auto p-11 flex justify-center flex-wrap">
      <div class="stat w-1/2 md:w-1/3 my-11 text-white text-center">
        <font-awesome-icon
          class="icon block mx-auto text-4xl mb-2"
          :icon="['fas', 'cloud-arrow-down']"
        />
        <span class="count text-3xl font-bold">500</span>
        <h4>Downlaods</h4>
      </div>

      <div class="stat w-1/2 md:w-1/3 my-11 text-white text-center">
        <font-awesome-icon
          class="icon block mx-auto text-4xl mb-2"
          :icon="['far', 'face-smile']"
        />
        <span class="count text-3xl font-bold">500</span>
        <h4>Happy clients</h4>
      </div>
      <div class="stat w-1/2 md:w-1/3 my-11 text-white text-center">
        <font-awesome-icon
          class="icon block mx-auto text-4xl mb-2"
          :icon="['fas', 'trophy']"
        />
        <span class="count text-3xl font-bold">500</span>
        <h4>Award win</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.statistics {
  min-height: 300px;
  background: linear-gradient(to right, #43cea2, #185a9d);
}
</style>
