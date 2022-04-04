<template>
  <section class="banner" id="banner">
    <div class="container mx-auto flex justify-between items-center flex-wrap">
      <div class="info mt-11 w-full md:w-1/2 fade-in-left">
        <h3
          class="text-secondary px-4 font-bold text-2xl md:text-3xl text-center"
        >
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing
        </h3>
        <p class="text-white font-bold text-sm md:text-md text-center px-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div
          class="actions fade-in-bottom mt-11 flex justify-center items-center"
        >
          <button class="mr-2">
            <img src="@/assets/playstore.png" alt="gnon" />
          </button>
          <button class="">
            <img src="@/assets/appstore.png" alt="gnon" />
          </button>
        </div>
      </div>
      <div class="image mt-11 w-full md:w-1/2 fade-in-right">
        <img class="mx-auto w-1/2" src="@/assets/mobile.webp" alt="gnone" />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.banner {
  height: calc(100vh - 50px);
  background-image: url('@/assets/banner.jpg');
  background-size: cover;
  background-position: center center;

  .image {
    img {
      animation: bunce 5s linear infinite;
    }
  }
}

@keyframes bunce {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>
