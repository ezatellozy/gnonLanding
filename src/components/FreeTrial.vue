<template>
  <div class="trial">
    <h2 class="text-center font-bold text-xl text-primary mb-4">
      {{ $t('misc.Enter your data to get your free trial copy') }}
    </h2>
    <form class="p-5" @submit.prevent="">
      <div class="form-inputs">
        <input
          class="w-full"
          type="text"
          v-model="name"
          :placeholder="$t('placeholder.name')"
        />
      </div>
      <div class="form-inputs flex justify-between">
        <select
          class="w-4/12"
          :class="$i18n.locale == 'en' ? 'mr-2' : 'ml-2'"
          name="country-code"
          @change="selected($event)"
        >
          <option
            v-for="country in countries"
            :key="country"
            :value="country.code"
            name="country-code"
          >
            {{ country.code }}
          </option>
        </select>
        <input
          class="w-8/12"
          type="phone"
          v-model="phone"
          :placeholder="$t('placeholder.phone')"
        />
      </div>

      <div class="form-inputs">
        <input
          class="w-full"
          type="email"
          v-model="email"
          :placeholder="$t('placeholder.email')"
        />
      </div>
      <div class="form-inputs">
        <select
          name="country-code"
          class="w-full"
          v-model="work"
          @change="selected($event)"
        >
          <option value="" disabled>{{ $t('placeholder.crmUsingFor') }}</option>
          <option
            v-for="item in workType"
            :key="item"
            :value="item.code"
            name="work-code"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="form-inputs">
        <input
          class="w-full"
          type="text"
          v-model="employers"
          :placeholder="$t('placeholder.number')"
        />
      </div>

      <button
        type="submit"
        @click="submit"
        class="mt-4 bg-secondary py-2 w-full font-bold rounded-lg px-4 text-white"
      >
        {{ $t('buttons.Start Now') }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      employers: '',
      phone: '',
      countryCode: '+971',
      countries: [
        {
          code: '+971',
          name: 'United Arab Emirates',
        },
        {
          code: '+965',
          name: 'Kuwait',
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
          code: '+962',
          name: 'Jordan',
        },
        {
          code: '+968',
          name: 'Oman',
        },
        {
          code: '+974',
          name: 'Qatar',
        },
        {
          code: '+966',
          name: 'Saudi Arabia',
        },
      ],
      work: '',
      workType: [
        {
          code: 'شركات خدمية',
          name: '(تدريب - وكالة اعلانات ..إلخ)شركات خدمية',
        },
        {
          code: 'شركات عقارات',
          name: 'شركات عقارات',
        },

        {
          code: 'مسوق عقاري',
          name: 'مسوق عقاري',
        },
      ],
    }
  },
  methods: {
    modal() {
      this.$emit('modal')
    },
    selected(e) {
      this.countryCode = e.target.value
    },
    submit() {
      console.log(this.name)
      console.log(this.email)
      console.log(this.employers)
      console.log(this.work)
      console.log(`${this.countryCode}${this.phone}`)
    },
  },
}
</script>

<style scoped lang="scss">
// .trial {
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1000;
//   .cont {
//     z-index: 1001;
//   }
//   &::before {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     left: 0;
//     top: 0;
//     background: rgba(0, 0, 0, 0.8);
//   }
// }
// .close-btn {
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   cursor: pointer;
//   color: #fff;

//   font-size: 20px;
// }
// .fade-leave-from,
// .fade-leave-to {
//   opacity: 0;
// }

// .fade-enter-active,
// .fade-leave-active {
//   opacity: 0;
//   transition: all 5s ease-in;
// }
select {
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
