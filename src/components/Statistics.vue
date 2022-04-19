<template>
  <section class="statistics flex items-center" id="statistics">
    <div class="container mx-auto p-11 flex justify-center flex-wrap">
      <div class="stat w-1/2 md:w-1/3 my-11 text-white text-center">
        <font-awesome-icon
          class="icon block mx-auto text-4xl mb-2"
          :icon="['fas', 'cloud-arrow-down']"
        />
        <span class="count text-3xl font-bold" data-count="800">0</span>
        <h4>Downlaods</h4>
      </div>

      <div class="stat w-1/2 md:w-1/3 my-11 text-white text-center">
        <font-awesome-icon
          class="icon block mx-auto text-4xl mb-2"
          :icon="['far', 'face-smile']"
        />
        <span class="count text-3xl font-bold" data-count="500">0</span>
        <h4>Happy clients</h4>
      </div>
      <div class="stat w-1/2 md:w-1/3 my-11 text-white text-center">
        <font-awesome-icon
          class="icon block mx-auto text-4xl mb-2"
          :icon="['fas', 'trophy']"
        />
        <span class="count text-3xl font-bold" data-count="400">0</span>
        <h4>Award win</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      started: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.getSection)
  },
  methods: {
    getSection() {
      let statistics = document.querySelector('.statistics')
      let stat = document.querySelectorAll('.statistics .stat .count')
      window.onscroll = function () {
        if (window.scrollY >= statistics.offsetTop - 400) {
          if (!this.started) {
            stat.forEach((stat) => {
              let goal = stat.dataset.count
              let counter = setInterval(() => {
                stat.textContent++
                if (stat.textContent == goal) {
                  clearInterval(counter)
                }
              }, 2000)
            })
          }
          this.started = true
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.statistics {
  min-height: 300px;
  background: #f6f6f7;
}
</style>
