<template>
  <transition name="fade">
    <div class="trial flex" @click="modal">
      <div
        @click.stop
        class="w-full h-auto m-auto cont z-10 py-11 bg-primary md:w-1/2"
      >
        <form class="form px-4" @submit.prevent="">
          <div class="form-inputs">
            <input
              class="w-full"
              type="text"
              :placeholder="$t('placeholder.name')"
            />
          </div>
          <div class="form-inputs flex justify-between">
            <select
              class="w-3/12"
              :class="$i18n.locale == 'en' ? 'mr-2' : 'ml-2'"
              name="country-code"
              v-model="countryCode"
              @change="selected"
            >
              <option
                v-for="country in countries"
                :key="country"
                name="country-code"
              >
                {{ country.code }}
              </option>
            </select>
            <!-- <vue-tel-input v-model="phone"></vue-tel-input> -->
            <input
              class="w-9/12"
              type="phone"
              :placeholder="$t('placeholder.phone')"
            />
          </div>

          <div class="form-inputs">
            <input
              class="w-full"
              type="email"
              :placeholder="$t('placeholder.email')"
            />
          </div>
          <div class="form-inputs">
            <input
              class="w-full"
              type="text"
              :placeholder="$t('placeholder.crmUsingFor')"
            />
          </div>
          <div class="form-inputs">
            <input
              class="w-full"
              type="text"
              :placeholder="$t('placeholder.number')"
            />
          </div>

          <button
            type="submit"
            class="mt-4 bg-secondary py-2 w-full font-bold rounded-lg px-4 text-white"
          >
            Start Now
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      cuntryCode: '',
      countries: [
        {
          code: '+213',
          name: 'Algeria',
        },

        {
          code: '+973',
          name: 'Bahrain',
        },

        {
          code: '+20',
          name: 'Egypt',
        },

        {
          code: '+291',
          name: 'Eritrea',
        },

        {
          code: '+964',
          name: 'Iraq',
        },

        {
          code: '+962',
          name: 'Jordan',
        },

        {
          code: '+965',
          name: 'Kuwait',
        },

        {
          code: '+961',
          name: 'Lebanon',
        },

        {
          code: '+218',
          name: 'Libya',
        },

        {
          code: '+212',
          name: 'Morocco',
        },

        {
          code: '+968',
          name: 'Oman',
        },

        {
          code: '+970',
          name: 'Palestinian Territory',
        },

        {
          code: '+974',
          name: 'Qatar',
        },

        {
          code: '+966',
          name: 'Saudi Arabia',
        },

        {
          code: '+249',
          name: 'Sudan',
        },

        {
          code: '+963',
          name: 'Syria',
        },

        {
          code: '+216',
          name: 'Tunisia',
        },

        {
          code: '+971',
          name: 'United Arab Emirates',
        },

        {
          code: '+967',
          name: 'Yemen',
        },
      ],
    }
  },
  methods: {
    modal() {
      this.$emit('modal')
    },
    selected() {
      console.log(this.cuntryCode)
    },
  },
}
</script>

<style scoped lang="scss">
.trial {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  .cont {
    z-index: 1001;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
  }
}

.fade-leave-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: all 5s ease-in;
}

.fade-leave-to,
.fade-leave-from {
  opacity: 0;
}
.fade-enter-from .trial,
.fade-leave-to .trial {
  transform: scale(1.1);
}
</style>
