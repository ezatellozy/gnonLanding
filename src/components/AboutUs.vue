<template>
  <section id="aboutUs" class="about-us flex items-center">
    <div class="container m-auto flex py-11 justify-between flex-wrap">
      <div class="image md:w-1/2 fade-in-left">
        <figure>
          <img class="mx-auto" src="@/assets/mobile.webp" alt="gnon" />
        </figure>
      </div>
      <div class="info px-11 my-auto w-full md:w-1/2 fade-in-right">
        <h3 class="text-center font-bold text-2xl text-third mb-4">
          EASY TO USE FRIENDLY INTERFACE.
        </h3>
        <p class="mb-11 text-center text-md">
          Lorem Ipsum is simply text of the printing and typesetting industry.It
          has survived not only five centuries.No one cares about products.
          people care about ideas. Lorem Ipsum is simply text of the printing
          and typesetting industry.It has survived not only five centuries.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.about-us {
  min-height: 600px;
  .image {
    img {
      height: 500px;
    }
  }
  .info {
    p {
      line-height: 1.7;
      word-break: break-all;
    }
  }
}
</style>
