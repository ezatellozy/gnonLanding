<template>
  <div id="getStarted" class="get-started">
    <div class="mx-auto flex justify-between flex-wrap text-center">
      <div class="w-full mx-auto social md:w-1/2 mt-11 self-center">
        <h4
          class="text-4xl text-white mb-11"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          v-if="logo"
        >
          <img class="logo" :src="logo.image" alt="logo" />
        </h4>
        <ul
          class="links text-white flex justify-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <li v-if="facebook">
            <a :href="facebook" target="_blank">
              <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li v-if="twitter">
            <a :href="twitter" target="_blank">
              <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li v-if="email">
            <a :href="`mailto:${email}`">
              <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="container mx-auto">
        <p>
          كافة الحقوق محفوظة
          <a href="https://rwadsolutions.com/">لحلول رواد</a>
          &copy; {{ year }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['logo'],
  data() {
    return {
      facebook: null,
      twitter: null,
      email: null,
    }
  },
  mounted() {
    this.getSocial()
  },
  methods: {
    getSocial() {
      this.axios.get('lists').then((data) => {
        let result
        result = data.data.lists.social
        for (let i = 0; i < result.length; i += 1) {
          if (result[i].key == 'facebook') {
            this.facebook = result[i].value
          } else if (result[i].key == 'twitter') {
            this.twitter = result[i].value
          } else if (result[i].key == 'mail') {
            this.email = result[i].value
          }
        }
      })
    },
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
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
.copyright {
  background: #055e93;
  p {
    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    a {
      @apply text-secondary;
    }
  }
}
</style>
