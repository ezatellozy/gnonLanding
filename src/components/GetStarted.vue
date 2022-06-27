<template>
  <div id="getStarted" class="get-started">
    <div class="mx-auto flex justify-between flex-wrap text-center">
      <!-- <div class="w-full py-11 bg-primary md:w-1/2">
        <form class="form px-4" @submit.prevent="">
          <div class="form-inputs">
            <input type="text" placeholder="Email" />
          </div>
          <div class="form-inputs">
            <input type="text" placeholder="Phone number" />
          </div>
          <div class="form-inputs">
            <textarea type="text" placeholder="Your message" />
          </div>
          <button
            type="submit"
            class="mt-4 bg-secondary py-2 w-full font-bold rounded-lg px-4 text-white"
          >
            Send
          </button>
        </form>
      </div> -->
      <div class="w-full mx-auto social md:w-1/2 mt-11 self-center">
        <h4
          class="text-4xl text-white mb-11"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <img class="logo" src="@/assets/logo.png" alt="logo" />
        </h4>
        <ul
          class="links text-white flex justify-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
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
        @apply text-3xl text-primary;
      }
    }
  }
}

.logo {
  max-width: 150px;
  margin: 0 auto;
}
</style>
