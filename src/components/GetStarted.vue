<template>
  <div id="getStarted" class="get-started">
    <div
      class="container py-11 mx-auto flex justify-between flex-wrap text-center"
    >
      <div class="w-full md:w-1/2">
        <div class="info py-11">
          <h3 class="font-bold text-white text-3xl mb-11">Download Today</h3>
          <p class="text-md text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div class="actions mt-11 flex justify-center items-center">
          <button class="mr-2">
            <img src="@/assets/playstore.png" alt="gnon" />
          </button>
          <button class="">
            <img src="@/assets/appstore.png" alt="gnon" />
          </button>
        </div>
      </div>
      <div class="w-full md:w-1/2 mt-11 self-center">
        <h4 class="text-4xl text-white mb-11">LOGO</h4>
        <ul class="links text-white flex justify-center">
          <li>
            <a href="#">
              <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.get-started {
  background: linear-gradient(to right, #43cea2, #185a9d);
  .links {
    a {
      width: 50px;
      height: 50px;
      display: inline-flex;
      align-items: center;
      margin-right: 5px;
      justify-content: center;
      border-radius: 50%;
      .icon {
        @apply text-3xl;
      }
    }
  }
}
</style>
